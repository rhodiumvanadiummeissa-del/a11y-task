const ticketType = document.getElementById('ticketType');
const ticketMenu = document.getElementById('ticketMenu');
const submitBtn = document.getElementById('submitBtn');
const successModal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeBtn');
const dropdownItems = document.querySelectorAll('.dropdown-item');

ticketType.addEventListener('click', () => {
    if (ticketMenu.style.display === 'block') {
        ticketMenu.style.display = 'none';
    } else {
        ticketMenu.style.display = 'block';
    }
});

dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        ticketType.innerText = e.target.innerText;
        ticketMenu.style.display = 'none';
    });
});

submitBtn.addEventListener('click', () => {
    successModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});