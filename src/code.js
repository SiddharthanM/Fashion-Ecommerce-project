let shop =document.getElementById('shop');


let basket =JSON.parse(localStorage.getItem("storedata")) || []

let generateshop =()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let {id, name , price ,desc,img}= x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
        <div  id =product-id-${id} class="item">
        <img width ="220" src=${img} alt="">
        <div class="details">
         <h3>${name}</h3>
         <p>${desc}</p>
         <div class="price-quantity">
             <h2>$ ${price}</h2>
             <div class="buttons">
                 <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                 <div id =${id} class="quantity">
                 ${search.item === undefined? 0: search.item}
                 </div>
                 <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
             </div>
         </div>
        </div>
     </div>`
    }).join(""))
};

generateshop();

let increment = (id)=>{
    let selectedItem =id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined) {
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }
    else{
        search.item +=1;
    }
    
    // console.log(basket);
    update(selectedItem.id)
    localStorage.setItem("storedata",JSON.stringify(basket));
};

let decrement = (id)=>{
    let selectedItem =id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    if(search === undefined) return
    else if(search.item === 0) return;
  
    else{
        search.item -=1;
    }
    update(selectedItem.id)
    basket =basket.filter((x)=>x.item !== 0);
    // console.log(basket);
    
    localStorage.setItem("storedata",JSON.stringify(basket));
};

let update = (id)=>{
   let search = basket.find((x)=>x.id === id);
//    console.log(search.item)
   document.getElementById(id).innerHTML =search.item;
   calculation()
};

let calculation = () => {
    let carticon =document.getElementById("cartamount");
    carticon.innerHTML =basket.map((x) =>x.item).reduce((x,y)=>x+y,0)
}
calculation();


function scrollToTop() {
    window.scrollTo(0, 0);
}
function  scrolldown(){
  window.scrollTo(0,10000)
}



 /*image slider*/
var counter=1;
setInterval(function(){
document.getElementById("radio" + counter).checked = true;
counter = counter + 1;
if(counter > 6){
counter=1;
}
},3000);



// -------------img gallery-------------
let scrollcontainer = document.querySelector(".gallery");
    let backbtn = document.getElementById("backbtn");
    let nextbtn = document.getElementById("nextbtn");

    scrollcontainer.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        scrollcontainer.scrollLeft += evt.deltaY;
        scrollcontainer.style.scrollBehavior="auto";
    });
    nextbtn.addEventListener("click",()=>{
        scrollcontainer.style.scrollBehavior="smooth";
        scrollcontainer.scrollLeft += 900;
    });
    backbtn.addEventListener("click",()=>{
        scrollcontainer.style.scrollBehavior="smooth";
        scrollcontainer.scrollLeft -= 900;
    });
