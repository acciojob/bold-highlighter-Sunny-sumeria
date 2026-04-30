
function highlight() {
    // Select all strong elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through the NodeList and apply the green color
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)';
    });
}

/**
 * Function to revert all <strong> elements to normal
 * Sets the color back to black (rgb(0, 0, 0))
 */
function return_normal() {
    // Select all strong elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through the NodeList and apply the black color
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)';
    });
}