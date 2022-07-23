import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Store */
import { Provider } from "react-redux";
import store from './services/Store'

/* UI Components */
import { Home } from "./ui/Home";
import { Signin } from "./ui/Signin";
import { Footer } from "./ui/Footer";
import { Header } from './ui/Header';

/* Styles */
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className={styles.App}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<div><h1>Lo siento no hay resultado 404</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </Router>
  )
}
export default App;
