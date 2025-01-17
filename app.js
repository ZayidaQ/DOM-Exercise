// Select the section with an id of container without using querySelector.
document.getElementById("container");

// Select the section with an id of container using querySelector.
document.querySelector("#container");

// Select all of the list items with a class of “second”.
document.querySelectorAll(".second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

// Give the section with an id of container the text “Hello!”.
let container = document.querySelector("#container");
container.innerText = "Hello!";

// Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main");

// Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// Create a new li element.
let newEl = document.createElement("li");

// Give the li the text “four”.
newEl.innerText = "four";

// Append the li to the ul element.
let list = document.querySelector("ul");
list.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let lists = document.querySelectorAll("ol li");
for (let i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = "green";
}

// Remove the div with a class of footer.
footer.remove();
