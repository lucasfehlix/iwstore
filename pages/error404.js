function error404() {
    return `
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <h1>Ops, a página que você procurava não existe!</h1>    
                <img height="400" src="img/404.svg">
                <br>
                <a href="/">Voltar pra página inicial</a>
            </div>
        </div>
    `
}