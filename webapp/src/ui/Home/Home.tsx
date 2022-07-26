// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { RootState } from 'src/services/Store';

import styles from './Home.module.css'
import { useEffect } from 'react';

export const Home = () => {
  const navigate = useNavigate();

  // const { t } = useSelector((state: RootState) => state.Settings)
  const user = false;


  useEffect(() => {
    if(!user) navigate('/signin')
  },[])
  
  return (
    <div className={styles.home}>
      <title>Spotlist | Home</title>
    </div>
  )
}
