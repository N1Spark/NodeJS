// const interval = setInterval(() => {
//     console.log("sI")
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 4000)

// setImmediate(()=>{
//     console.log("set imadiate");
// });

// Promise.resolve().then(()=>{
//     console.log("Promise");
// });
// queueMicrotask(()=>{
//     console.log("micritask");
// });

// const product = {
//     id: 1,
//     title: "tv",
//     price: 30000,
// };

// const product2 = {...product}; //глибока копiя
// product.id = 2;
// console.table(product2);

// const product2 = product; //поверхностное копирование
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

// const user2 = structuredClone(user);
// user.address.ap = 100;
// console.log(user);
// const user2 = {...user};
// user.id = 100;
// console.table(user2);

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
// console.log(`Time: ${performance.now() - start}`);

class DBService {
    Get() {
        fetch('http://localhost:3000/products')
            .then(data => data.json())
            .then(res => console.table(res))
            .catch();
    }
    Post(Name, Price, Description) {
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: Name,
                price: Price,
                description: Description
            })
        })
            .then(data => data.json())
            .then(res => console.table(res))
            .catch();
    }
    Put(id, Name, Price, Description) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: Name,
                price: Price,
                description: Description
            })
        })
            .then(data => data.json())
            .then(res => console.table(res))
            .catch();
    }
    Delete(id) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(data => {
                if (data.ok) {
                    console.log("Deleted")
                }
                else {
                    console.log("Not Deleted")
                }
            }).catch();

    }
}
const services = new DBService();
services.Get();
// services.Post("Test", 100, "Test descr");
// services.Put("96f2", "PutTest", 100, "PutTest descr");
services.Delete("6dea")