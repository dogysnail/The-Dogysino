document.getElementById("home_div").style.display = "none"

function login(){
    var username_text = document.getElementById("username_input").value
    var password_text = document.getElementById("password_input").value
    var login_div = document.getElementById("login_div")
    var home_div = document.getElementById("home_div")

    console.log("test")

  if (username_text == "dogysnail" && password_text == "dogy-snail"){
      login_div.style.display == "none"
      home_div.style.display == "block"
  }
    
  else {
      alert("cringe")
  }



function createGc(){

    var db = firebase.firestore();

    var Giftcard_value = document.getElementById("gc_value_input").value
    var Giftcard_id = document.getElementById("gc_id_input").value

    

    db.collection("giftcards").doc(Giftcard_id).set({
    amount: parseInt(Giftcard_value),
    giftcard_id: parseInt(Giftcard_id),
    used: false
})
.then(() => {
    alert("Giftcard Created");
})
.catch((error) => {
    console.error("There was a error creating this giftcard", error);
});
}





function SaveData(){

    

    var bet_amount = document.getElementById("bet_amount")
    var user = document.getElementById("username").value
    var total_bet = document.getElementById("total_bet").value
    var cash_amnt = document.getElementById("cash_amnt").value
    var db = firebase.firestore();


    total_bet = parseInt(total_bet)
    cash_amnt = parseInt(cash_amnt)

   
db.collection("users").doc(user).set({
    
    cash_amnt:cash_amnt,
    total_spent: total_bet
    

})
.then(() => {
    alert("Data Was Saved for account: " + user);
})
.catch((error) => {
    alert("Error Saving Data: ", error);
});
}

function DeleteAcc(){

    var user = document.getElementById("username").value
    var db = firebase.firestore();
    
    db.collection("users").doc(user).delete().then(() => {
        alert(user + "'s account was successfully deleted!");
    }).catch((error) => {
        alert("Error deleting user: ", error);
    });
}
