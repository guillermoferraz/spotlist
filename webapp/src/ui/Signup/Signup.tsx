import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* Store */
import { RootState } from "../../services/Store";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { Textfield } from "src/components/modules/Atoms/Textfield";
import { ButtonModule } from 'src/components/modules/Atoms/Button';
import { Form } from "src/components/modules/Organisms/Form";

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from './Signup.styles';

/* Cofigs & Types */
import { SignupTypes, CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";
import { EntryTypes } from "src/components/modules/Organisms/Form/Form.types";

export const Signup = () => {
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'));
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);

  const [registerData, setRegisterData] = useState<SignupTypes>({
    email: '',
    confEmail: '',
    password: '',
    confPassword: '',
  });
  console.log(registerData)

  const handleSubmit = () => {
    console.log('submit data Register')
  }
  const handleDataCollected = useCallback((collectedData) => {
    const { event, type } = collectedData;
    Object.keys(registerData).map(key => {
      if (key === type) setRegisterData({ ...registerData, [key]: event });
    });
  }, [registerData])

  const listEntries: EntryTypes[] = [
    {
      id: `${CONSTANTS_ENTRY.email}-signup`,
      name: CONSTANTS_ENTRY.email,
      label: t.labels.email,
      error: false,
      helperText: "Error en email",
      autocomplete: false,
      type: CONSTANTS_ENTRY.email,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.email })
    },
    {
      id: `${CONSTANTS_ENTRY.confEmail}-signup`,
      name: CONSTANTS_ENTRY.confEmail,
      label: t.labels.confEmail,
      error: false,
      helperText: "Error en email",
      autocomplete: false,
      type: CONSTANTS_ENTRY.email,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confEmail })
    },
    {
      id: `${CONSTANTS_ENTRY.password}-signup`,
      name: CONSTANTS_ENTRY.password,
      label: t.labels.password,
      error: false,
      helperText: "Error en password",
      autocomplete: false,
      type: CONSTANTS_ENTRY.password,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.password }),
    },
    {
      id: `${CONSTANTS_ENTRY.confPassword}-signup`,
      name: CONSTANTS_ENTRY.confPassword,
      label: t.labels.confPassword,
      error: false,
      helperText: "Error en password",
      autocomplete: false,
      type: CONSTANTS_ENTRY.password,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confPassword }),
    }
  ]

  return (
    <div className={classes.root}>
      <title>{`Spotlist | ${t.title.signup}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signup}</h1>
        <Form
          styleProps={{ width: 0 }}
          onSubmit={handleSubmit}
          entries={listEntries}
          submitElement={
            <>
              <div className={classes.containerBtn}>
                <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
                <ButtonModule
                  text={t.buttons.signup}
                  submit
                />
                <p className={classes.infoText}>{t.labels.alreadyAccount}&nbsp;<span onClick={() => navigate("/signin")}>{t.title.signin}</span></p>
              </div>
            </>
          }
        />
      </section>
    </div>
  )
}