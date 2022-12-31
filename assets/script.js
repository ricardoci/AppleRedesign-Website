var count = 0;
var count2 = 0;
var count3 = 0;
var incrementEl = document.querySelector("#cartButton");
var incrementEl2 = document.querySelector("#iphone14");
var incrementEl3 = document.querySelector("#iphone13");
var incrementEl4 = document.querySelector("#iphonese");
var decrementEl = document.querySelector("h4");
var decrementEl2 = decrementEl
var countEl = document.querySelector("#count");
var countEl2 = document.querySelector("#count2");
var information = document.querySelector(".num");



function setCounterText() {
    countEl.textContent = count;
    countEl2.textContent = count2;

  

  }

 
  

 

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  count++
  countEl.textContent = count;
  
  if(information.length > 1){
    information.length.removeEventListener[0];
    
  }

  var cart = document.createElement("div")
  cart.textContent = count  
  information.appendChild(cart)
  information.setAttribute("style", "font-size:25px;  position: relative;")

 
  
  
  

});
incrementEl2.addEventListener("click", function() {
    count++
    countEl.textContent = count;
  
  });
  incrementEl3.addEventListener("click", function() {
    count++
    countEl.textContent = count;
  
  });
  incrementEl4.addEventListener("click", function() {
    count++
    countEl.textContent = count;
  
  });



  //SECOND COUNTER
  incrementEl.addEventListener("click", function() {
    count2++
    countEl2.textContent = count2;
  
  });
  incrementEl2.addEventListener("click", function() {
      count2++
      countEl2.textContent = count2;
    
    });
    incrementEl3.addEventListener("click", function() {
      count2++
      countEl2.textContent = count2;
    
    });
    incrementEl4.addEventListener("click", function() {
      count2++
      countEl2.textContent = count2;
    
    });

// TODO: Add event listener to decrement button 

decrementEl2.addEventListener("click", function() {
  
    if(count2 > 0){
      count2--;
    setCounterText()
    
  
    }
    if(count > 0){
        count--;
      setCounterText()
    
      }
  
  });