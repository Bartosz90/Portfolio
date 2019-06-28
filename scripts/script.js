// Navigation

const btns = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".main-section");
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
  // hamburger menu for landscape mobile screens
  [...document.querySelectorAll(".show-nav")].forEach(item => {
    item.classList.toggle("active");
  });
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
// hamburger menu for landscape mobile screens
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

// Project change

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
let activeProjectId = 0;
const changeProject = e => {
  const projects = document.querySelectorAll(".project");
  [...projects][activeProjectId].classList.remove("active");
  e.target.dataset.action === "next" ? activeProjectId++ : activeProjectId--;
  if (activeProjectId >= 1) {
    btnPrev.style.display = "block";
  } else {
    btnPrev.style.display = "none";
  }
  if (activeProjectId == [...projects].length - 1) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
  [...projects][activeProjectId].classList.add("active");
};
[...document.querySelectorAll(".change-project")].forEach(button => {
  button.addEventListener("click", changeProject);
});

//cube rotate
const rotateCube = e => {
  const cube = document.querySelector(".cube");
  console.log(e.target.dataset.rotate);
  cube.className = `${e.target.dataset.rotate}`;
};

[...document.querySelectorAll(".rotate-btns")].forEach(btn => {
  btn.addEventListener("click", rotateCube);
});
