// App.js
import React from 'react';
import AddExpense from './AddExpense';

function App() {
  return (
    <div>
      <h1>Expense Management App</h1>
      <AddExpense />
    </div>
  );
}

export default App;
// AddExpense.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

function AddExpense() {
  const [expenseData, setExpenseData] = useState({
    date: '',
    category: '',
    amount: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  const handleAddExpense = () => {
    // You can implement logic to handle adding the expense data here
    console.log('Expense data:', expenseData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        Add Expense
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              name="date"
              value={expenseData.date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={expenseData.category}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Amount"
              name="amount"
              value={expenseData.amount}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={expenseData.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddExpense}
          fullWidth
        >
          Add Expense
        </Button>
      </form>
    </Container>
  );
}

export default AddExpense;
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
