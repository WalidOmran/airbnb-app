export const Actions = {GET_FAVORITES: "GET_FAVORITES" , ADD_TO_FAVORITES: "ADD_TO_FAVORITES" , REMOVE_FROM_FAVORITES : "REMOVE_FROM_FAVORITES"};

export const favoritesReducer = (state, action )=> {
    switch (action.type) {
        case Actions.GET_FAVORITES: {
            return { ...state, items: action.payload};
        }
        
        case Actions.ADD_TO_FAVORITES:
        const exists = state.items?.some(item => 
            (item.propertyId === action.payload.id) || (item.id === action.payload.id)
        );
        
        if (exists) return state;

        return { ...state, items: [...(state.items || []), action.payload] };

        case Actions.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: state.items.filter(item => 
                    item.id !== action.payload.id && item.propertyId !== action.payload.id
                )
            };
        default:
            return state;
    }

    
}