// Setup DOM

const gallery = document.querySelector('#gallery');

const setupGallery = (data) => {
    let html = '';
    data.forEach(doc => {
        const image = doc.data();
        const card = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${image.path}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">${image.content}</p>
            </div>
        </div>
        `;

        html += card;


        gallery.innerHTML = html;
    })
}
