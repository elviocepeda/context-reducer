import './App.css';
import AppRouter from './routers/AppRouter';
import StoreProvider from "./store/StoreProvider";

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