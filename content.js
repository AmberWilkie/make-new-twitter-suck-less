async function removeSidebar() {
    const sidebar = await document.querySelector('[data-testid=sidebarColumn]')
    sidebar.setAttribute('style', 'display:none')
  }

function timedOutRemoval() {
    setTimeout(removeSidebar, 750)
}

timedOutRemoval();

setTimeout(
    () => {
        const links = document.querySelectorAll('[role=link]')
        links.forEach(link => link.addEventListener('click', timedOutRemoval))
    }
    , 750
)