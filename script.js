let span = document.querySelector(".context div p span.typing");
let texts = ["Learn", "Enjoy"];
let indexWord = 0;
let indexChar = 0;
let isDeleting = false;
const type = 150,
  remove = 75,
  hold = 1200;

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