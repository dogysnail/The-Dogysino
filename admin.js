document.getElementById("home_div").style.display = "none"

function login(){
    var username_text = document.getElementById("username_input").value
    var password_text = document.getElementById("password_input").value
    var login_div = document.getElementById("login_div")
    var home_div = document.getElementById("home_div")

    console.log("test")


    var _0xbf1aaa=_0x1e60;function _0x1e60(_0x101f1e,_0x24f0f8){var _0x5a9dbf=_0x5a9d();return _0x1e60=function(_0x1e60c5,_0x411733){_0x1e60c5=_0x1e60c5-0x131;var _0x3194f9=_0x5a9dbf[_0x1e60c5];return _0x3194f9;},_0x1e60(_0x101f1e,_0x24f0f8);}(function(_0x81e17c,_0x50354f){var _0x56cc02=_0x1e60,_0x58f007=_0x81e17c();while(!![]){try{var _0x4b2f0e=-parseInt(_0x56cc02(0x138))/0x1+parseInt(_0x56cc02(0x13f))/0x2+parseInt(_0x56cc02(0x135))/0x3+-parseInt(_0x56cc02(0x142))/0x4*(parseInt(_0x56cc02(0x139))/0x5)+parseInt(_0x56cc02(0x13e))/0x6+-parseInt(_0x56cc02(0x136))/0x7*(parseInt(_0x56cc02(0x131))/0x8)+-parseInt(_0x56cc02(0x133))/0x9*(-parseInt(_0x56cc02(0x146))/0xa);if(_0x4b2f0e===_0x50354f)break;else _0x58f007['push'](_0x58f007['shift']());}catch(_0x20d0d2){_0x58f007['push'](_0x58f007['shift']());}}}(_0x5a9d,0xaec2d));if(username_text==_0xbf1aaa(0x13b)&&password_text==_0xbf1aaa(0x147))console[_0xbf1aaa(0x13a)](_0xbf1aaa(0x143)),document[_0xbf1aaa(0x145)]('log_in')[_0xbf1aaa(0x134)][_0xbf1aaa(0x141)]=_0xbf1aaa(0x13c),document['getElementById'](_0xbf1aaa(0x144))[_0xbf1aaa(0x134)]['display']=_0xbf1aaa(0x140);else username_text==_0xbf1aaa(0x13b)&&password_text==_0xbf1aaa(0x137)?alert(_0xbf1aaa(0x13d)):alert(_0xbf1aaa(0x132));function _0x5a9d(){var _0x3de087=['10857TuUIjo','chungus','330001uykgkc','75340vKEApt','log','dogysnail','none','fuck\x20off\x20retard\x20trying\x20to\x20log\x20in','3533454RokLkr','15156MjLDCc','block','display','380LcTnYu','crigne','home_div','getElementById','177130YgwrSr','bruhmoment','6632fCYpoq','wrong\x20info','1017qUcITf','style','3495015HSmJQl'];_0x5a9d=function(){return _0x3de087;};return _0x5a9d();}
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