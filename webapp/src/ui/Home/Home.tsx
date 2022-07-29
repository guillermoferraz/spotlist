import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Store */
import { RootState } from 'src/services/Store';
import { useAppDispatch } from 'src/services/Store';
import { getUser } from 'src/application/User';

import styles from './Home.module.css'

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.User);


  useEffect(() => {
    dispatch(getUser())
  },[])


  console.log('user on home:', user)

  return (
    <div className={styles.home}>
      <title>Spotlist | Home</title>
    </div>
  )
}
