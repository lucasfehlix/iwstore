function products() {
    const table = () => {
        getProducts()
        return `
            <div class="table-responsive">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody id="Products-list"></tbody>
                </table>
            </div>
        `
    }

    const form = () => {
        return `
            <h3>Formulário</h3>
            <form id="form-product" onsubmit="createProduct()" action="#" method="POST">
                <input type="hidden" id="product-id">
                
                <label for="product" class="form-label mt-2">Produto</label>
                <input type="text" class="form-control" id="product" required>
                
                <label for="description" class="form-label mt-2">Descrição</label>
                <textarea class="form-control" id="description" rows="3" required></textarea>
            
                <label for="length" class="form-label mt-2">Tamanho</label>
                <input type="text" class="form-control" id="length" required>
                
                <label for="status" class="form-label mt-2">Disponibilidade</label>
                <input type="text" class="form-control" id="status" required>
                
                <label for="price" class="form-label mt-2">Preço</label>
                <input type="text" class="form-control" id="price" required>
                
                <label for="quantity" class="form-label mt-2">Quantidade</label>
                <input type="number" class="form-control" id="quantity" required>
                
                <label for="photos" class="form-label mt-2">Fotos</label>
                <input type="text" class="form-control" id="photos" required>
                
                <label for="category" class="form-label mt-2">Categoria</label>
                <input type="text" class="form-control" id="category" required>
                
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
                        <div class="col text-center">
                            <div class="alert alert-success fade" role="alert" id="success"></div>
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
        ${modalConfirm()}
        ${modalProducts()}
    `
}

function getProducts() {
    fetch(`${API_URL}products.json`)
    .then(response => response.json())
    .then(response => {
        document.getElementById('Products-list').innerHTML = ''
        for (let id in response) {
            let product = response[id]
            document.getElementById('Products-list').innerHTML += `
                <tr>
                    <td>${product.name}</td>    
                    <td>${product.description}</td>
                    <td>
                        <button class="btn btn-sm btn-delete" onclick="deleteProduct('${id}')">
                            <span class="material-icons">delete</span>
                        </button>
                        <button class="btn btn-sm btn-edit" onclick="updateProduct('${id}')">
                            <span class="material-icons">create</span>
                        </button>
                        <button class="btn btn-sm btn-view" onclick="viewProduct('${id}')">
                            <span class="material-icons">visibility</span>
                        </button>
                    </td>    
                </tr>            
            `
        }
    })
}

function createProduct() {
    event.preventDefault()
    const newProduct = {
        name: document.getElementById('product').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        length: document.getElementById('length').value,
        status: document.getElementById('status').value,
        quantity: document.getElementById('quantity').value,
        photos: document.getElementById('photos').value,
        category: document.getElementById('category').value
    }

    if (document.getElementById('product-id').value !== '') {
        let id = document.getElementById('product-id').value;
        fetch(`${API_URL}products/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(newProduct),
        })
        .then(response => response.json())
        .then(response => {
            document.getElementById('form-product').reset()
            document.getElementById('btn-cancel').dispatchEvent(
                new Event('click')
            )
            getProducts()
            document.getElementById('product-id').value = ''
            alertSuccess('Produto editado com sucesso!!!')
        })
        return;
    }


    fetch(`${API_URL}products.json`, {
        method: 'POST',
        body: JSON.stringify(newProduct),
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('form-product').reset()
        document.getElementById('btn-cancel').dispatchEvent(
            new Event('click')
        )
        getProducts()
        alertSuccess('Produto criado com sucesso!!!')
    })
}

function updateProduct(id) {
    document.getElementById('btn-add').dispatchEvent(
        new Event('click')
    )
    document.getElementById('product-id').value = id;
    document.getElementById('product').value = name;
    document.getElementById('description').value = description;
}

function confirmAction() {
    let id = document.getElementById('id-confirm').value
    fetch(`${API_URL}products/${id}.json`, {
        method: 'DELETE',
    })
    .then(response => {
        getProducts()
        alertSuccess('Produto deletado com sucesso!!!')
    })
}

function deleteProduct(id) {
    document.getElementById('id-confirm').value = id;
    $('#modal-confirm').modal();
}

function viewProduct(id) {
    fetch(`${API_URL}products/${id}.json`)
    .then(response => response.json())
    .then(response => {
        modalProducts(response);
        $('#modal-products').modal();
    })
}

function alertSuccess(message) {
    document.getElementById('success').classList.remove("fade")
    document.getElementById('success').innerHTML = message
    setTimeout(
        function () { 
            document.getElementById('success').classList.add("fade")
        }, 5000
    )
}