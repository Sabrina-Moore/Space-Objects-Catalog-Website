// 
//debugging
//alert("JS is running");
console.log("JS loaded");
console.log(document.getElementById("search"));


//Creating an array of objects "planets"
//moved urls inside the array
const planets = [
  {
    name: "Mercury", type: "Planet", surface: "Terrestrial", moons: 0, day_length: 1408, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/mercury/images/messenger_high_resolution_view_of_mercury_pia_13840.jpg",
  },
    {
    name: "Venus", type: "Planet", surface: "Terrestrial", moons: 0, day_length: 5832, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/pia00271/PIA00271~large.jpg",
  },
    {
    name: "Earth", type: "Planet", surface: "Terrestrial", moons: 1, day_length: 24, image: "https://www.nasa.gov/wp-content/uploads/2023/03/187_1003705_americas_dxm.png",
  },
    {
    name: "Mars", type: "Planet", surface: "Terrestrial", moons: 2, day_length: 25, image: "https://images-assets.nasa.gov/image/PIA02653/PIA02653~large.jpg",
  },
    {
    name: "Jupiter", type: "Planet", surface: "Gas Giant", moons: 95, day_length: 10, image: "https://images-assets.nasa.gov/image/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o~large.jpg",
  },
    {
  name: "Saturn", type: "Planet", surface: "Gas Giant", moons: 146, day_length: 11, image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia05/pia05389/jpeg/PIA05389.jpg",
  },
    {
  name: "Uranus", type: "Planet", surface: "Ice Giant", moons: 28, day_length: 17, image: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg",
  },
    {
  name: "Neptune", type: "Planet", surface: "Ice Giant", moons: 16, day_length: 16, image: "https://images-assets.nasa.gov/image/PIA01492/PIA01492~large.jpg",
  },
];

//an array of objects "moons"

const moons = [
  {
  name: "Phobos", type: "Moon", parent_planet: "Mars", surface: "Rock", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Phobos_colour_2008.jpg/330px-Phobos_colour_2008.jpg",
},
  {
name: "Deimos", type: "Moon", parent_planet: "Mars", surface: "Rock", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/NASA-Deimos-MarsMoon-20090221.jpg/330px-NASA-Deimos-MarsMoon-20090221.jpg",
},
  {
name: "Ganymede", type: "Moon", parent_planet: "Jupiter", surface: "Ice and Rock", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ganymede_-_Perijove_34_Composite.png/330px-Ganymede_-_Perijove_34_Composite.png",
},
  {
name: "Callisto", type: "Moon", parent_planet: "Jupiter", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/jupiter-moon-callisto.jpg",
},
  {
name: "Io", type: "Moon", parent_planet: "Jupiter", surface: "Volcanic", image: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/0/PIA02308.jpg?w=2796&h=2796&fit=clip&crop=faces%2Cfocalpoint",
},
  {
name: "Europa", type: "Moon", parent_planet: "Jupiter", surface: "Ice", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Europa_-_Perijove_45_%28cropped%29.png/330px-Europa_-_Perijove_45_%28cropped%29.png",
},
  {
name: "Titan", type: "Moon", parent_planet: "Saturn", surface: "Ice and Rock", image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Titan_in_true_color_by_Kevin_M._Gill.jpg",
},
  {
name: "Rhea", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-rhea.jpg",
},
  {
name: "Iapetus", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Iapetus_as_seen_by_Cassini_True_Color.png/330px-Iapetus_as_seen_by_Cassini_True_Color.png",
},
  {
name: "Dione", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-dione.jpg",
},
  {
name: "Tethys", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-tethys.jpg",
},
  {
name: "Enceladus", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-enceladus.jpg",
},
  {
name: "Mimas", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-mimas.jpg",
},
  {
name: "Hyperion", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-hyperion.jpg",
},
  {
name: "Phobos", type: "Moon", parent_planet: "Saturn", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/saturn-moon-phoebe.jpg",
},
  {
name: "Titania", type: "Moon", parent_planet: "Uranus", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/uranus-moon-titania.jpg",
},
  {
name: "Oberon", type: "Moon", parent_planet: "Uranus", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/uranus-moon-oberon.jpg",
},
  {
name: "Umbriel", type: "Moon", parent_planet: "Uranus", surface: "Rock", image: "https://www.go-astronomy.com/images/moons/uranus-moon-umbriel.jpg",
},
  {
name: "Ariel", type: "Moon", parent_planet: "Uranus", surface: "Ice and Rock", image: "https://www.go-astronomy.com/images/moons/uranus-moon-ariel.jpg",
},
  {
name: "Miranda", type: "Moon", parent_planet: "Uranus", surface: "Ice and Rock", image: "https://www.go-astronomy.com/images/moons/uranus-moon-miranda.jpg",
},
  {
name: "Triton", type: "Moon", parent_planet: "Neptune", surface: "Cryovolcanic", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Triton_True_Color.png/960px-Triton_True_Color.png",
},
  {
name: "Proteus", type: "Moon", parent_planet: "Neptune", surface: "Ice and Rock", image: "https://www.go-astronomy.com/images/moons/neptune-moon-proteus.jpg",
},
];

