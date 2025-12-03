// Interactividad avanzada para botones y vínculos
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        // Efecto de hover: escala, sombra y gradiente
        link.addEventListener("mouseenter", () => {
            link.style.transition = "all 0.25s cubic-bezier(.4,2,.6,1)";
            link.style.transform = "scale(1.13) rotate(-2deg)";
            link.style.boxShadow = "0 8px 24px 0 rgba(79,140,255,0.25)";
            link.style.background = "linear-gradient(90deg, #4f8cff 60%, #2d3e50 100%)";
            link.style.letterSpacing = "1.5px";
        });

        // Efecto de salida
        link.addEventListener("mouseleave", () => {
            link.style.transition = "all 0.18s cubic-bezier(.4,2,.6,1)";
            link.style.transform = "scale(1) rotate(0deg)";
            link.style.boxShadow = "none";
            link.style.background = "#4f8cff";
            link.style.letterSpacing = "0.5px";
        });

        // Animación de "pulse" al hacer clic
        link.addEventListener("mousedown", () => {
            link.style.transition = "transform 0.12s cubic-bezier(.4,2,.6,1)";
            link.style.transform = "scale(0.93) rotate(1deg)";
        });
        link.addEventListener("mouseup", () => {
            link.style.transform = "scale(1.13) rotate(-2deg)";
        });
        // Efecto de "ripple" visual
        link.addEventListener("click", function(e) {
            const ripple = document.createElement("span");
            ripple.className = "ripple-effect";
            ripple.style.position = "absolute";
            ripple.style.background = "rgba(255,255,255,0.5)";
            ripple.style.borderRadius = "50%";
            ripple.style.pointerEvents = "none";
            ripple.style.width = ripple.style.height = Math.max(link.offsetWidth, link.offsetHeight) + 'px';
            ripple.style.left = (e.offsetX - link.offsetWidth/2) + 'px';
            ripple.style.top = (e.offsetY - link.offsetHeight/2) + 'px';
            ripple.style.zIndex = 10;
            ripple.style.opacity = 1;
            ripple.style.transform = "scale(0)";
            ripple.style.transition = "transform 0.4s, opacity 0.6s";
            link.style.position = "relative";
            link.appendChild(ripple);
            setTimeout(() => {
                ripple.style.transform = "scale(2.5)";
                ripple.style.opacity = 0;
            }, 10);
            setTimeout(() => {
                if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
            }, 600);
        });
    });
});