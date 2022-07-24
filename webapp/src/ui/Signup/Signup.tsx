import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/Store";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { Textfield } from "src/components/modules/Atoms/Textfield";
import { ButtonModule } from 'src/components/modules/Atoms/Button';

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Signup.styles';

import { SignupTypes, CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";

export const Signup = () => {
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'));
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  const [registerData, setRegisterData] = useState<SignupTypes>({
    email: '',
    validEmail: false,
    confEmail: '',
    validConfEmail: false,
    password: '',
    validPassword: false,
    confPassword: '',
    validConfPassword: false
  });
  console.log(registerData)

  const handleSubmit = () => {
    console.log('submit data')
  }
  const handleDataCollected = useCallback((collectedData) => {
    const { event, type } = collectedData;
    Object.keys(registerData).map(key => {
      if(key === type) setRegisterData({ ...registerData, [key]: event });
    });
  },[registerData])

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signin}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signup}</h1>
        <form className={classes.form} onSubmit={handleSubmit} action="#">
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.email}-signup`}
              name={CONSTANTS_ENTRY.email}
              label={t.labels.email}
              error={false}
              helperText={"Error en email"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.email}
              onChange={(event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.email })}
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.confEmail}-signup`}
              name={CONSTANTS_ENTRY.confEmail}
              label={t.labels.confEmail}
              error={false}
              helperText={"Error en email"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.email}
              onChange={(event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confEmail })}
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.password}-signup`}
              name={CONSTANTS_ENTRY.password}
              label={t.labels.password}
              error={false}
              helperText={"Error en password"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.password}
              onChange={(event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.password })}
            />
          </div>
          <div className={classes.containerInput}>
            <Textfield
              id={`${CONSTANTS_ENTRY.confPassword}-signup`}
              name={CONSTANTS_ENTRY.confPassword}
              label={t.labels.confPassword}
              error={false}
              helperText={"Error en password"}
              autocomplete={false}
              type={CONSTANTS_ENTRY.password}
              onChange={(event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confPassword })}
            />
          </div>
          <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
          <div className={classes.containerBtn}>
            <ButtonModule 
              text={t.buttons.signup}
              submit
            />
          </div>
          <p className={classes.infoText}>{t.labels.alreadyAccount}&nbsp;<span onClick={() => navigate("/signin")}>{t.title.signin}</span></p>
        </form>
      </section>
    </div>
  )
}