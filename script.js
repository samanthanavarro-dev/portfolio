const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", () => links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
