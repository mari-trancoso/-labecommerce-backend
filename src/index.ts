import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductsById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database";
import { Category } from "./types";
import express, { Request, Response } from "express"
import cors from 'cors';
import {TUser, TProduct, TPurchase} from "./types"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get(`/users`, (req: Request , res: Response) => {
    res.status(200).send(users)

})

app.get(`/products`, (req:Request, res: Response) => {
    res.status(200).send(products)
})

app.get(`/products/search`, (req:Request, res: Response) => {
    const q = req.query.q as string

    const result = products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase()) 
    })

    res.status(200).send(result)
})

app.post(`/users`, (req:Request, res: Response) => {
    const {id, email, password} = req.body as TUser

    const newUser = {
        id,
        email,
        password
    }

    users.push(newUser)

    res.status(201).send("Novo usuário registrado com sucesso!")
})

app.post(`/products`, (req:Request, res: Response) => {
    const {id, name, price, category} = req.body as TProduct

    const newProduct = {
        id,
        name,
        price,
        category
    }

    products.push(newProduct)
    res.status(201).send("Produto cadastrado com sucesso!")
})

app.get(`/purchases`, (req:Request, res: Response) => {
    res.status(200).send(purchases)
})

app.post(`/purchases`, (req:Request, res: Response) => {
    const {userId, productId, quantity, totalPrice} = req.body as TPurchase

    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchases.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso!")
})

console.log("deu boa")

// console.table(users)
getAllProducts()
// console.table(purchases)

// createUser("u003", "beltrano@email.com", "beltrano99")

// getAllUsers()

createProduct("p004", "Monitor HD", 800, Category.ELECTRONICS)
getAllProducts()

getProductsById("p004")

queryProductsByName("monitor")

console.table(purchases)

createPurchase("093", "p004", 1, 800)

console.table(getAllPurchasesFromUserId("bananinha"))


