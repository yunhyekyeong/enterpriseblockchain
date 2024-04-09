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



gsap.utils.defults = {
  ease: "none",
};



const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  }
});
introTl
  .to(".sc-intro", { "--opacity": 0.6 }, "a")
  .from(".sc-intro .group-desc .desc:nth-of-type(1)", { opacity: 0 }, "a")
  .to(".sc-intro .group-desc .desc:nth-of-type(1)", { opacity: 0 })
  .from(".sc-intro .group-desc .desc:nth-of-type(2)", { opacity: 0 })
  .to(".sc-intro .group-desc .desc:nth-of-type(2)", { opacity: 0 })
  .from(".sc-intro .group-desc .desc:nth-of-type(3)", { opacity: 0 })
  .to(".sc-intro .group-desc .desc:nth-of-type(3)", { opacity: 0 })
  .from(".sc-intro .group-desc .desc:nth-of-type(4)", { opacity: 0 })
  .to(".sc-intro .scroll-down", { opacity: 0 })
;

const showcaseTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-showcase",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  }
});
showcaseTl
  .to(".sc-showcase", { '--opacity': 1 }, "a")
  .to(".sc-showcase .group-desc", { opacity: 1 }, "a")

  .to(".sc-showcase .group-desc .desc:nth-of-type(1)",{ xPercent: 100},"b")
  .to(".sc-showcase .group-desc .desc:nth-of-type(3)",{ xPercent: -100 },"b")
  .to(".sc-showcase", { '--opacity': 0 }, "b")

  .to(".sc-showcase .group-desc", { opacity: 0 }, "c")

  .to(".sc-showcase .group-bg figure:nth-of-type(1)", { height: 0, })
  .to(".sc-showcase .group-bg figure:nth-of-type(2)", { height: 0, })
  
  .to(".sc-showcase", { '--opacity': 1 }, "d")
  .to(".sc-showcase .sticky > .desc", { opacity: 1 }, "d")
;



ScrollTrigger.create({
  trigger: ".sc-challenge",
  start: "-4% 0%",
  end: "0% 0%",
  onEnter: function () {
    document.querySelector(".header").classList.add("dark");
  },
  onLeaveBack: function () {
    document.querySelector(".header").classList.remove("dark");
  },
});



const proveTl01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-prove.pr01",
    start: "0% 70%",
    end: "100% 100%",
    scrub: 0,
  },
});
proveTl01
  .from(".sc-prove.pr01 .prove-bg .box", { width: 0 }, "a")
  .to(".sc-prove.pr01 .tit .txt:nth-of-type(1) span", { xPercent: -172 }, "a")
  .to(".sc-prove.pr01 .tit .txt:nth-of-type(3) span", { xPercent: 134 }, "a")
;



ScrollTrigger.create({
  trigger: `[data-theme="dark"]`,
  start: "0% 50%",
  end: "100% 50%",
  // markers: true,
  toggleClass: {
    targets: "body",
    className: "dark",
  },
});




const possibleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-possible",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh: true,
  }
});
possibleTl.to(".sc-possible .box", {
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  },
});



const featureTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-feature",
    start: "0% 90%",
    end: "100% 80%",
    scrub: 0,
  }
});
featureTl
  .from(".sc-feature .feature-item:nth-of-type(1)", { xPercent: "-50" }, "a")
  .from(".sc-feature .feature-item:nth-of-type(2)", { xPercent: "-50" }, "a")
  .from(".sc-feature .feature-item:nth-of-type(3)", { xPercent: "50" }, "a")
;




const featureListTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-feature",
    start: "0% 40%",
    end: "100% 30%",
    scrub: 0,
    onEnter: function () {
      document.querySelector(".sc-feature .feature-list").classList.add("blur");
    },
    onLeaveBack: function () {
      document.querySelector(".sc-feature .feature-list").classList.remove("blur");
    },
  }
});
featureListTl.from(".sc-feature .feature-tit", { opacity: 0 });


const serviceRowTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .row",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh: true
  }
});
serviceRowTl
  .set(".sc-service .row .ico-lock", { opacity: 0 }, "a")
  // .to(".sc-service .row .row-box", {
  //   x: function() {
  //     return -document.querySelector(".sc-service .row-box .tit").offsetWidth;
  //   }
  // })
  .to(".sc-service .row .row-box", {
    x: function() {
      return -document.querySelector(".sc-service .row-box .tit").offsetWidth + 100;
    }
  }, 'a')
  .to(".sc-service .row .card-item:nth-of-type(2)", { xPercent: -100, x: -40 }, "a")
  .to(".sc-service .row .card-item:nth-of-type(3)", { xPercent: -100*2, x: -40*2 }, "a")
  .to(".sc-service .row .card-item:nth-of-type(4)", { xPercent: -100*3, x: -40*3 }, "a")
  .to(".sc-service .row .ico-unlock", { opacity: 0 }, "a")
  .to(".sc-service .row .ico-lock", { opacity: 1 }, "a+=0.3")
  .to(".sc-service .row .ico-lock", { opacity: 0 }, "a+=1")
