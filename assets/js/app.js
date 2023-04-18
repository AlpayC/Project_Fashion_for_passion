var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 80) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
        nav.style.borderBottom = 'transparent';
        nav.style.height = '';
    } else {
        nav.style.backgroundColor = '#272422'; 
        nav.style.borderBottom = '2px solid #2D2B29';
        nav.style.height = '80px';
    }
});