// const slides = document.querySelectorAll('.carousel');
// let currentSlide = 0;

// function nextSlide(){
//     slides[currentSlide].style.transform = 'translateX(-100%)';
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].style.transform = 'translateX(0)';
// }
// setInterval(nextSlide, 3000);

(function(){
  window.addEventListener("load", init);


  function init(){
    changeViews();
    let input = id("search");
    input.addEventListener("input", enableSearch);
    let searchButton = id("search-button");
    searchButton.addEventListener("click", startSearch);
  }

 // checks if there is input in search bar - if there is search button enabled
 // so we can't search for nothing
  function enableSearch() {
    let trimmed = this.value.trim();
    let searchButton = id("search-button");
    if (trimmed !== "") {
        searchButton.disabled = false;
    } else {
        searchButton.disabled = true;
    }
  }

  function startSearch() {
    let input = id("search");
    let search = input.value.trim();
    fetch("/dub/data?search=" + search)
      .then(statusCheck)
      .then(resp => resp.json())
      .then(loadItems)
      .catch(handleError);
  }

  function loadItems(places) {
    clearResult();
    displaySearchResult();

    let resContainer = id("res-container");
    createCards(places, resContainer);
  }

  function clearResult() {
    let cards = qsa(".resCard");
    for(let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }
  }

  function createCards(arr, container) {
    for(let i = 0; i < arr.length; i++) {
       let card = gen("article");
       card.classList.add("resCard");
       card.setAttribute("id", arr[i].name);
       container.appendChild(card);
       let name = gen("p");
       name.textContent = arr[i].name;
       card.appendChild(name);
       let background = gen("p");
       background.textContent = arr[i].culture;
       card.appendChild(background);
       let upvotes = gen("p");
       upvotes.textContent = arr[i].upvotes;
       card.appendChild(upvotes);
       let location = gen("p");
       location.textContent = arr[i].location;
       card.appendChild(location);

       if (arr[i].halal !== null) {
        let halal = gen("p");
        halal.textContent = arr[i].halal;
        card.appendChild(halal);
       }

       if (arr[i].veg !== null) {
        let veg = gen("p");
        veg.textContent = arr[i].veg;
        card.appendChild(veg);
       }

       if (arr[i].GF !== null) {
        let GF = gen("p");
        GF.textContent = arr[i].GF;
        card.appendChild(GF);
       }

       card.addEventListener("click", moreInfo);

    }
  }

  function moreInfo() {
    let place = this.id;
    console.log(place);
    //make page with addy and maybe pic if time
  }

  function updateLeaderboard() {

  }

  function changeViews(){
    let home = document.querySelector(".home-button");
    home.addEventListener("click", displayHomeView);
    let explore = document.querySelector(".explore-button");
    explore.addEventListener("click", displayExploreView);
    let locations = document.querySelector(".locations-button");
    locations.addEventListener("click", displayLocationsView);
    let leaderboard = document.querySelector(".leaderboard-button");
    leaderboard.addEventListener("click", displayLeaderboardView);
    let connect = document.querySelector(".connect-button");
    connect.addEventListener("click", displayConnectView);
  }

  function displayHomeView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");
    let result = document.getElementById("result");

    homeView.classList.add("hidden");
    homeView.classList.remove("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    result.classList.add("hidden");
    connectView.classList.add("hidden");
  }

  function displayExploreView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");
    let result = document.getElementById("result");


    homeView.classList.add("hidden");
    exploreView.classList.remove("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    result.classList.add("hidden");
    connectView.classList.add("hidden");

    // event listeners for diff cuisine pages
  }

  function displayLocationsView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");
    let result = document.getElementById("result");


    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.remove("hidden");
    leaderboardView.classList.add("hidden");
    result.classList.add("hidden");
    connectView.classList.add("hidden");
}

  function displayLeaderboardView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");
    let result = document.getElementById("result");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    result.classList.add("hidden");
    leaderboardView.classList.remove("hidden");
    connectView.classList.add("hidden");

    updateLeaderboard();
  }

  function displayConnectView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");
    let result = document.getElementById("result");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    result.classList.add("hidden");
    connectView.classList.remove("hidden");
  }

//   function displayResult(){
//     hideAll();

//     let result = document.getElementById("result");
//     result.classList.remove("hidden");
// }

  function displaySearchResult() {
    let result = document.getElementById("result");
    result.classList.remove("hidden");

    let homeView = document.getElementById("home");
    homeView.classList.remove("hidden");

    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.add("hidden");
  }

  function hideAll(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.add("hidden");
  }

  // search bar implemnetation for users and cusine
  // filter implementation for cuisine

  // leaderboard implementation
  // CARD FUNCTION

  // explore cuisine buttons and listing using card function

  //

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  function handleError(err) {
    console.log(err);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();

