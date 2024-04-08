// registration 
function reg() {
    const account_details =
    {
        userName: user_name.value,
        accNo: acc_no.value,
        passWord: pass_word.value,
    }


    if (account_details.userName == "" || account_details.accNo == "" || account_details.passWord == "") {
        alert("Please fill the account details")
    }

    else {
        if (localStorage.getItem(account_details.accNo)) {
            alert("This account already exists")
        }
        else {
            localStorage.setItem(account_details.accNo, JSON.stringify(account_details))
            alert("Account added successfully")
            window.location = "./sign_in.html"
        }
    }




}




function sign_in() {



    const account_details =
    {

        accNo: acc_no.value,
        passWord: pass_word.value,
    }

// refer employee management for more idea
    if ((account_details.accNo) in localStorage) {
        x = JSON.parse(localStorage.getItem(account_details.accNo))// gives back object account_details in line (4)
        console.log(x);
        if (x.passWord == account_details.passWord) {
            alert("login successfully")
            window.location = "./welcome.html"
            

            }
        else {
            alert("Incorrect username or password, give correct details!!!!")
        }




    }
    else {
        alert("Account not found")
    }
}







