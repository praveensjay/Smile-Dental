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
