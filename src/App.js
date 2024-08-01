import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FindCare from "./components/FindCare";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import ItemList from "./components/ItemList";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Header2 />
      <FindCare />
      <ItemList />
      <Footer />
    </Provider>
  );
}

export default App;
