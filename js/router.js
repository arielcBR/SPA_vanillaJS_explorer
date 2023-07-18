export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

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
}
