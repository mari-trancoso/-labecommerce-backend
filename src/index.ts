import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductsById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database";
import { Category } from "./types";
import express, { Request, Response } from "express"
import cors from 'cors';
import {TUser, TProduct, TPurchase} from "./types"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3004, () => {
    console.log("Servidor rodando na porta 3004")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get(`/users`, (req: Request , res: Response) => {
    res.status(200).send(getAllUsers())

})

app.get(`/products`, (req:Request, res: Response) => {
    res.status(200).send(getAllProducts())
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

    // const newUser = {
    //     id,
    //     email,
    //     password
    // }
    // users.push(newUser)

    createUser(id, email, password)
    res.status(201).send("Novo usuário registrado com sucesso!")
})

app.post(`/products`, (req:Request, res: Response) => {
    const {id, name, price, category} = req.body as TProduct
    // const newProduct = {
    //     id,
    //     name,
    //     price,
    //     category
    // }
    // products.push(newProduct)

    createProduct(id, name, price, category)
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

app.get(`/products/:id`, (req:Request, res:Response) => {
    const id = req.params.id

    res.status(200).send(getProductsById(id))
})

app.get(`/users/:id/purchases`, (req:Request, res:Response) => {
    const id = req.params.id

    res.status(200).send(getAllPurchasesFromUserId(id))

})

app.delete(`/users/:id`, (req:Request, res:Response) => {
    const id = req.params.id

    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex >= 0) {
        users.splice(userIndex, 1)
    }

    res.status(200).send("Usuário deletado com sucesso")
})

app.delete(`/products/:id`, (req:Request, res:Response) => {
    const id = req.params.id

    const productIndex = products.findIndex((product) => product.id === id)

    if (productIndex >= 0){
        products.splice(productIndex, 1)
    }

    res.status(200).send("Produto deletado com sucesso")
})

app.put(`/user/:id`, (req:Request, res:Response) => {
    const id = req.params.id
       
	const newEmail = req.body.email as string | undefined    
	const newPassword = req.body.password as string | undefined      

    const user = users.find((user) => user.id === id)

    if (user) {
        user.email = newEmail || user.email
        user.password = newPassword || user.password
    }

    res.status(200).send("Cadastro atualizado com sucesso")

})

app.put(`/product/:id`, (req:Request, res:Response) => {
    const id = req.params.id

    const newName = req.body.name as string | undefined    
	const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as Category | undefined

    const product = products.find((product) => product.id === id)

    if (product) {
        product.name = newName || product.name
        product.price = newPrice || product.price
        product.category = newCategory || product.category
    }

    res.status(200).send("Produto atualizado com sucesso")

})


