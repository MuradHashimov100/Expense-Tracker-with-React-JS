
import React from 'react';


function TransactionList(props) {
  
  function deleteExpense(id){
    const newArr = props.expensees.filter(items => items.id!==id)
    props.setExpenseInfo(newArr);

  }

  return (
   <>
     <ul id="list" className="list">
      {props.expensees.map((items) => (
        <li className={items.expenseAmount>0?`plus` : `minus`} key={items.id}>
          {items.expenseText}
          <span>{items.expenseAmount}</span>
          <button onClick={()=>deleteExpense(items.id)} 
          className="delete-btn">x</button>
        </li> 
      ))}
      </ul>
   </>
  );
}


export default TransactionList;