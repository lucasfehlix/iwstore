function modalConfirm() {
    return `
        <!-- Modal -->
        <div class="modal fade" id="modal-confirm" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Você tem certeza?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" id="id-confirm">
                        <div class="alert alert-danger">Essa ação é irreversivel</div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="confirmAction()">Sim, confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}