import React from 'react';

export default class ExpenseForm extends React.Component {
	state = {
		description: ''
	};
	onDescriptionChange = () => {
      const description = e.target.value;
      this.setState(() => ({ description }));
	};
	render() {
		return (
         <div>
           <form>
            <input
              type="text"
              placeholder="description"
              autofocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <input
              type="number"
              placeholder="Amount"
            />
            <textarea
             placeholder="add a note for your expense (optional)"
            >
            </textarea>
            <button>Add Expense</button>
           </form>
         </div>
		)
	}
}