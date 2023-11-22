
import {create} from 'zustand'

export const useStore = create((set) => ({
    cart: [],
    total: 0,
    addProduct: (product) => set((state) => ({
        cart: [...state.cart, product]
    } )),
    removeProduct: (index) => set((state) => ({
        cart: state.cart.filter((_,i) => i !== index),
    })),
    setTotal: (value) => set((state) => ({
        total: value
    }))
    
        
   
}))