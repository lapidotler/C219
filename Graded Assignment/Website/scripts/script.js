// fullPage.js & Anime.js
document.addEventListener("DOMContentLoaded", function () {
    // Anime.js targets for Section 1
    const section1Elements = document.querySelectorAll('#section1 > *');

    // Anime.js targets for Section 2
    const section2Elements = document.querySelectorAll('#section2 > *');

    // Anime.js targets for Section 3
    const section3Elements = document.querySelectorAll('#section3 > *');

    anime({
        targets: [section2Elements, section3Elements],
        translateY: [-30, 0],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(300),
    })

    // Initialize fullPage.js
    $('#fullpage').fullpage({
        paddingTop: '125px',
        anchors: ['home', 'progress', 'centres'],
        menu: '#menu',
        navigation: true,
        easingcss3: 'ease-out',
        scrollingSpeed: 800,
        afterLoad: function (origin, destination, direction) {
            if (destination.index === 0) {
                // Anime.js animation for Section 1
                anime({
                    targets: section1Elements,
                    translateY: [-30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            } else if (destination.index === 1) {
                // Anime.js animation for Section 2
                anime({
                    targets: section2Elements,
                    translateY: [-30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            } else if (destination.index === 2) {
                // Anime.js animation for Section 3
                anime({
                    targets: section3Elements,
                    translateY: [-30, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            }
        },

        onLeave: function (origin, destination, direction) {
            if (origin.index === 0) {
                // Reset opacity for Section 1 elements
                anime({
                    targets: section1Elements,
                    translateY: [0, -30],
                    opacity: [1, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            } else if (origin.index === 1) {
                // Reset opacity for Section 2 elements
                anime({
                    targets: section2Elements,
                    translateY: [0, -30],
                    opacity: [1, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            } else if (origin.index === 2) {
                // Reset opacity for Section 3 elements
                anime({
                    targets: section3Elements,
                    translateY: [0, -30],
                    opacity: [1, 0],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(200),
                });
            }
        }
    });
});
