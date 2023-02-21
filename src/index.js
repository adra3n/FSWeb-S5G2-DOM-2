import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(element=>{
    element.addEventListener("click", (e) => {
        e.target.style.color = "red";
        e.preventDefault();
    })
    element.addEventListener("mouseover", (e) => {
        e.target.style.color = "blue";
    
    });
    element.addEventListener("mouseout", (e) => {
        e.target.style.color = "black";
    
    });
});


const baslikH1 = document.querySelector("h1");

baslikH1.addEventListener("mouseover", (e) => {
    e.target.style.color = "#17A2B8";
    e.target.style.cursor = "pointer";
    e.target.textContent = "Eğlence Otobüsü!";
    e.target.style.fontSize = "4.5rem";

});

baslikH1.addEventListener("mouseout", (e) => {
    e.target.style.color = "black";
    e.target.textContent = "Eğlence Otobüsü";
    e.target.style.fontSize = "4rem";
});



const button = document.querySelectorAll(".btn");
button.forEach(element=>{
    element.addEventListener("mouseover", (e) => {
        e.target.style.color = "#17A2B8";
        e.target.style.fontSize = "3rem"        
    });
    element.addEventListener("mouseout", (e) => {
        e.target.style.color = "white";
        e.target.style.fontSize = "2.5rem"        
    });

    element.addEventListener("click", (e) => {
        e.target.textContent = "! ! !";
        
    });
});



// const header = document.getElementByClassName('main-navigation');
// const sticky = header.offsetTop;

// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });


//  .sticky {
//     position: fixed;
//     top: 0;
//     width: 100%
//   }

