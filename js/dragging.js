var feedback = document.getElementById("feedback-content");

// Function to check if two elements intersect
function isIntersecting(elem1, elem2) {
  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Enable draggability using interact.js
interact("#draggable-element").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true,
    }),
  ],
  autoScroll: true,
  listeners: {
    start(event) {
      // Show the menu when dragging starts
      showMenu();
      showDimmer();
    },
    move(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // Update the position attributes
      target.style.transform = `translate(${x}px, ${y}px)`;

      feedback.style.backgroundColor = "white";
      feedback.style.border = "solid 4px #9747FF";
      feedback.style.color = "black";

      // Update the data attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);

      // Check if draggable element intersects with menu container
      const draggableElement = document.getElementById("draggable-element");
      const menuContainer = document.getElementById("diary-container");

      const cat1 = document.getElementById("cat1");
      const cat2 = document.getElementById("cat2");
      const cat3 = document.getElementById("cat3");
      const cat4 = document.getElementById("cat4");
      const cancel = document.getElementById("cancel");

      changeActionTagImage("assets/drag.png");

      if (isIntersecting(draggableElement, cat1)) {
        changeActionTagImage("assets/save.png");
        cat1.style.transform = "scale(1.05)";
      } else {
        cat1.style.transform = "scale(1)";
      }

      if (isIntersecting(draggableElement, cat2)) {
        cat2.style.transform = "scale(1.05)";
      } else {
        cat2.style.transform = "scale(1)";
      }

      if (isIntersecting(draggableElement, cat3)) {
        cat3.style.transform = "scale(1.05)";
      } else {
        cat3.style.transform = "scale(1)";
      }

      if (isIntersecting(draggableElement, cat4)) {
        cat4.style.transform = "scale(1.05)";
      } else {
        cat4.style.transform = "scale(1)";
      }

      if (isIntersecting(draggableElement, cancel)) {
        cancel.style.transform = "scale(1.05)";
        changeActionTagImage("assets/cancel.png");
      } else {
        cancel.style.transform = "scale(1)";
      }
    },

    end(event) {
      if (isIntersecting(draggableElement, cat1)) {
        removeDimmer();
        closeMenu();
        draggableElement.remove();
        cat1.style.transform = "scale(1)";
        cat2.style.transform = "scale(1)";
        cat3.style.transform = "scale(1)";
        cat4.style.transform = "scale(1)";
        saveNote();
      }

      if (isIntersecting(draggableElement, cancel)) {
        removeDimmer();
        closeMenu();
        draggableElement.remove();
        cat1.style.transform = "scale(1)";
        cat2.style.transform = "scale(1)";
        cat3.style.transform = "scale(1)";
        cat4.style.transform = "scale(1)";
        cancel.style.transform = "scale(1)";
      }
    },
  },
});

// Function to create and show the dimmer overlay
function showDimmer() {
  document.getElementById("dimmer").style.visibility = "visible";
  document.getElementById("dimmer").style.opacity = 1;
}
// Function to remove the dimmer overlay
function removeDimmer() {
  document.getElementById("dimmer").style.visibility = "hidden";
  document.getElementById("dimmer").style.opacity = 0;
}

function saveNote() {
  const notification_bar = document.getElementById("notification");
  notification_bar.style.visibility = "visible";
  notification_bar.style.opacity = "1";
  setTimeout(hideNotif, 3000);
}

function hideNotif() {
  const notification_bar = document.getElementById("notification");
  notification_bar.style.visibility = "hidden";
  notification_bar.style.opacity = "0";
}

// Add event listener for clicking on the draggable element
const feedback_content = document.getElementById("feedback-content");

feedback_content.addEventListener("click", function () {
  // Make the text content editable
  this.contentEditable = true;

  // Focus on the element to start editing
  this.focus();
});

// Add event listener for blur (when element loses focus)
feedback_content.addEventListener("blur", function () {
  // Disable editing by setting contentEditable back to false
  this.contentEditable = false;
});

function changeActionTagImage(src) {
  const actionTagImg = document.querySelector(".action-tag img");
  if (actionTagImg) {
    actionTagImg.src = src;
  }
}
