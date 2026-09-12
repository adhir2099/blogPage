document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const form = document.querySelector(".signup-form");
  const message = document.querySelector(".form-message");
  toggle?.addEventListener("click", () => { const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { menu.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); }));
  form?.addEventListener("submit", (event) => { event.preventDefault(); message.textContent = "You’re on the list. See you next Friday."; form.reset(); });
});