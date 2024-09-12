// import "dotenv/config";
// // import dotenv from "dotenv";
// // dotenv.config();
// console.log(process.env.APP_TITLE);

// const interval = setInterval(() => {
//     console.log("sI");
// }, 1000);

// setTimeout(() =>{
//     clearInterval(interval);
// }, 4000);

// setImmediate(() => {
//     console.log("set Immediate")
// });

// queueMicrotask(() => {
//     console.log("microtask")
// });

// Promise.resolve().then(() => {
//    console.log("Promise"); 
// });


// const product = {
//     id: 1,
//     title: "tv",
//     price: 30000,
// };

// const product2 = structuredClone(product);  // node глубокая копия
// product.id = 2;
// console.table(product2);

// const product2 = {...product};      //глубокая копия
// product.id = 2;
// console.table(product2);


// const user = {
//     id: 1,
//     name: "Alex",
//     address: {
//         street: "Sadova",
//         ap: 3,
//     },
// };

// // const user2 = {...user}; // вложенные объекты не будут глубоко копироваться
// const user2 = structuredClone(user);
// user.address.ap = 100;
// console.table(user2);
// console.log();
// console.log(user);
// console.log(user2);

// const str = "Hello";
// const encoding = btoa(str); //base64 кодирование
// console.log(encoding);
// const decoding = atob(encoding);
// console.log(decoding);

// const start = performance.now();
// let sum = 0;
// for (let i = 0; i < 1e7; i++) {
//     sum += 1;
// }
// console.log(sum);
// console.log(`Time : ${performance.now() - start}`); 

// fetch('http://localhost:3000/users', {
//     method: "POST",
//     body: JSON.stringify({
//         name: "Nikita",
//     }),
// })
// .then((data) => console.log(data))
// .catch();

const serverProductAPI = "http://localhost:3000/products"

class DbService {
    Get(name){
        if(name != null)
            fetch(`${serverProductAPI}?product_name=${name}`).then(data => data.json()).then(res => console.table(res)).catch();
        else
            fetch(serverProductAPI).then(data => data.json()).then(res => console.table(res)).catch();
    }
    Post(){
        fetch(serverProductAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name: "Office chair",
                price: 19.99,
                stock_quantity: 30,
                description: "A chair that naturally adapts to the sitter, for people of different weights and heights."
            })
        })
        .then(data => data.json())
        .then(res => console.table(res))
        .catch();
    }
    Put(id){
        fetch(`${serverProductAPI}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_name: "Office chair",
                price: 39.99,
                stock_quantity: 10,
                description: "A chair that naturally adapts to the sitter, for people of different weights and heights."
            })
        })
        .then(data => data.json())
        .then(res => console.table(res))
        .catch();
    }
    Delete(id){
        fetch(`${serverProductAPI}/${id}`, {
            method: 'DELETE',
        })
        .then(data => {
            if(data.ok)
                console.log("Product successfully deleted")
            else
                console.log("Delete failed")
        })
        .then(res => console.table(res))
        .catch();
    }

}
const services = new DbService();
services.Get();
//services.Get("Gaming Mouse");
//services.Post();
//services.Put("5f81");
//services.Delete("433d");