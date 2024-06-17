const minusEl = document.querySelectorAll('.minusEl');
const plusEl = document.querySelectorAll('.plusEl');
const addUpEl = document.querySelectorAll('.statusEl')
let numEl1 = document.getElementById('numEl1');
let numEl2 = document.getElementById('numEl2');
let numEl3 = document.getElementById('numEl3');
let cartCount = document.getElementById('cart-count');
let cancelOrder = document.getElementsByClassName('removeCart');
let cartRows = document.getElementsByClassName('cart-update');
let update = document.getElementsByClassName('items-update');
let images = document.getElementsByClassName('update-img');
let count1 = 0;
let count2 = 0;
let count3 = 0;


for(let i = 0 ; i < cancelOrder.length; i++ ){
    let button = cancelOrder[i];
    button.addEventListener('click', removeCartItems) 
      
}

function removeCartItems(event){
  let buttonClicked = event.target;
 buttonClicked.parentElement.parentElement.remove();
 


  updateCartTotal();
}

function updateCartTotal(){

  let total = 0

    for(let i = 0; i < cartRows.length; i++){
      let cartRow = cartRows[i];
      let priceElement = cartRow.getElementsByClassName('cart-price')[0];
      let quantityElement = cartRow.getElementsByClassName('cart-quantity')[0];
      let price = parseFloat(priceElement.innerText.replace('GHS', ''))
      let quantity = parseFloat(quantityElement.innerText);
      let subTotal = cartRow.getElementsByClassName('cart-total')
      lastTotal = parseFloat(subTotal.innerText);
       total = total + (price * quantity);

       console.log(lastTotal)
       
    }

    
}


for(let i = 0; i < addUpEl.length; i++){
    let button = addUpEl[i];
    button.addEventListener('click', addToCartClicked)


}


function addToCartClicked (event){
    let button = event.target;
    if(button.innerText == 'Add to cart'

    )
    { button.innerText = 'Added to cart'
    

    
    
    let shopItems = button.parentElement.parentElement;
    let title = shopItems.getElementsByClassName('shop-title')[0].innerText;
    let Prs = shopItems.getElementsByClassName('item-price')[0].innerText;
    let imageSrc = shopItems.getElementsByClassName('cart-img');
    let Qty = shopItems.getElementsByClassName('NumQty')[0].innerText;
     cartCount.innerText =  Qty;
     Prs =  parseFloat(Prs * Qty)
    addItemToCart(title, Prs, imageSrc , Qty)
    }else{
      
    }
    
console.log(cartCount)
    
  }

function addItemToCart(title, Prs, imageSrc, Qty){
  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-update');
  let cartItems = document.getElementsByClassName('cart-items1')[0];
  
  cartRowContent = `
      <div class="cart-update flex px-24 pt-28 justify-between items-center">
      <div class="flex justify-between items-center" >
        <img class="w-52 animate-pulse" src=' /images/Frame 7 creame.jpg'>
        <h2 class="font-bold text-lg pl-8"> ${title} </h2>
      </div>


      <div>
        
        <span class="cart-quantity py-1 px-4  font-bold text-xl"> ${Qty} </span>
        
      </div>


      <div class="cart-update flex items-center justify-between">
        <div class="mr-10">
        <p class="font-normal text-xl pb-3">Price</p>
        <span class="cart-price font-bold text-slate-400 text-xl">GHS ${Prs}</span>
        </div>
        <span class="removeCart font-light text-3xl pb-5 cursor-pointer">x</span>
      </div>
    </div>`
  
    
   
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('removeCart')[0].addEventListener('click', removeCartItems);



}





function add(event){
  count1++;
  numEl1.innerText = count1;
};

function add2(event){
  count2++;
  numEl2.innerText = count2;
};


function add3(event){
  count3++;
  numEl3.innerText = count3;
};

function sub(event){
if(count1 > 0){
  count1--
  numEl1.innerText = count1;
}

};

function sub2(event){
  if(count2 > 0){
  count2--;
  numEl2.innerText = count2;
  }
}

function sub3(event){
  if(count3 > 0){
    count3--;
    numEl3.innerText = count3;
  };  
  }
  


plusEl.addEventListener("click", add);
minusEl.addEventListener("click", sub);
addUpEl.addEventListener("click", addUp);

