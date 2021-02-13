function products() {
    const table = () => {
        return `
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="products-list"></tbody>
            </table>
        `
    }
    const form = () => {
        return `
            <h3>Formulário</h3>
            <form id="form-product" action="" method="POST">
                <input type="hidden" id="product-id">

                <label for="product" class="form-label mt-2">Produto</label>
                <input type="text" class="form-control" id="product">

                <label for="description" class="form-label mt-2">Descrição</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            
                <br>

                <button class="btn btn-block btn-primary">Salvar</button>
                <button class="btn btn-block btn-link mt-1" type="button" id="btn-cancel">Cancelar</button>
            </form>
        `
    }
    return `
        ${navbar()}
        <h1>Produtos</h1>
        <hr>
        <div class="row" >
            <div class="col-md-12" id="column-list">
                <div class=" card card-body">
                    <div class="row">
                        <div class="col text-left">
                            <button class="btn btn-outline-primary mt-3 mb-3" id="btn-add">Novo Produto</button>
                        </div>
                        <div class="col text-right">
                            <p class="mt-3 mb-3">20 Produtos Cadastrados</p>
                        </div>
                    </div>
                    ${table()}
                </div>
            </div>
            <div class="col-md-4 d-none" id="column-form">
                <div class="card card-body">
                    ${form()}
                </div>
            </div>
        </div>

    `
}