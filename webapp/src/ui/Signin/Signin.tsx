import { useSelector } from "react-redux";
import { RootState } from "../../services/Store";

/* Modules */
import { Logo } from '../../components/modules/Logo';
import { Textfield } from "../../components/modules/Textfield";
import { ButtonModule } from '../../components/modules/Button';

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Signin.styles';

export const Signin = () => {
  const mediaQueryTheme = useTheme()
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signin}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signin}</h1>
        <div className={classes.form}>
          <div className={classes.containerInput}>
            <Textfield
              id="email"
              label={t.labels.email}
              error={false}
              helperText={"Error en email"}
              autocomplete={false}
              type="email"
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id="password"
              label={t.labels.password}
              error={false}
              helperText={"Error en password"}
              autocomplete={false}
              type="password"
            />
          </div>
          <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
          <div className={classes.containerBtn}>
            <ButtonModule 
              text={t.buttons.signin}
              onClick={() => console.log('Clicked')}
            />
          </div>
          <p className={classes.infoText}>{t.labels.notHaveAccount}&nbsp;<span>{t.title.signup}</span></p>
        </div>
      </section>
    </div>
  )
}