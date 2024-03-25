// Created Variable called index -> Set it to 0
let index = 0;

// Make function being called using onclick
function changeColors() {
// Making array of different colors
  let colors = ["red", "blue", "orange", "yellow", "green", "purple"]

// This is getting access to body Element

//  We only have one body inside HTML document, so we must use [0] to indicate the first body in document (Remember that arrays start at index 0!)
  document.getElementsByTagName("body")[0]

  //.style.background = set the background propery
  // colors[index++] is using our array of colors, will return next color in array in every click.
  .style.background = colors[index++]

  // if index is greater then the length of array of colors minus 1 (REMEMBER_ Arrays start at 0, so to get the last element of array (here it is purple), we must -1)
  if(index > colors.length - 1)
  // If the statement above is true, we will jump to the first element of the array, in this case that is [0], which is red
  index = 0;
}