

document.addEventListener('DOMContentLoaded', init, false);
function init() {

    let grid = document.querySelector('section.grid');
    let userBtn = document.querySelector('.userBtn');
    let editProducts = document.querySelector('.editProducts');
    let flagUser;
    let formProductsDecks = document.querySelector('.form-products-decks');
    let btnEditProductsDecks = document.querySelector('.btnEditProductsDecks');
    let btnCloseForm = document.querySelector('.btnCloseForm');
    let productSkateboards = document.querySelector('.product-skateboards');
    let filters = document.querySelector('section.filters');
    let btnAddSkate = document.querySelector('.footer-newsletter .btnAddSkate');


    // Eventos
    filters.addEventListener('input', filterEvents, false);
    btnAddSkate.addEventListener('click', criarSkate, false);

    // Evento de pesquisa por Skateboard decks
    function filterEvents(e) {
        if (e.target.id === 'searchInput') {
            let pesquisaTxt = e.target;
            filtrarPorMarca(pesquisaTxt.value.toUpperCase());
        }

        if (e.target.className === 'product-price-select') {

            console.log('yeahhh zeeee');
            console.log(e.target.value);
            priceFilter(e.target.value);
        }

        if (e.target.className === 'color-select') {
            colorFilter(e.target.value);
        }

    }

    function filtrarPorMarca(texto) {
        let skateboardDeckPesquisa = productsArray.filter(skateboards => skateboards.marca.search(texto) > -1);
        mostrarDecks(skateboardDeckPesquisa);
    }


    function priceFilter(priceRange) {


        if (priceRange === 'zero-vinte') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 0 && skateboards.priceDiscount <= 20);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'vinte-quarenta') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 20 && skateboards.priceDiscount <= 40);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'quarenta-sessenta') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 40 && skateboards.priceDiscount <= 60);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'sessenta-oitenta') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 60 && skateboards.priceDiscount <= 80);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'oitenta-cem') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 80 && skateboards.priceDiscount <= 100);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'cem-centoevinte') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 100 && skateboards.priceDiscount <= 120);
            mostrarDecks(skateboardDeckPrice);
        }

        if (priceRange === 'centoevinte-centoequarenta') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 120 && skateboards.priceDiscount <= 140);
            mostrarDecks(skateboardDeckPrice);
        }
        if (priceRange === 'centoequarenta-mais') {
            let skateboardDeckPrice = productsArray.filter(skateboards => skateboards.priceDiscount > 140);
            mostrarDecks(skateboardDeckPrice);
        }
        if (priceRange === '') {
            mostrarDecks(productsArray);
        }
    }


    function colorFilter(color) {

        console.log(color)
        if (color === 'laranja') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'branco') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'preto') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'verde') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'rosa') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'vermelho') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'amarelo') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'cinza') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === 'castanho') {
            let skateboardDeckColor = productsArray.filter(skateboards => skateboards.cor === color);
            mostrarDecks(skateboardDeckColor);
        }

        if (color === '') {
            mostrarDecks(productsArray);
        }
    }


    function criarSkate(e) {
        e.preventDefault();

        let id = new Date().getTime();

        let skateboard = new Skate(
            id,
            marca.value,
            desc.value,
            price.value,
            imgUrl.value,
        );

        productsArray.push(skateboard);
        mostrarDecks(productsArray);

        decksForm.reset();


    }

    // variaveis do formulario
    let imgUrl = document.getElementById('imgUrl');
    let marca = document.getElementById('marca');
    let desc = document.getElementById('desc');
    let price = document.getElementById('price');




    // Code for user icon click to show option of products to edit

    userBtn.addEventListener('click', editProductsUser, false);

    function editProductsUser() {
        if (!flagUser) {
            editProducts.setAttribute("style", "display:block;");
            flagUser = true;
        } else if (flagUser) {
            editProducts.setAttribute("style", "display:none;");
            flagUser = false;
        }
    }

    // Código para botão back to top
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });


    // Código Painel Condições

    let beforeNavBarRight = document.querySelector('.before-nav-bar-right');
    let mostrarCondEnvio = document.querySelector('.mostrarCondEnvio');
    let closeBtnCondPainel = document.getElementById('condPainelCloseBtn');
    let htmlDocument = document.querySelector('html');

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            mostrarCondEnvio.setAttribute("style", "display:none;");
            mapContainer.setAttribute("style", "visibility:hidden;");
            htmlDocument.classList.remove('noScroll');
        }
    }, false);

    beforeNavBarRight.addEventListener('click', mostrarCondEnvioFunc, false);


    function mostrarCondEnvioFunc() {
        mostrarCondEnvio.setAttribute("style", "display:flex;");
        htmlDocument.classList.add('noScroll');
    }

    closeBtnCondPainel.addEventListener('click', () => {
        mostrarCondEnvio.setAttribute("style", "display:none;");
        htmlDocument.classList.remove('noScroll');

    }, false);

    mostrarCondEnvio.addEventListener('click', (e) => {
        if (e.target === mostrarCondEnvio) {
            mostrarCondEnvio.setAttribute("style", "display:none;");
            htmlDocument.classList.remove('noScroll');

        }
    }, false);


    // Code for image slider

    let slideImage = document.querySelectorAll('section.slide-image');
    const slidesContainer = document.querySelector('section.slides-container');
    const nextBtn = document.querySelector('section.next-btn');
    const prevBtn = document.querySelector('section.prev-btn');
    let currentSlide = 0;
    let numberOfImages = slideImage.length;

    function slide() {

        // slideImage[0] = 0
        // slideImage[1] = 100%
        // slideImage[2] = 200%

        slideImage.forEach((img, i) => {
            img.style.left = i * 100 + "%";
        });

    }

    slide();

    // Next Button

    nextBtn.addEventListener('click', () => {
        if (currentSlide >= numberOfImages - 1) {
            goToSlide(0);
            currentSlide = 0;
            return;
        }
        currentSlide++;
        goToSlide(currentSlide);
    });

    // Prev Button

    prevBtn.addEventListener('click', () => {
        if (currentSlide <= 0) {
            goToSlide(numberOfImages - 1);
            currentSlide = numberOfImages - 1;
            return;
        }
        currentSlide--;
        goToSlide(currentSlide);
    });

    function goToSlide(slideNumber) {
        slidesContainer.style.transform = "translateX(-" + 100 * slideNumber + "%)";

    }




    // Grid Products Main Page

    function mostrarDecks(arraySkateboards) {

        grid.innerHTML = '';

        arraySkateboards.map((skateboard) => {
            grid.innerHTML += `
            <article class='skateboardArticle'>
                <span id="discount">${skateboard.discount}</span>
                <a href=''><img class="skateboardImage" src='${skateboard.imageUrl}' alt='deck' data-id=${skateboard.id}></a>
                <h1 class='products-brand'>${skateboard.marca}</h1>
                <h2 class='products-desc'>${skateboard.desc}</h2>
                <section class='prices'>
                <p class='price'>${skateboard.price}</p>
                <p class="discountPrice">${skateboard.priceDiscount}</p>                
                <p class="currency">${skateboard.currency}</p>                
                </section>
                <img class='productCloseBtn' src='Media/icons/close_btn_sm.png' alt='close button' data-id=${skateboard.id}>
                <img class='reviews' src='Media/icons/reviews_stars.png' alt='reviews'>
        </article>
        `;
        });
    }


    let productsArray = [];
    fetch("http://localhost:3001/result")
        .then(response => response.json())
        .then(data => {
            productsArray = data[0].skateboards;
            mostrarDecks(productsArray);
        });

    let productCloseBtn = document.getElementsByClassName('productCloseBtn');


    btnEditProductsDecks.addEventListener('click', () => {
        formProductsDecks.setAttribute("style", "display:block;");
        for (const btn of productCloseBtn) {
            btn.setAttribute("style", "visibility:visible;");
        }
        productSkateboards.scrollIntoView();
        editProducts.setAttribute("style", "display:none;");
        flagUser = false;
    }, false);



    btnCloseForm.addEventListener('click', closeFormButtonFunction, false);
    function closeFormButtonFunction(e) {
        formProductsDecks.setAttribute("style", "display:none;");
        for (const btn of productCloseBtn) {
            btn.setAttribute("style", "visibility:hidden;");
        }
        e.preventDefault();
    }



    // Grid Skateboards click events

    let btnUpdateSkate = document.querySelector('.footer-newsletter .btnUpdateSkate');
    let decksForm = document.getElementById('decksForm');


    btnUpdateSkate.addEventListener('click', updateSkateboardDeck, false);


    grid.addEventListener('click', gridEvents, false);
    function gridEvents(e) {

        if (e.target.className === 'skateboardImage') {
            let id = e.target.dataset.id;
            let skate = e.target.parentElement.parentElement;
            skate.setAttribute("style", "opacity: 0.5;");
            atualizarSkateboard(id);
        }
        if (e.target.className === 'productCloseBtn') {
            let id = e.target.dataset.id;
            console.log(id);
            removerProduto(id);
        }


    }

    function removerProduto(id) {
        let novosProdutos = productsArray.filter(skate => skate.id != id);
        productsArray = novosProdutos;

        mostrarDecks(productsArray);
        for (const btn of productCloseBtn) {
            btn.setAttribute("style", "visibility:visible;");
        }

    }

    // BUG 1 - You continue to select all the next skateboards

    function atualizarSkateboard(id) {

        skateAeditar = skateboard.find(s => s.id == id);
        imgUrl.value = skateAeditar.imageUrl;
        marca.value = skateAeditar.marca;
        desc.value = skateAeditar.desc;
        price.value = skateAeditar.price;
        btnUpdateSkate.setAttribute("style", "display: block;")
        btnAddSkate.setAttribute("style", "display: none;")
    }


    function updateSkateboardDeck(e) {

        let skateboardAtualizados = skateboard.map(skate => {
            if (skate.id === skateAeditar.id) {
                return {
                    ...skate,
                    imgUrl: imgUrl.value,
                    marca: marca.value,
                    desc: desc.value,
                    imgUrl: imgUrl.value,
                    price: price.value,

                }
            } else {
                return skate;
            }
        });

        skateboard = skateboardAtualizados;

        mostrarDecks(skateboard);

        decksForm.reset();

        formProductsDecks.setAttribute("style", "display:none;");
        e.preventDefault();
    }



    // Code for Google Map API

    let mapCloseBtn = document.getElementById('mapCloseBtn');
    let seeMap = document.querySelector('#seeLocation');
    let map = document.querySelector("#map");
    let mapContainer = document.querySelector('.mapContainer');
    let latitude, longitude;

    mapCloseBtn.addEventListener('click', removeMap, false);
    function removeMap() {
        mapContainer.setAttribute("style", "display:none;");
    }

    seeMap.addEventListener('click', showMap, false);
    function showMap(e) {
        mapContainer.setAttribute("style", "display:flex;");
        if ('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log('no access to geolocation');
        }
        e.preventDefault();
    }

    mapContainer.addEventListener('click', (e) => {
        if (e.target === mapContainer) {
            mapContainer.setAttribute("style", "display:none;");
            htmlDocument.classList.remove('noScroll');
        }
    })

    // events listener

    // events called by event functions
    function success(position) {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude, longitude);

        console.log('lat', latitude, 'lng', longitude);

        map = new google.maps.Map(map, {
            center: { lat: latitude, lng: longitude },
            zoom: 13,
        });

        let marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude }, title: 'Your location!',
        })

        let markerSW = new google.maps.Marker({
            position: { lat: 37.4772292, lng: 126.8806593 }, title: 'GuiLima Shop Office!',
        })

        marker.setMap(map)

        markerSW.setMap(map)
    }

    function error(err) {
        console.log(err);
    }
}





