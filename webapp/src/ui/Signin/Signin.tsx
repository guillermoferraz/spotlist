import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/services/Store";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { Textfield } from "src/components/modules/Atoms/Textfield";
import { ButtonModule } from 'src/components/modules/Atoms/Button';
import { Form } from 'src/components/modules/Organisms/Form';

import { SigninTypes, CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";
import { EntryTypes } from "src/components/modules/Organisms/Form/Form.types";

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

  const [loginData, setLoginData] = useState<SigninTypes>({
    email: '',
    password: '',
  });
  console.log(loginData)

  const handleSubmit = () => {
    console.log("submit data Login")
  }

  const handleDataCollected = useCallback((collectedData) => {
    const { event, type } = collectedData;
    Object.keys(loginData).map(key => {
      if (key === type) setLoginData({ ...loginData, [key]: event });
    });
  }, [loginData])

  const listEntries: EntryTypes[] = [
    {
      id: `${CONSTANTS_ENTRY.email}-signin`,
      name: CONSTANTS_ENTRY.email,
      label: t.labels.email,
      error: false,
      helperText: "Error en email",
      autocomplete: false,
      type: CONSTANTS_ENTRY.email,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.email })
    },
    {
      id: `${CONSTANTS_ENTRY.password}-signin`,
      name: CONSTANTS_ENTRY.password,
      label: t.labels.password,
      error: false,
      helperText: "Error en password",
      autocomplete: false,
      type: CONSTANTS_ENTRY.password,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.password }),
    }
  ]

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signin}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signin}</h1>
        <Form
          styleProps={{ width: 0 }}
          onSubmit={handleSubmit}
          entries={listEntries}
          submitElement={
            <>
              <div className={classes.containerBtn}>
              <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
                <ButtonModule
                  text={t.buttons.signin}
                  submit
                />
                <p className={classes.infoText}>{t.labels.notHaveAccount}&nbsp;<span onClick={() => navigate("/signup")}>{t.title.signup}</span></p>
              </div>
            </>
          }
        />
      </section>
    </div>
  )
}