//-----------------------------------------------------------------------------

//filtered arrays that are copies of the original arrays
//used instead of array.filter() 
let filteredPlanets = [...planets];  //spread syntax - that expands an array into elements
let filteredMoons = [...moons];


// This function adds cards to the page to display the data in the array
//Builds containers dynamically to hold each card that will display the array elements
function showCards() {

  const container = document.getElementById("card-container"); //searches the DOM's version of the HTML page for card container and stores the reference (like a pointer) to that element in container

  //clear container
  container.innerHTML = "";
 
  //searches HTML page for templates and stores the reference to that element
  const planetTemplate = document.getElementById("planet-template");
  const moonTemplate = document.getElementById("moon-template");

  //loop that creates planet card
  filteredPlanets.forEach(planet =>{
    //copying card to create one card per object
    const cardClone = planetTemplate.cloneNode(true);
    cardClone.style.display = "block"; //makes card visible
    editPlanetCard(cardClone, planet);
    container.appendChild(cardClone); 
  });

  //loop that creates moon card
   filteredMoons.forEach(moon =>{
     //copying card to create one card per object
    const cardClone = moonTemplate.cloneNode(true);
    cardClone.style.display = "block";
    editMoonCard(cardClone, moon);
    container.appendChild(cardClone);
  });

//debugging
  console.log(planets);
  console.log(moons);
}

//----------------------------------------------------------------
//creates planet card information and image
function editPlanetCard(card, planet) {

  //fills placeholder spot with planet name
  const cardHeader = card.querySelector("h2"); ////finds the h2 element inside card and stores in cardHeader
  cardHeader.textContent = planet.name;

  //planet image
  const cardImage = card.querySelector("img");
  cardImage.src = planet.image;
  cardImage.alt = `${planet.name} image`; ////puts the value of planet.name into the template string (`${}`)

 //loop to fill placeholders with planet data
  const fields = ["type", "surface", "moons", "day_length"]; //array of properties from planets array

  fields.forEach(field => {   //loops through each string in the fields array and runs the following code
    const element = card.querySelector(`.${field} span`); 
    element.textContent = planet[field]; //dynamically finds the right element and returns all the text from element
  });

 //debugging
  console.log("new card:", planet, "- html: ", card);
}

//---------------------------------------------------------------------
//creates moon card information and image
function editMoonCard(card, moon) {

  //fills placeholder spot with moon name
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = moon.name;

  //moon image
  const cardImage = card.querySelector("img");
  cardImage.src = moon.image;
  cardImage.alt = `${moon.name} image`; //what does this line do?

 //loop to fill placeholders with planet data
  const fields = ["type", "parent_planet", "surface"];

  fields.forEach(field => { 
    const element = card.querySelector(`.${field} span`);
    if(element){ //skips fields in case they are blank
      element.textContent = moon[field];
    }
    else{
      console.warn(`Missing field in HTML: .${field} span`);
    }
  });

 //debugging
  console.log("new card:", moon, "- html: ", card);
}

//----------------------------------------------------------------------------
//Filter 
//want all search (names and types) to be in the search bar

  const searchInput = document.getElementById("search");
  //search listener for typing
  searchInput.addEventListener("input", runSearch);
  //search listener for enter
  searchInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") runSearch();
  })

function runSearch() {
   const query = searchInput.value.toLowerCase();

    filteredPlanets = planets.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.type.toLowerCase().includes(query) ||
      p.surface.toLowerCase().includes(query)
    );

    filteredMoons = moons.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.type.toLowerCase().includes(query) ||
      m.parent_planet.toLowerCase().includes(query) ||
      m.surface.toLowerCase().includes(query)
    );

    showCards();
}

//------------------------------------------------------------------------

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);



//Changed button functions to link to the NASA Homepage
function NasaLink(){
  console.log("Button Clicked!");
  window.open("https://www.nasa.gov", "_blank");
}


