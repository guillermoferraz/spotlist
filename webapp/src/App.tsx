import { Suspense, lazy } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Store */
import { Provider } from "react-redux";
import store from './services/Store'

/* UI Components */
const Home = lazy(() => import('./ui/Home').then(({ Home }) => ({ default: Home })));
const Signin = lazy(() => import('./ui/Signin').then(({ Signin }) => ({ default: Signin })));
const Signup = lazy(() => import('./ui/Signup').then(({ Signup }) => ({ default: Signup })));
import { Footer } from "./components/modules/Organisms/Footer";
import { Header } from "./components/modules/Organisms/Header";
import { Loading } from "./components/modules/Layouts/Loading";

/* Modules  */
import { Background } from "./components/modules/Atoms/Background";

/* Styles */
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
    <Provider store={store}>
      <Background />
      <Suspense fallback={<Loading />}>
        <Header />
        <div className={styles.App}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
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
