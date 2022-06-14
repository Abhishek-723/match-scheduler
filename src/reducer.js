const initialState = [];

const matchReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MATCH": 
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
};
export default matchReducer