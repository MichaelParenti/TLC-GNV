document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".gallery-grid");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on load in case it's already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".scripture-content");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on load in case it's already in view
});
