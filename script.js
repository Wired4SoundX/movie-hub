// Welcome text
const welcomeText = "Welcome to Movie Hub";

document.addEventListener("DOMContentLoaded", () => {

  // setTimeout
  setTimeout(() => {
    document.getElementById("welcome").innerHTML = welcomeText;
  }, 1000);

  // Read More / Read Less
  let showMore = false;

  document.getElementById("toggleBtn")
  .addEventListener("click", () => {

    showMore = !showMore;

    const moreText =
      document.getElementById("moreText");

    if (showMore) {

      moreText.style.display = "block";

      document.getElementById("toggleBtn")
      .innerHTML = "Read Less";
    }

    else {

      moreText.style.display = "none";

      document.getElementById("toggleBtn")
      .innerHTML = "Read More";
    }
  });

  // MOVIE POSTER SLIDER

  const posters = [

    "images/Feature+3-1.WEBP",
    "images/batman-dark-knight-poster-wallpaper.jpg",
    "images/film_feature_minecraft movie poster.jpg",
    "images/avatar-the-way-of-water-poster.AVIF"

  ];

  let currentPoster = 0;

  const image =
    document.getElementById("mainImage");

  // Change image every 3 seconds
  setInterval(() => {

    currentPoster++;

    if (currentPoster >= posters.length) {
      currentPoster = 0;
    }

    image.src = posters[currentPoster];

  }, 3000);

});