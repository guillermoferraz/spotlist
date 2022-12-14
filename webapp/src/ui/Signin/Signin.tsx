import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/* Store */
import { RootState, useAppDispatch } from "src/services/Store";
import AuthSlice, { Signin as Login, VerifyToken } from 'src/application/Auth';


/* Modules */
import { Logo } from 'src/components/modules/Atoms/Logo';
import { ButtonModule } from 'src/components/modules/Atoms/Button';
import { Form } from 'src/components/modules/Organisms/Form';
import { Loading } from 'src/components/modules/Layouts/Loading';
import { Snakbar } from 'src/components/modules/Atoms/Snackbar';

import { SigninTypes, CONSTANTS_ENTRY } from "src/components/schemas/Auth.Schema";
import { EntryTypes, ErrorRegisterTypes } from "src/components/modules/Organisms/Form/Form.types";
import { isValidEmail, isValidPassword } from "src/application/Validators";
import { SplitScreen } from 'src/components/modules/Organisms/SplitScreen';

/* Styles */
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import styles from './Signin.styles';

export const Signin = () => {
  const navigate = useNavigate();
  const mediaQueryTheme = useTheme()
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery(mediaQueryTheme.breakpoints.down('sm'))
  const { theme, t } = useSelector((state: RootState) => state.Settings);
  const { signinResponse, loading, verifyResponse } = useSelector((state: RootState) => state.Auth)
  const { setVerifyToken, setSaveToken } = AuthSlice.actions;
  const classes = styles(theme)

  const [loginData, setLoginData] = useState<SigninTypes>({
    email: '',
    password: '',
  });
  type ErrorsLogin = Omit<ErrorRegisterTypes, 'confEmail' | 'helperConfEmail' | 'confPassword' | 'helperConfPassword'>
  const [errors, setErrors] = useState<ErrorsLogin>({
    email: false,
    helperEmail: '',
    password: false,
    helperPassword: '',
  });
  const [showPass, setShowPass] = useState<{[key:string]: boolean}>({ password: false })
  const [token, setToken] = useState<string>('');


  const [openAlert, setOpenAlert] = useState<{type: string, message: string, open: boolean }>({
    type: '',
    message: '',
    open: false,
  })

  const handleShowPass = (entry) => {
    if (entry === CONSTANTS_ENTRY.password) setShowPass({ password: !showPass.password })
  }

  const translateMessage = (msg) => {
    switch(msg){
      case 'User not registered':
        return t.alerts.userNotFound
      case "The password given is not correct":
        return t.alerts.incorrectPassword
      case 'Success login':
        return t.alerts.successLogin
      default:
        return ""
    }
  }

  const handleRedirectToken = (token: string) => {
    setToken(token)
    dispatch(VerifyToken(token))
  }
  const handleRedirectHome = () => {
    setOpenAlert({ type: '', message: '' , open: false});
    navigate('/spotifyLogin')
  }

  useEffect(() => {
    if(verifyResponse && verifyResponse?.message === 'Access Success'){
      dispatch(setSaveToken({ token: token }));
      dispatch(setVerifyToken({ value: '' }))
      setToken('');
      setOpenAlert({ type: 'success', message: translateMessage(signinResponse.detail) , open: true});
      setTimeout(handleRedirectHome, 1000)
    }
  },[verifyResponse])

  useEffect(() => {
    if(signinResponse){
      switch(signinResponse.detail){
        case 'User not registered':
        case 'The password given is not correct':
          setOpenAlert({ type: 'error', message: translateMessage(signinResponse.detail) , open: true});
          break;
        case 'Success login':
          handleRedirectToken(signinResponse.token)
          break;          
        default:
          setOpenAlert({ type: '', message: '' , open: false });
          break;
      }
    }
  },[signinResponse])

  const handleSubmit = () => {
    if (
      !errors.email && loginData.email !== '' &&
      !errors.password && loginData.password !== ''
    ) dispatch(Login(loginData))
    else {
      const emptyEntries = Object.entries(loginData).filter(v => v[1] === '')
      emptyEntries.length > 0 && emptyEntries.reverse().map(entry => {
        const key = entry[0];
        const helper = key[0].toUpperCase() + key.substring(1)
        setErrors({ ...errors, [key]: true, ['helper' + helper]: t.errors.required })
      })
    }
  }

  const handleDataCollected = useCallback((collectedData) => {
    const { event, type } = collectedData;
    Object.keys(loginData).map(key => {
      if (key === type) setLoginData({ ...loginData, [key]: event });
    });
    switch (type) {
      case (CONSTANTS_ENTRY.email):
        if (!event.match(isValidEmail)) setErrors({ ...errors, email: true, helperEmail: t.errors.email });
        else setErrors({ ...errors, email: false, helperEmail: '' });
        break;
      case (CONSTANTS_ENTRY.password):
        if (!event.match(isValidPassword)) setErrors({ ...errors, password: true, helperPassword: t.errors.password });
        else setErrors({ ...errors, password: false, helperPassword: '' });
        break;
      default:
    }
  }, [loginData])

  const handleClose = () => {
    setOpenAlert({ ...openAlert, open: false  })
  }

  const listEntries: EntryTypes[] = [
    {
      id: `${CONSTANTS_ENTRY.email}-signin`,
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
      id: `${CONSTANTS_ENTRY.password}-signin`,
      name: CONSTANTS_ENTRY.password,
      label: t.labels.password,
      error: errors.password,
      helperText: errors.helperPassword,
      autocomplete: false,
      type: !showPass.password ? CONSTANTS_ENTRY.password : 'text',
      onChange: (event) => handleDataCollected({ event: event.currentTarget.value, type: CONSTANTS_ENTRY.password }),
      iconEntry: <>
        <KeyOutlinedIcon style={{ color: theme.colorPalletPrimary, marginRight: 10 }} />
        {!showPass.password ?
          <VisibilityOutlinedIcon style={{ color: theme.colorPalletPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.password)} />
          : <VisibilityOffOutlinedIcon style={{ color: theme.colorPrimary }} onClick={() => handleShowPass(CONSTANTS_ENTRY.password)} />}
      </>
    }
  ]
  return (
    <div className={classes.root}>
      <title>{`${t.appName} | ${t.title.signin}`}</title>
      {loading && <Loading/>}
      {openAlert.open && <Snakbar type={openAlert.type} message={openAlert.message} setOpen={handleClose} open={openAlert.open} />}
      <div className={!mobile ? classes.split : classes.noSplit}>
      {!mobile && <SplitScreen/>}
      <section className={classes.content}>
        {mobile && <Logo />}
        <h1 className={classes.title}>{t.title.signin}</h1>
        <Form
          styleProps={{ width: 0 }}
          entries={listEntries}
          onKeyDown={(event) => event.key === "Enter" && handleSubmit()}
          submitElement={
            <>
              <div>
                <p className={classes.infoText}>{t.labels.notRememberPassword}&nbsp;<span>{t.labels.recover}</span></p>
                <ButtonModule
                  text={t.buttons.signin}
                  submit={false}
                  onClick={() => handleSubmit()}
                />
                <p className={classes.infoText}>{t.labels.notHaveAccount}&nbsp;<span onClick={() => navigate("/signup")}>{t.title.signup}</span></p>
              </div>
            </>
          }
        />
      </section>
      </div>
    </div>
  )
}