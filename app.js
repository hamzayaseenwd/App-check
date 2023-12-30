let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "SamsungA30.png",
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        picture: "SamsungA10.png",
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        picture: "SamsungA20.png",
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        picture: "y20.png",
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        picture: "vivo-y11.png",
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        picture: "VivoY15.png",
    },
    {
        brand: "Motorola",
        model: "Turbo",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        picture: "Motorola.png",
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "Iphone12.png",
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "Iphone13.png",
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "IphoneX.png",
    },
    {
        brand: 'Infinix',
        model: 'Z10',
        ram: "2",
        rom: "16",
        camera: '5 megapixel',
        price: "15000",
        picture: "z10.png",

    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: "12",
        rom: "512",
        camera: '25 megapixel',
        price: "15000",
        picture: "spark10.png",
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: "4",
        rom: "1024",
        camera: '30 megapixel',
        price: "15000",
        picture: "ip14.png",
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: "8",
        rom: "256",
        camera: '20 megapixel',
        price: "15000",
        picture: "f11.png",
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: "4",
        rom: "64",
        camera: '8 megapixel',
        price: "15000",
        picture: "y20.png",
        
    }
]

function search(){

    const searchBy = document.getElementById("searchBy").value.toLowerCase();

    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const results = arr.filter((item) =>item[searchBy].toLowerCase().includes(searchInput));

    console.log("Search Results:", results);

}

const cards = document.getElementById("cards");
const emptyArr = []

// for (let index = 0; index < arr.length; index++) {
    
//     // console.log(arr[index]);
    
//     var picture = arr[index].picture;
//     var brand = arr[index].brand;
//     var model = arr[index].model;
//     var ram = arr[index].ram;
//     var rom = arr[index].rom;
//     var camera = arr[index].camera;
//     var price = arr[index].price;
    
    
// cards.innerHTML += `<div class=" ">
// <div class="card m-2" style="width: 22rem text-center ">
// <img src="${picture}" class="card-img-top" alt="...">
// <div class="card-body text-center ">
//   <h4 class="card-title">Brand: ${brand}</h4>
//   <h5 class="card-title">Model: ${model}</h5>
//   <p class="card-text">Ram: ${ram}</p>
//   <p class="card-text">Rom: ${rom}</p>
//   <p class="card-text">Camera: ${camera}</p>
//   <h6 class="card-title">Price: ${price}</h6>
//   <a href="#" class="btn btn-primary" onclick="addToCart(${arr.index})">Add to cart</a>
//   <br>
// </div>
// </div>
// </div> 
// <br>`
// }


arr.map((item, index)=>{

    // const {brand,model,ram,rom,camera,price,picture} = obj
// console.log(ind);
    
cards.innerHTML += `<div class=" ">
<div class="card m-2" style="width: 22rem text-center ">
<div class=" "><img src="${item.picture}" class="card-img-top " alt="..."></div>
  <div class="card-body text-center ">
  <h4 class="card-title ">Brand: ${item.brand}</h4>
  <h5 class="card-title m-1 p-1">Model: ${item.model}</h5>
  <p class="card-text m-0 p-0">Ram: ${item.ram}</p>
  <p class="card-text m-0 p-0">Rom: ${item.rom}</p>
  <p class="card-text m-0 p-0">Camera: ${item.camera}</p>
  <h5 class="card-title">Price: ${item.price}</h5>
  <a class="btn  btn-primary" onclick="addToCart(${index})">Add to cart</a>
</div>
</div>
</div>
 `
}
 );


 function addToCart(index) {
    if (emptyArr.indexOf(arr[index]) !== -1) {
    
    const indexNumber = emptyArr.indexOf(arr[index])
    arr[index].quantity += 1
    // console.log(arr[index])    
} else {
    arr[index].quantity = 1
    emptyArr.push(arr[index])
    console.log(emptyArr);
}
    ;

 }

// Add to cart sweetAlert
// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });

// already Selected
// Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//     footer: '<a href="#">Why do I have this issue?</a>'
//   });



function checkOut() {
    localStorage.setItem('UpdatedAray',JSON.stringify(emptyArr) )
    
    window.location = 'checkout.html'
}


