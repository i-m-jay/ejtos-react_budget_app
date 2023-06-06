import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
// import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import { AppProvider } from './context/AppContext';

const App = () => {
    const [currencyPrefix, setCurrencyPrefix] = useState('£');
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const handleCurrencyChange = (value) => {
        setCurrencyPrefix(value);
    };
    const handleDropdownClick = ()=>{
        setDropDownOpen(!dropDownOpen);
    }
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Add Budget component here under */}
                    <div className='col-sm'>
                        <Budget currencyPrefix={currencyPrefix} />
                    </div>

                    {/* Add Remaining component here under */}
                    <div className='col-sm'>
                        <Remaining currencyPrefix={currencyPrefix} />
                    </div>

                    {/* Add ExpenseTotal component here under */}
                    <div className='col-sm'>
                        <ExpenseTotal currencyPrefix={currencyPrefix} />
                    </div>
                    <div className={`dropdown ${dropDownOpen ? 'open' : ''} col-sm`} onClick={handleDropdownClick}>
                        <button className="dropdown-toggle" type="button">
                            Currency (£ Pound)
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={()=>handleCurrencyChange('£')} value='£'>£ Pound</li>
                            <li onClick={()=>handleCurrencyChange('$')} value='$'>$ Dollar</li>
                            <li onClick={()=>handleCurrencyChange('€')} value='€'>€ Euro</li>
                            <li onClick={()=>handleCurrencyChange('₹')} value='₹'>₹ Ruppee</li>                           
                        </ul>
                    </div>
                </div>

                {/* Add ExpenseList component here under */}
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList currencyPrefix={currencyPrefix} />
                    </div>
                </div>

                {/* Add ExpenseItem component here under */}
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    {/* Add AllocationForm component here under */}
                    <div className='col-sm'>
                        <AllocationForm currencyPrefix={currencyPrefix} />
                    </div>
                </div>
            </div>
        </AppProvider >
    );
};
export default App;

/*
Here, you are importing different components,adding a bootstrap container 
that helps you center your App on the page

    Adding a title
    Adding a Bootstrap row
    Adding a column within the row for each of your components so far
    Imported and Rendered the AllocationForm
    Imported AppProvider and Nested components in the AppProvider element.

*/
