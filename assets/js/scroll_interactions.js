document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    if (navbar) {
        var updateNavbarShadow = function () {
            navbar.classList.toggle("navbar-scrolled", window.scrollY > 10);
        };
        updateNavbarShadow();
        window.addEventListener("scroll", updateNavbarShadow, { passive: true });
    }

    var revealTargets = document.querySelectorAll(".reveal-on-scroll");
    if (revealTargets.length && "IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(function (target) {
            observer.observe(target);
        });
    } else {
        revealTargets.forEach(function (target) {
            target.classList.add("is-visible");
        });
    }
});
