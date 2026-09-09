document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement("div");
    overlay.className = "img-lightbox-overlay";
    overlay.innerHTML = '<button type="button" class="img-lightbox-close" aria-label="Close"><i class="fas fa-times"></i></button><img src="" alt="">';
    document.body.appendChild(overlay);

    var overlayImg = overlay.querySelector("img");
    var closeBtn = overlay.querySelector(".img-lightbox-close");

    function openLightbox(src, alt) {
        overlayImg.src = src;
        overlayImg.alt = alt || "";
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        overlay.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
        var img = e.target.closest(".js-lightbox-img");
        if (img) {
            var fullSrc = img.getAttribute("data-src") || img.getAttribute("src");
            openLightbox(fullSrc, img.getAttribute("alt"));
        }
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay || e.target === closeBtn || e.target.closest(".img-lightbox-close")) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("is-open")) {
            closeLightbox();
        }
    });
});
