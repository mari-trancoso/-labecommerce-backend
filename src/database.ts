// import { Category, TProduct, TPurchase, TUser } from "./types";

// export const users:TUser[] = [
//     {
//         id: "bananinha",
//         email: "bananinha@email.com",
//         password: "bananinha01",
//         name: "Banana1"

//     },
//     { 
//         id: "zinho",
//         email: "zinho@email.com",
//         password: "zinho123",
//         name: "Paulo"

//     }
// ]

// export const products:TProduct[] = [
//     {
//         id: "chocolate",
//         name: "suflair",
//         price: 4.90,
//         description: "chocolate",
//         imageUrl:"http://..."
//     },
//     {
//         id: "bolo",
//         name: "bolo de cenoura",
//         price: 15.90,
//         description: "chocolate",
//         imageUrl:"http://..."
//     }
    
// ]

// export const purchases:TPurchase[] = [
//     {
//         userId: "bananinha",
//         productId: "chocolate",
//         quantity: 2,
//         totalPrice: 9.80
//     },
//     {
//         userId: "zinho",
//         productId: "bolo",
//         quantity: 1,
//         totalPrice: 15.90
//     }
// ]

// export const createUser = (id:string, email:string, senha:string, nome:string) => {
//     const newUser:TUser = {
//         id: id,
//         email: email,
//         password: senha,
//         name: nome
//     }

//     users.push(newUser)

//     console.log("Cadastro realizado com sucesso!")

// }

// export const getAllUsers = () => {
//     return users
// }

// export const createProduct = (id: string, name: string, price: number, category: Category, description:string, imageUrl:string) => {
//     const newProduct:TProduct = {
//         id: id,
//         name: name,
//         price: price,
//         description: description,
//         imageUrl: imageUrl
//     }

//     products.push(newProduct)

//     console.log("Produto criado com sucesso!")
// }

// export const getAllProducts = () => {
//     return products
// }

// export const getProductsById = (idToSearch:string) : TProduct[]=> {
//     return products.filter(
//         (product) => {
//           return(product.id === idToSearch)
//         }
//       )  
// }

// export const queryProductsByName = (q:string) :void => {
//     const query =  products.filter(
//         (product) => {
//           return(product.name.toLowerCase().includes(q.toLowerCase()))
//         }
//       ) 

//       console.table(query)
// }

// export const createPurchase = (userId: string, productId: string, quantity: number, totalPrice: number) :void => {
//     const newPurchase:TPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice
//     }

//     purchases.push(newPurchase)

//     console.log("Compra realizada com sucesso!")
//     console.table(purchases)
// }

// export const getAllPurchasesFromUserId = (userIdToSearch:string) :TPurchase[]=> {
//     return purchases.filter(
//         (purchase) => {
//           return(purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase()))
//         }
//       ) 
// }
