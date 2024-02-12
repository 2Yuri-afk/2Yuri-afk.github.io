var scaleIncrement = 0.3;

var images = ["pics/3.jpeg", "pics/4.jpeg", "pics/5.jpeg", "pics/6.jpeg"]; // Array of image sources
var currentImageIndex = 0;

function makeYesButtonBigger() {
  var yesButton = document.getElementById("yes");
  var oneImage = document.getElementById("one");

  var currentPaddingRight = parseInt(
    window.getComputedStyle(yesButton).paddingRight,
    10
  );

  // Increase the right padding by 10 pixels each time
  var newPaddingRight = currentPaddingRight + 50;
  yesButton.style.paddingRight = newPaddingRight + "px";
  yesButton.style.paddingLeft = newPaddingRight + "px";

  currentImageIndex = (currentImageIndex + 1) % images.length;
  var newImage = images[currentImageIndex];
  oneImage.src = newImage;
}
