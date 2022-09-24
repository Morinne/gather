"use strict";

/*
	Final Project - Gather Beer Garden Website
	ITSE 1311-001
	
	Author: Morinne Kearns
	Date: 5/8/22
   
   	Filename: menu.js
 
 	This file creates and populates the menu table on the menu.html page for Gather
      
*/
//Initialize table HTML, including header titles
var tableHTML = "<table id='menu'><tr><th class='title1' colspan='2'>Drinks</th><th></th><th class='title1' colspan='2'>Nibbles</th></tr>";

//Loop through each entry in all the arrays to create menu
for (var i=0; i < drinks_name.length; i++) {
	tableHTML += "<tr><td class='minpad'><h2>" + drinks_name[i] +"</h2></td><td rowspan='3'><img src='" + drinks_images[i] + "'/></td><td class='minpad'></td><td class='minpad'><h2>" + food_name[i] +"</h2></td><td rowspan='3'><img src='" + food_images[i] + "'/></td></tr><tr><td class='minpad'>" + drinks_description[i] + "</td><td></td><td class = 'minpad'>" + food_description[i] + "</td></tr><tr><td>$" + drinks_price[i] + "</td><td></td><td>$" + food_price[i] + "</td></tr>";
}
//Complete table
tableHTML += "</table>";

//Apply HTML to div element with ID menuTable
document.getElementById("menuTable").innerHTML = tableHTML;
  