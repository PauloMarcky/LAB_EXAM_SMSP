document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const sidebarMenu = document.getElementById("sidebarMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  function openSidebar() {
    sidebarMenu.classList.add("active-sidebar");
    menuOverlay.classList.add("active-overlay");
    document.body.style.overflow = "hidden"; // Disable scroll when menu is open
  }

  function closeSidebar() {
    sidebarMenu.classList.remove("active-sidebar");
    menuOverlay.classList.remove("active-overlay");
    document.body.style.overflow = "auto"; // Re-enable scroll
  }

  if (menuToggle) menuToggle.addEventListener("click", openSidebar);
  if (closeMenu) closeMenu.addEventListener("click", closeSidebar);
  if (menuOverlay) menuOverlay.addEventListener("click", closeSidebar);
});