const getDataFromLocalStorage = localStorage.getItem('UpdatedAray')
const updatedData = JSON.parse(getDataFromLocalStorage)

console.log(updatedData);


const cards = document.getElementById("cards");

updatedData.map((item, index)=>{

    // const {brand,model,ram,rom,camera,price,picture} = obj
// console.log(ind);
    
cards.innerHTML += `<div class=" ">
<div class="card m-2" style="width: 22rem text-center ">
<div class=" "><img src="${item.picture}" class="card-img-top " alt="..."></div>
  <div class="card-body text-center ">
  <h4 class="card-title ">Brand: ${item.brand}</h4>
  <h5 class="card-title m-1 p-1">Model: ${item.model}</h5>
  <h5 class="card-title">Price: ${item.price}</h5>
  <a class="btn  btn-primary" onclick="addToCart(${index})">Add to cart</a>
</div>
</div>
</div>
 `
}
 );




function goBack(){
    window.location = 'index.html'
 }