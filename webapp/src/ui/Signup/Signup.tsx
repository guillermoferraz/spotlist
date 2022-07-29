import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* Store */
import { RootState, useAppDispatch } from "../../services/Store";
import AuthSlice, { Signup as sendFormData } from "src/application/Auth";

/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { ButtonModule } from 'src/components/modules/Atoms/Button';
import { Form } from "src/components/modules/Organisms/Form";
import { Snakbar } from "src/components/modules/Atoms/Snackbar";

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import styles from './Signup.styles';

/* Cofigs & Types */
import { SignupTypes, CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";
import { EntryTypes, ErrorRegisterTypes } from "src/components/modules/Organisms/Form/Form.types";
import { isValidEmail, isValidPassword } from "src/application/Validators";

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'));
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const { signupResponse } = useSelector((state: RootState) => state.Auth);
  const { setSignupResponse } = AuthSlice.actions;
  const classes = styles(theme);

  const [registerData, setRegisterData] = useState<SignupTypes>({
    email: '',
    confEmail: '',
    password: '',
    confPassword: '',
  });
  const [errors, setErrors] = useState<ErrorRegisterTypes>({
    email: false,
    helperEmail: '',
    confEmail: false,
    helperConfEmail: '',
    password: false,
    helperPassword: '',
    confPassword: false,
    helperConfPassword: ''
  });
  const [showPass, setShowPass] = useState<{ [key: string]: boolean }>({
    password: false,
    confPassword: false
  });
  const [alertResponse , setAlertResponse] = useState({
    open: false,
    message: '',
    type: ''
  })


  const handleCleanResponse = (type: string) => {
    if(type === 'success'){
      dispatch(setSignupResponse({ message: '' }))
      setAlertResponse({ open: false, message: '', type: '' })
      navigate('/signin')
    } else {
      dispatch(setSignupResponse({ message: '' }))
    }
  }

  useEffect(() => {
    switch(signupResponse.message){
      case 'The email entered already exists':
        setAlertResponse({
          open: true,
          message: t.alerts.emailAlreadyExist,
          type: 'error'
        })
        setTimeout(() => { handleCleanResponse('error') }, 1500)
        break;
      case 'Success':
        setAlertResponse({
          open: true,
          message: t.alerts.successRegister,
          type: 'success'
        })
        setTimeout(() => { handleCleanResponse('success') }, 1500)
        break;
      default:
        setAlertResponse({
          open: false,
          message: '',
          type: ''
        })
    }
  },[signupResponse])

  const handleSubmit = () => {
    if (
      !errors.email && registerData.email !== '' &&
      !errors.confEmail && registerData.confEmail !== '' &&
      !errors.password && registerData.password !== '' &&
      !errors.confPassword && registerData.confPassword !== ''
    ) dispatch(sendFormData({
      email: registerData.email,
      password: registerData.password
    }))
    else {
      const emptyEntries = Object.entries(registerData).filter(v => v[1] === '')
      emptyEntries.length > 0 && emptyEntries.reverse().map(entry => {
        const key = entry[0];
        const helper = key[0].toUpperCase() + key.substring(1)
        setErrors({ ...errors, [key]: true, ['helper' + helper]: t.errors.required })
      })
    }
  }

  const handleDataCollected = useCallback((collectedData) => {
    const { event, type } = collectedData;
    Object.keys(registerData).map(key => {
      if (key === type) setRegisterData({ ...registerData, [key]: event });
    });
    switch (type) {
      case (CONSTANTS_ENTRY.email):
        if (!event.match(isValidEmail)) setErrors({ ...errors, email: true, helperEmail: t.errors.email });
        else setErrors({ ...errors, email: false, helperEmail: '' });
        break;
      case (CONSTANTS_ENTRY.confEmail):
        if (event !== registerData.email) setErrors({ ...errors, confEmail: true, helperConfEmail: t.errors.confEmail });
        else setErrors({ ...errors, confEmail: false, helperConfEmail: '' });
        break;
      case (CONSTANTS_ENTRY.password):
        if (!event.match(isValidPassword)) setErrors({ ...errors, password: true, helperPassword: t.errors.password });
        else setErrors({ ...errors, password: false, helperPassword: '' });
        break;
      case (CONSTANTS_ENTRY.confPassword):
        if (event !== registerData.password) setErrors({ ...errors, confPassword: true, helperConfPassword: t.errors.confPassword });
        else setErrors({ ...errors, confPassword: false, helperConfPassword: '' });
        break;
      default:
    }
  }, [registerData])

  const handleShowPass = (entry) => {
    if (entry === CONSTANTS_ENTRY.password) setShowPass({ ...showPass, password: !showPass.password })
    if (entry === CONSTANTS_ENTRY.confPassword) setShowPass({ ...showPass, confPassword: !showPass.confPassword })
  }

  const listEntries: EntryTypes[] = [
    {
      id: `${CONSTANTS_ENTRY.email}-signup`,
      name: CONSTANTS_ENTRY.email,
      label: t.labels.email,
      error: errors.email,
      helperText: errors.helperEmail,
      autocomplete: false,
      type: CONSTANTS_ENTRY.email,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.email }),
      iconEntry: <EmailOutlinedIcon style={{ color: theme.colorPalletPrimary }} />
    },
    {
      id: `${CONSTANTS_ENTRY.confEmail}-signup`,
      name: CONSTANTS_ENTRY.confEmail,
      label: t.labels.confEmail,
      error: errors.confEmail,
      helperText: errors.helperConfEmail,
      autocomplete: false,
      type: CONSTANTS_ENTRY.email,
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confEmail }),
      iconEntry: <EmailOutlinedIcon style={{ color: theme.colorPalletPrimary }} />
    },
    {
      id: `${CONSTANTS_ENTRY.password}-signup`,
      name: CONSTANTS_ENTRY.password,
      label: t.labels.password,
      error: errors.password,
      helperText: errors.helperPassword,
      autocomplete: false,
      type: !showPass.password ? CONSTANTS_ENTRY.password : 'text',
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.password }),
      iconEntry:
        <>
          <KeyOutlinedIcon style={{ color: theme.colorPalletPrimary, marginRight: 10 }} />
          {!showPass.password ?
            <VisibilityOutlinedIcon style={{ color: theme.colorPalletPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.password)} />
            : <VisibilityOffOutlinedIcon style={{ color: theme.colorPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.password)} />}
        </>
    },
    {
      id: `${CONSTANTS_ENTRY.confPassword}-signup`,
      name: CONSTANTS_ENTRY.confPassword,
      label: t.labels.confPassword,
      error: errors.confPassword,
      helperText: errors.helperConfPassword,
      autocomplete: false,
      type: !showPass.confPassword ? CONSTANTS_ENTRY.password : 'text',
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.confPassword }),
      iconEntry:
        <>
          <KeyOutlinedIcon style={{ color: theme.colorPalletPrimary, marginRight: 10 }} />
          {!showPass.confPassword ?
            <VisibilityOutlinedIcon style={{ color: theme.colorPalletPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.confPassword)} />
            : <VisibilityOffOutlinedIcon style={{ color: theme.colorPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.confPassword)} />}
        </>
    }
  ]

  return (
    <div className={classes.root}>
      {alertResponse.open && <Snakbar message={alertResponse.message} type={alertResponse.type} open={alertResponse.open} setOpen={() => setAlertResponse({ open: false, message: '', type: '' })} />}
      <title>{`${t.appName} | ${t.title.signup}`}</title>
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signup}</h1>
        <Form
          styleProps={{ width: 0 }}
          entries={listEntries}
          onKeyDown={(event) => event.key === 'Enter' && handleSubmit()}
          submitElement={
            <>
              <div className={classes.containerBtn}>
                <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
                <ButtonModule
                  text={t.buttons.signup}
                  submit={false}
                  onClick={() => handleSubmit()}
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