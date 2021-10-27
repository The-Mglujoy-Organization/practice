const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
container.appendChild(para);
para.style.cssText = 'color: red; background: white;';          
para.textContent = 'Hey I\'m Red.';

const hTres = document.createElement('h3');
hTres.classList.add('hTres');  //no need to asign class
container.appendChild(hTres);
hTres.style.cssText = 'color: blue; background: white;';
hTres.textContent = 'I\'m blue H3.'

const div = document.createElement('div');
div.classList.add('div');
const division = document.querySelector('.div');
const hUno = document.createElement('h1');
const pe = document.createElement('p');

div.appendChild(hUno);
div.appendChild(pe);
container.appendChild(div);
div.style.cssText = 'border: 1px solid black; background: pink;';
hUno.textContent = 'I\'m in Div.';
pe.textContent = 'ME TOO.';
