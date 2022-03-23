import { render, html } from './node_modules/lit-html/lit-html.js'


const singleTemplate = (contact) =>
    html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click=${showDetails}>Details</button>
        <div class="details" id=${contact.id} style="display: none;">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>

</div>`


function showDetails(e) {

    let currDiv = e.target.nextSibling.nextSibling

    // if (currDiv.style.display === 'none') {
    //     currDiv.style.display = 'block'

    // }
    // else{
    //     currDiv.style.display = 'none'
    // }

    currDiv.style.display= currDiv.style.display === 'none'? 'block': 'none';

}

export default singleTemplate;