const reducer = (state = {isOPen: false}, action) => {
    switch (action.type) {
    case 'OPEN_EDIT_MODAL':
      return {...state, isOpen: true, id: action.payload.id}
    case 'CLOSE_EDIT_MODAL':
      return {...state, isOpen: false, id: null}
  
    default:
      return state;
    }
  }
  
  export default reducer;