;



gsap.set(".sc-service .col", { autoAlpha: 0 });
const serviceColTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .col",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: function () {
      gsap.set(".sc-service .row", { autoAlpha: 0 });
      gsap.set(".sc-service .col", { autoAlpha: 1 });
    },
    onLeaveBack: function () {
      gsap.set(".sc-service .col", { autoAlpha: 0 });
      gsap.set(".sc-service .row", { autoAlpha: 1 });
    },
  }
});
serviceColTl.from(".sc-service .col .id-txt", { opacity: 0 });




gsap.set(".sc-service .any .id-box", { autoAlpha: 0 });
const serviceAnyTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .any",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: function () {
      gsap.set(".sc-service .col .id-box", { autoAlpha: 0 });
      gsap.set(".sc-service .any .id-box", { autoAlpha: 1 });
    },
    onLeaveBack: function () {
      gsap.set(".sc-service .col .id-box", { autoAlpha: 1 });
      gsap.set(".sc-service .any .id-box", { autoAlpha: 0 });
    },
  }
});
serviceAnyTl
  .to(".sc-service .any .card-item:nth-of-type(2)",{ xPercent: -110 },"a")
  .to(".sc-service .any .card-item:nth-of-type(3)",{ xPercent: -220 },"a")
  .to(".sc-service .any .card-item:nth-of-type(4)", { xPercent: -330 }, "a")
;



gsap.set(".sc-service .whoever", { autoAlpha: 0 });
const serviceWhoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .whoever",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: function () {
      gsap.set(".sc-service .any", { autoAlpha: 0 });
      gsap.set(".sc-service .whoever", { autoAlpha: 1 });
    },
    onLeaveBack: function () {
      gsap.set(".sc-service .any", { autoAlpha: 1 });
      gsap.set(".sc-service .whoever", { autoAlpha: 0 });
    },
  }
});
serviceWhoTl
  .from(".sc-service .whoever .whoever-tit", { opacity: 0 })
  .from(".sc-service .whoever .id-shadow", { opacity: 0 })
;




const proveTl02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-prove.pr02",
    start: "-100% 0%",
    end: "100% 100%",
    scrub: 0,
  },
});
proveTl02
  .from(".sc-prove.pr02 .prove-bg .box", { width: 0 }, "a")
  .to(".sc-prove.pr02 .tit .txt:nth-of-type(1) span", { xPercent: -114 }, "a")
  .to(".sc-prove.pr02 .tit .txt:nth-of-type(3) span", { xPercent: 120 }, "a")
;




const slideTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-slide",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh: true,
    toggleClass: {
      targets: ".sc-slide .arrow-box",
      className: "show",
    },
    onUpdate: function (self) {
      if (self.progress >= 0.5) {
        document.querySelector(".sc-slide .arrow-box .txt").textContent = "미래금융";
      } else {
        document.querySelector(".sc-slide .arrow-box .txt").textContent = "전통금융";
      }
    },
  }
});
slideTl.to(".sc-slide .inner .slide-box", {
  xPercent: -100,
  x: function () {
    return window.innerWidth - 100;
  },
});




const createrTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creater",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  }
});
createrTl
  .from(".sc-creater .desc", { opacity: 0 })
  .from(".sc-creater .scroll-down", { opacity: 0 })
  .to(".sc-creater .desc", { opacity: 0 }, "a")
  .to(".sc-creater .scroll-down", { opacity: 0 }, "a")
;




const progressTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-progress",
    start: "0% 0%",
    end: "100% 100%",
    invalidateOnRefresh: true,
    scrub: 0,
  },
});
progressTl.to(".sc-progress .box", {
  xPercent: -100,
  x: function () {
    return window.innerWidth;
  },
});




const groundTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-ground",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  },
});
groundTl.to(".sc-ground .banner", { bottom: 0 });



ScrollTrigger.create({
  trigger: ".footer",
  start: "-60px 100%",
  end: "100% 0",
  toggleClass: {
    targets: ".btn-top",
    className: "under"
  },
});




// 탑스크롤
document.querySelector(".btn-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentTop = window.scrollY;
  const showCase = document.querySelector(".sc-showcase").offsetTop;
  const btnTop = document.querySelector(".btn-top");
  btnTop.classList.toggle("active", currentTop > showCase && currentTop < lastScroll);
  lastScroll = currentTop;
});
