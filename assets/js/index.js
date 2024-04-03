gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
  trigger: ".sc-intro",
  start: "11% 0%",
  end: "100% 100%",
  onEnter: function () {
    document.querySelector(".header").classList.add('show');
  },
  onLeaveBack: function () {
    document.querySelector(".header").classList.remove("show");
  },
});

const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  },
  ease: "none",
});
introTl.to(".sc-intro .group-video", { opacity: 0.6, position: "fixed" });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(1)", { opacity: 1, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(1)", { opacity: 0, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(2)", { opacity: 1, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(2)", { opacity: 0, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(3)", { opacity: 1, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(3)", { opacity: 0, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(4)", { opacity: 1, });
introTl.to(".sc-intro .group-discription .discription:nth-of-type(4)", { opacity: 0, });
introTl.to(".sc-intro .scroll-down", { opacity: 0, });

const showcaseTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-showcase",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  },
  ease: "none",
});
showcaseTl.to(".sc-intro .group-video", { position: "static" });
showcaseTl.to(".sc-intro .group-discription", { position: "static" });
showcaseTl.to(".sc-showcase .group-bg", { opacity: 0.6 }, "a");
showcaseTl.to(".sc-showcase .group-description", { opacity: 1 }, "a");
showcaseTl.to(".sc-showcase .group-description .discription:nth-of-type(1)",{ x: 368 },"b");
showcaseTl.to(".sc-showcase .group-description .discription:nth-of-type(3)",{ x: -368 },"b");
showcaseTl.to(".sc-showcase .group-bg", { opacity: 1 }, "c");
showcaseTl.to(".sc-showcase .group-description", { opacity: 0 }, "c");
showcaseTl.to(".sc-showcase .group-bg figure:nth-of-type(1)", { height: 0, });
showcaseTl.to(".sc-showcase .group-bg figure:nth-of-type(2)", { height: 0, });
showcaseTl.to(".sc-showcase .group-bg", { opacity: 0.6 }, "d");
showcaseTl.to(".sc-showcase .showcase-inner > .discription", { opacity: 1 }, "d");

const challengeTl01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-challenge.ch01",
    start: "-4% 0%",
    end: "0% 0%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
challengeTl01.to(".header", { color: "#000" }, "e");
challengeTl01.to(".header .logo a", { filter: "invert(0)" }, "e");
challengeTl01.to(".header .lang-icon svg path", { stroke: "#000" }, "e");

const proveTl01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-prove.pr01",
    start: "-40% 50%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
proveTl01.to(".sc-prove.pr01 .prove-bg .box:nth-of-type(1)", { width: 389 }, "f");
proveTl01.to(".sc-prove.pr01 .prove-bg .box:nth-of-type(2)", { width: 389 }, "f");
proveTl01.to(".sc-prove.pr01 .group-txt .prove-txt:nth-of-type(3) span", { x: 389 }, "f");
proveTl01.to(".sc-prove.pr01 .group-txt .prove-txt:nth-of-type(1) span", { x: -340 }, "f");

const galleryTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-gallery",
    start: "86% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 1,
  },
  ease: "none",
});
galleryTl.to(".header", { color: "#fff" }, "g");
galleryTl.to(".header .logo a", { filter: "invert(1)" }, "g");
galleryTl.to(".header .lang-icon svg path", { stroke: "#fff" }, "g");
galleryTl.to(".sc-gallery", { backgroundColor: "#000" }, "g");
galleryTl.to(".sc-possbility", { backgroundColor: "#000", color: "#fff" }, "g");

const possbilityTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-possbility",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    invalidateOnRefresh: true,
  },
  ease: "none",
});
const fullWidth = window.innerWidth
possbilityTl.to(".sc-possbility .group-possbility .possbility-box", {
  xPercent: -103,
  x: fullWidth + 100,
});

const featureTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-feature",
    start: "-50% 90%",
    end: "100% 70%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
featureTl.from(".sc-feature .feature-item:nth-of-type(1)", { x: "-50%" }, "h");
featureTl.from(".sc-feature .feature-item:nth-of-type(2)", { x: "-50%" }, "h");
featureTl.from(".sc-feature .feature-item:nth-of-type(3)", { x: "50%" }, "h");

const featureTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-feature .feature-list",
    start: "0% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 0,
    onEnter: function () {
      gsap.to(".sc-feature .feature-list", { className: "sc-feature feature-list blur",});
      gsap.to(".sc-feature .feature-tit", { opacity: 1 });
    },
    onEnterBack: function () {
      gsap.to(".sc-feature .feature-tit", { opacity: 0 });
      gsap.to(".sc-feature .feature-list.blur", { className: "sc-feature feature-list",});
    },
  },
  ease: "none",
});

const serviceTl01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .group-row",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
serviceTl01.set(".sc-service .group-row .lock-box .ico-unlock", { opacity: 1 });
serviceTl01.to(".sc-service .group-row .row-box",{x: -657,});
serviceTl01.to(".sc-service .group-row .row-box", { x: -657 + 100 }, 'i');
serviceTl01.to(".sc-service .group-row .card-item:nth-of-type(2)",{ xPercent: -110 },"i");
serviceTl01.to(".sc-service .group-row .card-item:nth-of-type(3)",{ xPercent: -220 },"i");
serviceTl01.to(".sc-service .group-row .card-item:nth-of-type(4)",{ xPercent: -330 },"i");
serviceTl01.to(".sc-service .group-row .lock-box .ico-unlock", { opacity: 0 }, "i");
serviceTl01.to(".sc-service .group-row .lock-box .ico-lock",{ opacity: 1 },"i+=0.3");
serviceTl01.to(".sc-service .group-row .lock-box .ico-lock",{ opacity: 0 },"i+=1");

