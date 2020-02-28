options = { 
    'publicKey': 'tk_2983bef8782e4039af4b5e71', 
    'selector': '.customSimulator', 
    'type': pgSDK.simulator.types.SELECTABLE_TEXT_CUSTOM, 
    'skin': pgSDK.simulator.skins.BLUE, 
    'itemAmount': '200 Euros', 
    'itemQuantity': '1', 
    'locale': 'es', 
    'country': 'es', 
} 

function checkIfEmpty(){
    if(amount.value.length == 0){
        amount.focus();
        return true;
    }
    return false;
}
function calculate(){
let amount = document.getElementById("amount");
let onetime = document.getElementById("onetime");

console.log('am=',amount.value);
    if(!checkIfEmpty()){
        oneAmountOneInstallment(onetime);   
        options.itemAmount = amount.value + "Euros";
        console.log(amount);
        pgSDK.simulator.init(options); 
    }

}

function oneAmountOneInstallment(onetime){
    onetime.innerHTML=""; 
}