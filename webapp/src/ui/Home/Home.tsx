import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import { getUser } from 'src/application/User';

/* Modules */
import { AccessDenied } from 'src/components/modules/Layouts/AccessDenied';

import styles from './Home.module.css'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.User);
  const { t } = useSelector((state: RootState) => state.Settings);
  const [denied, setDenied] = useState(false);


  useEffect(() => {
    dispatch(getUser())
  },[])

  const redirectLogin = () => { navigate('/signin') }

  useEffect(() => {
    if(user && user?.access === 'Denied') {
      setDenied(true)
      setTimeout(redirectLogin, 1500)
    }
    else setDenied(false)
  },[user])

  console.log('user on home:', user)

  return (
    <div className={styles.home}>
      <title>{t.appName}&nbsp;|&nbsp;{t.title.home}</title>
      {denied && <AccessDenied/>}
    </div>
  )
}
