const ticketType = document.getElementById('ticketType');
const ticketMenu = document.getElementById('ticketMenu');
const submitBtn = document.getElementById('submitBtn');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown-item'));

// Toggle dropdown on mouse click only
ticketType.addEventListener('click', () => {
  if (ticketMenu.style.display === 'block') {
    ticketMenu.style.display = 'none';
    ticketType.setAttribute("aria-expanded", "false")
  } else {
    ticketMenu.style.display = 'block';
    ticketType.setAttribute("aria-expanded", "true")
  }
});

// Select item on mouse click only
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    ticketType.innerText = e.target.innerText;
    ticketMenu.style.display = 'none';
    dropdownItems.forEach((item) => {
        item.setAttribute("aria-selected", "false")
    })
  });
  item.setAttribute("aria-selected", "true")
});

// Submit form on mouse click only
submitBtn.addEventListener('click', () => {
  alert('Your registration is complete. Please check your email.');
});