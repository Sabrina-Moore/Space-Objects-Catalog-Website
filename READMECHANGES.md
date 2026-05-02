# SEA Stage 2 - Data Catalog Project

This catalog displays the planetary and satellite (moon) objects with cards that present information from an array (like size, or surface type). The main features are the card containers, which are reused from the original template and a search bar with a filter. 

### <p align="center">When deciding on what this catalog should be about, I thought about what tools I'd like to develop for my personal life.</p>

One project that I've been slowly working on is a tool for a homebrew table-top roleplaying game of mine, which would contain a calculator (that I've started on in C++) and a variety of useful information to me like details about locations the players can travel to in the solar system. Right now, this celestial object catalog has minimal information and all of it is real known fact, but in the future, I'll update it to also show fictional details (something like Io having a research space station in it's orbit, as an example). 

---

## 📚 Table of Contents

- [Overview](#Overview)
- [Changes Made during the Process](#Changes-Made)
- [To-Do](#To-Do-List)
- [Abandoned Ideas](#Abandoned-Ideas)

---

## Overview

### <p align="center">Completed Work</p>

In **update 1** (of 4), I created the two arrays of objects (Planets and Satellites), modified the already existing code to accept these new arrays, and changed the URL's. I wanted the code to still work with the already existing card containers. 

The arrays still didn't really have information yet, the card's worked updated for the new information and there was no search feature.

In **update 2**, I worked on and abandoned the idea of importing a local .txt or .csv file for the datasets and hardcoded the two arrays into Javascript. I created the forEach loops in showCards() to copy the template, and another loop in editCardContent() that populated the blank placeholders (in html) for card information. I developed the barebones of the search bar, but had multiple bugs that kept breaking the feature (solved by fixing filtered array planetsToShow). I also improved the css styles for the boxes and search bar. 

In **update 3**, I added more data and had to create separate showCards() and editCardContent() functions for the two arrays (not ideal to have duplicate code and fixing this is in my to do list). I also reworked a lot of the css styling to make it more visually appealing. At this point, I still did not have a working search and filter feature, which I finally fix in the next update.

I finally worked through the basic filter logic in **update 4**. Sadly, I heavily relied on the internet for this, as I would never have thought to use addEventListeners on my own. I also optimized the filter ability and layout and added more properties to the arrays. 

At this point, I was ready to publish the website, but had quite about of code to still fix. 

---

## Changes-Made

After the development of the website, I still had a lot of minor changes and fixes to do. This included fixing the rotation period data to correctly show hours instead of proportions, working on website performance in google chrome (loading and refreshing issues) by manipulating the DOM elements, fixing multiple issues with the search features breaking, and continue visual optimization and code simplification. 

I fixed mostly small things here: making the code prettier by removing or adding blank lines, fixing spelling mistakes, and a lot of css styling. I also changed the runSearch() function from using searchInput to document.getElemenyByID to receive user input and search for it in one line.


---

## To-Do-List

In the future, I'd like to keep improving on this website, with changes like:
- Adding a navigation bar between multiple html pages
  - And adding those html pages 
- Converting scifi-calculator from C++ to javascript
- Making models and visualizations for the orbit
- Optimizing the performance of the website on mobile and google chrome


---

## Abandoned-Ideas

Abandoned Ideas that are worth implementing later:
- I'd want each object card to be a button that when clicked on would lead to a hidden page with more information (like unique features or discoveries)
- I also really want the dataset to come from a text file, but don't have the skills to figure out how to do it in js
- I debated URL images versus local image folder, but decided to stick with URL's. Would local folder be more efficient? 
- The site needs some major speed and performance improvements for chrome
