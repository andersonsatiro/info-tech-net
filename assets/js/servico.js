const conteudo = {
    current: {},

    manutencao: {
        title: 'Manutenção de Computadores',
        description: 'Realizamos manutenção preventiva e corretiva em computadores, notebooks e periféricos, garantindo o bom funcionamento e a segurança dos seus equipamentos. Nosso serviço abrange desde a limpeza interna até a troca de peças e atualização de software.',
        type: 'manutencao',
        path_photos: 'manutencao/foto-'
    },

    desenvolvimento: {
        title: 'Desenvolvimento de site',
        description: 'Desenvolvemos sites responsivos e otimizados para mecanismos de busca. Nosso foco é criar páginas com design atraente, alta performance e posicionamento eficaz nos principais motores de busca.',
        type: 'desenvolvimento',
        path_photos: 'desenvolvimento/foto-'
    },

    redes: {
        title: 'Redes Lógicas',
        description: 'Projetamos e implementamos redes lógicas para empresas e residências, oferecendo soluções personalizadas de conectividade e segurança. Nossa equipe realiza a análise das necessidades específicas de cada cliente, criando infraestruturas eficientes e robustas.',
        type: 'redes',
        path_photos: 'redes/foto-'
    },
    
    eletricos: {
        title: 'Projetos elétricos',
        description: 'Elaboramos projetos elétricos para residências e empresas, atendendo às necessidades específicas de cada cliente com segurança e eficiência. Nossos projetos são desenvolvidos com base nas normas técnicas vigentes, garantindo a correta distribuição de energia e a prevenção de riscos.',
        type: 'eletricos',
        path_photos: 'eletricos/foto-'
    }
}

const preencherMainTitleSection = () => {
    const mainTitleSection = document.querySelector("#main-title-section")
    const h1 = mainTitleSection.querySelector('h1')
    const p = mainTitleSection.querySelector('p')
    
    if(h1 && p) {
        h1.textContent = conteudo.current.title
        p.textContent = conteudo.current.description
    }
}

const preencherRegistrosList = () => {
    const registrosList = document.querySelector("#registros-list")
    for(let i = 0; i < 6; i++){
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.src = `../assets/images/services/${conteudo.current.path_photos}${i}.jpg`
        img.alt = `Imagem ilustrativa do serviço de ${conteudo.current.title}`
        li.appendChild(img)
        registrosList.appendChild(li)
    }
}

const preencherConteudoPagina = (tipoServico) => {
    if(tipoServico === 'manutencao-computadores') {
        conteudo.current = conteudo.manutencao
    } else if(tipoServico === 'desenvolvimento-site'){
        conteudo.current = conteudo.desenvolvimento
    } else if(tipoServico === 'redes-logicas'){
        conteudo.current = conteudo.redes
    } else if(tipoServico === 'projetos-eletricos') {
        conteudo.current = conteudo.eletricos
    } else {
        window.location.href = '../index.html'
    }

    preencherMainTitleSection()
    preencherRegistrosList()
}

const urlParams = new URLSearchParams(window.location.search)

const tipoServico = urlParams.get('tipo')

if(tipoServico){
    preencherConteudoPagina(tipoServico)
}
