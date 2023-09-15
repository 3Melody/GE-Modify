const dropdown = document.querySelector('.dropdown-aboutme');
const dropdownid = document.querySelector('#id-dropdown-aboutme');


dropdownid.addEventListener('click', () => {
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!dropdownid.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});