import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FindCare from "./components/Jumbotron/FindCare";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import Services from "./components/Services/Services";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <FindCare />
        <Services />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
