const url = new URL(window.location.href)
const page = url.searchParams.get('page')

let content = error404()

const routes = {
    null: login,
    'dashboard': dashboard,
    'pedidos': orders,
    'categorias': categories,
    'produtos': products,
    'banners': banners,
}

if (routes[page]) {
    content = routes[page]()
}

document.getElementById('main').innerHTML = content