const serviceTl02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .group-col",
    start: "0% 0%",
    end: "100% 100%",
    markers: true,
    scrub: 0,
    onEnter: function () {
      gsap.to(".sc-service .group-row", { opacity: 0 },'j');
      gsap.to(".sc-service .group-col", { opacity: 1 },'j');
    },
    onLeaveBack: function () {
      gsap.to(".sc-service .group-row", { opacity: 1 },'k');
      gsap.to(".sc-service .group-col", { opacity: 0 },'k');
    }
  },
  ease: "none",
});
serviceTl02.to(".sc-service .id-txt", { opacity: 1 });


const serviceTl03 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .group-any",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    onEnter: function () {
      gsap.to(".sc-service .group-col .id-box", { opacity: 0, duration:0.1 }, "l");
      gsap.to(".sc-service .group-any .id-box", { opacity: 1, duration:0.1 }, "l");
    },
    onLeaveBack: function () {
      gsap.to(".sc-service .group-col .id-box", { opacity: 1 }, "m");
      gsap.to(".sc-service .group-any .id-box", { opacity: 0 }, "m");
    },
  },
  ease: "none",
});
serviceTl03.to(".sc-service .group-any .card-item:nth-of-type(2)",{ xPercent: -110 },"n");
serviceTl03.to(".sc-service .group-any .card-item:nth-of-type(3)",{ xPercent: -220 },"n");
serviceTl03.to(".sc-service .group-any .card-item:nth-of-type(4)", { xPercent: -330 }, "n");

const serviceTl04 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .group-whoever",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    onEnter: function () {
      gsap.to(".sc-service .group-any", { opacity: 0 }, "o");
      gsap.to(".sc-service .group-whoever", { opacity: 1 }, "o");
    },
    onLeaveBack: function () {
      gsap.to(".sc-service .group-any", { opacity: 1 }, "p");
      gsap.to(".sc-service .group-whoever", { opacity: 0 }, "p");
    },
  },
  ease: "none",
});
serviceTl04.to(".sc-service .group-whoever .whoever-tit",{ opacity: 1 });
serviceTl04.to(".sc-service .group-whoever .id-shadow", { opacity: 1 });

const challengeTl02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-challenge.ch02",
    start: "-40% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    onEnter: function () {
      gsap.to(".sc-service .group-whoever", { backgroundColor: "#fff" });
      gsap.to(".sc-challenge.ch02", { backgroundColor: "#fff", color: "#000" });
    },
    onLeaveBack: function () {
      gsap.to(".sc-service .group-whoever", { backgroundColor: "#000" });
      gsap.to(".sc-challenge.ch02", { backgroundColor: "#000", color: "#000" });
    },
  },
  ease: "none",
});
challengeTl02.to(".header", { color: "#000" }, "q");
challengeTl02.to(".header .logo a", { filter: "invert(0)" }, "q");
challengeTl02.to(".header .lang-icon svg path", { stroke: "#000" }, "q");

const proveTl02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-prove.pr02",
    start: "-100% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
proveTl02.to(".sc-prove.pr02 .prove-bg .box:nth-of-type(1)", { width: 389 }, "r");
proveTl02.to(".sc-prove.pr02 .prove-bg .box:nth-of-type(2)", { width: 389 }, "r");
proveTl02.to(".sc-prove.pr02 .group-txt .prove-txt:nth-of-type(1) span", { x: -540 }, "r");
proveTl02.to(".sc-prove.pr02 .group-txt .prove-txt:nth-of-type(3) span", { x: 530 }, "r");


const slideTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-slide",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    invalidateOnRefresh: true,
    onEnter: function () {
      gsap.to(".sc-slide .group-down", { opacity: 1 }, "s");
    },
    onLeave: function () {
      gsap.to(".sc-slide .group-down", { opacity: 0 });
    },
    onEnterBack: function () {
      gsap.to(".sc-slide .group-down", { opacity: 1 });
    },
    onLeaveBack: function () {
      gsap.to(".sc-slide .group-down", { opacity: 0 });
    },
  },
  ease: "none",
});
slideTl.to(".sc-slide .slide-inner .slide-box", { x: -811 }, 's');
slideTl.to(".sc-slide .group-down .down-txt:nth-child(1)", { opacity: 0 },'s');
slideTl.to(".sc-slide .group-down .down-txt:nth-child(2)", { opacity: 1 }, 's');

const createrTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creater",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
});
createrTl.to('.sc-creater .creater-desc', { opacity: 1 });
createrTl.to(".sc-creater .scroll-down", { opacity: 1 });
createrTl.to('.sc-creater .creater-desc', { opacity: 0 },'t');
createrTl.to(".sc-creater .scroll-down", { display: 'none' },'t');

const progressTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-progress",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  ease: "none",
})
progressTl.to(".sc-progress .progress-inner .progress-box", { x: -1159 });

const groundTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-ground",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    ToggleEvent: {}
  },
  ease: "none",
});
groundTl.to(".banner-join", { bottom: 0 });

ScrollTrigger.create({
  trigger: ".footer",
  start: "-60px 100%",
  end: "100% 0",
  // markers: true,
  toggleClass: { targets: ".btn-top", className: "under" },
});

// 탑스크롤
document.querySelector(".btn-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentTop = window.scrollY;
  const showTop = document.querySelector(".sc-showcase").offsetTop;
  const btnTop = document.querySelector(".btn-top");
  console.log("currentTop:", currentTop);
  console.log("showTop:", showTop);
  btnTop.classList.toggle("active", currentTop > showTop && currentTop < lastScroll);
  lastScroll = currentTop;
  console.log("lastScroll:", lastScroll);
});
