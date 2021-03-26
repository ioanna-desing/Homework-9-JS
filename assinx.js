// - Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


let chance = 0.3
function imitationType(message){
        return new Promise((resolve)=>{
                setTimeout(()=>{
                        Math.random()>chance
                        resolve(message)},
                        2000)
                })
}

function typeLetters(letter){
        let type = document.getElementById('type')
        let text = document.createElement('div')
        text.innerText = letter
        type.appendChild(text)
       return new Promise((resolve)=>{
                        setTimeout(()=>{
                                Math.random()>chance
                                resolve(letter)
                        },2000)
                })
        }

imitationType()
.then((result)=>{return typeLetters('H')
})
.then((result)=>{return typeLetters('E')
})
.then((result)=>{return typeLetters('L')
})
.then((result)=>{return typeLetters('L')
})
.then((result)=>{return typeLetters('O')
})
.then((result)=>{return typeLetters('_')
})
.then((result)=>{return typeLetters('W')
})
.then((result)=>{return typeLetters('O')
})
.then((result)=>{return typeLetters('R')
})
.then((result)=>{return typeLetters('L')
})
.then((result)=>{return typeLetters('D')
})
.then((result)=>{return typeLetters('!')
})



// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер. 
//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// let info = document.getElementById('info')
// fetch('https://jsonplaceholder.typicode.com/users')
// .then (response =>response.json())
// .then(user => { 
//     for(let value of user){
//        let div = document.createElement('div')
//         div.innerHTML = `${value.id} ${value.name} ${value.username} ${value.email}`
//     info.appendChild(div)}
   
// });


// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let infoPosts = document.getElementById('info')
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>response.json())
// .then(posts=>{
//     for(let value of posts){
//         let div = document.createElement('div')
//         let userId = document.createElement('ud')
//         userId.innerText = value.userId
//         let id = document.createElement('d')
//         id.innerText = value.id
//         let tite = document.createElement('tite')
//         tite.innerHTML = value.title
//         console.log(tite)
//         let bod = document.createElement('bod')
        // bod.innerHTML = `${value.body}`
//         div.appendChild(userId)
//         div.appendChild(id)
//         div.appendChild(tite)
//         div.appendChild(bod)
//         infoPosts.appendChild(div)
//     }
// }
// )

// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

// let infoComments = document.getElementById('info')
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then (response => response.json())
// .then(comments=>{
//     for(let value of comments){
//         let div = document.createElement('div')
//         let postId = document.createElement('p')
//         postId.innerText = `${value.postId}`
//         let id = document.createElement('p')
//         id.innerText = `${value.id}`
//         let name = document.createElement('h3')
//         name.innerText = `${value.name}`
//         let mail = document.createElement('h3')
//         mail.innerText = `${value.name}`
//         let bod = document.createElement('h2') 
//         bod.innerHTML = `${value.body}`
//         div.appendChild(postId)
//         div.appendChild(id)
//         div.appendChild(name)
//         div.appendChild(mail)
//         div.appendChild(bod)
//         infoComments.appendChild(div)
//     }
// })


// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>response.json())
// .then(posts =>{
//         for (let post of posts){
//                 post.comments =[]
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(value=>value.json())
//                 .then(comments=>{
//                         for ( let comId of comments){
//                                 if(post.id===comId.postId){
//                                         post.comments.push(comId)
//                                 }
//                         }
//                         let postsWithComments = document.getElementById('info')
//                         for ( let com of post.comments){
//                                             let comUsers = document.createElement('div')
//                                             comUsers.innerHTML = `${post.id} - ${post.title} - ${com.body}`
//                                             postsWithComments.appendChild(comUsers)
//                                       }      
//                 })
//         } 
// })

