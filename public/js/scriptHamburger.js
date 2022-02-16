
const HamburgerSize = {
    'small':{
        price:50,
        call:20
    },
    'big':{
        price:100,
        call:40
    }
};
const HamburgerAdditional ={
    'cheese':{
        price:10,
        call:20
    },
    'salad':{
        price:20,
        call:5
    },
    'potato':{
        price:15,
        call:10
    }

};
const HamburgerAdditives ={
    'seasoning':{
        price:15,
        call:0
    },
    'mayonnaise':{
        price:200,
        call:5
    }
};
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = [] //массив со всеми топпингами
        }
    addSise(size){
        this.size = size;
    }
    addTopping(topping) {   
        this.stuffing.push(topping) 
        }
    removeTopping(topping) {
        this.stuffing= this.stuffing.filter((item)=>item !== topping)
        }
    getSize() {             
        console.log(this.size)
        }
    getStuffing() {    
        console.log(this.stuffing)     
        //  Узнать начинку гамбургера 
        }
    calculatePrice() {  
        const all = {
            ...HamburgerAdditional,
            ...HamburgerAdditives
        };
        let cost = HamburgerSize[this.size].price;
        
        this.stuffing.forEach((item)=> cost += all[item].price);
        return cost   
        }
    calculateCalories() {   
        const all = {
            ...HamburgerAdditional,
            ...HamburgerAdditives
        };
        let callories = HamburgerSize[this.size].call;
        this.stuffing.forEach((item)=> callories =callories + all[item].call);
        return callories
        
        }
};

document.querySelector('.buttonSubmit').onclick = function (){
    event.preventDefault();
    let hamburger = new Hamburger;
    hamburger.addSise(document.querySelector('.selectionBurgerSize').value)
    hamburger.addTopping(document.querySelector('.burger-inner:checked').value);
    if (document.querySelector('.burger-seasoning:checked')){
        hamburger.addTopping(document.querySelector('.burger-seasoning:checked').value);
    }
    if(document.querySelector('.burger-mayonnaise:checked')){
        hamburger.addTopping(document.querySelector('.burger-mayonnaise:checked').value);
    }


    console.log(hamburger);
    console.log(hamburger.calculateCalories())
    console.log(hamburger.calculatePrice())
    document.querySelector('.price').insertAdjacentHTML('afterBegin', `<span>${hamburger.calculatePrice()}<\span>`);
    document.querySelector('.calories').insertAdjacentHTML('afterBegin', `<span>${hamburger.calculateCalories()}<\span>`)
}