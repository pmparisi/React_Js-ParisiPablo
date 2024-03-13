const products = [
    {
        id: '1',
        name: 'Galaxy A34',
        price: '696.000',
        category: 'celular', 
        img: 'https://samsungar.vtexassets.com/arquivos/ids/191185-1200-auto?width=1200&height=auto&aspect=true',
        stock: 30,
        description: 'Galaxy A34 - 128GB'
    },
    {
        id: '2',
        name: 'Lenovo ThinkPad P1',
        price: '5.000.000',
        category: 'notebook', 
        img: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MTY2ODc4fGltYWdlL3BuZ3xoNTgvaDVkLzE3MzIyMjc0MTI3OTAyLmpwZ3xjYTMyNmNhOGMzNWQyMWRiMTdjOWJiYzg4NWIyNDYwYzEzNWY3YTdmNGE4NzUyNGY5MzhiMzdjOWEwMGQ5ZmMx',
        stock: 20,
        description: 'ThinkPad P1 6ta Gen'
    },
    {
        id: '3',
        name: 'LG UHD AI ThinQ',
        price: '430.000',
        category: 'televisor', 
        img: 'https://www.megatone.net/Images/Articulos/zoom2x/252/TEL4387LGL.jpg',
        stock: 5,
        description: 'Smart TV 43 Pulgadas 4K Ultra HD - LG'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};