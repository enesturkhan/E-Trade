import { createSlice, current } from '@reduxjs/toolkit'

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}
const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    amount: 0,

}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}
const removeFromBasketToStorage = (id) => {
    const newBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const updateBasket = newBasket.filter((product) => product.id !== id);
    localStorage.setItem("basket", JSON.stringify(updateBasket));
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {

            const findproduct = state.products && state.products.find((product) => product.id === action.payload.id);
            console.log(!!findproduct, current(state), action.payload);
            if (findproduct) {


                const exracted = state.products.filter((product) => product.id !== action.payload.id)
                findproduct.count += action.payload.count;
                state.products = [...exracted, findproduct];
                writeFromBasketToStorage(state.products);




            } else {
                state.products = [...state.products, action.payload];

                writeFromBasketToStorage(state.products);
            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        setAmount: (state) => {
            state.amount = 0;
            state.products && state.products.map((product) => {
                state.amount += product.price * product.count;
                writeFromBasketToStorage(state.products);
            })
        },
        removeFromBasket: (state, action) => {
            const productToRemove = state.products.find((product) => product.id == action.payload.id);
            // state.products = state.products.filter((product) => product.id !== action.payload.id);
            if (productToRemove) {
                state.products = state.products.filter((product) => product.id !== action.payload.id);
                state.amount -= productToRemove.price * productToRemove.count;
                removeFromBasketToStorage(action.payload.id);

            }

        }

    }
})

export const { addToBasket, setDrawer, setAmount, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer