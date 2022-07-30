<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useEffect } from 'react';
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import { getUser } from 'src/application/User';
<<<<<<< HEAD

/* Modules */
import { AccessDenied } from 'src/components/modules/Layouts/AccessDenied';
=======
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)

import styles from './Home.module.css'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.User);
<<<<<<< HEAD
  const { t } = useSelector((state: RootState) => state.Settings);
  const [denied, setDenied] = useState(false);
=======
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)


  useEffect(() => {
    dispatch(getUser())
  },[])

<<<<<<< HEAD
  const redirectLogin = () => { navigate('/signin') }

  useEffect(() => {
    if(user && user?.access === 'Denied') {
      setDenied(true)
      setTimeout(redirectLogin, 1500)
    }
    else setDenied(false)
  },[user])
=======
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)

  console.log('user on home:', user)

  return (
    <div className={styles.home}>
      <title>{t.appName}&nbsp;|&nbsp;{t.title.home}</title>
      {denied && <AccessDenied/>}
    </div>
  )
}
