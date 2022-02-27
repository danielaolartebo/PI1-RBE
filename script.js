// Daniela Olarte Borja || David Montaño Tamayo
const routes = {
    '/'             : Home
    , '/about'      : About
    , '/p/:id'      : PostShow
    , '/register'   : Register
    , '/login'      : Login
    , '/edit'       : Edit
};

const router = async () => {
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();

    let request = Utils.parseRequestURL()

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);