let totalpriceAllProducts = 0;
let amountToAdd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let priceItem = [24.99, 12.99, 79.99, 22.99, 24.99, 29.99, 23.99, 349.99, 799.99, 129.99, 25, 10];
let totalpriceItem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let addElementSection = new Array(12);
let addElementNameText = new Array(12);
let addElementPriceText = new Array(12);
let addElementAmountItemsCartText = new Array(12);
let addElementImg = new Array(12);
let removeImg = new Array(12);
let itemId = ["Yogamat", "Springtouw", "Gewichten", "Weerstandbanden", "Handschoenen", "SportShirt", 
              "SportShort", "SportHorloge","Loopband", "Voedingspakket", "Voedingsschema", "PersonalCoach"];

let itemAddId = ["AddYogaMat", "AddSpringtouw", "AddGewichten", "AddWeerstandsbanden", "AddFitnessHandschoenen", "AddSportShirt", 
    "AddSportshort", "AddSportHorloge", "AddLoopband", "AddVoedingspakket","AddVoedingsschema", "AddPersonalCoach"];

let RemoveImageId = ["RemoveYogamat", "RemoveSpringtouw", "RemoveGewichten","RemoveWeerstandbanden", "RemoveFitnessHandschoenen", "RemoveSportShirt", 
                    "RemoveSportshort", "RemoveSportHorloge", "RemoveLoopband", "RemoveVoedingspakket", "RemoveVoedingsschema", "RemovePersonalCoach"];

let sectionRemoveId = ["layoutCartYogamat", "layoutCartSpringtouw", "layoutCartGewichten","layoutCartWeerstandbanden", "layoutCartFitnessHandschoenen", "layoutCartSportShirt", 
"layoutCartsportshort", "layoutCartSportHorloge", "layoutCartLoopband", "layoutCartVoedingspakket", "layoutCartVoedingsschema", "layoutCartPersonalCoach"];

for (let i = 0; i < amountToAdd.length; i++) {
     addElementSection[i] = (document.createElement("section"));
     addElementNameText[i] = document.createElement("p");
     addElementPriceText[i] = document.createElement("p");
     addElementAmountItemsCartText[i] = document.createElement("p");
     addElementImg[i] = document.createElement("img");
     removeImg[i] = document.createElement("img");
     addElementSection[i].setAttribute("class", "layoutCart");
}

updateMenu();

for (let i = 0; i < itemAddId.length; i++) {
    
    document.getElementById(itemAddId[i]).addEventListener("click", function(e){

        e.preventDefault();
        let amount = document.getElementById(itemId[i]).value;
        amountToAdd[i] = amountToAdd[i] + parseInt(amount);
        
        if(counter[i] == 0){
            addItemToCart(i)
                  
        }
    
        else{
            extraCart(i)
        }
        deleteFromCart(i);
        updateMenu();
    });
}
    
    

function addItemToCart(
    itemIndex
){
      
        let source = `assets/Images/${itemId[itemIndex]}.webp`;
        let sourceRemoveImg = `assets/Icons/delete.webp`;
        addElementSection[itemIndex].appendChild(addElementImg[itemIndex]);
        addElementSection[itemIndex].appendChild(addElementNameText[itemIndex]);
        addElementSection[itemIndex].appendChild(addElementAmountItemsCartText[itemIndex]);
        addElementSection[itemIndex].appendChild(addElementPriceText[itemIndex]);
        addElementSection[itemIndex].appendChild(removeImg[itemIndex]);
        removeImg[itemIndex].setAttribute("id", RemoveImageId[itemIndex]);
        addElementSection[itemIndex].setAttribute("id", sectionRemoveId[itemIndex]);

        addElementImg[itemIndex].setAttribute("src", source);
        removeImg[itemIndex].setAttribute("src", sourceRemoveImg);
        addElementImg[itemIndex].setAttribute("alt", `${itemId[itemIndex]}`);
        addElementImg[itemIndex].setAttribute("height", "65");
        addElementImg[itemIndex].setAttribute("width", "70");
        addElementNameText[itemIndex].innerHTML += `${itemId[itemIndex]}`
        addElementAmountItemsCartText[itemIndex].innerHTML += `${amountToAdd[itemIndex]}x`
        totalpriceItem[itemIndex] += (amountToAdd[itemIndex] * priceItem[itemIndex]);
        totalpriceItem[itemIndex] = parseFloat(totalpriceItem[itemIndex]);
        addElementPriceText[itemIndex].innerHTML += `<span class="Prijs">&euro;${totalpriceItem[itemIndex]}</span>`;

                    
        document.getElementById("WinkelwagenAside").appendChild(addElementSection[itemIndex]);
        counter[itemIndex]++;
        calculate();
        updateMenu();

}


