
class ProductList {
    constructor(container = '.products'){
        this._container = document.querySelector(container); //расположение контейнера - куда будем рендерить данные
        this._goods =[]; // входящий массив
        this._allProducts =[]; // внутренний массив с которым работаем
        this._fetchGoods(); //загрузка самого массива
        this._render(); // рендерим данные
        this._totalCost();
    }
    _fetchGoods(){ // загрушенный массив данных
        this._goods= [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 2500},
            {id: 4, title: 'Gamepad', price: 4000},
        ];
    }

    _render(){
        for (const product of this._goods){
            const productObject = new ProductItem(product); 
            // при каждой итерации в product  попадает элемент массива который обработан в ProductItem
            this._allProducts.push(productObject); // добавляем данные в массив для последующей обработки
            this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString()) // каждый элемент вставляем перед концом  контейнера
        }
    }
    // расчёт общей стоимости товаров
    _totalCost(){
        let totalPrice = 0;
        for(const product of this._allProducts){
            totalPrice = totalPrice + product.price
        }
        console.log('общая цена = ' + totalPrice);
    }
}
class ProductItem{
    constructor(product,img ='https://via.placeholder.com/200x150'){
        //в конструктор попадает элемент входящего  массива
        this.id = product.id;
        this.title=product.title;
        this.price = product.price;
        this.img = img;
    }
    getHTMLString(){
        return `<div class="product-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img">
        <div class="desc">
            <h3>${this.title}</h3>
            <p>${this.price} \u20bd</p>
            <button class="buy-btn" >Купить</button>
        </div>
    </div>`;
    }
}
new ProductList();

// ДЗ

// корзина
// наследуемся от корзины
// нужен  почти весь функцианал. Тоак же нужно добавить функционал уменьшить и увеличить его количество и очистить корзину
class ProductBasket extends ProductList{
    constructor(){
        super()
    }
    clear(){}
    addItem(id){}
    delItem(id){}
}

//карточка товара
// наследуем свойства от класса товара
class CardItem extends ProductItem{
    constructor(){
        super()
    }
    addToCard(){}
}
