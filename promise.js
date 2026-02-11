const promises = [
  "I promise to love you more than yesterday 💕",
  "I promise to protect your smile always 🌸",
  "I promise to stand by you in every situation ❤️",
  "I promise to make your life beautiful like you 💖",
  "You are my forever… 💍"
];

let index = 0;
const text = document.getElementById("promiseText");

function openEnvelope() {
  document.getElementById("envelope").classList.add("open");
  document.getElementById("bgMusic").play();
}

function nextPromise(event) {
  event.stopPropagation();

  if (index < promises.length) {
    text.style.opacity = 0;
    setTimeout(() => {
      text.innerText = promises[index];
      text.style.opacity = 1;
      index++;
    }, 500);
  } else {
    document.getElementById("finalPopup").style.display = "flex";
  }
}

function sayYes() {
  alert("You just made me the happiest person alive 💖✨");
}
