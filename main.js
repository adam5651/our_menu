let All_button = document.getElementById("allButton");
let Breakfast_button = document.getElementById("breakfastButton");
let Lunch_button = document.getElementById("lunchButton");
let Shakes_button = document.getElementById("shakesButton");
let Dinner_button = document.getElementById("dinnerButton");
let count = document.getElementsByClassName("item");

function sort(meals){
  for(i=0; i<count.length; i++){
    if(count[i].classList.contains(meals) === true){
      count[i].style.display="grid"
    }else{
      count[i].style.display="none"
    }
  }
  
}

Breakfast_button.onclick = function(){
  sort("breakfast")
}
All_button.onclick = function(){
  
  sort("all")
}
Lunch_button.onclick = function(){
  sort("lunch")
}
Shakes_button.onclick = function(){
  sort("shakes")
}
Dinner_button.onclick = function(){
  sort("dinner")
}
