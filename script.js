// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animate sections as they come into view

const sections = document.querySelectorAll(".section");

const options = {
  root: null, // viewport

  threshold: 0.1, // trigger when 10% of the section is visible

  rootMargin: "0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});