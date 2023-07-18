const routes = {
    "/": "/pages/home.html",
    "/universe": "/pages/universe.html",
    "/explorer": "/pages/explorer.html",
    404: "/pages/404.html",
}

function route(event) {
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)

    handle()

}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]

    fetch(route)
        .then(data => data.text())
        .then(html => {
            const styleSheet = document.querySelector("#css")

            if (pathname == "/explorer") {
                styleSheet.href = "./css/explorer.css"
            }
            else if (pathname == "/universe") {
                styleSheet.href = "./css/universe.css"
            }
            else {
                styleSheet.href = "./css/home.css"
            }
            
            document.querySelector('#app').innerHTML = html
        })
}
