const ticketType = document.getElementById('ticketType');
const ticketMenu = document.getElementById('ticketMenu');
const submitBtn = document.getElementById('submitBtn');
const successModal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeBtn');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Dropdown logic: Fails to support Enter/Space keys
ticketType.addEventListener('click', () => {
  if (ticketMenu.style.display === 'block') {
    ticketMenu.style.display = 'none';
  } else {
    ticketMenu.style.display = 'block';
  }
});

// Select dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    ticketType.innerText = e.target.innerText;
    ticketMenu.style.display = 'none';
  });
});

// Submit logic: Fails to support Enter key, no form validation
submitBtn.addEventListener('click', () => {
  successModal.style.display = 'block';
  // Note: Focus is not shifted to the modal, screen reader users are lost
});

// Close modal logic: Fails to support Esc key
closeBtn.addEventListener('click', () => {
  successModal.style.display = 'none';
  // Note: Focus is not returned to the submit button
});