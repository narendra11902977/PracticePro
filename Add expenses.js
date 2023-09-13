import React, { useState } from 'react';

const AddExpense = ({ onAddExpense }) => {
  // State to manage the expense form fields
  const [expenseData, setExpenseData] = useState({
    date: '',
    category: '',
    amount: 0,
    description: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleAddExpense = (e) => {
    e.preventDefault();
    // You can add additional validation here if needed

    // Pass the expense data to the parent component or a function for further processing
    onAddExpense(expenseData);

    // Clear the form fields
    setExpenseData({
      date: '',
      category: '',
      amount: 0,
      description: '',
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleAddExpense}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={expenseData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={expenseData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={expenseData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;

import React from 'react';
import ReactDOM from 'react-dom';
import AddExpense from './AddExpense'; // Import the AddExpense component

function App() {
  // Function to handle adding an expense (you would implement this)
  const handleAddExpense = (expenseData) => {
    console.log('Expense added:', expenseData);
    // You would typically send this data to a server or update your application state.
  };

  return (
    <div>
      <h1>Expense Management App</h1>
      {/* Render the AddExpense component and pass the handleAddExpense function */}
      <AddExpense onAddExpense={handleAddExpense} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')); // Replace 'root' with your root HTML element ID
