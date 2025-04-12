"use strict";

import "./style.css";
import Aos from "aos";

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
