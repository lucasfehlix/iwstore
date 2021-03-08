function modalProducts(response) {
    if (response) {
        document.getElementById('name-product').innerHTML = `<p><strong>Produto: </strong>${response.name}</p>`
        document.getElementById('description-product').innerHTML = `<p><strong>Descrição: </strong>${response.description}</p>`
        document.getElementById('length-product').innerHTML = `<p><strong>Tamanho: </strong>${response.length}</p>`
        document.getElementById('price-product').innerHTML = `<p><strong>Preço: </strong>${response.price}</p>`
        document.getElementById('quantity-product').innerHTML = `<p><strong>Quantidade: </strong>${response.quantity}</p>`
        document.getElementById('status-product').innerHTML = `<p><strong>Disponibilidade: </strong>${response.status}</p>`
        document.getElementById('category-product').innerHTML = `<p><strong>Categoria: </strong>${response.category}</p>`
    }
    const carousel = () => {
        return `
            <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../img/banners/bermudas.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../img/banners/camisas.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../img/banners/sapatenis.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        `
    }

    const modalBody = () => {
        return `
            ${carousel()}
            <div class="row mt-3">
                <div class="col" id="name-product"></div>
                <div class="col" id="description-product"></div>
            </div>
            <div class="row mt-3">
                <div class="col" id="length-product"></div>
                <div class="col" id="price-product"></div>
            </div>
            <div class="row mt-3">
                <div class="col" id="quantity-product"></div>
                <div class="col" id="status-product"></div>
            </div>
            <div class="row mt-3">
                <div class="col" id="category-product"></div>
            </div>
        `
    }

    return `
        <!-- Modal -->
        <div class="modal fade" id="modal-products" tabindex="-1" aria-labelledby="modal-label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-label">Detalhes do Produto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">${modalBody()}</div>
                </div>
            </div>
        </div>
    `
}