export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD':
            return [...state, action.item];
        default:
            return state;
    }
}
