var addedToCart = []
var displayDiv = document.getElementsByClassName("displayCartContent");


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
        var selectedItem = SearchInventory(clicked_id)
        itemDisplay.innerHTML = "<div class='selected_item_container'>"
                                    +"<div id='selectedImage'></div>"
                                    +"<div class='content_holder'>"
                                        +"<h1>"+selectedItem.ProuctName+"</h1>"
                                        +"<h3>Description</h3>"
                                        +"<p>"+selectedItem.ProductDescription+"</p>"
                                        +createButton(itemDisplay)
                                    +"</div>"
                                +"</div>"
        document.getElementById('selectedImage').style.backgroundImage = "url("+selectedItem.backgroundImage+")";
    });

    function createButton(context) {
        var button = document.createElement("input");
        button.type = "button";
        button.value = "im a button";
        context.appendChild(button);
    }

    function addItemToCart(itemToAdd){
        addedToCart.push(SearchInventory(itemToAdd))
        console.log(addedToCart)
    }

    // search the inventory for specific code
    function SearchInventory(skucode){
        var x = 0
        while(x<inventory.length){
            if(inventory[x].find(inventory => inventory.divId === skucode)){
                return inventory[x].find(inventory => inventory.divId === skucode)
            }
            x++;
        }
    }
}

var inventory = [
    chairs = [
        {ProuctName : "small red valvet", ProductCode : "Ch001", ProductPrice : "15 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'redVelvet', backgroundImage: "../Images/Chairs/redvelvetChair.jpg"},
        {ProuctName : "white metalic", ProductCode : "Ch002", ProductPrice : "12 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'whitePlastic', backgroundImage: "../Images/Chairs/whitePlasticChair.jpg"},
        {ProuctName : "small leather", ProductCode : "Ch003", ProductPrice : "35 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'whiteLeather', backgroundImage: "../Images/Chairs/smallWhiteLeather.jpg"},
    ],
    
    lamps = [
        {ProuctName : "cream stone", ProductCode : "La001", ProductPrice : "6 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'creamStone', backgroundImage: "../Images/Lamps/creamLamp.jpg"},
        {ProuctName : "african morden", ProductCode : "La002", ProductPrice : "10 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'africaModern', backgroundImage: "../Images/Lamps/tallLamp.jpg"},
        {ProuctName : "blue king", ProductCode : "La003", ProductPrice : "9 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'blueking', backgroundImage: "../Images/Lamps/navyLamp.png"},
    ],
    
    sofa =[
        {ProuctName : "2 seat grey", ProductCode : "So001", ProductPrice : "25 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'grey2Seater', backgroundImage: "../Images/Couchs/grey.jpg"},
        {ProuctName : "black leather", ProductCode : "Sa002", ProductPrice : "75 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'black2Piece', backgroundImage: "../Images/Couchs/leatehrblack.jpg"},
        {ProuctName : "four seater orange", ProductCode : "So003", ProductPrice : "15 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'orangeleather', backgroundImage: "../Images/Couchs/orangeSofa.jpg"},
    ],
    
    outside = [
        {ProuctName : "pinewood family table", ProductCode : "Ou001", ProductPrice : "45 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'familyTable', backgroundImage: "../Images/Outdoor/table.jpg"},
        {ProuctName : "brown custom bench", ProductCode : "Ou002", ProductPrice : "35 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'customBench', backgroundImage: "../Images/Outdoor/woodernBench.jpg"},
        {ProuctName : "custom sofa swing", ProductCode : "Ou003", ProductPrice : "75 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'swingCouch', backgroundImage: "../Images/Outdoor/SwingCouch.jpg"},
    ],
    
    beds = [
        {ProuctName : "black leather queen", ProductCode : "Be001", ProductPrice : "55 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'whiteQueenLeather', backgroundImage: "../Images/Beds/LeatherBed.jpg"},
        {ProuctName : "king sweet black leather", ProductCode : "Be002", ProductPrice : "105 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'blackLeather', backgroundImage: "../Images/Beds/blackbed.jpg"},
        {ProuctName : "white italian comfort", ProductCode : "Be003", ProductPrice : "95 000", ProductDescription : "dsijdfsdjfojsdfpoj", divId:'itailainComfort', backgroundImage: "../Images/Beds/italianBed.jpg"},
    ],
];

// executing on page load functions
displayInventory();