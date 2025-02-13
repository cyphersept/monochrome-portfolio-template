"use strict";

// !!!!! IMPORTANT !!!!!
// Make sure you initialize the project card info in contents.js!!

// Make ripples follow mouse in header
const headerBg = document.querySelector("header .frame");
headerBg.addEventListener("mousemove", (e) => followMouse(e), true);

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
fillProjects();

//         <section id="rps">
//             <h1>Projects —
//                 <a href="https://cyphersept.github.io/small-projects/rps" target="_blank" rel="noopener">Rock Paper Scissors</a></h1>
//             <h3>Best of three
//                 (<a>Source</a>)</h3>
//             <div>
//                 <iframe src="https://cyphersept.github.io/small-projects/rps" sandbox="allow-scripts" loading="lazy" style="--scalar: 0.8"></iframe>
//             </div>
//         </section>

//         <section id="calculate">
//             <h1>Projects —
//                 <a href="https://cyphersept.github.io/small-projects/calculator" target="_blank" rel="noopener">Calculator</a></h1>
//             <h3>Classic four function calculator, like you used to have
//                 (<a>Source</a>)</h3>
//             <div>
//                 <iframe src="https://cyphersept.github.io/small-projects/calculator" sandbox="allow-scripts" loading="lazy" style="--scalar: 0.8"></iframe>
//             </div>
//         </section>

//         <section id="doodle">
//             <h1>Projects —
//                 <a href="https://cyphersept.github.io/small-projects/etch" target="_blank" rel="noopener">Etch-a-Sketch</a></h1>
//             <h3>Digital doodling
//                 (<a>Source</a>)</h3>
//             <div>
//                 <iframe src="https://cyphersept.github.io/small-projects/etch" sandbox="allow-scripts" loading="lazy" style="--scalar: 0.8"></iframe>
//             </div>
//         </section>
