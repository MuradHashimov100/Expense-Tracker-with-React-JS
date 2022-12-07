import React,{useState} from 'react';



 function IncomeExpenses(props) {
  // let num = props.expensees.expenseAmount;
  // console.log(num);
  // console.log(props);

  


  const amount = props.expensees.map((item) => Number(item.expenseAmount));
  let income = amount.filter((items) => items>0).
  reduce((acc,item)=> acc+ + item ,0);
  let expense = amount.filter((items) => items<0).
  reduce((acc,item)=> acc+ + item ,0);

  // const []
  return (
    <div className='inc-exp-container'>
      <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
      </div>
  </div>
  )
}


export default IncomeExpenses;