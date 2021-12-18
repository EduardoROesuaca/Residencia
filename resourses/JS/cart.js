document.addEventListener("DOMContentLoaded",load_cart,false)

function load_cart(){
    for (let index = 0; index < localStorage.length; index++) {
        var clave = localStorage.key(index);
        var tmp =localStorage.getItem(clave)
        tmp=tmp.replace(",","<br>");
        tmp=tmp.replace(",","<br>");
        tmp=tmp.replace(",","<br>");
        var precio = tmp.substring(tmp.lastIndexOf("<br>"),tmp.length)
        tmp=tmp.substring(0,tmp.lastIndexOf("<br>"))
        
        document.getElementById("cart-table").innerHTML+=
                        `<tr>
                            <td>
                                <img src=http://127.0.0.1:80/Source_code/resourses/images/products/`+clave+`.jpg class="cart-img">
                            </td>
                            <td width=120px>
                                <p class="cart-table-p">`+tmp+`</p>
                            </td>
                            <td width=120px>
                                <p class="cart-table-p" id=`+clave+`-price>`+precio+`</p>
                            </td>
                            <td width=120px>
                                <input type="number" min=1 max=10 value=1 class="counter" name=`+clave+` onclick=updatep(this)>
                            </td>
                            <td width=120px>
                                <p class="cart-table-p" id=`+clave+`-total>`+precio+`</p>
                            </td>
                        </tr>`;
    }
    
}

function updatep(e){
    var precio=document.getElementById(e.name+"-price").textContent;
    precio=precio.substring(2,precio.length);
    var total=0;

    if (precio.length > 7) {
        total=parseFloat(precio)*1000000
    }else{
        total=parseFloat(precio)*1000
    }

    document.getElementById(e.name+"-total").innerText="¢"+(total*document.getElementsByName(e.name)[0].value)
}

function report(){
    if(localStorage.length>0){
        swal({
            title: "Ingrese el correo al que desea recibir la confirmacion de la orden",
            content: {
                element: "input",
                attributes: {
                    placeholder: "Correo",
                    type: "text",
                },
            },
          }).then((result) =>{
            if(result){
                $.ajax({
                    type:'GET',
                    url: 'http://127.0.0.1:80/Source_code/resourses/PHP/sendMail.php',
                    data: 'address='+result,
                    success:function(data){
                        console.log(data)
                   },
                   error:function(data){
                    console.log(data)
                   }
                 });
                  localStorage.clear();
                  swal({
                    icon: 'success',
                    title: 'Se te ha enviado la orden al correo que ingresaste',
                    timer: 2000
                  }).then((result) =>{
                        window.location.replace('http://127.0.0.1:80/Source_code/index.html'); 
                  })
            }
          })
    }else{
        swal({
            icon: 'error',
            title: 'Aun no tienes productos en el carrito :(',
            timer: 2000
          }).then((result) =>{
                window.location.replace('http://127.0.0.1:80/Source_code/index.html'); 
          })
    }
    
}