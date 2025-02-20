const nav = document.querySelector("nav");
const targets = document.querySelectorAll("section");
const bemvind = document.getElementById("bem_vind");

var isBenVindOn = true;

//animação inicio
setInterval(() => {
  if(isBenVindOn){
    bemvind.textContent = String.fromCharCode(8194);
    isBenVindOn = false;
  }
  else{
    bemvind.textContent = "_";
    isBenVindOn = true;
  }
}, 500);

//Observador para menu mudar de cor
const sectionOptions = {
  threshold: 0,
  rootMargin: "-6.5% 0px -93% 0px",
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else if (entry.target.classList.contains("nav-bg-black-target")) {
      nav.classList.add("nav-bg-black");
      nav.classList.remove("nav-bg-white");
      nav.classList.remove("nav-bg-light");
      nav.classList.remove("nav-bg-dark");
    } else if (entry.target.classList.contains("nav-bg-dark-target")) {
      nav.classList.add("nav-bg-dark");
      nav.classList.remove("nav-bg-white");
      nav.classList.remove("nav-bg-light");
      nav.classList.remove("nav-bg-black");
    } else if (entry.target.classList.contains("nav-bg-light-target")) {
      nav.classList.add("nav-bg-light");
      nav.classList.remove("nav-bg-white");
      nav.classList.remove("nav-bg-black");
      nav.classList.remove("nav-bg-dark");
    } else if (entry.target.classList.contains("nav-bg-white-target")) {
      nav.classList.add("nav-bg-white");
      nav.classList.remove("nav-bg-black");
      nav.classList.remove("nav-bg-light");
      nav.classList.remove("nav-bg-dark");
    }
  });
},
sectionOptions);

targets.forEach((section) => {
  sectionObserver.observe(section);
});
