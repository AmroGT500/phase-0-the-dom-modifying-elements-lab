let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Ammar is the champion';
document.body.appendChild(newHeader);