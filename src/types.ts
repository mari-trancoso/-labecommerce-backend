
export type TUser = {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

export enum Category {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos",
    FOOD = "comida"
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    description: string,
    image_url: string
}

export type TPurchase = {
    id: string,
    totalPrice: number,
    created_at: string,
    paid: number,
    buyer: string
}

