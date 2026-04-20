Goal: Create a catalog of planetary and satellite (moons) objects that have cards that present information (like size, distance from Earth) 

Update 2 Changes made:
- Spent too long trying to create and work with .txt and .csv files to no avail - went back to hardcoding the data in an array, but if I want a larger dataset, I need to fix this
- Created a forEach loop in showCards function that copies the template, and creates a card from the planet data
- Created another forEach loop in editCardContent function that populates the blank placeholders (in html) for card information 
- Improved CSS styling for the boxes and search bar - used a bit of chatgpt here to create hover and shadow effects
-Created another goose chase when trying to create the search/filter feature where suddenly all the cards disappered - after a lot of console debugging (first testing for input and events that may be messing with it), I had to undo my code and determined the error to be with my attempt at a filtered array planetsToShow which was not implemented well and was not always an array. This created a major error in showCards that removed the cards. 

Problems:
1. Create more than one page? Planets on one, satellites on another?
2. OG code used URL for images - should I switch to an images folder or stay with URL for larger datasets?
3. Attempting to import the dataset from csv/txt file did not work - how do I properly do that? 
4. Using an array of objects for a large dataset may be very slow, but I'm unfamiliar with maps


TO DO:
- Write search function
- Create filter (filtering by types)
- add more data (moons or asteroids)


Abandoned Ideas that are worth implementing later:
- I'd love it if each object card was a button that when clicked on would lead to a hidden page with more information (also the same thing for the search function)
- I also really want the dataset to come from a text file, but don't have the skills to figure out how to do it in js

