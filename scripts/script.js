// Navigation

const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll("section");
let animatedLis = document.querySelectorAll(".about ul li");
let isBubblesAnimationOn = false;
const animateDiv = document.querySelector(".animateDiv");
let isDivAnimationOn = false;
function sectionSwitch() {
  const animatedLis = document.querySelectorAll(".about ul li");
  if (isBubblesAnimationOn && isDivAnimationOn) {
    animatedLis.forEach(li => {
      li.classList.remove("animate");
    });
    animateDiv.classList.remove("animate");
    isBubblesAnimationOn = false;
    isDivAnimationOn = false;
  }

  sections.forEach(section => {
    section.classList.remove("active");
    btns.forEach(btn => {
      btn.classList.remove("active");
      this.classList.add("active");
      if (this.classList.contains("home-btn")) {
        document.querySelector(".home").classList.add("active");
      } else if (this.classList.contains("about-btn")) {
        document.querySelector(".about").classList.add("active");

        animateDiv.classList.add("animate");
        isDivAnimationOn = true;
        animatedLis.forEach(li => {
          li.classList.add("animate");
        });
        isBubblesAnimationOn = true;
      } else if (this.classList.contains("projects-btn")) {
        document.querySelector(".projects").classList.add("active");
      } else if (this.classList.contains("contact-btn")) {
        document.querySelector(".contact").classList.add("active");
      }
    });
  });
}
btns.forEach(btn => {
  btn.addEventListener("click", sectionSwitch);
});
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  [...document.querySelectorAll(".show-nav")].forEach(item => {
    item.classList.toggle("active");
  });
});
//Home page heading typing

const heading = `Hello, I'm Bartek. I love to code and design websites.`;
const h1 = document.querySelector(".home h1");
let counter = 0;
headingTyper = () => {
  const timer = setInterval(() => {
    h1.innerHTML += heading[counter];
    counter++;
    if (h1.innerHTML.length >= heading.length) {
      clearInterval(timer);
    }
  }, 100);
};
window.onload = headingTyper();

//Section about - bubbles animation

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const ul = document.querySelector(".about ul");
bubblesAnimation = () => {
  for (let i = 0; i < (window.innerWidth < 900 ? 12 : 40); i++) {
    const li = document.createElement("li");
    const liSize = getRandomInt(20, 5);
    li.style.top = `${getRandomInt(0, 100)}vh`;
    li.style.right = `-5vw`;
    li.style.animationDuration = `${
      window.innerWidth > 900 ? getRandomInt(7, 15) : getRandomInt(3, 7)
    }s`;
    li.style.animationDelay = `${
      window.innerWidth > 900 ? getRandomInt(0, 15) : getRandomInt(0, 2)
    }s`;
    li.style.width = `${liSize}px`;
    li.style.height = `${liSize}px`;
    ul.appendChild(li);
  }
};
window.onload = bubblesAnimation();
