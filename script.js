document.addEventListener("DOMContentLoaded", () => {
  const fadeIn = (el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  };
  document.querySelectorAll(".projectitem, .werkervaring, #hobbiesitem").forEach(fadeIn);

  document.querySelectorAll(".button").forEach(btn => {
    btn.style.transition = "transform 0.3s ease, background 0.3s";
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
      btn.style.background = "#333";
      btn.style.color = "#fff";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
      btn.style.background = "";
      btn.style.color = "";
    });
  });

  document.querySelectorAll("img").forEach(img => {
    img.style.transition = "transform 0.4s ease";
    img.addEventListener("mouseover", () => img.style.transform = "scale(1.03)");
    img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  document.querySelectorAll("h1, h2, h3").forEach(title => {
    title.style.transition = "color 0.3s ease";
    title.addEventListener("mouseover", () => title.style.color = "gold");
    title.addEventListener("mouseout", () => title.style.color = "");
  });
});

let scrollIndicator = document.createElement("div");
scrollIndicator.style.position = "fixed";
scrollIndicator.style.top = "0";
scrollIndicator.style.left = "0";
scrollIndicator.style.height = "4px";
scrollIndicator.style.width = "0";
scrollIndicator.style.background = "linear-gradient(90deg, #ffd700, #ff9800)";
scrollIndicator.style.zIndex = "9999";
scrollIndicator.style.transition = "width 0.25s cubic-bezier(.4,2,.6,1)";
document.body.appendChild(scrollIndicator);
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrolled + "%";
});

const animatedElements = document.querySelectorAll(".projectitem, .werkervaring, #hobbiesitem, .fade-animate");

animatedElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)";
});

const animateOnScroll = () => {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("resize", animateOnScroll);
animateOnScroll();

const horizontalAnimatedElements = document.querySelectorAll("code");

horizontalAnimatedElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateX(-60px)";
  el.style.transition = "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)";
});

const animateHorizontalOnScroll = () => {
  horizontalAnimatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
      el.style.opacity = 1;
      el.style.transform = "translateX(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(-60px)";
    }
  });
};

window.addEventListener("scroll", animateHorizontalOnScroll);
window.addEventListener("resize", animateHorizontalOnScroll);
animateHorizontalOnScroll();

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  document.querySelector(".parallax-bg").style.backgroundPositionY = scrollPos * 0.5 + "px";
});


document.querySelectorAll("p").forEach(p => {
  p.style.transition = "text-shadow 0.4s cubic-bezier(.4,2,.6,1)";
  window.addEventListener("scroll", () => {
    const scrollPercent = (window.scrollY || document.documentElement.scrollTop) / ((document.documentElement.scrollHeight - window.innerHeight) || 1);
    const xOffset = Math.round(10 * scrollPercent); // max 10px right
    p.style.textShadow = `${xOffset}px 2px 8px rgba(30,30,30,0.25)`;
  });
});

