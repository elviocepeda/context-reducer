import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";
import NavBar from "./NavBar";
import "../stylesheets/Header.css";
import Cart from "./svg/Cart";
import Search from "./svg/Search";
import User from "./svg/User";
import Logo from "./svg/Logo";

const Header = () => {

  const [store, dispatch] = useContext(StoreContext)
  const {data} = store;
  const {users} = data;
  
  return (
    <div className="container-header">

      <NavBar />

      <Logo />

      <div className="container-menu">
        
        <Search />
        <Cart />
        <User />
        {/* {users && users[1].isConnected
        ? <>
            <span>{`Hola ${users[1].name}!`}</span>
            <button className="btn-user" onClick={() => dispatch({ type: types.authLogout, payload: users.filter((user) => user.id === 2) })}>
              Logout
            </button>
          </>
        : <>
            <span>Invitado</span>
            <button className="btn-user" onClick={() => dispatch({ type: types.authLogin, payload: users.filter((user) => user.id === 2)})}>
              Login
            </button>

          </>
        } */}
        
      </div>

    </div>
  );
};

export default Header;
