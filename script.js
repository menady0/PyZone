document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let star = document.createElement("span");
  star.setAttribute("id", "stars");

  let size = Math.random() * 40;
  let transformValue = Math.random() * 360;

  star.style.left = e.offsetX + "px";
  star.style.top = e.offsetY + "px";
  star.style.fontSize = 10 + size + "px";
  star.style.transform = "rotate(" + transformValue + "deg)";

  body.appendChild(star);

  setTimeout(function () {
    star.remove();
  }, 800);
});


let span = document.querySelector(".text p span");
let texts = ["Learn", "Enjoy"];
let indexWord = 0;
let indexChar = 0;
let isDeleting = false;
const type = 150, remove = 75, hold = 1200;

const typing = () => {
  const currentWord = texts[indexWord];
  const currentChar = currentWord.substring(0, indexChar);
  span.textContent = currentChar;
  span.classList.add("stop-blink");

  if (!isDeleting && indexChar < currentWord.length) {
    indexChar++;
    setTimeout(typing, type);
  } else if (isDeleting && indexChar > 0) {
    indexChar--;
    setTimeout(typing, remove);
  } else {
    isDeleting = !isDeleting;
  span.classList.remove("stop-blink");
    indexWord = !isDeleting ? (indexWord + 1) % texts.length : indexWord;
    setTimeout(typing, hold);
  }
};
typing();


function scrollToSection(sectionId) {
    var targetElement = document.getElementById(sectionId);
    if (targetElement) {
        // Change the hash in the URL
        window.location.hash = sectionId;
        // Perform the smooth scroll
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for labels
document.querySelector('label[for="home0"]').onclick = function() { scrollToSection('home'); };
//document.querySelector('label[for="profile"]').onclick = function() { scrollToSection('targetSection'); };