function extraCart(
   itemIndex
){
    totalpriceItem[itemIndex] = 0;
    addElementAmountItemsCartText[itemIndex].innerHTML = `${amountToAdd[itemIndex]}x`
    totalpriceItem[itemIndex] += (amountToAdd[itemIndex] * priceItem[itemIndex]);
    totalpriceItem[itemIndex] = totalpriceItem[itemIndex].toFixed(2);
    addElementPriceText[itemIndex].innerHTML = `<span class="Prijs">&euro;${totalpriceItem[itemIndex]}</span>`;
    totalpriceItem[itemIndex] = parseFloat(totalpriceItem[itemIndex]);

    calculate();  
    updateMenu();
};


function deleteFromCart(
    itemIndex
){
    if (document.getElementById(RemoveImageId[itemIndex])){ 

        document.getElementById(RemoveImageId[itemIndex]).addEventListener("click", function(e) {
            e.preventDefault();
            counter[itemIndex] = 0;
            amountToAdd[itemIndex] = 0;
            if(document.getElementById(sectionRemoveId[itemIndex])){
                document.getElementById("WinkelwagenAside").removeChild(document.getElementById(sectionRemoveId[itemIndex]));
            }

            for (let j = 0; j < amountToAdd.length; j++) {
                addElementSection[j] = document.createElement("section");
                addElementNameText[j] = document.createElement("p");
                addElementPriceText[j] = document.createElement("p");
                addElementAmountItemsCartText[j] = document.createElement("p");
                addElementImg[j] = document.createElement("img");
                removeImg[j] = document.createElement("img");
                addElementSection[j].setAttribute("class", "layoutCart");
            }

            totalpriceAllProducts -= totalpriceItem[itemIndex];
            totalpriceItem[itemIndex] = 0;
            updateMenu();           
        })};
};


function calculate(){
    totalpriceAllProducts = 0;
        for (let i = 0; i < totalpriceItem.length; i++) {
            totalpriceAllProducts += totalpriceItem[i];
        }  
    return totalpriceAllProducts;
}

function updateMenu (){

    let childElement = document.getElementById("checkout");
    if (childElement) {
    document.getElementById("WinkelwagenAside").removeChild(childElement);
    }  

    let addElementSectionCartMenu = document.createElement("section");

    let addElementTotalText = document.createElement("p");
    let addElementTotalNumber = document.createElement("p");
    let addElementSectionTotal = document.createElement("section");


    let addElementSubTotalText = document.createElement("p");
    let addElementSubTotalNumber = document.createElement("p");
    let addElementSectionSub = document.createElement("section");

    let addElementBTW = document.createElement("p");
    let addElementBTWTotal = document.createElement("p");
    let addElementSectionBTW = document.createElement("section");


    addElementSubTotalText.innerHTML = `Subtotaal:`;
    addElementSubTotalNumber.innerHTML = `<span class="Prijs">&euro;${(totalpriceAllProducts - ((totalpriceAllProducts / 100) * 21)).toFixed(2)}</span>`;
    addElementSubTotalText.style.color = "#996E5D"
    addElementSectionSub.appendChild(addElementSubTotalText);
    addElementSectionSub.appendChild(addElementSubTotalNumber);


    addElementBTW.textContent = `BTW(21%):`;
    addElementBTWTotal.innerHTML = `<span class="Prijs">&euro;${((totalpriceAllProducts / 100) * 21).toFixed(2)}</span>`;
    addElementBTW.style.color = "#996E5D";
    addElementSectionBTW.appendChild(addElementBTW);
    addElementSectionBTW.appendChild(addElementBTWTotal);


    addElementTotalText.innerHTML = `Total:`;
    addElementTotalNumber.innerHTML = `<span class="Prijs">&euro;${totalpriceAllProducts}</span>`;
    addElementTotalText.style.color = "#996E5D";
    addElementSectionTotal.appendChild(addElementTotalText);
    addElementSectionTotal.appendChild(addElementTotalNumber);


    addElementSectionCartMenu.appendChild(addElementSectionSub);
    addElementSectionCartMenu.appendChild(addElementSectionBTW);
    addElementSectionCartMenu.appendChild(addElementSectionTotal);


    document.getElementById("WinkelwagenAside").appendChild(addElementSectionCartMenu);
    addElementSectionCartMenu.setAttribute("id", "checkout");
    addElementSectionTotal.setAttribute("class", "checkoutsum");
    addElementSectionBTW.setAttribute("class", "checkoutsum");
    addElementSectionSub.setAttribute("class", "checkoutsum");
    addElementSectionSub.setAttribute("id", "checkoutsum");
}