import React, { useState } from 'react'
import style from './Header.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import Time from './Time'


function Header() {
    const[isClicked,setIsClicked]=useState(false)
    const handleClick=()=>{
        setIsClicked(!isClicked)
    }

    const checkClicked=()=>{
        return isClicked?
        (<div className={style.hiddenDiv}>
                <div className={style.div}></div>
                <h2 className={style.hiddenContact}>Contact us</h2>
                <div className={style.div}></div>
                <h2 className={style.hiddenLogout}>Logout(Khadeejathul)</h2>
                <div className={style.div}></div>
                <Time/>
        </div>):null
    }



    return (
        <div className={style.mainContainer}>
        <div className={style.container}>
         <div className={style.rightSideSubContainer}>
             <h1 className={style.h1}>
                 Trademarkia
             </h1>
         </div>
         <div className={style.leftSideSubContainer}>
            <Time/>
            <p className={style.contact}>Contact us</p>
            <p className={style.greet}>Welcome,<span>Khadeejathul</span></p>
        </div>
        <div className={style.responsiveDiv}>
            <div onClick={handleClick} className={style.menu}>
            <MenuIcon fontSize="large"/>
           
            </div>   
        </div>
        </div>
        {checkClicked()}
        </div>

    )
}

export default Header
