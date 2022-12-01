const items = [
    {
        id: 0,
        nome: 'Terno Costume APA Slim Cinza Chumbo New Uomo',
        img: './IMG/roupas/ternos/7.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno1.html',
        valor_I: '799,99',
        preco: '650',
        desconto: '18',
    },
    {
        id: 1,
        nome: 'Terno Slim Grafite',
        img: './IMG/roupas/ternos/6.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno2.html',
        valor_I: '299,99',
        desconto: '20',
        preco: '240',
    },
    {
        id: 2,
        nome: 'Terno Masculino Preto Liso',
        img: './IMG/roupas/ternos/8.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno3.html',
        valor_I: '399,99',
        desconto: '20',
        preco: '320',
    },
    {
        id: 3,
        nome: 'Terno Azul Marinho Listrado',
        img: './IMG/roupas/ternos/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno4.html',
        valor_I: '2137,99',
        desconto: '15',
        preco: '1800',
    },
    {
        id: 4,
        nome: 'Terno Alfaiataria Liso',
        img: './IMG/roupas/ternos/2.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno5.html',
        valor_I: '10.145,99',
        desconto: '5',
        preco: '9.600',
    },
    {
        id: 5,
        nome: 'Terno Valentim Masculino MV153',
        img: './IMG/roupas/ternos/3.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno6.html',
        valor_I: '1.399,99',
        desconto: '16',
        preco: '1.176',
    },
    {
        id: 6,
        nome: 'Terno Marsala Vinho Slim 2 Botões - Paletó + Calça',
        img: './IMG/roupas/ternos/4.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno7.html',
        valor_I: '0v',
        desconto: '0',
        preco: '300',
    },
    {
        id: 7,
        nome: 'Terno Costume Docthos Slim Terra Elastano',
        img: './IMG/roupas/ternos/5.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno8.html',
        valor_I: '0v',
        desconto: '0v',
        preco: '1000',
    },
    {
        id: 8,
        nome: 'Camisa Social Masculina Slim Manga Longa Azul Marinho',
        img: './IMG/roupas/camisa/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno.html',
        valor_I: '0v',
        preco: '160',
        desconto: '18',
    },
    {
        id: 9,
        nome: 'Camisa Social Confort em Linho com Manga Longa Marrom',
        img: './IMG/roupas/camisa/7.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/terno1.html',
        valor_I: '139,90',
        desconto: '15',
        preco: '118',
    },
    {
        id: 10,
        nome: 'Camisa Social Masculina Slim Azul Marinho - LEVOK',
        img: './IMG/roupas/camisa/8.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/terno2.html',
        valor_I: '199,99',
        desconto: '33',
        preco: '134',
    },
    {
        id: 11,
        nome: 'Camisa Social Masculina Preta Lisa',
        img: './IMG/roupas/camisa/2.jpg',
        quantidade: 0,
        a: '#',
        valor_I: '79,99',
        desconto: '37',
        preco: '50',
    },
    {
        id: 12,
        nome: 'Calça Social Masculina Reta Alfaiatada Preta',
        img: './IMG/roupas/calca/1.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/TERNOS-GERAL/terno.html',
        valor_I: '119,99',
        preco: '60',
        desconto: '50',
    },
    {
        id: 13,
        nome: 'Calça Social Moderna Elegante Trabalho Masculino Moda Verão',
        img: './IMG/roupas/calca/2.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/terno1.html',
        valor_I: '211,08',
        desconto: '25',
        preco: '160',
    },
    {
        id: 14,
        nome: 'Calça Social masculina Color Areia',
        img: './IMG/roupas/calca/3.jpg',
        quantidade: 0,
        a: './PAGINAS/HOME/PRODUTOS/TERNOS/terno2.html',
        valor_I: '0v',
        desconto: '0',
        preco: '250',
    },
    {
        id: 15,
        nome: 'Calça Social Masclina Em Microfibra',
        img: './IMG/roupas/calca/4.jpg',
        quantidade: 0,
        a: '#',
        valor_I: '99,99',
        desconto: '50',
        preco: '50',
    },
    

]

inicializarloja = () => {
    var containerProdutos = document.getElementById('produtos');

    items.map((val)=>{

        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <a href="`+val.a+`">
                <img src="`+val.img+`"/>
                <p class="nome-pdt">`+val.nome+`</p>

                <div class="preco-pdt">
                        <p class="valor_I">R$ `+val.valor_I+`</p>
                        <div class="preco-desc">
                            <p class="preco">R$ `+val.preco+`</p>
                            <p class="desconto">- `+val.desconto+`%</p>
                        </div>
                    </div>
            </a>
        </div>
        `;
        
    })
}

inicializarloja();

        items.map((val)=>{
            
            var sPreco = val.valor_I;
            var valor = document.querySelectorAll(".valor_I");
            var desc = document.querySelectorAll(".desconto");
            

            if(sPreco === "0v"){

                valor[6].style.display = "none";
                desc[6].style.display = "none"

                valor[7].style.display = "none";
                desc[7].style.display = "none";

                valor[8].style.display = "none";
                desc[8].style.display = "none";

                valor[14].style.display = "none";
                desc[14].style.display = "none"
            }

    })
