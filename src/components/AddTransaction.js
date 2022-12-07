import React, {useState} from 'react'

 function AddTransaction(props)  {

    const [addedText, setText] = useState('');
    const [addedAmount, setAmount] = useState('');
    
    function changeText(e){
        console.log(e.target.value);
        setText(e.target.value);
    }
    function changeAmount(e){
        console.log(e.target.value);
        setAmount(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();   
        if(addedText.trim().length === 0 || addedAmount.trim().length === 0){
            setText('');
            setAmount('');
            alert('Please Full the fields');
        }
        else{
        props.addExpense(addedText,addedAmount);
        setText('');
        setAmount('');
        }
        
       
    }

  return (
    <>
       <h3>Add new transaction</h3>
        <form onSubmit={onSubmit} id="form">
            <div className="form-control">
                <label htmlFor="text">
                    Text
                </label>
                <input 
                value={addedText} 
                onChange={changeText}  
                type="text" 
                id="text" 
                placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input 
                value={addedAmount} 
                onChange={changeAmount} 
                type="number" 
                id="amount" 
                placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction;