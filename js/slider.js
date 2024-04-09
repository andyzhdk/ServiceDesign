// Get the slider element and progress bar
const slider = document.getElementById("mySlider");
const progressBar = document.getElementById("progressBar");
const timeIndicator = document.getElementById("timeIndicator");

// Video duration in seconds (19 minutes and 25 seconds)
const videoDuration = 19 * 60 + 25;

// Define functions to be triggered at different percentages
function triggerFunctionAt25Percent() {
  document.getElementById("indicator-1").classList.add("highlight");
  document.getElementById("indicator-2").classList.remove("highlight");
  document.getElementById("indicator-3").classList.remove("highlight");

  document.getElementById("draggable-element").style.opacity = 1;
}

function triggerFunctionAt50Percent() {
  console.log("Triggering function at 50%");
  document.getElementById("indicator-2").classList.add("highlight");
  document.getElementById("indicator-1").classList.remove("highlight");
  document.getElementById("indicator-3").classList.remove("highlight");
}

function triggerFunctionAt75Percent() {
  console.log("Triggering function at 75%");
  document.getElementById("indicator-3").classList.add("highlight");
  document.getElementById("indicator-1").classList.remove("highlight");
  document.getElementById("indicator-2").classList.remove("highlight");
}

// Event listener for slider input change
slider.addEventListener("input", () => {
  const value = slider.value;
  const progressWidth = (value / 100) * slider.offsetWidth;
  progressBar.style.width = progressWidth + "px";

  const currentTime = (value / 100) * videoDuration;
  timeIndicator.textContent = formatTime(Math.round(currentTime));

  // Trigger functions based on slider value
  if (value >= 25 && value < 50) {
    triggerFunctionAt25Percent();
  } else if (value >= 50 && value < 75) {
    triggerFunctionAt50Percent();
  } else if (value >= 75) {
    triggerFunctionAt75Percent();
  }
});

// Define functions to format time in mm:ss format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  return `${minutes}:${formattedSeconds}`;
}
