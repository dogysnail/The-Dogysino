
var giftcard_sent = 0
var warning = 0
 var times_gambled = 0

 var total_bet = 0
 var giftcard_used = false
 var cash_amnt = 0
var cookiemonster = document.cookie







function loadCookies(){

    var black = document.cookie
    console.log(black)

    black = parseInt(black)



    if (black > 1){
        Add_Funds(black)
        console.log("loaded cookies")
        
    }
    
    else {
        console.log("Error (No Money Yet)")
    }
    
}



function saveCookies(){
    document.cookie = cash_amnt
    
    console.log("saved cookies")

}


function deleteCookies(){
    document.cookie = document.cookie + " ;expires = Thu, 01 Jan 1970 00:00:00 GMT"
    console.log("deleted cookies")
}

 



    function clear_tables() {
        var horse = document.getElementById("input-text").value = ""
        var bet = document.getElementById("bet-text").value = ""
    }



function test() {
    
    cash_amnt = parseInt(cash_amnt)
    var cash = document.getElementById("cash")
    var win_lose_text = document.getElementById("win-lose")
    var bet_text = document.getElementById("bet-amount")
    var horse = document.getElementById("input-text").value
    var bet = document.getElementById("bet-text").value
    var winnings = bet *2.5

    if (Math.sign(cash_amnt) == 1 && cash_amnt >= bet && Math.sign(bet) == 1){

        console.log("user has bet: " + bet)




          const generateRandomNumber = (min, max) =>  {
        return Math.floor(Math.random() * (max - min) + min);
          };
        var winner = (generateRandomNumber(1, 6));
          console.log("the winning number was " + winner)

        if (winner == horse){
        win_lose_text.innerHTML = "You won " + winnings + "$"
        cash_amnt = cash_amnt + winnings
    
    }
        else {
        win_lose_text.innerHTML = "You lost " + bet + "$"
        cash_amnt = cash_amnt - bet

    } 






    cash.innerHTML = "Your wallet: " + cash_amnt + "$"
    console.log(cash_amnt)
    times_gambled = times_gambled + 1
    console.log(times_gambled)

    bet = parseInt(bet)



    total_bet = total_bet + bet
    console.log(total_bet)
    saveCookies()


    bet_text.innerHTML = "You spent " + total_bet + "$" 

   if (times_gambled == 10){
    var play_again = prompt("You have played over 10 times and it seems a bit much, Are you sure you wanna play more? (Yes / No) Leaving no answer will reset your tables", "No")
    switch(play_again){
        case"yes":
        times_gambled = -100
        break

        case"Yes":
        times_gambled = -100
        break

        case"no":
        clear_tables()
        break

        case"No":
        clear_tables()
        break

        default:
        clear_tables()
        break

    }
   }

   if (cash_amnt <= -500 && warning == 0) {

    var play_again = prompt("You have lost " + cash_amnt + " Already would you like to still continue? (Yes / No)", "No")
    switch(play_again){
        case"yes":
        warning = 1
        break

        case"Yes":
        warning = 1
        break

        case"no":
        clear_tables()
        break

        case"No":
        clear_tables()
        break

    }
       
   }
    }

    else {
        alert("Error Code: 400")
    }

    
}




var giftcard_boolean = false

var testing = document.cookie1

