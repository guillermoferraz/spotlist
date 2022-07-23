import { BrowserRouter as Router } from "react-router-dom";

/* Store */
import { Provider } from "react-redux";
import store from './services/Store'

/* UI Components */
import { Home } from "./ui/Home";
import { Footer } from "./ui/Footer";
import { Header } from './ui/Header';

/* Styles */
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <div className={styles.App}>
          <Home />
        </div>
        <Footer/>
      </Provider>
    </Router>
  )
}
export default App;
