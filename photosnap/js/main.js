// Mobile Navigation

const mainNav = document.getElementById('main-nav')
const mobNavToggle = document.getElementById('mob-nav-toggle')

mobNavToggle.onclick = toggleMobileMenu;
mobNavToggle.onkeydown = toggleMobileMenu;

function toggleMobileMenu(e) {
    if (e.target.matches('img')) {
        const img = e.target
        const status = img.dataset.status

        if (status === 'closed') {
            img.src = "assets/shared/mobile/close.svg"
            img.setAttribute('data-status', 'open')
            mainNav.style.display = "grid"
        } else if (status === 'open') {
            img.src = "assets/shared/mobile/menu.svg"
            img.setAttribute('data-status', 'closed')
            mainNav.style.display = "none"
        }
    }
}