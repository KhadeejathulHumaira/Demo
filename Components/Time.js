import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import style from './Header.module.css'

function Time() {
    return (
        <div className={style.subLeft}>
        <AccessTimeIcon />
       <p className={style.counter}> 27 hours 13 minutes left</p>
    </div>
    )
}

export default Time
