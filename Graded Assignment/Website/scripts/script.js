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

// Search function for Cards
$(document).ready(function () {
    const books = [
        { title: "The Alchemist", author: "Paulo Coelho" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" }
    ];

    $('.ui.selection.dropdown')
        .dropdown()
    ;

    // Initialize dropdown
    // $('.ui.dropdown').dropdown({
    //     onChange: function (value, text, $choice) {
    //         // Update the hidden input with the selected value
    //         $('input[name="searchType"]').val(value);

    //         // Focus on the search input based on the selected value
    //         if (value === 'title') {
    //             $('.ui.search').search('setting', 'searchFields', ['title']);
    //         } else if (value === 'author') {
    //             $('.ui.search').search('setting', 'searchFields', ['author']);
    //         }
    //     }
    // });

    // Initialize search input
    $('.ui.search').search({
        source: books, // Use the sample books data as the data source
        searchFields: ['title'], // Default to searching by title
        onSelect: function (result, response) {
            // Handle selection of a search result
            console.log(result);
        }
    });
});

// Initialize Chart.js
const labelColor = {
    plugins: {
        legend: {
            labels: {
                color: "#555",
            }
        },

    },
    scales: {
        y: {
            beginAtZero: true,
            max: 20,
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

// Create a Chart.js chart for books
var ctx = document.getElementById('genre-chart').getContext('2d');
var booksChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mystery', 'Fantasy', 'Romance', 'Science Fiction', 'Thriller', 'Non-Fiction'],
        datasets: [{
            label: 'Number of Books',
            data: [15, 8, 18, 11, 6, 13],
            backgroundColor: [
                'rgba(75, 192, 192, 0.75)',
                'rgba(255, 99, 132, 0.75)',
                'rgba(54, 162, 235, 0.75)',
                'rgba(105, 206, 86, 0.75)',
                'rgba(153, 102, 255, 0.75)',
                'rgba(255, 159, 64, 0.75)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(105, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],            
            borderWidth: 1,
            hoverOffset: 10
        }]
    },

    options: labelColor
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