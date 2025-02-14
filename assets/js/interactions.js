document.addEventListener("DOMContentLoaded", function () {
    const btnTop = document.createElement("button");
    btnTop.id = "btn-top";
    btnTop.innerHTML = "&#8679;";
    document.body.appendChild(btnTop);

    btnTop.style.position = "fixed";
    btnTop.style.bottom = "20px";
    btnTop.style.right = "20px";
    btnTop.style.padding = "10px 15px";
    btnTop.style.fontSize = "20px";
    btnTop.style.border = "none";
    btnTop.style.borderRadius = "5px";
    btnTop.style.backgroundColor = "#007bff";
    btnTop.style.color = "white";
    btnTop.style.cursor = "pointer";
    btnTop.style.display = "none";
    btnTop.style.transition = "opacity 0.3s ease-in-out";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
            btnTop.style.opacity = "1";
        } else {
            btnTop.style.opacity = "0";
            setTimeout(() => btnTop.style.display = "none", 300);
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const headerLinks = document.querySelectorAll("#header-nav ul li a, #header-nav-drop ul li a");
    headerLinks.forEach(link => {
        link.style.transition = "color 0.3s ease-in-out";
        link.addEventListener("mouseover", () => {
            link.style.color = "#007bff";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "";
        });
    });
});
