export const userReducer = (state={}, action) => {
    switch (action.type){
        case "SET_USER":
            return{...action.payload};
        case "CLEAR-USER":
            return {...action.payload};
        default:
            return state;
    }
}