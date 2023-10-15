const express = require('express');
const app = express();

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

// const multer = require('multer');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(multer().none());

const PORT_NUM = 8000;

// get

// all restaruarnt info +  search / filter
app.get('/dub/data', async (req, res) => {
  try {
    let filter = req.query.filter;
    let search = req.query.search;

    let db = await getDBConnection();
    if(filter) {
      let query = "SELECT * FROM restaurants WHERE culture LIKE ? OR halal LIKE ? OR veg LIKE ? OR GF LIKE ?";
      let cuisine = await db.all(query, [filter, filter, filter, filter]);
      await db.close();
      res.json(cuisine);
    } else if (search) {
      let query = "SELECT * FROM restaurants WHERE name LIKE ? OR location LIKE ? OR halal LIKE ? OR veg LIKE ? OR culture LIKE ?";
      let item = '%' + search + '%';
      let place = await db.all(query, [item, item, item, item, item]);
      await db.close();
      res.json(place);
    } else {
      let query = 'SELECT * FROM restaurants';
      let places = await db.all(query);
      await db.close();
      res.json(places);
    }
  } catch (err) {
    res.status(500);
    console.log(err);
    res.type('text').send('try again');
  }
});

// friends - can set what their top 3 spots are
    // can filter users to see their eithnic background to see what you would enjoy based on them
    // can search users
  app.get('/dub/users',  async (req, res) => {
    try {
      let search = req.query.search;
      let db = await getDBConnection();

      if(search) {
        let query = "SELECT * FROM users WHERE name LIKE ? OR background LIKE ?";
        let item = '%' + search + '%';
        let user = await db.all(query, [item, item]);
        await db.close();
        res.json(user);
      } else {
        let query = 'SELECT * FROM users';
        let users = await db.all(query);
        await db.close();
        res.json(users);
      }
    } catch (err) {
      res.status(500);
      console.log(err);
      res.type('text').send('try again');
    }
  });

// leaderboard gwt it to order from gretest tomlowest in query
app.get('/dub/data/leaderboard',  async (req, res) => {
  try {
    let db = await getDBConnection();
    let query = "SELECT * FROM restaurants ORDER BY upvotes DESC";
    let ranked = await db.all(query);
    await db.close();
    res.json(ranked);
  } catch (err) {
    res.status(500);
    console.log(err);
    res.type('text').send('try again');
  }
});

// upvoting
app.get('/dub/upvote', async (req, res) => {
  try {
    let store = req.query.store;
    if (store) {
      let db = await getDBConnection();
      let query = "UPDATE restaurants SET upvotes = upvotes + 1 WHERE name=?";
      await db.all(query, store);

      await db.close();
      res.type('text').send("sucess");
    }
  } catch (err) {
    res.status(500);
    console.log(err);
    res.type('text').send('try again');
  }
});

// review = new database with fid connecting to id of restaruant and id of user and reviews


async function getDBConnection() {
  const db = await sqlite.open({
    filename: 'dubdata.db',
    driver: sqlite3.Database
  });
  return db;
}

app.use(express.static('public'));
const PORT = process.env.PORT || PORT_NUM;
app.listen(PORT);