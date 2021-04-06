const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", (e) => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDOM();
});

prev.addEventListener("click", (e) => {
  currentActive--;
  if (currentActive === 1) {
    currentActive = 1;
  }
  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, i) => {
    if (i < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");
  var per = ((actives.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = per + "%";
  console.log(per);

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === circles.length) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
