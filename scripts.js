// 
//debugging
console.log("JS loaded");
console.log(document.getElementById("search"));

//TODO: Add more data

//Creating an array of objects (planets) from csv file
//moved urls inside the array
const planets = [
  {
    name: "Mercury", type: "Planet", surface: "Terrestrial", moons: 0, day_length: 58.64, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/mercury/images/messenger_high_resolution_view_of_mercury_pia_13840.jpg",
  },
    {
    name: "Venus", type: "Planet", surface: "Terrestrial", moons: 0, day_length: 243.01, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/pia00271/PIA00271~large.jpg",
  },
    {
    name: "Earth", type: "Planet", surface: "Terrestrial", moons: 1, day_length: 0.99, image: "https://www.nasa.gov/wp-content/uploads/2023/03/187_1003705_americas_dxm.png",
  },
    {
    name: "Mars", type: "Planet", surface: "Terrestrial", moons: 2, day_length: 1.02, image: "https://images-assets.nasa.gov/image/PIA02653/PIA02653~large.jpg",
  },
    {
    name: "Jupiter", type: "Planet", surface: "Gas", moons: 95, day_length: 0.41, image: "https://images-assets.nasa.gov/image/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o~large.jpg",
  },
    {
  name: "Saturn", type: "Planet", surface: "Gas", moons: 292, day_length: 0.44, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia05/pia05389/jpeg/PIA05389.jpg",
  },
    {
  name: "Uranus", type: "Planet", surface: "Ice", moons: 29, day_length: 0.71, image: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg",
  },
    {
  name: "Neptune", type: "Planet", surface: "Gas", moons: 16, day_length: 0.67, image: "https://images-assets.nasa.gov/image/PIA01492/PIA01492~large.jpg",
  },
];


// This function adds cards to the page to display the data in the array
//Each card will display the objects information and image
function showCards() {

  //debugging: checking if it was actually an array
  console.log("planetsToShow:", planets);
  console.log("is array?", Array.isArray(planets));

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const templateCard = document.getElementById("template-card");

  //loop that creates the card
  planets.forEach(planet =>{
    const cardClone = templateCard.cloneNode(true);
    cardClone.style.display = "block";
    editCardContent(cardClone, planet);
    cardContainer.appendChild(cardClone);
  });
//debugging
  console.log(planets);
}

//creates card information and image
function editCardContent(card, planet) {

  //fills placeholder spot with planet name
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = planet.name;

  //planet image
  const cardImage = card.querySelector("img");
  cardImage.src = planet.image;
  cardImage.alt = `${planet.name} image`;

 //loop to fill placeholders with planet data
  const fields = ["type", "surface", "moons", "day_length"];

  fields.forEach(field => { 
    const element = card.querySelector(`.${field} span`);
    element.textContent = planet[field];
  });

 //debugging
  console.log("new card:", planet, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


//Changed button functions to link to the NASA Homepage
function NasaLink(){
  console.log("Button Clicked!");
  window.open("https://www.nasa.gov", "_blank");
}


//Search function
//TODO




//Filter
//TODO

