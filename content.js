async function removeSidebar() {
    const sidebar = await document.querySelector('[data-testid=sidebarColumn]')
    sidebar.setAttribute('style', 'display:none')
  }

setTimeout(removeSidebar, 500)