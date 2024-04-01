#! /usr/bin/env node

import inquirer from "inquirer";

let todo : string []= [];

while(true){
let input= await inquirer.prompt(
    [
        {
            name:"task",
            type:"input",
            message: "What do You want to add in your to-do-List?"
        },
        {
            name:"addMore",
            type:"list",
            choices:["Yes","No"]
        }
    ]
);

const{task,addMore}=input;
todo.push(task);
if(addMore=="No"){
    console.log("Your To-do-List :");
    for( let i = 0;i<todo.length;i++){
        console.log(todo[i]);
        
    }
    break;
    
}
}