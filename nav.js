const navToggle = document.getElementById("nav-toggle");
      const mainNav = document.getElementById("main-nav");

      navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("hide");
      });