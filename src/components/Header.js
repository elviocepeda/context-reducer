import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";
import NavBar from "./NavBar";
import "../stylesheets/Header.css";

const Header = () => {

  const [store, dispatch] = useContext(StoreContext)
  const {data} = store;
  const {users} = data;
  
  return (
    <div className="container-header">

      <div className="container-logo">
        <span>Logo</span>
      </div>

      <NavBar />

      <div className="container-userlog">

        {users && users[1].isConnected
        ? <div>
            <span>{`Hola ${users[1].name}`}</span>
            <button onClick={() => dispatch({ type: types.authLogout, payload: users.filter((user) => user.id === 2) })}>
              Logout
            </button>
          </div>
        : <div>
            <span>Invitado</span>
            <button onClick={() => dispatch({ type: types.authLogin, payload: users.filter((user) => user.id === 2)})}>
              Login
            </button>

          </div>
        }
        
      </div>

    </div>
  );
};

export default Header;
