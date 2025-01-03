//Create a BankAccount class with the following features:

//Properties: accountNumber, balance, accountHolderName.
//Methods: deposit(amount: number), withdraw(amount: number), and getBalance().

interface bankAccountType{
    accountHolderName: string,
    accountNumber:number,
  balance:number
    deposit(amount: number):string, 
    withdraw(amount: number):string, 
    getBalance():string
}

class bankAccount implements bankAccountType{
   public accountHolderName: string
   public  accountNumber:number=0
   public balance:number=0
   constructor(accountHolderName: string,){
        this.accountHolderName=accountHolderName;
        this.accountNumber=this.accountNumber++;
        
    }
    deposit(amount: number): string {
        this.balance+=amount;
        return `you have deposited this amount: ${amount}`
    }
    withdraw(amount: number): string {
        this.balance-=amount;
        return `you have withdraw this amount: ${amount}`
    }
    getBalance(): string {
        return `you balance is ${this.balance}`
    }
}

//Define an enum for user roles (Admin, Editor, Viewer).
// Write a function that takes a role and returns a list of actions the role can perform.

enum roles{
    Admin,
    Editor,
    Viewer
}
function actions(role:number):Object{
    if(role==roles.Admin){
        return {
           assignRole:" can assign task",
           manageTask:"can maage task",
           edit:"can edit as well",
           viewer:"can view also"
        }
    }
    else if(role==roles.Editor){
        return {
            assignRole:"NO",
            manageTask:"No",
            edit:"can edit as well",
            viewer:"can view also"
        }
       
    }
    else{
        return {
            assignRole:"NO",
            manageTask:"No",
            edit:"NO",
            viewer:"can view also"
        }
    }
}
actions(roles.Editor);