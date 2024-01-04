document.addEventListener("DOMContentLoaded", function () {
    // Define targets
    const container = document.querySelector('.container');
    const profilePhoto = document.querySelector('.profile-photo');
    const info = document.querySelector('.info');

    // Staggering animations
    anime({
        targets: container,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 800,
        delay: anime.stagger(200),
    });

    // Controls animation without reversing
    anime({
        targets: profilePhoto,
        scale: [0, 1],
        rotate: '1turn',
        easing: 'easeInOutSine',
        duration: 1000,
    });

    // Number counter animation
    anime({
        targets: '.age',
        innerHTML: function(el) {
            return [0, el.getAttribute('data-age')];
        },
        easing: 'linear',
        round: 1,
        duration: 2000,
    });        

    // Timeline for additional animations
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 800,
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