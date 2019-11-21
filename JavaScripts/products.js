// if(document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded', ready)
// }
// else{
//     ready()
// }

// function ready(){
    
// }

var Cart = []
var displayDiv = document.getElementById("displayCartContent");
var buttonContainer = document.getElementById('itemSummary');

//opening and closing of the cart 
var CartIcon = document.getElementById("shoppingCartIcon");
var item = document.getElementById("itemDisplayer");
CartIcon.onclick = function() { displayCart() };

$(".close").click(function(){ item.style.display = "none"; });

function displayCart(){
    var x = document.getElementById("CartContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
        if(item.style.display == "block" ){
            item.style.display = "none";
        }
    } 
    else {
        x.style.display = "none";
    }
};
function displayInventory(){
    chairsId = document.getElementById('chairs');
    lampsId = document.getElementById('lamps');
    sofasId = document.getElementById('sofas');
    outdoorfurnitureId = document.getElementById('outdoorfurniture');
    bedsId = document.getElementById('beds');
    contentDivs = [chairsId, lampsId, sofasId, outdoorfurnitureId, bedsId]
    for(var i = 0; i<inventory.length;i++){
        inventory[i].forEach(function(details){
            contentDivs[i].innerHTML += "<div id="+details.divId+" onclick='getItemId(this.id)'>"
                +"<div class='ProductDetailSnippet'>"
                +"<h5 class='ProductName'>"+details.ProuctName+"</h5>"
                +"<span class='ProductPrice'>R"+details.ProductPrice +"inc vat</span>"
                +"<p>View full details</p>"+details.ProductCode+"</div>"
                document.getElementById(details.divId).style.backgroundImage = "url("+details.backgroundImage+")";
        })
    };
    //small description of the product is shown on hover 
    $(".threecols div").hover(function(){$(".ProductDetailSnippet").slideDown("slow");});
    $(document).hover(function(){ $(".ProductDetailSnippet").slideUp("slow"); });
};

//display the selected item in its own page with full details and information about it
function getItemId(clicked_id){
    $(".threecols div").click(function(){
        item.style.display = "block";
        const itemDisplay = document.getElementById('itemSummary');
        var selectedItem = SearchInventory(inventory,"divId", clicked_id)
        itemDisplay.innerHTML = "<div class='selected_item_container'>"
                                    +"<div id='selectedImage'></div>"
                                    +"<div class='content_holder'>"
                                        +"<h1>"+selectedItem.ProuctName+"</h1>"
                                        +"<h3>Description</h3>"
                                        +"<p>"+selectedItem.ProductDescription+"</p>"
                                        +"<button id='"+selectedItem.ProductCode+"' class='button blueButton' onClick='addItemToCart(this.id)'>ADD TO cart</button>"
                                    +"</div>"
                                +"</div>"
        document.getElementById('selectedImage').style.backgroundImage = "url("+selectedItem.backgroundImage+")";
    });
}

// search the inventory for specific code
function SearchInventory(listToLookIn,SearchBy, skucode){
    var x = 0;

    while(x<listToLookIn.length){
        if(listToLookIn[x].find(listToLookIn => listToLookIn[SearchBy] === skucode)){
            return listToLookIn[x].find(listToLookIn => listToLookIn[SearchBy] === skucode)
        }
        x++;
    }
}


function addItemToCart(clicked_id){
    var itemDict = SearchInventory(inventory, "ProductCode", clicked_id);
    Cart.push(itemDict);
    displayDiv.innerHTML += "<div><img src = '"+itemDict.backgroundImage+"' alt='"+itemDict.divId+"' class='cartThumbnail'/>"
                        +"<button id='"+itemDict.ProductCode+"' class='btn-remove' onClick='removeItemFromCart(this.id)'>Hello</button"
                        +"</div>";  
}

function removeItemFromCart(clicked_id){
    console.log('im here')
    var removeItemButton = document.getElementsByClassName('btn-remove');
    for(var i = 0; i< removeItemButton.length; i++){
        var button = removeItemButton[i];
        button.addEventListener('click', function(event){
            var buttonClicked = event.target;
            console.log('button clicked')
            buttonClicked.parentElement.remove()
        })
    }
    console.log(SearchInventory(Cart, "ProductCode",clicked_id))
}

function updateCartTotal(){

}


var inventory = [
    chairs = [
        {ProuctName : "small red valvet", ProductCode : "Ch001", ProductPrice : 15000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'redVelvet', backgroundImage: "../Images/Chairs/redvelvetChair.jpg"},
        {ProuctName : "white metalic", ProductCode : "Ch002", ProductPrice : 12000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'whitePlastic', backgroundImage: "../Images/Chairs/whitePlasticChair.jpg"},
        {ProuctName : "small leather", ProductCode : "Ch003", ProductPrice : 35000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'whiteLeather', backgroundImage: "../Images/Chairs/smallWhiteLeather.jpg"},
    ],
    
    lamps = [
        {ProuctName : "cream stone", ProductCode : "La001", ProductPrice : 6000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'creamStone', backgroundImage: "../Images/Lamps/creamLamp.jpg"},
        {ProuctName : "african morden", ProductCode : "La002", ProductPrice : 10000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'africaModern', backgroundImage: "../Images/Lamps/tallLamp.jpg"},
        {ProuctName : "blue king", ProductCode : "La003", ProductPrice : 9000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'blueking', backgroundImage: "../Images/Lamps/navyLamp.png"},
    ],
    
    sofa =[
        {ProuctName : "2 seat grey", ProductCode : "So001", ProductPrice : 25000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'grey2Seater', backgroundImage: "../Images/Couchs/grey.jpg"},
        {ProuctName : "black leather", ProductCode : "Sa002", ProductPrice : 75000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'black2Piece', backgroundImage: "../Images/Couchs/leatehrblack.jpg"},
        {ProuctName : "four seater orange", ProductCode : "So003", ProductPrice : 15000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'orangeleather', backgroundImage: "../Images/Couchs/orangeSofa.jpg"},
        
    ],
    
    outside = [
        {ProuctName : "pinewood family table", ProductCode : "Ou001", ProductPrice : 45000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'familyTable', backgroundImage: "../Images/Outdoor/table.jpg"},
        {ProuctName : "brown custom bench", ProductCode : "Ou002", ProductPrice : 35000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'customBench', backgroundImage: "../Images/Outdoor/woodernBench.jpg"},
        {ProuctName : "custom sofa swing", ProductCode : "Ou003", ProductPrice : 75000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'swingCouch', backgroundImage: "../Images/Outdoor/SwingCouch.jpg"},
    ],
    
    beds = [
        {ProuctName : "black leather queen", ProductCode : "Be001", ProductPrice : 55000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'whiteQueenLeather', backgroundImage: "../Images/Beds/LeatherBed.jpg"},
        {ProuctName : "king sweet black leather", ProductCode : "Be002", ProductPrice : 105000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        divId:'blackLeather', backgroundImage: "../Images/Beds/blackbed.jpg"},
        {ProuctName : "white italian comfort", ProductCode : "Be003", ProductPrice : 95000, 
        ProductDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        divId:'itailainComfort', backgroundImage: "../Images/Beds/italianBed.jpg"},
    ],
];

// executing on page load functions
displayInventory();