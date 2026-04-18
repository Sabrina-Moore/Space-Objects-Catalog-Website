/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const NASA_MERCURY_URL =
  "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/mercury/images/messenger_high_resolution_view_of_mercury_pia_13840.jpg";
const NASA_VENUS_URL =
  "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/mercury/images/mariner_10_first_image_of_mercury_03_23_1974_PIA00437-1920x640.jpg";
const MARS_NASA_URL =
  "https://science.nasa.gov/resource/global-color-views-of-mars/";

// This is an array of objects (planets)
let planets = [
  {
    name: "Mercury",
    type: "Planet",
    surface: "Terrestrial",
    Moons: 0,
  },
    {
    name: "Venus",
    type: "Planet",
    surface: "Terrestrial",
    Moons: 0,
  },

    {
    name: "Earth",
    type: "Planet",
    surface: "Terrestrial",
    Moons: 1,
  },
    {
    name: "Mars",
    type: "Planet",
    surface: "Terrestrial",
    Moons: 2,
  },
  {
    name: "Jupiter",
    type: "Planet",
    surface: "Gas",
    Moons: 95,
  },
];

//an array of satellite ojects (asteroids and moons)
let satellites = [
    {
    name: "Eros",
    type: "Moon",
    surface: "Terrestrial"
  },
  
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = NASA_MERCURY_URL;
    } else if (i == 1) {
      imageURL = NASA_VENUS_URL;
    } else if (i == 2) {
      imageURL = MARS_NASA_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, planet, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, planet, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = planet.name;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = planet.name + " Image";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", planet, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

//Bi - do different function 
function removeLastCard() {
  planets.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
