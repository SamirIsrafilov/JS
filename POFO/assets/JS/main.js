

const page=document.querySelector('.page');
const btn= document.querySelector('#pagebtn');
const subpage=document.querySelector('.sub-page');
const button= document.querySelector('#mybtn');



const showMenu = () =>{
  page.attributes[0].value ='hide';
  subpage.attributes[0].value ='show';
 
}


const hideMenu =()=>{
  page.attributes[0].value ='show';
  subpage.attributes[0].value ='hide';

}


pagebtn.onclick= showMenu;
mybtn.onclick= hideMenu;



// selectors

const multiLangItems = document.querySelectorAll('p');
const multiLangBtn = document.querySelector('#multilangBtn');

// multilang data with array


const multiLang=()=>{
    if (multiLangBtn.innerHTML === "AZ") {
            for(let j = 0; j < az.length;j++){
                multiLangItems[j].innerHTML = az[j];
            }
            multiLangBtn.innerHTML = 'EN';
        }else{
            for(let j = 0; j < en.length;j++){
                multiLangItems[j].innerHTML = en[j];
            }
            multiLangBtn.innerHTML = 'AZ';
        }
    }


multiLangBtn.onclick = multiLang;
