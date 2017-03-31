/*
Program Name: Recipe Display Application
Author: John Forrester
Date: 03/27/17
Filename: script.js
*/

function display(event){
    
    $(event.currentTarget) .next() .fadeIn("slow");
}

$("h3").click(display);