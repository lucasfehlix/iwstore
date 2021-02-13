            
function categories() {
    const table = () => {
        getCategories()
        return `
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="categories-list"></tbody>
            </table>
        `
    }

    const form = () => {
        return `
            <h3>Formulário</h3>
            <form id="form-category" onsubmit="createCategory()" action="#" method="POST">
                <input type="hidden" id="category-id">
                
                <label for="category" class="form-label mt-2">Categoria</label>
                <input type="text" class="form-control" id="category" required>
                
                <label for="description" class="form-label mt-2">Descrição</label>
                <textarea class="form-control" id="description" rows="3" required></textarea>
            
                <br>
                
                <button class="btn btn-block btn-primary">Salvar</button>
                <button class="btn btn-block btn-link mt-1" type="button" id="btn-cancel">Cancelar</button>
            </form>
        `
    }

    return `
        ${navbar()}
        <h1>Categorias</h1>
        <hr>
        <div class="row" >
            <div class="col-md-12" id="column-list">
                <div class=" card card-body">
                    <div class="row">
                        <div class="col text-left">
                            <button class="btn btn-outline-primary mt-3 mb-3" id="btn-add">Nova Categoria</button>
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
    `
}

function getCategories() {
    fetch(`${API_URL}categories.json`)
    .then(response => response.json())
    .then(response => {
        document.getElementById('categories-list').innerHTML = ''
        for (let id in response) {
            let category = response[id]
            document.getElementById('categories-list').innerHTML += `
                <tr>
                    <td>${category.name}</td>    
                    <td>${category.description}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="deleteCategory('${id}')">Excluir</button>
                        <button class="btn btn-sm btn-warning" onclick="updateCategory('${id}')">Editar</button>
                    </td>    
                </tr>
            
            `
        }
    })
}

function createCategory() {
    event.preventDefault()
    const newCategory = {
        name: document.getElementById('category').value,
        description: document.getElementById('description').value
    }
    fetch(`${API_URL}categories.json`, {
        method: 'POST',
        body: JSON.stringify(newCategory),
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('form-category').reset()
        document.getElementById('btn-cancel').dispatchEvent(
            new Event('click')
        )
        getCategories()
        alertSuccess('Cateroria criada com sucesso!!!')
    })
}

function updateCategory(id) {
    event.preventDefault()
    fetch(`${API_URL}categories/${id}.json`, {

    })
    .then(response => {
        getCategories()
        alertSuccess('Cateroria alterada com sucesso!!!')
    })
}

function deleteCategory(id) {
    event.preventDefault()
    fetch(`${API_URL}categories/${id}.json`, {
        method: 'DELETE',
    })
    .then(response => {
        getCategories()
        alertSuccess('Cateroria deletada com sucesso!!!')
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