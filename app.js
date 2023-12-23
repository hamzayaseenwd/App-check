let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "SamsungA30.jpg"
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        picture: "SamsungA10.jpg"
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        picture: "SamsungA20.jpg"
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        picture: "y20.jpg"
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        picture: "vivo-y11.jpg"
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        picture: "VivoY15.jpg"
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        picture: "Motorola.jpg"
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "Iphone12.jpg"
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "Iphone13.jpg"
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        picture: "IphoneX.jpg"
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000,
        picture: "z10.jpg"

    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000,
        picture: "spark10.jpg"
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000,
        picture: "ip14.jpg"
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        picture: "f11.jpg"
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000,
        picture: "y20.jpg"
        
    }
]

// function search(){

//     const searchBy = document.getElementById("searchBy").value.toLowerCase();

//     const searchInput = document.getElementById("searchInput").value.toLowerCase();

//     const results = arr.filter((item) =>item[searchBy].toLowerCase().includes(searchInput));

//     console.log("Search Results:", results);
// }

    

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    const cards = document.getElementById("cards");
    
cards.innerHTML = `<div>
<img src="${arr[index].picture}" class="card-img-top" alt="...">
<div class="card-body">
  <h4 class="card-title">Brand: ${arr[index].brand}</h4>
  <h5 class="card-title">Model: ${arr[index].model}</h5>
  <p class="card-text">Ram: ${arr[index].ram}</p>
  <p class="card-text">Rom: ${arr[index].rom}</p>
  <p class="card-text">Camera: ${arr[index].camera}</p>
  <h6 class="card-title">Price: ${arr[index].price}</h6>
  <a href="#" class="btn btn-primary">Add to cart</a>
</div>
</div> `
}

// array.forEach(element => {
    
// });

// arr.map((obj,ind)=>{
//     const {brand,model,ram,rom,camera,price,picture} = obj


// cards.innerHTML = `<div>
// <img src="${picture}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h4 class="card-title">Brand: ${brand}</h4>
//   <h5 class="card-title">Model: ${model}</h5>
//   <p class="card-text">Ram: ${ram}</p>
//   <p class="card-text">Rom: ${rom}</p>
//   <p class="card-text">Camera: ${camera}</p>
//   <h6 class="card-title">Price: ${price}</h6>
//   <a href="#" class="btn btn-primary">Add to cart</a>
// </div>
// </div>
//  `

// });