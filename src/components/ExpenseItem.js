import React, { useContext } from 'react';
import {FaPlusCircle} from "react-icons/fa";
import {FaMinusCircle} from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) =>{
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currencyPrefix}{props.cost}</td>
        <td><FaPlusCircle
        color="green" size="2em" opacity="90%"
        onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle 
        color="	#B22222" size="2em" opacity="90%" 
        onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

/*
Here, you are dispatching an action. Your action contains the type 
(so the reducer knows how to update the state) and the payload. 
In this case you are passing the ID of this expense 
(which you get from props when you rendered the ExpenseList).
*/
