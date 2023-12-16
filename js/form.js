const forms = document.getElementsByTagName("form");

for (const form of forms) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
    })
};