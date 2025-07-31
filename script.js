document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 180, density: { enable: true, value_area: 500 } }, // Más corazones y más densidad
      color: { value: "#fff" },
      shape: {
        type: "image",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { 
          src: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/2764.png", // Imagen de corazón
          width: 32, 
          height: 32 
        }
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 16,
        random: true,
        anim: { enable: false, speed: 40, size_min: 8, sync: false }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: ["grab", "bubble"] },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.5 }
        },
        bubble: {
          distance: 180,
          size: 24,
          duration: 0.4,
          opacity: 1,
          speed: 3
        }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
});
