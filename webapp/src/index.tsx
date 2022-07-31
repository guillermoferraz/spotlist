import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
/* Store */
import { Provider } from "react-redux";
import store from './services/Store'

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(<Provider store={store}><App /></Provider>);
