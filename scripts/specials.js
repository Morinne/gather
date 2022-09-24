"use strict";

/*
	Final Project - Gather Beer Garden Website
	ITSE 1311-001
	
	Author: Morinne Kearns
	Date: 5/8/22
   
   	Filename: specials.js
 
 	This file creates and populates the specials table on the specials.html page for Gather
      
*/
//Initialize table HTML
var tableHTML = "<table id='menu'>";

//Loop through each entry in all the arrays to create specials menu
for (var i=0; i < drinks_specials_name.length; i++) {
	tableHTML += "<th class='title' colspan='5'>" + day_title[i] + "</th></tr><tr><td class='minpad'><h2>" + drinks_specials_name[i] +"</h2></td><td rowspan='3' class='minpad'><img src='" + drinks_specials_images[i] + "'/></td><td class='minpad'></td><td class='minpad'><h2>" + food_specials_name[i] +"</h2></td><td rowspan='3' class='minpad'><img src='" + food_specials_images[i] + "'/></td></tr><tr><td class='minpad'>" + drinks_specials_description[i] + "</td><td class='minpad'></td><td class = 'minpad'>" + food_specials_description[i] + "</td></tr><tr><td>$" + drinks_specials_price[i] + "</td><td></td><td>$" + food_specials_price[i] + "</td></tr>";
}
//Complete table
tableHTML += "</table>";
//Apply HTML to div element with ID menuTable
document.getElementById("specialsTable").innerHTML = tableHTML;
  