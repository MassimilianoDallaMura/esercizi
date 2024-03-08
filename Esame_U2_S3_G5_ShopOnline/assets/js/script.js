const dataUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTU4YjJkN2IxMTAwMTkwZTZlZGUiLCJpYXQiOjE3MDk4OTMwMDMsImV4cCI6MTcxMTEwMjYwM30.PqLgPsNm73_lLLRHs-rL85GmO8d8oapgaZ8JvWqVnys';
const cards = document.getElementById('cards');
const products = [];


window.addEventListener('load', init);

function init() {
    loadimages()
    
}

async function loadimages() {
    try {
        let response = await fetch(dataUrl, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        let products = await response.json();
        console.log(products);
        
        displayProducts(products); // Chiamata alla funzione displayProducts con i prodotti ottenuti
        
    } catch (error) {
        console.error('Errore fetch', error);
    }
}


function displayProducts(products) {
    cards.innerHTML = ''; 

    products.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
            <div class="card mb-3">
                <img src="${item.imageUrl}" style="width: 100%" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
                <div class="card-footer">
                    <button type="button" href="html "class="btn btn-primary">Button 1</button>
                    <button type="button" class="btn btn-secondary">Button 2</button>
                </div>
            </div>
        `;
        cards.appendChild(div);
    });
}


// BACK OFFICE

const name = document.getElementById('nome').value;
const brand = document.getElementById('brand').value;
const price = document.getElementById('price').value;
const image = document.getElementById('image').value;
const description = document.getElementById('brand').value;