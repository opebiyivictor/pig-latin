$(document).ready(function(){

$("form#open").submit(function(event){

let pigboy = $("#input").val();

let piggy = pigLatin(pigboy) 

$("#translate").html(piggy) 

event.preventDefault();
})



})