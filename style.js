document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get the values entered by the user
    const linkType = document.getElementById('linkType').value;
    const linkDescription = document.getElementById('link-description').value;
    const linkUrl = document.getElementById('linkUrl').value;

    // Create a new list item
    const newLinkItem = document.createElement('li');

    // Create a clickable anchor element
    const newLink = document.createElement('a');
    newLink.href = linkUrl.startsWith('http') ? linkUrl : 'https://' + linkUrl; // Ensure the URL starts with http or https
    newLink.textContent = `${linkDescription} - ${linkType}`; // Text for the link
    newLink.target = '_blank'; // Open link in a new tab

    // Append the clickable link to the list item
    newLinkItem.appendChild(newLink);

    // Add the new list item to the link list
    document.getElementById('linkList').appendChild(newLinkItem);

    // Optionally, clear the form fields after submission
    document.getElementById('reservationForm').reset();
});
