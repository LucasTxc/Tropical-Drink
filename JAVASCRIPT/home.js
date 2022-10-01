const screenHome = document.querySelector('.spaHome');


const divPageCont = document.createElement('div');
divPageCont.className ='divPageCont';
screenHome.appendChild(divPageCont); //Essa função está linkcado as paginas

/* Criação de div para titulo */
const divTitulo = document.createElement('div'); 
divTitulo.className = 'divTitulo';
divPageCont.appendChild(divTitulo);
// conteiner.appendChild(divTitulo);

const divH1 = document.createElement('div'); 
divH1.className = 'divText';
divTitulo.appendChild(divH1);

const tituloH1 = document.createElement('h1');
tituloH1.className = 'tituloH1';
tituloH1.innerHTML = 'Welcome to Tropical Drinks';
divH1.appendChild(tituloH1);
/*Fim do Titulo */


/*Texto de apresentação*/ 

const divText = document.createElement('div');
divText.className = 'divText';
divTitulo.appendChild(divText);

const divH2 = document.createElement('h2');
divH2.className = 'divH2';
divH2.innerHTML = 'Essa será sua melhor experiencia';
divText.appendChild(divH2);

const divH3 = document.createElement('h3');
divH3.className = 'divH3';
divH3.innerHTML = 'Se O Brasil te obriga a beber, aqui está a solução.';
divText.appendChild(divH3);

/*Fim Text */

/*Campo de busca*/
// const conteiner = document.createElement('div'); // Essa é a div main
// conteiner.className = 'conteiner';
// divPageCont.appendChild(conteiner);

// const paragrafo = document.createElement('p');
// paragrafo.className = 'paragrafo';
// paragrafo.innerHTML = 'Tropical Drinks';
// conteiner.appendChild(paragrafo);

// const contForm = document.createElement('div');
// contForm.className = 'contForm';
// conteiner.appendChild(contForm);

// const form = document.createElement('form');
// form.className = 'form';
// contForm.appendChild(form);

// const flabel = document.createElement('label');
// flabel.innerHTML = 'Drinks';
// contForm.appendChild(flabel);

// const finput = document.createElement('input');
// finput.className = 'finput';
// finput.placeholder ='Busque seu drink'
// finput.type = 'text';
// finput.maxLength="5"; // Essa função é utlizada para limitar os caracteres
// contForm.appendChild(finput);
/*Fim de busca */

// botão de busca
// const fbutton = document.createElement('button');
// fbutton.className = 'fbutton';
// contForm.appendChild(fbutton);

// const ancora = document.createElement('a');
// ancora.innerHTML = 'Entrar';
// ancora.href = "menu.html";
// fbutton.appendChild(ancora);
// /*Fim do busca */

const divImg = document.createElement('div');
divImg.className -'divImg';
divPageCont.appendChild(divImg);


const imagemHome = document.createElement('img');
imagemHome.className = 'imagemHome';
// imagemHome.setAttribute('src','/ASSETS/box-banner.jpg');
imagemHome.setAttribute('style','width:100%;');
divImg.appendChild(imagemHome);




