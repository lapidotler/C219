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
        paddingTop: '150px',
        anchors: ['home', 'stats', 'inventory'],
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

// Initialize DataTable
$(document).ready(function () {
    $("#inventory-table").DataTable({
        columns: [
            { title: "Title" },
            { title: "Author" },
            { title: "Genre" },
            { title: "Year" },
            { title: "Type" }
        ],

        responsive: true,
        ordering: false
    });   
});

// Initialize Chart.js
const labelColor = {
    plugins: {
        legend: {
            labels: {
                color: "#555",
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: "#555",
            }
        },
        x: {
            ticks: {
                color: "#555",
            }
        },
    },
    animation: {
        duration: 2000,
        easing: 'easeInOutQuart',
    }
};

// Create a Chart.js chart for students
var ctx = document.getElementById('genre-chart').getContext('2d');
var covidChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7', 'Dec 8', 'Dec 9', 'Dec 10', 'Dec 11', 'Dec 12', 'Dec 13', 'Dec 14'],
        datasets: [{
            label: 'Number of Cases',
            data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            hoverOffset: 10
        }]
    },

    options: labelColor
});