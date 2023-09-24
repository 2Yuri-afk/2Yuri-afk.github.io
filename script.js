const image = document.getElementById("image");
const easynav = document.getElementById("easy-nav");
const navoptions = document.getElementById("nav-options");
const arrow = document.getElementById("arrow");

pbcpp.addEventListener("mouseover", (e) => {
  image.src = "pics/cpp.png";
});

pbpython.addEventListener("mouseover", (e) => {
  image.src = "pics/python.png";
});

pbjava.addEventListener("mouseover", (e) => {
  image.src = "pics/java.png";
});

pbkotlin.addEventListener("mouseover", (e) => {
  image.src = "pics/kotlin.png";
});

pbcpp.addEventListener("mouseleave", (e) => {
  image.src = "pics/coding.png";
});

pbpython.addEventListener("mouseleave", (e) => {
  image.src = "pics/coding.png";
});

pbjava.addEventListener("mouseleave", (e) => {
  image.src = "pics/coding.png";
});

pbkotlin.addEventListener("mouseleave", (e) => {
  image.src = "pics/coding.png";
});

let isRotated = false;

easynav.addEventListener("click", () => {
  navoptions.classList.toggle("pop");
  isRotated = !isRotated;

  if (isRotated) {
    arrow.style.transform = "rotate(-180deg)";
  } else {
    arrow.style.transform = "rotate(0deg)";
  }
});
