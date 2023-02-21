import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(element=>{
    element.addEventListener("click", (e) => {
        e.style.color = "red";
        e.preventDefault();
    })
    element.addEventListener("mouseover", (e) => {
        e.style.color = "blue";
    
    });
    element.addEventListener("mouseout", (e) => {
        e.style.color = "black";
    
    });
});


const baslikH1 = document.querySelector("h1");

baslikH1.addEventListener("mouseover", (e) => {
    e.style.textColor = "blue";
    e.style.cursor = "pointer";
    e.textContent = "!!Eğlence Otobüsü!!";
    e.style.fontSize = "200%";

});

baslikH1.addEventListener("mouseout", (e) => {
    e.style.color = "black";
    e.textContent = "Eğlence Otobüsü";
    e.style.fontSize = "100%";
});



const button = document.querySelectorAll(".btn");
button.forEach(element=>{
    element.addEventListener("mouseover", (e) => {
        e.style.color = "red";
        e.style.fontSize = "40px"        
    });
    element.addEventListener("mouseout", (e) => {
        e.style.color = "red";
        e.style.fontSize = "20px"        
    });

    element.addEventListener("click", (e) => {
        e.textContent = "! ! !";
        
    });
});



const header = document.getElementByClassName('main-navigation');
const sticky = header.offsetTop;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// navigation.less içine eklediğim class ve styling:

//  .sticky {
//     position: fixed;
//     top: 0;
//     width: 100%
//   }

