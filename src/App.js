import "./App.css";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import FindCare from "./components/FindCare";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <FindCare />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
