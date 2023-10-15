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
    }
})();

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

    homeView.classList.add("hidden");
    homeView.classList.remove("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.add("hidden");
}

function displayExploreView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    homeView.classList.add("hidden");
    exploreView.classList.remove("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.add("hidden");
}

function displayLocationsView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.remove("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.add("hidden");
}

function displayLeaderboardView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.remove("hidden");
    connectView.classList.add("hidden");
}

function displayConnectView(){
    let homeView = document.getElementById("home");
    let exploreView = document.getElementById("explore");
    let locationsView = document.getElementById("locations");
    let leaderboardView = document.getElementById("leaderboard");
    let connectView = document.getElementById("connect");

    homeView.classList.add("hidden");
    exploreView.classList.add("hidden");
    locationsView.classList.add("hidden");
    leaderboardView.classList.add("hidden");
    connectView.classList.remove("hidden");
}

function displayResult(){
    hideAll();
    let result = document.getElementById("result");
    result.innerHTML=`<div class="row"><div class="col"><div class="card"><h3>title</h3><h5>subtitle</h5></div></div></div>`;
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