


function myMoneyBox(){
    let saveCoins=0;
    function countCoins (coins){
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBoxR= myMoneyBox();
myMoneyBoxR(5);
myMoneyBoxR(5);
myMoneyBoxR(15);
