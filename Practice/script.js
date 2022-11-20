let products = []; //products array stores all the products of the transaction

//create a constructor   (use captial letter)
function Product (paramProduct,paramPrice){
    this.attrProduct = paramProduct;
    this.attrPrice = paramPrice;
}

//get the values from the input using JS
let inputProduct = document.getElementById("txtProduct");
let inputPrice = document.getElementById("txtPrice");

function isValid(aProduct) {
    let valid=true;
    inputProduct.classList.remove("error");
    document.getElementById("errormsg1").innerHTML = null;
    inputPrice.classList.remove("error");
    document.getElementById("errormsg2").innerHTML = null;
    
    if(aProduct.attrProduct==""){
        valid=false;
        inputProduct.classList.add("error");
        document.getElementById("errormsg1").innerHTML = "Please enter a product";
    }
    if(aProduct.attrPrice==""){
        valid=false;
        inputPrice.classList.add("error");
        document.getElementById("errormsg2").innerHTML = "Please enter the price";
    }
    return valid;
}
//regisration function
function register(){
    let newProduct = new Product (inputProduct.value,inputPrice.value);
    if(isValid(newProduct)==true){
    products.push(newProduct); //add the product to the Array
    display();value = newProduct;
    //console.log(newProduct);
    clearForm();
    }
}

function clearForm(){
    inputProduct.value="";
    inputPrice.value="";
}

//display function (create table see line22-32in html)
function display(){
    let row="";
    //travel the product array 
    for(let i=0; i<products.length; i++){
        let product = products[i];
        row+=`
        <tr class="row">
            <td>${i+1}</td>
            <td>${product.attrProduct}</td>
            <td>${product.attrPrice}</td>
            <td><button class="delete" onclick="deleteProduct();">Delete</button></td>
        </tr>`;
    }
    document.getElementById("productsTable").innerHTML=row;
    document.getElementById("productsInCart").innerHTML=products.length; 

}

function deleteProduct() {
    document.querySelector(".row,td").remove();
}

//create a init 
function init(){
    let product1 = new Product("T-shirt",12.5)
    products.push(product1);  // add the product to the array  
    display();
    //console.log(product1);
}

window.onload = init;
