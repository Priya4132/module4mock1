import { ADD_TO_CART } from "./actions";

const initialCartState = { items: [] };
export const cartReducer=(state=initialCartState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,items:state.items.map((item)=>item.id=action.payload.item.id?{...item, item:action.payload}:item)
                
            }
            default:
                return state
    }

}