import React from 'react';

//Money formatter function

function Balance(props) {
 console.log(props);
 const amount = props.expensees.map((item) => Number(item.expenseAmount));
 let income = amount.filter((items) => items>0).
 reduce((acc,item)=> acc+ + item ,0);
 let expense = amount.filter((items) => items<0).
 reduce((acc,item)=> acc+ + item ,0);
 let balance = income + expense;
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{balance}</h1>
    </>
  )
}

export default Balance;