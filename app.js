import { contacts } from './contacts.js'
import { render, html } from './node_modules/lit-html/lit-html.js'
import singleTemplate from './template.js'


let mainEl = document.getElementById('contacts');
console.log(mainEl);


let result= contacts.map(singleTemplate);

render(result, mainEl)

