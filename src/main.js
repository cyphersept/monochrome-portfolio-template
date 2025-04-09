"use strict";

import "./style.css";
import Aos from "aos";
import { skillList, projectList } from "./contents";

Aos.init({ once: true, duration: 500 });

// Make ripples follow mouse in header
const headerBg = document.querySelector("header .frame");
headerBg.addEventListener("mousemove", (e) => followMouse(e), true);
document.addEventListener("scroll", toggleOnScroll);

function toggleOnScroll() {
  const nav = document.querySelector("nav");
  if (window.scrollY < 10) {
    nav.classList.remove("floating");
  } else nav.classList.add("floating");
}

// Causes element to follow mouse
function followMouse(e) {
  if (e.currentTarget !== headerBg) return;
  const ripple = document.querySelector(".ripple.follow");
  var rect = e.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Move the cursor to nearest point within the frame
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
}

function fillSkills() {
  const carousel = document.querySelector(".fish-carousel");
  const ul = document.createElement("ul");
  ul.classList = "group";

  // Generate skill list from template info
  for (const skill of skillList) {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  }

  // Append the 2 copies needed for carousel
  carousel.appendChild(ul.cloneNode(true));
  carousel.appendChild(ul);

  // Add an offset copy to display second row
  const row2 = carousel.cloneNode(true);
  carousel.classList.add("offset");
  carousel.parentNode.insertBefore(row2, carousel);
}

// Generate project card with template info
function fillProjects() {
  const template = document.querySelector(".project-template");

  for (const project of projectList) {
    const el = template.content.cloneNode(true).firstElementChild;
    const stackUl = el.querySelector("ul");
    const stackItems = project.stack.split(", ");
    el.querySelector("h2").textContent = project.name;
    el.querySelector(".live").href = project.live;
    el.querySelector(".repo").href = project.repo;
    el.querySelector("img").src = project.img;
    el.querySelector("p").textContent = project.desc;

    // Creates interactive stack list
    stackUl.textContent = "";
    for (let i = 0; i < stackItems.length; i++) {
      // Add additional list element if necessary
      if (!stackUl.children[i]) {
        const node = document.createElement("li");
        node.setAttribute("data-n", i + 1);
        stackUl.appendChild(node);
      }
      stackUl.children[i].textContent = stackItems[i];
    }

    if (project.type === "iframe") {
      const img = el.querySelector("img");
      const iframe = document.createElement("iframe");
      iframe.src = project.live;
      iframe.sandbox = "allow-scripts";
      iframe.loading = "lazy";
      iframe.style.setProperty("--scalar", "0.8");
      img.parentNode.insertBefore(iframe, img);
      img.parentNode.removeChild(img);
      el.classList.add("has-iframe");
    }

    document.getElementById("projects").appendChild(el);
  }
}
