import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '../../services/Store';
import { Signin } from '../../application/Auth';

import styles from './Home.module.css'

export const Home = () => {
  const dispatch = useAppDispatch();

  const { signinResponse, loading } = useSelector((state: RootState) => state.Auth)

  const handleData = () => {dispatch(Signin({email: 'test.com', password: '123456'}))}
  
  return (
    <div className={styles.home}>
      <p>This is a Home</p>
      <button onClick={() => handleData()}>Test Dispatch</button>
      <h1>{signinResponse.email || ""}</h1>
      <h1>{signinResponse.password || ""}</h1>
    </div>
  )
}