function checkGiftcard(GCnumber){

    var db = firebase.firestore();
    var docRef = db.collection("giftcards").doc(GCnumber);

    docRef.get().then((doc) => {
        if (doc.exists  ) {

            giftcard_boolean = doc.data().used
            console.log(doc.data().used)


            
            
        }
        
        
        else {
            // doc.data() will be undefined in this case
            alert("error");
            console.log(doc.data())
        }

        
        
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
            
    
    
    console.log(giftcard_boolean)


}

function test2(){

    document.cookie1 = cash_amnt
    console.log(cash_amnt)

    console.log(document.cookie1)
 
    
}

function test3(){

    
    
    cash_amnt = cash_amnt + testing
    cash.innerHTML = "Your wallet: " + cash_amnt + "$"
    console.log(testing)
}

function giftcard_updater(){

    var input_Code = document.getElementById("add_funds").value
    

    var db = firebase.firestore();
    var docRef = db.collection("giftcards").doc(input_Code);
   
db.collection("giftcards").doc(input_Code).set({
    
    amount:giftcard_amount,
    giftcard_id:input_Code,
    used:true


})
.then(() => {
    alert("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}

var giftcard_amount = 0

function Giftcard_purchase(){

    var giftcard_code = ""
    var giftcard_amount = 0
    var input_Code = document.getElementById("add_funds").value
    
    console.log(giftcard_boolean)
    checkGiftcard(input_Code)
    var db = firebase.firestore();
    var docRef = db.collection("giftcards").doc(input_Code);

    docRef.get().then((doc) => {
        if (doc.exists && giftcard_boolean == false) {
            
            giftcard_code = doc.data().giftcard_id
            giftcard_amount = doc.data().amount
            
            giftcard_boolean = false
            giftcard_updater()
            
            Add_Funds(giftcard_amount)
            //giftcard_sent = giftcard_sent + 0


            
            
        }
        
        
        else {
            // doc.data() will be undefined in this case
            alert("You have either used a wrong code or you tried to use the code more than once");
            console.log(doc.data())
        }

        
        
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
            
    

            
} 




function Add_Funds(amnt){

   


        cash_amnt = cash_amnt + amnt
        
        cash.innerHTML = "Your wallet: " + cash_amnt + "$"
        
        console.log("added " + cash_amnt + " funds")
        saveCookies()
    }


    function Add_funds_without_cookies (amnt){
        cash_amnt = 0
        
        cash.innerHTML = "Your wallet: " + 0 + "$"
        
        console.log("added " + 0 + " funds")
    }

function SaveData(){

    

    var bet_amount = document.getElementById("bet_amount")
    var user = document.getElementById("username").value
    var password = document.getElementById("pass_input").value
    var db = firebase.firestore();

    checkUser()
    checkPassData()

    console.log(password)







    if (userExists == true){
        if (password_info == password && password != "") {
            db.collection("users").doc(user).set({
    
                cash_amnt:cash_amnt,
                total_spent: total_bet,
                id: password
                
            
            })
            .then(() => {
                alert("Data Was Saved for account: " + user);
                saveCookies()
            })
            .catch((error) => {
                alert("Error Saving Data: ", error);
            });
        }

        else{
            alert("wrong password")
        }
    }

    else{


        if (password == ""){
            alert("Fill in a password")
        }

        else{
            db.collection("users").doc(user).set({
    
                cash_amnt:0,
                total_spent: 0,
                id: password
               
           
            })
            .then(() => {
                alert("New Account created for: " + user);
                deleteCookies()  
                Add_funds_without_cookies(cash_amnt-cash_amnt)  
                
                //saveCookies()
            })
            .catch((error) => {
                alert("Error Saving Data: ", error);
            });
        }
        
         

    }



}



function LoadData(){


    var bet_text = document.getElementById("bet-amount")
    var user = document.getElementById("username").value
    var db = firebase.firestore();
    var docRef = db.collection("users").doc(user);
    var password = document.getElementById("pass_input").value


    checkPassData()

    if (password_info == password){
        
        console.log(password)

        docRef.get().then((doc) => {
            if (doc.exists) {
                
                cash_amnt = doc.data().cash_amnt
                total_bet = doc.data().total_spent
                cash.innerHTML = "Your wallet: " + cash_amnt + "$"
                bet_text.innerHTML = "You have spent " + total_bet + "$" 
                alert("Data was loaded for: " + user)
                saveCookies()
    
                
            }
            
            
            else {
                // doc.data() will be undefined in this case
                alert("This user doesnt exist");
                console.log(doc.data())
            }
    
            
            
        }).catch((error) => {
            console.log("Error getting user info: ", error);
        });
    }

    else {
        alert("Wrong Password")
    }
   

}

var password_info = ""
var userExists = false

function checkPassData(){

    var password = document.getElementById("pass_input").value
    var user = document.getElementById("username").value
    var db = firebase.firestore();
    var docRef = db.collection("users").doc(user);

    docRef.get().then((doc) => {
        if (doc.exists) {
            
           password_info = doc.data().id
            

            
        }
        
        
        else {
            // doc.data() will be undefined in this case
            alert("This user doesnt exist");
            console.log(doc.data())
        }

        
        
    }).catch((error) => {
        console.log("Error getting user info: ", error);
    });

}

function checkUser(){

    var password = document.getElementById("pass_input").value
    var user = document.getElementById("username").value
    var db = firebase.firestore();
    var docRef = db.collection("users").doc(user);

    docRef.get().then((doc) => {
        if (doc.exists) {
            
           
            userExists = true

            
        }
        
        
        else {
            // doc.data() will be undefined in this case
            userExists = false
        }

        
        
    }).catch((error) => {
        console.log("Error getting user info: ", error);
    });
}