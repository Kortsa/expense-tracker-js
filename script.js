// let expense_list = []

// function addExpenses() {
//     const item = prompt("Please enter item")
//     const price = prompt ("Please enter the price")
//     dispplay(item, price)
// }

// function dispplay(item, price) {
//     const result = document.getElementById("expense-list")
//     const expense = {
//         name: item,
//         amount: price
//     };

//     expense_list.push(expense)

//     const expenseList  = document.createElement("div")

//     expenseList.innerHTML = `<span class="expenseName">${expense.name}</span>: <span class="expenseAmount">$${expense.amount}</span>`;
//     result.appendChild(expenseList);
// }


const addExpenseBtn = document.querySelector(".add-expense-btn")
const expenseList = document.querySelector(".expense-list")
const totalExpense = document.querySelector(".total-expenses h3")

let expenses = []
let total = 0;

function addExpense() {
    const description = prompt ("Enter expense description")
    const amount = parseFloat(prompt("Enter expense amount"));

    if (description && amount) {
        const expense = {
            description: description,
            amount: amount,
        };

        expenses.push(expense);
        total += amount
    }

    dispplayExpense()
}

addExpenseBtn.addEventListener("click", addExpense);

function dispplayExpense() {
    let html = ""
    expenses.forEach(expense =>{
        html += 
    `   <div class="expense-item">
        <div class="expense-item-description">${expense.description}</div>
        <div class="expense-item-amount">${expense.amount}</div>
        <button class="delete-expense-btn">&times;</button>
        </div>
    `;
    });

    expenseList.innerHTML = html;
    totalExpense.innerText = `totalExpenses:GHc ${total}`;
}

function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    dispplayExpense()
}

expenseList.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-expense-btn")){
        const index = Array.from(e.target.parentNode.parentNode.children).indexOf(
            e.target.parentNode
        );
        deleteExpense(index)
    }

   
})