let index = 0;

// This is the function being called using onclick
function changeColors() {
// Making array of colors
  let colors = ["red", "blue", "orange", "yellow", "green", "purple"]

//
  document.getElementsByTagName("body")[0].
  style.background = colors[index++]

  if(index > colors.length - 1)
  index = 0;
}