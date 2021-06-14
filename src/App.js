import Header from "./Header";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header 
        title="Amazon Cart"
      />
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
