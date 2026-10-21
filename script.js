const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && navlinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navlinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  navlinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navlinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}
