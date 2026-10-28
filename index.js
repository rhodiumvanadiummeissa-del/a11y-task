const ticketType = document.getElementById('ticketType');
const ticketMenu = document.getElementById('ticketMenu');
const submitBtn = document.getElementById('submitBtn');
const successModal = document.getElementById('successModal');
const closeBtn = document.getElementById('closeBtn');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown-item'));

let activeIndex = -1;

function openMenu() {
    ticketMenu.style.display = 'block';
    ticketType.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    ticketMenu.style.display = 'none';
    ticketType.setAttribute("aria-expanded", "false");
    activeIndex = -1;
}

function selectOption(item){
    ticketType.textContent = item.textContent + ' ▾'

    dropdownItems.forEach(el => el.setAttribute('aria-selected', 'false'))
    item.setAttribute('aria-selected', 'true')

    closeMenu()

    ticketType.focus();
}

// Dropdown logic: Fails to support Enter/Space keys
ticketType.addEventListener('click', () => {
  if (ticketMenu.style.display === 'block') {
    closeMenu();
  } else {
    openMenu();
  }
});

ticketType.addEventListener('keydown', (e) => {
    const isOpen = ticketType.getAttribute('aria-expanded') === 'true';

    switch (e.key) {
        case 'Enter':
        case ' ':
            e.preventDefault();
            if(isOpen && activeIndex >= 0){
                selectOption(dropdownItems[activeIndex]);
            } else {
                if(isOpen){
                    closeMenu();
                } else {
                    openMenu();
                }
            }
            break;
        
        case 'ArrowDown':
            e.preventDefault();
            if(!isOpen) openMenu();

            activeIndex = (activeIndex + 1) % dropdownItems.length;
            dropdownItems[activeIndex].focus();
            break;

        case 'ArrowUp':
            e.preventDefault();
            if(!isOpen) openMenu();
            activeIndex = (activeIndex - 1 + dropdownItems.length) % dropdownItems.length;
            dropdownItems[activeIndex].focus();
            break;
    }
})

// Select dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    ticketType.innerText = e.target.innerText;
    ticketMenu.style.display = 'none';
  });
});

// Submit logic: Fails to support Enter key, no form validation
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  successModal.style.display = 'block';
  // Note: Focus is not shifted to the modal, screen reader users are lost
});

// Close modal logic: Fails to support Esc key
closeBtn.addEventListener('click', () => {
  successModal.style.display = 'none';
  // Note: Focus is not returned to the submit button
});