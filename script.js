console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let buttons = document.getElementsByClassName("btn")

let card = document.querySelectorAll(".card")

let navbar = document.querySelector(".navbar")


// Extra credit: Select the navbar


// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar

buttons[0].addEventListener("click", function(event){
  body.style.backgroundColor = "white"
  body.style.color = "black"
  
  navbar.classList.add("bg-light")
  navbar.classList.remove("bg-dark")

  
  card[0].classList.remove("bg-dark")
  card[0].classList.add("bg-white")
  card[1].classList.remove("bg-dark")
  card[1].classList.add("bg-white")
  card[2].classList.remove("bg-dark")
  card[2].classList.add("bg-white")
  card[3].classList.remove("bg-dark")
  card[3].classList.add("bg-white")
})


// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar

buttons[1].addEventListener("click", function(event){
  body.style.backgroundColor = "black"
  body.style.color = "white"
  
  navbar.classList.remove("bg-light")
  navbar.classList.add("bg-dark")

  card[0].classList.remove("bg-white")
  card[0].classList.add("bg-black")
  card[1].classList.remove("bg-white")
  card[1].classList.add("bg-black")
  card[2].classList.remove("bg-white")
  card[2].classList.add("bg-black")
  card[3].classList.remove("bg-white")
  card[3].classList.add("bg-black")
})


// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards

let images = document.getElementsByClassName("card-img-top")

// Console log the length of the array to confirm you have all 4 images

console.log(images.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image

images[0].addEventListener("mouseover", function(event){
  images[0].src = "images/ears.gif"
})

images[0].addEventListener("mouseout", function(event){
  images[0].src = "images/ears.jpg"
})

images[1].addEventListener("mouseover", function(event){
  images[1].src = "images/halp.gif"
})

images[1].addEventListener("mouseout", function(event){
  images[1].src = "images/halp.jpg"
})

images[2].addEventListener("mouseover", function(event){
  images[2].src = "images/husky.gif"
})

images[2].addEventListener("mouseout", function(event){
  images[2].src = "images/husky.jpg"
})

images[3].addEventListener("mouseover", function(event){
  images[3].src = "images/dance.gif"
})

images[3].addEventListener("mouseout", function(event){
  images[3].src = "images/dance.jpg"
})
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


