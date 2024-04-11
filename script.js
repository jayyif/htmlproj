const typed = new Typed('.typed', {
    strings: [
        'a Cat',
        'a professional eater',
        'a professional sleeper',
        'a professional groomer',
        'annoying'
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 2000
});

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');
    
    var hamburgerIcon = document.getElementById('hamburgerIcon');
    var closeIcon = document.getElementById('closeIcon');
    
    if (sidebar.classList.contains('sidebar-open')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}