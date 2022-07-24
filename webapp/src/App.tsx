import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Store */
import { Provider } from "react-redux";
import store from './services/Store'

/* UI Components */
const Home = React.lazy(() => import ('./ui/Home').then(({ Home }) => ({ default: Home })));
const Signin = React.lazy(() => import ('./ui/Signin').then(({ Signin }) => ({ default: Signin })));
const Footer = React.lazy(() => import ('./ui/Footer').then(({ Footer }) => ({ default: Footer })));
const Header = React.lazy(() => import ('./ui/Header').then(({ Header }) => ({ default: Header })));
import { Background } from "./components/modules/Background/Background";

/* Styles */
import styles from "./App.module.css";

const App = () => {

  return (
    <Router>
      <Provider store={store}>
        <Background/>
        <Suspense fallback={<div>Loading</div>}>
        <Header />
        <div className={styles.App}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<div><h1>Lo siento no hay resultado 404</h1></div>} />
          </Routes>
        </div>
        <Footer />
        </Suspense>
      </Provider>
    </Router>
  )
}
export default App;
