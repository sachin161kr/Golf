var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
});

// var h4footerall = document.querySelectorAll("#footer h4");

// h4footerall.forEach(function (e) {
//   e.addEventListener("mouseenter", function () {
//     cursor.style.scale = 3;
//     cursor.style.border = "1px solid white";
//     cursor.style.backgroundColor = "transparent";
//   });

//   e.addEventListener("mouseleave", function () {
//     cursor.style.scale = 1;
//     cursor.style.border = "0px solid #95c11e";
//     cursor.style.backgroundColor = "transparent";
//   });
// });

h4all.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });

  e.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "transparent";
  });
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    scrub: 2,
    start: "top 60%",
    end: "top 55%",
  },
});

// gsap.from(".card", {
//   scale: 0.8,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     scrub: 1,
//     start: "top 70%",
//     end: "top 65%",
//   },
// });

gsap.from("#colon-1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 60%",
    end: "top 47%",
    scrub: 1,
  },
});

gsap.from("#colon-2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 1,
  },
});

gsap.from("#page4 h1", {
  y: -55,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 1,
  },
});
