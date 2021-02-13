function banners() {
    const table = () => {
        getBanners()
        return `
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Banner</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="banners-list"></tbody>
            </table>
        `
    }
    const form = () => {
        return `
            <h3>Formulário</h3>
            <form id="form-banner" onsubmit="createBanner()" action="" method="POST">
                <input type="hidden" id="banner-id">

                <label for="banner" class="form-label mt-2">URL Banner</label>
                <input type="text" class="form-control" id="banner">

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
        <h1>Banners</h1>
        <hr>
        <div class="row" >
            <div class="col-md-12" id="column-list">
                <div class=" card card-body">
                    <div class="row">
                        <div class="col text-left">
                            <button class="btn btn-outline-primary mt-3 mb-3" id="btn-add">Novo Banner</button>
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
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Banner</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img width="100%" src="" id="modal-img">
                    </div>
                </div>
            </div>
        </div>
    `
}

function getBanners() {
    fetch(`${API_URL}banners.json`)
    .then(response => response.json())
    .then(response => {
        document.getElementById('banners-list').innerHTML = ''
        for (let id in response) {
            let banner = response[id]
            document.getElementById('banners-list').innerHTML += `
                <tr>
                    <td>
                        <a onclick="mostrarModal('${banner.image}')" href="#" data-toggle="modal" data-target="#exampleModal">
                            <img src="${banner.image}" height="30">
                        </a>
                    </td>
                    <td>${banner.description}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="deleteBanner('${id}')">Excluir</button>
                        <button class="btn btn-sm btn-warning" onclick="updateBanner('${id}')">Editar</button>
                    </td>    
                </tr>
            
            `
        }
    })
}

function createBanner() {
    event.preventDefault()
    const newBanner = {
        image: document.getElementById('banner').value,
        description: document.getElementById('description').value
    }
    fetch(`${API_URL}banners.json`, {
        method: 'POST',
        body: JSON.stringify(newBanner),
    })
    .then(response => response.json())
    .then(response => {
        document.getElementById('form-banner').reset()
        document.getElementById('btn-cancel').dispatchEvent(
            new Event('click')
        )
        getBanners()
        alertSuccess('Banner criado com sucesso!!!')
    })
}

function updateBanner(id) {
    event.preventDefault()
    fetch(`${API_URL}banners/${id}.json`, {

    })
    .then(response => {
        getBanners()
        alertSuccess('Banner alterado com sucesso!!!')
    })
}

function deleteBanner(id) {
    event.preventDefault()
    fetch(`${API_URL}banners/${id}.json`, {
        method: 'DELETE',
    })
    .then(response => {
        getBanners()
        alertSuccess('Banner deletado com sucesso!!!')
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

function mostrarModal(urlImage) {
    document.getElementById('modal-img').setAttribute('src', urlImage);
}