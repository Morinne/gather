"use strict";

/*
	Final Project - Gather Beer Garden Website
	ITSE 1311-001
	
	Author: Morinne Kearns
	Date: 5/8/22
   
   	Filename: calculate.js
 
 	This file calculates the order totals and displays it in an alert on the Today's Specials page for Gather
	
	Function List
	=============
	
	validateQuantity()
		Validates the data entry in the quantity fields.
		
	calculate()
		Calculates the order total by multiplying each item price by the quantity entered, summing all items,
		then multiplying the subtotal by the tax rate. The final total is the subtotal plus the taxes.
      
   	formatNumber(val, decimals)
      		Formats the value, "val" to the number of decimals indicated 
      		by "decimals", adding thousands separators.
*/
//Event handler for any changes made to quantity elements on the Today's Specials page
window.addEventListener("load", function() {
	var changingCells = document.getElementsByClassName("quantity");
	for (var i=0; i < changingCells.length; i++) {
		changingCells[i].onchange = validateQuantity;
	}
	//Calculates order total when page is submitted
	document.getElementById("submitButton").onclick = calculate;
});

//Create a custom validation message if quantity is anything but an integer
function validateQuantity(e) {
	var quantityId = e.target.id;
	var currentQty = document.getElementById(quantityId);
	if (currentQty.validity.patternMismatch) {
		currentQty.setCustomValidity("Please enter a whole number greater than 0,\nthen hit <TAB>");
		currentQty.reportValidity();
	} else {
		currentQty.setCustomValidity('');
	}
}
	
//Calculates the order total including sales tax
function calculate() {
	var subTotal = 0;	//Initialize variable to hold subtotal
	var salesTaxRate = 0.0825;	//Current sales tax rate
	var quantity = document.getElementsByClassName("quantity");
	var price = document.getElementsByClassName("price");
	var negative = false;  //variable to hold negative quantity test
	//Loop through all quantity fields, performing subtotal calculation only on those with a number
	//for the quantity
	for (var i=0; i < quantity.length; i++) {
		var itemQty = parseInt(quantity[i].value);
		var itemPrice = price[i].firstChild.textContent;
		itemPrice = parseFloat(itemPrice.substring(1));
		if (isNaN(itemQty) == false) {
			subTotal += (itemQty * itemPrice);
		}
		//If user entered a negative number despite validity test, set test to true
		if (itemQty < 0) {
			negative = true;
		}
	}
	//If user tried to enter a negative number, send alert to redo order
	if (negative == true) {
		window.alert("Please enter a whole number greater than 0 in the quantity fields and resubmit your order.")
	} else {
		//Calculate sales tax on order
		var salesTax = subTotal * salesTaxRate;
		//Calculate order total by adding sales tax to subtotal
		var total = subTotal + salesTax;
		window.alert("Your food and drink subtotal is: $" + formatNumber(subTotal,2) + "\nYour sales tax is: $" + formatNumber(salesTax,2) + "\nYour total including sales tax is: $" + formatNumber(total,2));
	}

}
//Format numbers to correct number of decimal places
function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}
