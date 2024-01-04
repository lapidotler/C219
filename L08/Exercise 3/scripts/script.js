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
        delay: anime.stagger(200),
    })

    // Initialize fullPage.js
    $('#fullpage').fullpage({
        anchors: ['about-me', 'skills', 'contacts'],
        menu: '#menu',
        navigation: true,
        easingcss3: 'ease-out',
        scrollingSpeed: 800,
        afterLoad: function (origin, destination, direction) {
            if (destination.index === 0) {
                // Anime.js animation for Section 1
                // Define targets for Anime.js
                const container = document.querySelector('.container');
                const profilePhoto = document.querySelector('.profile-photo');
                const info = document.querySelector('.info');

                // Staggering animations for Section 1
                anime({
                    targets: container,
                    translateY: [-20, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: anime.stagger(200),
                });

                // Controls animation without reversing for Section 1
                anime({
                    targets: profilePhoto,
                    scale: [0, 1],
                    rotate: '1turn',
                    easing: 'easeInOutSine',
                    duration: 1000,
                });

                // Number counter animation for Section 1
                anime({
                    targets: '.age',
                    innerHTML: function (el) {
                        return [0, el.getAttribute('data-age')];
                    },
                    easing: 'linear',
                    round: 1,
                    duration: 2000,
                });

                // Timeline for additional animations for Section 1
                const timeline = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 800,
                });

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

    timeline
        .add({
            targets: '.name',
            translateY: [-30, 0],
            opacity: [0, 1],
        })
        .add({
            targets: '.job-title',
            translateY: [-30, 0],
            opacity: [0, 1],
        }, '-=400') // Start this animation 400ms before the previous one ends
        .add({
            targets: ['.age-title', '.age'],
            translateY: [-30, 0],
            opacity: [0, 1],
        }, '-=400') // Start this animation 400ms before the previous one ends
        .add({
            targets: '.description',
            translateY: [-30, 0],
            opacity: [0, 1],
        }, '-=400'); // Start this animation 400ms before the previous one ends
});