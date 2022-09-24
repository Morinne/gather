"use strict";

/*
	Final Project - Gather Beer Garden Website
	ITSE 1311-001
	
	Author: Morinne Kearns
	Date: 5/8/22
	
	Filename: gathering_banner.js
   
 */     
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

var next = document.getElementById('imgbanbtn-next');
var previous = document.getElementById('imgbanbtn-prev');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}