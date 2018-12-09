/*jshint esversion: 6 */
function modal() {
    let body = document.querySelector("body"),
        overlay = document.querySelector(".overlay"),
        detail = document.querySelector(".more");

    body.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("more") || target.classList.contains("description-btn")) {
            overlay.style.display = "block";
            detail.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        }
        if (target && target.classList.contains("popup-close")) {
            overlay.style.display = "none";
            detail.classList.remove("more-splash");
            document.body.style.overflow = "";
            
        }
    });
}
module.exports = modal;