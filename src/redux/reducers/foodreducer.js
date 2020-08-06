import { SET_FOOD, SET_FOODLOADING } from "../actionname"

const initialState = {
    foods: [],
    foodLoading: false,
}

export const foodReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_FOOD: return { ...state, foods: payload }
        case SET_FOODLOADING: return { ...state, foodLoading: !state.foodLoading }
        default: return state
    }
}

