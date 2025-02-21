const elements = document.querySelectorAll('.services-list-item').forEach(service => {
    service.addEventListener('click', () => {
        const baseUrl = window.location.origin
        window.location.href = `${baseUrl}/info-tech-net/pages/servico.html?tipo=${service.getAttribute('id')}`
    })
})

function exibirPainel() {
    let painel = document.querySelector("#header-nav-drop");
    let botao = document.querySelector("#nav-drop-botao"); 

    if (painel.classList.contains("show")) {
        painel.classList.remove("show");
        botao.innerHTML = `<i class="ph ph-caret-double-down"></i>`;
    } else {
        painel.classList.add("show");
        botao.innerHTML = `<i class="ph ph-caret-double-up"></i>`;
    }
}