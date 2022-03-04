import './App.css';
import AppRouter from './routers/AppRouter';
import StoreProvider from "./store/StoreProvider";
import './stylesheets/Header.css'

function App() {

  return (
    <div className='container'>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;