function togglePost(headerElement) {
    // Find the parent article element
    const postCard = headerElement.parentElement;
    
    // Toggle the 'expanded' class which controls visibility in CSS
    postCard.classList.toggle('expanded');
    
    // Optional: If we want accordion style (only one open at a time),
    // we could close others here:
    /*
    document.querySelectorAll('.post-card').forEach(card => {
        if (card !== postCard) {
            card.classList.remove('expanded');
        }
    });
    */
}
