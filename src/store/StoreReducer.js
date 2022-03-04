const types = {
  authLogin: "auth - login",
  authLogout: "auth - logout",
  productDeleteAll: "product - delete all",
  productChange: "product - change",
  dataSuccess: "data - success",
  dataError: "data - error"
};

const StoreReducer = (state, action) => {
  
  switch (action.type) {

    case types.dataSuccess:
      return {
        loading: false,
        error: '',
        data: action.payload
      }

    case types.dataError:
      return {
        loading: false,
        error: 'Algo salio mal',
        data: {}
      }

    case types.authLogout:
      return {...state, users: action.payload[0].isConnected = false}

    case types.authLogin:
      return {...state, users: action.payload[0].isConnected = true}

    case types.productDeleteAll:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};

export { types };
export default StoreReducer;