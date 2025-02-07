function exibirPainel() {
    let painel = document.querySelector("#header-nav-drop");
    let botao = document.querySelector("#nav-drop-botao"); 

    if (painel.classList.contains("show")) {
        painel.classList.remove("show");
        botao.innerHTML = `<i class="ph ph-caret-double-down"></i>`;
        /* alert("contem show"); */
    } else {
        painel.classList.add("show");
        botao.innerHTML = `<i class="ph ph-caret-double-up"></i>`;
        /* alert("não contem show"); */
    }
}