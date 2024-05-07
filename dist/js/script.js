const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
tailwind.config = {
    theme: {
        container: {
            center: true,
            padding: '16px', 
        },
        extend: {
            screens: {
                '2xl': '1230px',
            }
        }  
    }
}