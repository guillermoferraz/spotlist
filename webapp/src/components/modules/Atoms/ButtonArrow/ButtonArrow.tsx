import { useState } from 'react';
import { useSelector } from 'react-redux';
/* Store */
import { RootState } from 'src/services/Store';

/* Styles */
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styles from './ButtonArrow.styles';

export const ButtonArrow = ({layout, onClick}) => {
  const { t, theme } = useSelector((state: RootState) => state.Settings);
  const classes = styles(theme);
  return (
    <div className={classes.root}>
     {layout === 'LISTENING' ? (<NavigateBeforeIcon onClick={onClick}/>) : (<NavigateNextIcon onClick={onClick}/>)}
     <span>{layout === 'LISTENING' ? t.title.home : t.playbackPanel}</span>
    </div>
  )
};