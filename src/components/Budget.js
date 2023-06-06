import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = ({currencyPrefix}) => {
    const [budget,setBudget] = useState("");
    const {expenses,dispatch} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
      };
    
      const handleBudgetBlur = () => {
        if (budget !== '' && parseInt(budget) < totalExpenses) {
          alert("Budget can't be lower than spending " + totalExpenses + currencyPrefix);
          setBudget('');
        }
        else if(budget !== '' && parseInt(budget) > 20000){
            alert("Budget can't be more than 20000" + currencyPrefix);
            setBudget("");
        }
        else{
            dispatch({
              type: "SET_BUDGET",
              payload: budget,
            })
        }
      }; 
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currencyPrefix}<input id="budget" type="number" max="20000" 
            step={10} 
            value={budget} 
            onChange={handleBudgetChange}
            onBlur={handleBudgetBlur} 
            /></span>
        </div>
    );
};

export default Budget;

/* Here, you are using the Bootstrap Alert classes to give a 
nice gray background by adding some text and hard coding a value.
*/