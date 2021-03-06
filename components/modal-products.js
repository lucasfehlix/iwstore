function modalProducts(id) {

    console.log(id)
    fetch(`${API_URL}products/${id}.json`)
    .then(response => response.json())
    .then(response => {
            console.log(response)
            //document.getElementById('name-product').value = response.name
            //document.getElementById('description-product').value = response.description
            //document.getElementById('length-product').value = response.langth
            //document.getElementById('status-product').value = response.status
            //document.getElementById('price-product').value = response.price
            //document.getElementById('quantity-product').value = response.quantity
            //document.getElementById('photos-product').value = response.photos
            //document.getElementById('category-product').value = response.category
    })

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