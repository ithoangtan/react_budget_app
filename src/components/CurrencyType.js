
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const selectCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
        setIsOpen(false);
    };


    return (
        <div className={`alert alert-success`}>

            <div className="dropdown">
                <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    onClick={toggleOpen}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    Currency ({currency})
                </button>

                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    <button className="dropdown-item" type="button" onClick={() => selectCurrency("$")}>$ Dollar</button>
                    <button className="dropdown-item" type="button" onClick={() => selectCurrency("£")}>£ Pound</button>
                    <button className="dropdown-item" type="button" onClick={() => selectCurrency("€")}>€ Euro</button>
                    <button className="dropdown-item" type="button" onClick={() => selectCurrency("₹")}>₹ Rupee</button>
                </div>
            </div>
        </div>
    );
};
export default Remaining;