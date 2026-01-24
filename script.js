// dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// mobile nav toggling
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function toggleMobile() {
  const open = mobileNav.classList.toggle("open");
  mobileNav.setAttribute("aria-hidden", !open);
  menuBtn.setAttribute("aria-expanded", open);
}
function closeMobile() {
  mobileNav.classList.remove("open");
  mobileNav.setAttribute("aria-hidden", true);
  menuBtn.setAttribute("aria-expanded", false);
}

menuBtn.addEventListener("click", toggleMobile);

// close mobile nav when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMobile();
  }
});

// optional: shrink header on scroll
const headerTop = document.querySelector(".header-top");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const sc = window.scrollY;
  if (sc > 60) {
    headerTop.style.padding = "6px 0";
  } else {
    headerTop.style.padding = "";
  }
  lastScroll = sc;
});