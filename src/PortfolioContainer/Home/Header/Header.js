import React, { useState, useEffect } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtis';
import ScrollService from '../../../utilities/ScrollService'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions] = useState(false)

    const updateCurrentScreen = (currentScreen) =>{
        if(!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)
        return
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = ()=>{
        return(
            TOTAL_SCREENS.map((screen, i)=>{
                <div key={screen.screen_name} className={getHeaderOptionsClass} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            })
        )
    }

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if(index < TOTAL_SCREENS.length -1)
        classes += "header-option-separator";

        if(selectedScreen === index){
            classes += "header-option-option";
            return
        }

        const switchScreen = (index, screen) => {
            let screenComponent = document.getElementById(screen.screen_name)
            if(!screenComponent)
            return;

            screenComponent.scrollIntoView({behaviour: 'smooth'})
            setSelectedScreen(index);
            setShowHeaderOptions(false);
        };

    }

  return (
  <div>
      <div className='header-container' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
          <div className='header-parent'>
                <div className='heade-hamburger' onClick={() => setShowHeaderOptions(!showheaderOptions)}>
                    <FontAwesomeIcon className='header-hanburger-bars' icon={faBars} />
                </div>
                <div className='logo'>
                    <span>KHUMO{'/>'}</span>
                </div>
                <div className={(showHeaderOptions)? "header-options show-harmburger-options": "header-options"}>{getHeaderOptions()}</div>
          </div>
      </div>
  </div>
  )
}
