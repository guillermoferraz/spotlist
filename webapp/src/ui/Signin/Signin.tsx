import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme()
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme)

  const handleSubmit = () => {
    console.log("submit data")
  }

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signin}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signin}</h1>
        <form className={classes.form} onSubmit={handleSubmit} action="#">
          <div className={classes.containerInput}>
            <Textfield
              id="email-signin"
              label={t.labels.email}
              error={false}
              helperText={"Error en email"}
              autocomplete={false}
              type="email"
              onChange={null}
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id="password-signin"
              label={t.labels.password}
              error={false}
              helperText={"Error en password"}
              autocomplete={false}
              type="password"
              onChange={null}
            />
          </div>
          <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
          <div className={classes.containerBtn}>
            <ButtonModule 
              text={t.buttons.signin}
              submit
            />
          </div>
          <p className={classes.infoText}>{t.labels.notHaveAccount}&nbsp;<span onClick={() => navigate("/signup")}>{t.title.signup}</span></p>
        </form>
      </section>
    </div>
  )
}