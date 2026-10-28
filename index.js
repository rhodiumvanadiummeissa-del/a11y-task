const ticketType = document.getElementById('ticketType');
const ticketMenu = document.getElementById('ticketMenu');
const submitBtn = document.getElementById('submitBtn');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Toggle dropdown on mouse click only
ticketType.addEventListener('click', () => {
  if (ticketMenu.style.display === 'block') {
    ticketMenu.style.display = 'none';
  } else {
    ticketMenu.style.display = 'block';
  }
});

// Select item on mouse click only
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    ticketType.innerText = e.target.innerText;
    ticketMenu.style.display = 'none';
  });
});

// Submit form on mouse click only
submitBtn.addEventListener('click', () => {
  alert('Your registration is complete. Please check your email.');
});