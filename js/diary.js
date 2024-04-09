// Function to show the menu
function showMenu() {
  const menuContainer = document.getElementById("diary-container");
  menuContainer.style.display = "block";
}

// Function to close/hide the menu
function closeMenu() {
  const menuContainer = document.getElementById("diary-container");
  menuContainer.style.display = "none";
}

// Function to handle creating a note (you can customize this function)
function createNote() {
  alert("Note created!"); // Example action (replace with your logic)
  closeMenu(); // Close the menu after creating a note
}

// Add click event listener to the feedback item to show the menu
const draggableElement = document.getElementById("draggable-element");
draggableElement.addEventListener("click", function () {
  showMenu(); // Show the menu when feedback item is clicked
});
