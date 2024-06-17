document.querySelectorAll(".toggle-view").forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const isFullscreen = card.classList.toggle("fullscreen-card");

        e.target.textContent = isFullscreen ? "Go back" : "View";
    });
});