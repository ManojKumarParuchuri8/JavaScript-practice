let cart=["Shirts","Pants","Kurtas"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(paymentInfo){
            updateWalletBalance(paymentInfo);
        });
    })
});



createOrder(cart)  //createOrder is an API 
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})



const GITHUB_API=" https://api.github.com/users/ManojKumarParuchuri8"
const user=fetch(GITHUB_API)  //we will get promise object inside user variable
console.log(user);
user.then(function(data)
{
    console.log(data);
})