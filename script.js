// Elements
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
// Image array: Response data To Array
let photosArray = [];


// Unsplesh API
const count =10;
const apiKey = 'IsZ8k_KkA6TqfGrZkIW1Vxq4hcCAG5zOWLsUDGTFf_4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elemetns For Links and Phosots, Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unspleash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description );
        img.setAttribute('title', photo.alt_description);
        // Put the Image inside the Anchor <a>. then put both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);





    });
    
}

async function getPhostos() {
    try {
        // waiting response from our fetch request
        const response = await fetch(apiUrl);
        // returning json from response
        const photosArray = response.json();
        console.log(photosArray);
        displayPhotos();
        

    } catch (error) {
        // Catch Error
    }
    
}

// On Load
getPhostos()