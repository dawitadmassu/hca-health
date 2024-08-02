import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FindCare from "./components/Jumbotron/FindCare";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import Header2 from "./components/Headers/Header2";
import Services from "./components/Services/Services";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Header2 />
      <FindCare />
      <Services />
      <Footer />
    </Provider>
  );
}

export default App;
