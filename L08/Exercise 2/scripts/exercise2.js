$(document).ready(function () {
    $('#fullpage').fullpage({
        // Set fullPage.js options here
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
        anchors: ['section1', 'section2', 'section3'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {
            // Anime.js animation after each section loads
            const sectionTitle = destination.item.querySelector('h1');
            anime({
                targets: sectionTitle,
                translateY: [-30, 0],
                opacity: [0, 1],
                duration: 1500,
                easing: 'easeOutExpo',
            });
        },
        onLeave: function (origin, destination, direction) {
            // Anime.js animation before leaving each section
            const sectionTitle = origin.item.querySelector('h1');
            anime({
                targets: sectionTitle,
                translateY: [0, 30],
                opacity: [1, 0],
                duration: 1500,
                easing: 'easeInExpo',
            });
        }
    });
});