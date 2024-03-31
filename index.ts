#! /usr/bin/env node
import inquirer from "inquirer"
let balance = 100000
let pin:number = 1234
const atm = await inquirer.prompt([
    {name: "Name",message: "Please Write your name",type:"string"},
    {name: "Q1", type: "number", message:"Please enter your pin"},
    
])

if (atm.Q1 === pin){
    console.log("Correct pin code")
    const question = await inquirer.prompt([{
        name:"Q2",
        type:"list",
        message:"Please select the option",
        choices: ["Withdraw","Check Balance"]
        }
    ])
    if (question.Q2 === "Withdraw"){
        const withdrawAmount = await inquirer.prompt([{
            name:"WA",type:"number",message:"Enter your amount"
        }])
        
        if (withdrawAmount.WA > balance){
            console.log("Sorry! Sir you can't wthrow " + withdrawAmount.WA + " " + "from" +" "+ balance)
            const otherwithdrawAmount = await inquirer.prompt([{
                name:"WA",type:"number",message:"Enter your amount"
            }])
            if (otherwithdrawAmount.WA < balance ){
                let BalanceDeduction = balance-otherwithdrawAmount.WA
                console.log(`Dear ${atm.Name} Your remaining balance is = ${BalanceDeduction}`)    
            }
        }else{
            let BalanceDeduction = balance-withdrawAmount.WA
            console.log(`Dear ${atm.Name} Your remaining balance is = ${BalanceDeduction}`)
        }
    }
    else if (question.Q2 === "Check Balance"){
        console.log(balance)
    }}
else{
    console.log("Wrong pin code")
    console.log(`Dear ${atm.Name} please enter the right pin code`)
    const atm1 = await inquirer.prompt([
        {name: "Q1", type: "number", message:"Please enter your pin"},
        
    ])
    if (atm1.Q1 === pin){
        console.log("Correct pin code")
        const question = await inquirer.prompt([{
            name:"Q2",
            type:"list",
            message:"Please select the option",
            choices: ["Withdraw","Check Balance"]
            }
        ])
        if (question.Q2 === "Withdraw"){
            const withdrawAmount = await inquirer.prompt([{
                name:"WA",type:"number",message:"Enter your amount"
            }])
            
            if (withdrawAmount.WA > balance){
                console.log("Sorry! Sir you can't wthrow " + withdrawAmount.WA + " " + "from" +" "+ balance)
                const otherwithdrawAmount = await inquirer.prompt([{
                    name:"WA",type:"number",message:"Enter your amount"
                }])
                if (otherwithdrawAmount.WA < balance ){
                    let BalanceDeduction = balance-otherwithdrawAmount.WA
                    console.log(`Dear ${atm.Name} Your remaining balance is = ${BalanceDeduction}`)    
                }
            }else{
                let BalanceDeduction = balance-withdrawAmount.WA
                console.log(`Dear ${atm.Name} Your remaining balance is = ${BalanceDeduction}`)
            }
        }
        else if (question.Q2 === "Check Balance"){
            console.log(balance)
        }}
    
}
