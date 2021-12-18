
function add_product(name){
    swal("Genial!", "Producto añadido exitosamente!", "success");
    var data = document.getElementById(name+".info").innerHTML.split("<br>");
    data.splice(3,1);
    localStorage.setItem(name,data);
}

