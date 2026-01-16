const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

     const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


const branchItems = document.querySelectorAll('.branch-item');
const branches = document.querySelectorAll('.doctor-branch');

branchItems.forEach(item => {
    item.addEventListener('click', () => {

        // Toggle active text
        branchItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Toggle doctor cards
        branches.forEach(branch => branch.classList.remove('active'));
        document.getElementById(item.dataset.branch).classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNavbar");
  const navCollapseEl = document.getElementById("mainNav");

  if (!navbar || !navCollapseEl) return;

  // Bootstrap Collapse instance (create if not exists)
  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });

  // When menu opens -> make navbar white
  navCollapseEl.addEventListener("show.bs.collapse", () => {
    navbar.classList.add("menu-open");
  });

  // When menu closes -> remove white background (unless scrolled state exists)
  navCollapseEl.addEventListener("hidden.bs.collapse", () => {
    navbar.classList.remove("menu-open");
  });

  // Close menu when clicking/tapping outside the navbar
  document.addEventListener("click", (e) => {
    const isOpen = navCollapseEl.classList.contains("show");
    if (!isOpen) return;

    const clickedInsideNavbar = navbar.contains(e.target);
    if (!clickedInsideNavbar) {
      bsCollapse.hide();
    }
  });

  // Optional: close menu after clicking a nav link (nice on mobile)
  navbar.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navCollapseEl.classList.contains("show")) bsCollapse.hide();
    });
  });
});



