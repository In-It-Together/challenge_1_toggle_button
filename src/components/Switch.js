import React from 'react';
import './Switch.css';
import pikachu from '../media/pikachubutton_original.png';

const Switch = ({ buttonOn, handleToggle, onColor}) => {
    return(
        <button
            className={buttonOn ? 'buttonOn' : 'buttonOff'}
            onClick={ () => { handleToggle() } }
        >
            <img src={pikachu} />
            {/* {buttonOn ? 'ON' : 'OFF'} */}
        </button>
    )
}

export default Switch;