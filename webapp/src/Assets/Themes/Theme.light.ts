import { ThemeTypes } from "./Theme.types"; 
import ThemeGlobal from "./Theme.global";

const themeLight: ThemeTypes = {
    ...ThemeGlobal,
    bgPrimary: 'lightBlue',
    bgSecondary: '#ffffff',
    bgLight: '#383F61',
    colorPrimary: 'black',
    colorHover: '#A6AEBF',
    colorPalletPrimary: '#418B35',
    bgHover: '#276C47'
};
export default themeLight;