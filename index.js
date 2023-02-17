function toggleMenu() {
  if (document.getElementById("menu-open").style.display === "block") {
    document.getElementById("menu-close").style.display = "block";
    document.getElementById("menu-open").style.display = "none";
    document.getElementById("mobile-menu").style.display = "block";
  } else {
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu-close").style.display = "none";
    document.getElementById("mobile-menu").style.display = "none";
  }
}
