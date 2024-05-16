let newSource = "";
let counter = 0;
document.getElementById("Wishlist").addEventListener("click", function(e){
    
    e.preventDefault();

    if(counter % 2 == 0){
        newSource = "../assets/Icons/WishlistRed.webp"; 
    }
    
    else if (counter % 2 != 0){
        newSource = "../assets/Icons/Wishlist.webp"; 
    }
    document.getElementById("Wishlist").src = newSource;
    counter++;
});
