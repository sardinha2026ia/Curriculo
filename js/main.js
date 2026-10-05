const ICONS = {
  briefcase:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Crect x='3' y='7' width='18' height='13' rx='2'/%3E%3Cpath d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18'/%3E%3C/svg%3E\")",
  cap: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M2 9l10-5 10 5-10 5L2 9zM6 11.5V16c0 .8 2.7 2.5 6 2.5s6-1.7 6-2.5v-4.5M22 9v6'/%3E%3C/svg%3E\")",
  globe:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z'/%3E%3C/svg%3E\")",
  layers:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5'/%3E%3C/svg%3E\")",
  download:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M12 4v11M7 11l5 5 5-5M5 20h14'/%3E%3C/svg%3E\")",
  spark:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.2l1.7 5.5 5.5 1.7-5.5 1.7L12 16.6l-1.7-5.5L4.8 9.4l5.5-1.7L12 2.2zM18.6 14.2l.8 2.5 2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5z'/%3E%3C/svg%3E\")",
  code: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M8 8L4 12l4 4M16 8l4 4-4 4M13 6l-2 12'/%3E%3C/svg%3E\")",
  quote:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 24 24'%3E%3Cpath d='M9.2 18c-2.8 0-4.7-1.9-4.7-4.8 0-4.2 2.4-7.2 6.2-8.6l.8 1.7C9.2 7.4 8 8.8 7.8 10.4c.5-.3 1-.4 1.6-.4 1.9 0 3.2 1.3 3.2 3.2S11.3 16.4 9.4 16.4c.1.9-.1 1.6-.2 1.6zm9 0c-2.8 0-4.7-1.9-4.7-4.8 0-4.2 2.4-7.2 6.2-8.6l.8 1.7c-2.3 1.1-3.5 2.5-3.7 4.1.5-.3 1-.4 1.6-.4 1.9 0 3.2 1.3 3.2 3.2s-1.3 3.2-3.2 3.2c.1.9-.1 1.6-.2 1.6z'/%3E%3C/svg%3E\")",
  pin: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z'/%3E%3Ccircle cx='12' cy='10' r='2.2'/%3E%3C/svg%3E\")",
  mail: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Crect x='3' y='5' width='18' height='14' rx='2'/%3E%3Cpath d='M4 7l8 6 8-6'/%3E%3C/svg%3E\")",
  linkedin:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Cpath d='M8 10v7M8 7.5h.01M12 17v-4.2a2.2 2.2 0 0 1 4.2-.8V17M12 13.2V17'/%3E%3C/svg%3E\")",
  arrow:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M12 5v14M7 14l5 5 5-5'/%3E%3C/svg%3E\")",
  calendar:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Crect x='3.5' y='5' width='17' height='15' rx='2'/%3E%3Cpath d='M8 3.5V7M16 3.5V7M3.5 10h17'/%3E%3C/svg%3E\")",
  book: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M5 4.5h9a4 4 0 0 1 4 4V20H8.5A3.5 3.5 0 0 0 5 16.5zM5 4.5A3.5 3.5 0 0 0 8.5 8H18'/%3E%3C/svg%3E\")",
  bot: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Crect x='5' y='8' width='14' height='11' rx='3'/%3E%3Cpath d='M12 8V4'/%3E%3Ccircle cx='12' cy='4' r='1'/%3E%3Cpath d='M9 13h.01M15 13h.01M9 16h6'/%3E%3C/svg%3E\")",
  chart:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='M4 19h16M7 16v-4M12 16V8M17 16v-7'/%3E%3C/svg%3E\")",
};

function paintIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    const icon = ICONS[node.dataset.icon];
    if (icon) node.style.setProperty("--icon", icon);
  });
}

function setupGlow() {
  const glow = document.querySelector(".glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

function setupPhotoTilt() {
  const frame = document.querySelector(".photo-frame");
  if (!frame || window.matchMedia("(pointer: coarse)").matches) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  frame.addEventListener("pointermove", (event) => {
    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });

  frame.addEventListener("pointerleave", () => {
    frame.style.transform = "";
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function animateRing(ring) {
  const target = Number(ring.dataset.level) || 0;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    ring.style.setProperty("--p", String(target));
    return;
  }

  const start = performance.now();
  const duration = 1100;

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    ring.style.setProperty("--p", String(Math.round(target * eased)));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function setupRings() {
  const rings = document.querySelectorAll(".ring");
  if (!("IntersectionObserver" in window)) {
    rings.forEach(animateRing);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateRing(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  rings.forEach((ring) => observer.observe(ring));
}

function setupNav() {
  const bar = document.querySelector("#topbar");
  const links = [...document.querySelectorAll(".menu a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    bar.classList.toggle("is-scrolled", window.scrollY > 12);

    const marker = window.scrollY + 140;
    let current = null;
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });

    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        Boolean(current) && link.getAttribute("href") === `#${current.id}`
      );
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupPrint() {
  const button = document.querySelector("#printBtn");
  button?.addEventListener("click", () => window.print());
}

paintIcons();
document.querySelector("#year").textContent = String(new Date().getFullYear());
setupGlow();
setupPhotoTilt();
setupReveal();
setupRings();
setupNav();
setupPrint();
