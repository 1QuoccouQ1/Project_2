const db = [
    {
    "id" : 1,
    "name" : "Thơm mật",
    "des" : "Thơm mật size lớn trái từ 1kg trở lên",
    "price" : 20000,
    "priceSale" : 20000,
    "quantity" : 100,
    "avatar" : "p1.jpg",
    "imgList" : ["p1.1.jpg", "p1.2.jpg", "p1.3jpg", "p1.4.jpg", "p1.5.jpg"]
    },
    {
    "id" : 2,
    "name" : "Nho xanh",
    "des" : "Nho xanh Ninh Thuận 500g",
    "price" : 45000,
    "priceSale" : 35000,
    "quantity" : 100,
    "avatar" : "p2.jpg",
    "imgList" : ["p2.1.jpg", "p2.2.jpg", "p2.3jpg", "p2.4.jpg", "p2.5.jpg"]
    },
    {
    "id" : 3,
    "name" : "Red Chili",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p4.png",
    "imgList" : []
    },
    {
    "id" : 4,
    "name" : "Big Potatos",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p5.png",
    "imgList" : []
    },
    {
    "id" : 5,
    "name" : "Chanise Cabbage",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p6.png",
    "imgList" : []
    },
    {
    "id" : 6,
    "name" : "Ladies Finger",
    "des" : "",
    "price" : 20.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p7.png",
    "imgList" : []
    },
    {
    "id" : 7,
    "name" : "Red Tomato",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p8.png",
    "imgList" : []
    },
    {
    "id" : 8,
    "name" : "Eggplant",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p9.png",
    "imgList" : []
    },
    {
    "id" : 9,
    "name" : "Fresh Cauliflower",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p10.png",
    "imgList" : []
    },
    {
    "id" : 10,
    "name" : "Green Apple",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p11.png",
    "imgList" : []
    },
    {
    "id" : 11,
    "name" : "Fresh Mango",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p12.png",
    "imgList" : []
    },
    {
    "id" : 12,
    "name" : "Green Capsicum",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p13.png",
    "imgList" : []
    },
    {
    "id" : 13,
    "name" : "Green Chili",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p14.png",
    "imgList" : []
    },
    {
    "id" : 14,
    "name" : "Green Cucumber",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p15.png",
    "imgList" : []
    },
    {
    "id" : 15,
    "name" : "Green Littuce",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p16.png",
    "imgList" : []
    },
    {
    "id" : 16,
    "name" : "Green Littuce",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p17.png",
    "imgList" : []
    },
    {
    "id" : 17,
    "name" : "Ladies Finger",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p18.png",
    "imgList" : []
    },
    {
    "id" : 18,
    "name" : "Green Capsicum",
    "des" : "",
    "price" : 14.99,
    "priceSale" : 14.99,
    "quantity" : 100,
    "avatar" : "p19.png",
    "imgList" : []
    }
]




const productsContainer = document.getElementById("products");

// db.forEach(product => {
//     const productHTML = `
//         <div id="product${product.id}" class="w-1/5 h-80 p-3 mx-2 border boder-slate-100 flex justify-between flex-col relative group hover:border-primary">
//             <img src="./imgs/${product.avatar}" alt="">
//             <div class="flex items-center justify-between">
//                 <div>
//                     <p class="text-sm">${product.name}</p>
//                     <p class="text-black font-semibold text-sm mt-1">$${product.price.toFixed(2)}</p>
//                     <i style="color: #FFA432;" class="fa-solid fa-star text-xs" aria-hidden="true"></i>
//                     <i style="color: #FFA432;" class="fa-solid fa-star text-xs" aria-hidden="true"></i>
//                     <i style="color: #FFA432;" class="fa-solid fa-star text-xs" aria-hidden="true"></i>
//                     <i style="color: #FFA432;" class="fa-solid fa-star text-xs" aria-hidden="true"></i>
//                     <i class="fa-solid fa-star text-xs text-slate-300" aria-hidden="true"></i>
//                 </div>
//                 <div class="bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer duration-300" onclick="addToCart('product${product.id}')">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-2 cursor-pointer">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
//                     </svg>
//                 </div>
//             </div>
//             <div class="absolute top-5 right-5 hidden group-hover:block">
//                 <i class="fa-regular fa-heart text-black border border-slate-300 rounded-full p-2 hover:bg-primary hover:text-white hover:border-white cursor-pointer duration-300"></i>
//                 <br>
//                 <i class="fa-regular fa-eye text-black border border-slate-300 rounded-full p-2 hover:bg-primary hover:text-white hover:border-white cursor-pointer duration-300 my-3"></i>
//             </div>
//         </div>
//     `;
//     productsContainer.insertAdjacentHTML('beforeend', productHTML);

// });
