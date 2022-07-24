import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState, useAppDispatch } from '../../services/Store';
import { Signin } from '../../application/Auth';

import styles from './Home.module.css'
import { useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { signinResponse, loading } = useSelector((state: RootState) => state.Auth)
  const { t } = useSelector((state: RootState) => state.Settings)
  const user = false;


  useEffect(() => {
    if(!user) navigate('/signin')
  },[])

  const handleData = () => {dispatch(Signin({email: 'test.com', password: '123456'}))}
  
  return (
    <div className={styles.home}>
      <title>Spotlist | Home</title>
      <button onClick={() => handleData()}>Test Dispatch</button>
      <h1>{signinResponse.email || ""}</h1>
      <h1>{signinResponse.password || ""}</h1>
    </div>
  )
}
