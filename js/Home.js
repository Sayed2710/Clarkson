$.getJSON('../js/Products.json', function (data) {

  var arrival = 0, sall = 0;

  for (var i = 0; i < data.length; i++) {

    if (data[i].cat.indexOf("arrival") != -1 && arrival != 4) {
      var ele = `
                <a href="product.html" class="col-6 col-lg-3 " onclick=q(${data[i].id})> 
                <div class="product">
                  <div class="imag">
                    <img src="../imag/products/${data[i].image}"
                    width="100%">
                   </div>
                     <div class="info">
                        <ul class="list-unstyled" style="display: block;">
                          <li class="f">${data[i].name}</li>
                          <li class="s text-muted">${data[i].type}</li>
                          <li class="t">$ ${data[i].salary} USD <span class="text-muted"> $ ${data[i].discount}
                            USD</span></li>
                         </ul>
                    </div>
    
                 </div> </a>`

      document.querySelectorAll('.Arrival .row')[0].innerHTML += ele;
      arrival++;
    }

    else if (data[i].cat.indexOf("sall") != -1 && sall != 4) {
      var ele = `
                <a href="product.html" class="col-6 col-lg-3"  onclick=q(${data[i].id})>
                <div class="product">
                  <div class="imag">
                    <img src="../imag/products/${data[i].image}"
                    width="100%">
                   </div>
                     <div class="info">
                        <ul class="list-unstyled" style="display: block;">
                          <li class="f">${data[i].name}</li>
                          <li class="s text-muted">${data[i].type}</li>
                          <li class="t">$ ${data[i].salary} USD <span class="text-muted"> $ ${data[i].discount}
                            USD</span></li>
                         </ul>
                    </div>
    
                 </div> 
                 </a>`

      document.querySelectorAll('.Sall .row')[0].innerHTML += ele;
      sall++;
    }

    else {
      continue;
    }

  }
})

function q(num) {
  localStorage.setItem('product', num);
}

