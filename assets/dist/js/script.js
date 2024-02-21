let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");
console.log(spans[0]);

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
};


console.log(section.offsetTop)
