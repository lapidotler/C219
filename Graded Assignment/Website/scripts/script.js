// fullPage.js & Anime.js
document.addEventListener("DOMContentLoaded", function () {
    // Anime.js targets for Section 1
    const section1Elements = document.querySelectorAll('#section1 > *');

    // Anime.js targets for Section 2
    const section2Elements = document.querySelectorAll('#section2 > *');

    // Anime.js targets for Section 3
    const section3Elements = document.querySelectorAll('#section3 > *');

    // Set initial styles for the footer
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';

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
                footer.style.display = 'none';

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
                footer.style.display = 'none';

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
                footer.style.display = 'block';
                
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
                footer.style.display = 'none';

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
                footer.style.display = 'none';

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
                footer.style.display = 'none';

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

// Search Functionality
$(document).ready(function () {
    const books = [
        { title: "The Alchemist" },
        { title: "To Kill a Mockingbird" },
        { title: "1984" },
        { title: "The Great Gatsby" },
        { title: "Harry Potter and the Sorcerer's Stone" },
        { title: "The Catcher in the Rye" },
        { title: "Pride and Prejudice" },
        { title: "The Hobbit" }
    ];

    // Initialize search input
    $('.ui.search').search({
        source: books,
        minCharacters: 0,
        maxResults: 10,
        searchFields: ['title', 'author'],
        onSelect: function (result, response) {
            // Handle selection of a search result
            console.log(result);
            filterCards(result.title);
        },
        onSearchQuery: function (query) {
            // Handle search query input
            filterCards(query);
        }
    });

    // Function to filter cards based on the search query
    function filterCards(query) {
        let matchingCards = 0;

        $('.col').each(function () {
            const cardTitle = $(this).find('.card .card-title').text().trim().toLowerCase();
            if (cardTitle.includes(query.toLowerCase())) {
                $(this).show();
                $(this).css("display", "flex");
                matchingCards++;
            } else {
                $(this).hide();
                $(this).css("display", "none");
            }
        });

        // Adjust margin if there are no matching cards
        const searchSection = $('.search-section');
        if (matchingCards <= 1) {
            searchSection.css("margin-bottom", "50px");
            searchSection.css("margin-right", "40px");
            searchSection.css("margin-left", "20px");
        } else {
            // Reset margin if there are matching cards
            searchSection.css("margin-bottom", "0");
            searchSection.css("margin-right", "0");
        }
    }
});

// Reserve Books
function toggleReservation(button) {
    // Check the current reservation state
    const isReserved = button.classList.contains("btn-success");

    // Get the modal and message elements
    const modal = document.getElementById('reservationModal');
    const messageElement = document.getElementById('reservationMessage');

    // Get book details from the button's data attributes
    const bookTitle = button.dataset.title;
    const bookAuthor = button.dataset.author;

    if (isReserved) {
        // Unreserve: Change text to "Reserve" and button style to btn-outline-success
        button.textContent = "Reserve";
        button.classList.remove("btn-success");
        button.classList.add("btn-outline-success");

        // Set the unreserve message
        messageElement.textContent = `${bookTitle} is unreserved.`;
    } else {
        // Reserve: Change text to "Reserved" and button style to btn-success
        button.textContent = "Reserved";
        button.classList.remove("btn-outline-success");
        button.classList.add("btn-success");

        // Set the reserve message
        messageElement.textContent = `${bookTitle} by ${bookAuthor} is reserved. Thank you!`;
    }

    // Show the modal
    $(modal).modal('show');
}

// Tippy for Cards
tippy('.card', {
    content: "Wanna learn more? Click on the card image!",
    placement: "bottom",
    arrow: true,
    animation: 'scale',
    offset: [0, 25],
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
        ordering: false,
        pageLength: 7,

        createdRow: function (row, data, dataIndex) {
            $('td:eq(0)', row).css('font-weight', 'bold');
        }
    });
});
