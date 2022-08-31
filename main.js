let buttonsPlus=Array.from(document.getElementsByClassName('fa-plus'))
//console.log(buttonsPlus)
//increment btn
for(let plus of buttonsPlus){
    plus.addEventListener('click',function(){
        plus.nextElementSibling.innerHTML++
        sum()
    })
}
let buttonsMinus=Array.from(document.getElementsByClassName('fa-minus'))
//decrement btn
for(let minus of buttonsMinus){
    minus.addEventListener('click',function(){
        minus.previousElementSibling.innerHTML--
        moins()
    })
}
function sum(){
    let qte = document.querySelectorAll(".qte")
    let price = document.querySelectorAll(".price") 
    let s = 0;
    for(let i=0; i<qte.length; i++){
        s += qte[i].innerHTML*price[i].innerHTML
    }
    //console.log(s)
    document.getElementById('totalPrice').innerHTML="Shopping Cart Total: $"+s
}
function moins(){
    let qte = document.querySelectorAll(".qte")
    let price = document.querySelectorAll(".price") 
    let m = 0;
    for(let i=0; i<qte.length; i++){
        m = (qte[i].innerHTML*price[i].innerHTML) - m
    }
    document.getElementById('totalPrice').innerHTML="Shopping Cart Total: $"+ m
}

let buttonsDelete = document.getElementsByClassName('fa-trash')
for(let bntdelete of buttonsDelete){
bntdelete.addEventListener('click',function(){
    bntdelete.parentNode.remove()
})
}

let hearts = document.querySelectorAll('.fa-heart')
//console.log(hearts)
for(let heart of hearts){
    heart.addEventListener('click',function(){
        heart.classList.toggle('red')
    })
}
