let options = [
    'Close Menu',
    'Insurance',
    'Morgage',
    'Home Insurance',
    'Life Property Insurance',
    'Auto and Credit Cards',
    'Travel Insurance'
]

let loginOptions = ['Loans', 'Finance', 'Debt'];

let optionToRender = [];

let pagination = [
    '&laquo;',
    '1',
    '2',
    '3',
    '4',
    '&raquo;'
]

let insuranceLink = [
    'home',
    'auto',
    'car',
    'Toronto',
    'Ontario',
    'Mortgage',
    'insurance',
    'car loans',
    'life insurance',
    'snow bird travel insurance',
    'some long category test list list list list',
    'finance',
    'lowestrates.ca',
    'credit cards'
]

loadMenu = (menuOption) => {
    let menuELement = document.getElementById("navbarLink");
    menuELement.innerHTML = "";
    menuOption.map((element) => {
        let linkElement = document.createElement("a");
        linkElement.innerHTML = element;
        if (element === 'Close Menu') linkElement.addEventListener("click", closeNavBar);
        menuELement.appendChild(linkElement);
    })
}

loadCard = (page) => {

    let cardElement = document.getElementById("mainComponent");
    cardElement.innerHTML = "";
    let currentPage = page;
    let startLimit = (page - 1) * 8;
    let limit = 8;

    for (let i = startLimit; i < startLimit + limit && i < sampleData.length; i++) {

        let divElement = document.createElement("div");
        divElement.className = "component";

        let imageElement = document.createElement("img");
        imageElement.src = "./Images/creditCard.svg";
        imageElement.className = "titleImage";

        let titleElement = document.createElement("div");
        titleElement.className = 'title';
        titleElement.innerHTML = sampleData[i].title;

        let descElement = document.createElement("div");
        descElement.className = 'description';
        descElement.innerHTML = sampleData[i].description;

        divElement.appendChild(imageElement);
        divElement.appendChild(titleElement);
        divElement.appendChild(descElement);
        cardElement.appendChild(divElement);
    }

}

loadPagination = (page) => {
    let paginationElement = document.getElementById("pageElement");
    paginationElement.innerHTML = "";

    let loadpageElement = document.createElement("a");
    loadpageElement.innerHTML = '&laquo;';
    loadpageElement.style.cursor = "pointer";
    loadpageElement.addEventListener("click",() => {
        loadPagination(1);
        loadCard(1)
    })
    paginationElement.appendChild(loadpageElement);

    let totalPage = Math.floor(sampleData.length / 8) + 1
    console.log(totalPage);
    for(let i = 1; i<=totalPage; i++){
        loadpageElement = document.createElement("a");
        loadpageElement.innerHTML = ""+i;
        if (i ===  page) {
            loadpageElement.style.backgroundColor = "black";
            loadpageElement.style.color = "white"
        }
        loadpageElement.style.cursor = "pointer";
        loadpageElement.addEventListener("click",() => {
            loadPagination(i);
            loadCard(i)
        })
        paginationElement.appendChild(loadpageElement);
    }

    loadpageElement = document.createElement("a");
    loadpageElement.innerHTML = '&raquo;';
    loadpageElement.style.cursor = "pointer";
    loadpageElement.addEventListener("click",() => {
        loadPagination(totalPage);
        loadCard(totalPage)
    })
    paginationElement.appendChild(loadpageElement);
    var elmnt = document.getElementById("mainComponent");
    elmnt.scrollIntoView();
}

loadLinks = () => {
    let link = document.getElementById("insuranceLinks");
    link.innerHTML="";
    insuranceLink.map((element,index) => {
        let insurace = document.createElement("div");
        insurace.innerHTML= element;
        insurace.className= index === 0 ? "element" : "tag"
        
        link.appendChild(insurace);
    })
    
}
function login(){

    document.getElementById("fotFocus").scrollIntoView();
    optionToRender = [...loginOptions, ...options];
    openNavbar(optionToRender);
    
}

window.onload = () => {
    loadMenu(options);
    loadCard(1);
    loadPagination(1);
    loadLinks();
   
}

function openNavbar(optionToRender = options) {
    loadMenu(optionToRender);
    document.getElementById("navBar").style.visibility = "visible";
    document.getElementById("hamburgerMenu").style.visibility = "hidden";
}
function closeNavBar() {
    document.getElementById("navBar").style.visibility = "hidden";
    document.getElementById("hamburgerMenu").style.visibility = "visible";
    optionToRender = [...options];
    //document.documentElement.scrollTop = 0; 
    var elmnt = document.getElementById("mainComponent");
    elmnt.scrollIntoView();
   //window.scrollTo(0,0);
}