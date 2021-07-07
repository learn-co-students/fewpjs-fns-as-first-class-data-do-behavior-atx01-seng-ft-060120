/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  let hour = time.split(':');
  let result = parseInt(hour, 12);

  if (result < 12){
    return "Good Morning";
  } else if (result < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.querySelector("h1#greeting").innerText = message;
}
