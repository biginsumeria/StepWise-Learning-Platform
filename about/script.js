const navId = document.getElementById("nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");

// show menu

ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// close menu

CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});