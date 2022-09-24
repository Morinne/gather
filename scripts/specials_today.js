"use strict";

/*
	Final Project - Gather Beer Garden Website
	ITSE 1311-001
	
	Author: Morinne Kearns
	Date: 5/8/22
   
   	Filename: specials.js
 
 	This file creates and populates the specials table on the Today's Specials page for Gather
	
      
*/
//Initialize tableHTML variable
var tableHTML = "<table id='menu'><form action='calculate.js'><tr>";

//Create date variables to store today's date, day of week, the the index of the correct array objects
var thisDate = new Date();
var thisDay = thisDate.getDay();
var index = dayOfWeek.indexOf(thisDay);

//Add today's special to table using correct day of week
tableHTML += "<th class='title2' colspan='7'>" + day_title[index] + "</th></tr><tr><td colspan='2' class='minpad'><h2>" + drinks_specials_name[index] +"</h2></td><td rowspan='3' class='minpad'><img src='" + drinks_specials_images[index] + "'/></td><td class='center'></td><td colspan='2' class='minpad'><h2>" + food_specials_name[index] +"</h2></td><td rowspan='3' class='minpad'><img src='" + food_specials_images[index] + "'/></td></tr><tr><td colspan='2' class='minpad'>" + drinks_specials_description[index] + "</td><td class='center'></td><td colspan='2' class = 'minpad'>" + food_specials_description[index] + "</td></tr><tr><td class='last1 price'>$" + drinks_specials_price[index] + "</td><td class='last2'><label for='qty1'>Qty: </label><input class='quantity' id='qty1' type='text' pattern='^[0-9]*$'/></td><td class='center'></td><td class='last1 price'>$" + food_specials_price[index] + "</td><td class='last2'><label for='qty2'>Qty: </label><input class='quantity' id='qty2' type='text' pattern='^[0-9]*$' /></td></tr>";

//Change regular menu prices if it is today's special
if (thisDay === 1) {
	drinks_price[4]=3.50;
	drinks_price[5]=3.50;
	food_price[0]=2.75;
} else if (thisDay === 3) {
	drinks_price[2]=3.75;
	food_price[2]=4.25;
} else if (thisDay === 4) {
	drinks_price[3]=1.00;
	food_price[1]=2.00;
} 

//Add regular menu to table
tableHTML += "<th colspan='7' class='title2'>Regular Menu</th></tr>";

var qtyCounter = 3;	//set counter to append quantity id's

//Loop through each entry in the regular menu arrays, addign correct id to each input box
for (var i=0; i < drinks_name.length; i++) {
	tableHTML += "<tr><td colspan='2' class='minpad'><h2>" + drinks_name[i] +"</h2></td><td rowspan='3'><img src='" + drinks_images[i] + "'/></td><td class='center'></td><td colspan='2' class='minpad'><h2>" + food_name[i] +"</h2></td><td rowspan='3'><img src='" + food_images[i] + "'/></td></tr><tr><td colspan='2' class='minpad'>" + drinks_description[i] + "</td><td class='center'></td><td colspan='2' class = 'minpad'>" + food_description[i] + "</td></tr><tr><td class='last1 item price'>$" + drinks_price[i] + "</td><td class='last2'><label for='qty3'>Qty: </label><input class='quantity' id='qty" + qtyCounter + "' type='text' pattern='^[0-9]*$' /></td><td class='center'></td><td class='last1 price'>$" + food_price[i] + "</td><td class='last2'><label for='qty4'>Qty: </label><input class='quantity' id='qty" + qtyCounter+1 +"' type='text' pattern='^[0-9]*$' /></td></tr>";
	qtyCounter += 2;	//update quantity id counter
}

//Add submit button and complete table
tableHTML += "<tr><td id='btn' colspan='7'><input id='submitButton' value='Calculate Order Total' type='submit'></td></tr></form></table>";

//Apply HTML to div element with ID menuTable
document.getElementById("todaysTable").innerHTML = tableHTML;
  