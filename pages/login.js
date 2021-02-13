function login() {
    const bannerLogin = () => {
        return `
            <div class="jumbotron bg-dark text-white">
                <h1>Store Admin</h1>
                <hr>
                <ul>
                    <li>Gerenciamento de Categorias</li>
                    <li>Gerenciamento de Publicidade</li>
                    <li>Gerenciamento de Produtos</li>
                    <li>Gerenciamento de Pedidos</li>
                </ul>
            </div>
        `
    }

    const formLogin = () => {
        return `
            <div class="card card-body">
                <form action="?page=dashboard" method="post">
                    <input class="form-control" placeholder="Email" type="email">
                    <input class="form-control mt-2" placeholder="Senha" type="password">
                    
                    <button class="btn btn-dark btn-block mt-2">
                        ENTRAR
                    </button>
                </form>
            </div>
        `
    }

    return `
        <section class="row mt-5">
            <div class="col-md-8">
                ${bannerLogin()}
                </div>
            <div class="col-md-4">
                ${formLogin()}
            </div>
        </section>
    `
}