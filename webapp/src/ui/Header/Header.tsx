import { useSelector } from 'react-redux'
/* Store */
import { RootState, useAppDispatch } from '../../services/Store'
import ThemeSlice from '../../application/Theme'

/* Styles */
import styles from './Header.styles'

export const Header = () => {
    const dispatch = useAppDispatch();
    const classes: any = styles()

    const { dark } = useSelector((state: RootState) => state.Theme);
    const { setTheme } = ThemeSlice.actions;

    const handleChangeTheme = (dark) => {
        dispatch(setTheme(!dark))
    }

    return (
        <div className={classes.root}>
            <section>
                This is a Header
                <button onClick={() => handleChangeTheme(dark)}>{dark ? 'Dark' : 'Light'}</button>
            </section>
        </div>
    )
}