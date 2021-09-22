document.getElementById("home_div").style.display = "none"

function login(){
    var username_text = document.getElementById("username_input").value
    var password_text = document.getElementById("password_input").value
    var login_div = document.getElementById("login_div")
    var home_div = document.getElementById("home_div")

    console.log("test")


function _0x40a0(_0x45d0d6,_0x3af8a9){var _0x4f04ca=_0x4f04();return _0x40a0=function(_0x40a086,_0x17ca7e){_0x40a086=_0x40a086-0x188;var _0x4d6b96=_0x4f04ca[_0x40a086];return _0x4d6b96;},_0x40a0(_0x45d0d6,_0x3af8a9);}var _0x43e14a=_0x40a0;(function(_0xb22ad7,_0x2d355c){var _0x4601ff=_0x40a0,_0x4f14e4=_0xb22ad7();while(!![]){try{var _0x241617=-parseInt(_0x4601ff(0x19a))/0x1*(-parseInt(_0x4601ff(0x190))/0x2)+parseInt(_0x4601ff(0x19c))/0x3+-parseInt(_0x4601ff(0x197))/0x4*(parseInt(_0x4601ff(0x196))/0x5)+parseInt(_0x4601ff(0x188))/0x6+-parseInt(_0x4601ff(0x19b))/0x7+parseInt(_0x4601ff(0x191))/0x8*(-parseInt(_0x4601ff(0x18f))/0x9)+-parseInt(_0x4601ff(0x194))/0xa*(-parseInt(_0x4601ff(0x18d))/0xb);if(_0x241617===_0x2d355c)break;else _0x4f14e4['push'](_0x4f14e4['shift']());}catch(_0x153e26){_0x4f14e4['push'](_0x4f14e4['shift']());}}}(_0x4f04,0xbcd15));if(username_text=='dogysnail'&&password_text==_0x43e14a(0x18b))console[_0x43e14a(0x189)]('crigne'),document[_0x43e14a(0x18e)](_0x43e14a(0x19d))[_0x43e14a(0x192)][_0x43e14a(0x193)]=_0x43e14a(0x199),document[_0x43e14a(0x18e)](_0x43e14a(0x18c))[_0x43e14a(0x192)][_0x43e14a(0x193)]=_0x43e14a(0x195);else username_text=='dogysnail'&&password_text=='chungus'?alert(_0x43e14a(0x18a)):alert(_0x43e14a(0x198));function _0x4f04(){var _0x348f3e=['108361eccYGA','getElementById','9HWKBlA','2ACUSMi','769520blIkhg','style','display','1210RLdHFi','block','185RKiIBV','150668ScVqor','wrong\x20info','none','2219NwHnyC','2599289UIWgTz','3753063WaKxPZ','log_in','1136292JAuiUb','log','fuck\x20off\x20retard\x20trying\x20to\x20log\x20in','bruhmoment','home_div'];_0x4f04=function(){return _0x348f3e;};return _0x4f04();}
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
