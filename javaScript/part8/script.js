// Example one

document.getElementById("ChangeTextButton").addEventListener("click", () => {
  let paragraph = document.getElementById("myparagraph");
  paragraph.textContent = "this paragraph is changed";
});

//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiiesList = document.getElementById("citiiesList");
    console.log(citiiesList.firstElementChild);
  });

//example 3

document.getElementById("changeOrder").addEventListener("click", () => {
  document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.color = "red";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppinglist").appendChild(newItem);
});

// example 5
document.getElementById("removeTask").addEventListener("click", () => {
  let taskList = document.getElementById("taskList");
  let lastTask = taskList.lastElementChild;
  taskList.removeChild(lastTask);
});

// example 6

document.getElementById("clickMeButton").addEventListener("click", () => {
  alert("Hello World!");
});

// example 7

document.getElementById("taskList").addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target && event.target.matches(".taskItem")) {
    alert("You Selected: " + event.target.textContent);
  }
});

// example 8

document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  let feedback = document.getElementById("feedbackInput").value;
  console.log(feedback);
  document.getElementById(
    "feedbackDisplay"
  ).textContent = `feedback is: ${feedback}`;
});

// example 9

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("domStatus").textContent =
    "DOM is fully loaded and parsed";
});

// example 10

document.getElementById("toggleHighlight").addEventListener("click", () => {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlighted");
});
