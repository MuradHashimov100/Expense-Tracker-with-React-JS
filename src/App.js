import React, {useState} from 'react';
import  Header  from './components/Header';
import  Balance  from './components/Balance';
import  IncomeExpenses  from './components/IncomeExpenses';
import  TransactionList  from './components/TransactionList';
import  AddTransaction  from './components/AddTransaction';




import './App.css';
// import Transaction from './components/Transaction';

function App() {
  const [expenseInfo, setExpenseInfo] = useState([]);

  const addExpense = (eText, eAmount) => {
    setExpenseInfo((prevExpense) => {
      return [
        ...prevExpense,
        { expenseText: eText, expenseAmount: eAmount, id: Math.random().toString()},
      ];
    });
  };
  // const deleteExpense = ((eText,eAmount) =>{
  //   expenseInfo((prevExpense)=>{
  //     return[
  //       ...prevExpense,
  //       {
  //         expenseText: eText, expenseAmount: eAmount, id: Math.random().toString() 
  //       }
  //     ]
  //   })
  // })


  return (
   <main>
    <Header/>
      <div className="container">
        <Balance  expensees={expenseInfo}/>
        <IncomeExpenses expensees={expenseInfo} />
        <TransactionList setExpenseInfo={setExpenseInfo} expensees={expenseInfo}  />
        <AddTransaction   addExpense={addExpense}/>
      </div>
   </main>
  );
}



export default App;
