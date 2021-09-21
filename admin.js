document.getElementById("home_div").style.display = "none"

function login(){
    var username_text = document.getElementById("username_input").value
    var password_text = document.getElementById("password_input").value
    var login_div = document.getElementById("login_div")
    var home_div = document.getElementById("home_div")

    console.log("test")

    var _0x449c83=_0x1e11;function _0x15ae(){var _0x2dab34=['1088882vKnPXO','style','2640325OejyCz','6431048ZQsdYA','getElementById','1384389fRSvxu','21pYRgYl','dogysnail','1591176dtUKCl','log_in','4775940BWpcpC','91244GbKhmR','display'];_0x15ae=function(){return _0x2dab34;};return _0x15ae();}(function(_0x3d1667,_0x7427a6){var _0x486dfe=_0x1e11,_0x3ccb4a=_0x3d1667();while(!![]){try{var _0x1d91f1=parseInt(_0x486dfe(0x150))/0x1+parseInt(_0x486dfe(0x152))/0x2+parseInt(_0x486dfe(0x157))/0x3+parseInt(_0x486dfe(0x15a))/0x4+parseInt(_0x486dfe(0x154))/0x5+parseInt(_0x486dfe(0x14f))/0x6+-parseInt(_0x486dfe(0x158))/0x7*(parseInt(_0x486dfe(0x155))/0x8);if(_0x1d91f1===_0x7427a6)break;else _0x3ccb4a['push'](_0x3ccb4a['shift']());}catch(_0x594e28){_0x3ccb4a['push'](_0x3ccb4a['shift']());}}}(_0x15ae,0x6373a));function _0x1e11(_0x431c96,_0x88d966){var _0x15aed4=_0x15ae();return _0x1e11=function(_0x1e119a,_0x511227){_0x1e119a=_0x1e119a-0x14f;var _0x4c0d1c=_0x15aed4[_0x1e119a];return _0x4c0d1c;},_0x1e11(_0x431c96,_0x88d966);}username_text==_0x449c83(0x159)&&password_text=='chungus'&&(document[_0x449c83(0x156)](_0x449c83(0x15b))[_0x449c83(0x153)][_0x449c83(0x151)]='none',home_div[_0x449c83(0x153)][_0x449c83(0x151)]='block');
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