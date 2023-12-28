//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav .navbar-nav .nav-item a');

window.onscroll = () => {
    // sticky header
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 100);

    // scroll sections
    sections.forEach(sec => {
        let top = window.scrollY;

        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('nav a[href="#' + id + '"]').classList.add('active');
        }

       
    });


};
