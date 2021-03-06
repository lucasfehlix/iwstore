function navbar() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <a  style="color: #F80;" class="navbar-brand" href="?page=dashboard">iwStore</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="?page=pedidos">Pedidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?page=categorias">Categorias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?page=produtos">Produtos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?page=banners">Banners</a>
                    </li>
                </ul>
                <div class="form-inline my-2 my-lg-0">
                    <span class="text-white mr-3">
                        Bem vindo, <strong>Lucas</strong>
                    </span>
                    <a class="btn btn-outline-light my-2 my-sm-0" href="/" >Sair</a>
                </div>
            </div>
        </nav>
    `;
}