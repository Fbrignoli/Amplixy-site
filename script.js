const mobileMenu = document.querySelector("[data-mobile-menu]");
const revealElements = document.querySelectorAll(".reveal");
const navButtons = document.querySelectorAll("[data-nav-toggle]");
const mobileLinks = document.querySelectorAll("[data-nav-link]");

const toggleMenu = (forceClose = false) => {
  if (!mobileMenu) return;
  const isHidden = mobileMenu.classList.contains("hidden");
  if (forceClose && !isHidden) {
    mobileMenu.classList.add("hidden");
  } else if (!forceClose) {
    mobileMenu.classList.toggle("hidden");
  }
  const menuIsOpen = !mobileMenu.classList.contains("hidden");
  document.body.classList.toggle("overflow-hidden", menuIsOpen);
};

navButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    toggleMenu(false);
  })
);

mobileLinks.forEach((link) =>
  link.addEventListener("click", () => {
    toggleMenu(true);
  })
);

if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      toggleMenu(true);
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((el) => observer.observe(el));

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    form.classList.add("submitted");
    const button = form.querySelector("button");
    if (button) {
      const initialText = button.textContent;
      button.textContent = "Merci, on vous répond sous 24h";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = initialText;
        button.disabled = false;
      }, 3500);
    }
  });
}

