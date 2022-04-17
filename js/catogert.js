var Num = localStorage.getItem("product");
$.getJSON('../js/Products.json', function (data) {


  for (var i = 0; i < data.length; i++) {
    if (Num == 17) {
      document.title = "New Arrivals";
      $('.title').text("New Arrivals");
      if (data[i].cat.indexOf("arrival") != -1) {
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

        document.querySelectorAll('.Head .row')[0].innerHTML += ele;
      }
    }
    if (Num == 18) {
      document.title = "Trending";
      $('.title').text("Trending");
      if (data[i].cat.indexOf("trend") != -1) {
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

        document.querySelectorAll('.Head .row')[0].innerHTML += ele;
      }
    }
    if (Num == 19) {
      document.title = "Top Saller";
      $('.title').text("Top Saller");
      if (data[i].cat.indexOf("sall") != -1) {
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

        document.querySelectorAll('.Head .row')[0].innerHTML += ele;
      }
    }
    if (Num == 20) {
      document.title = "Wild 'N' Grind";
      $('.title').text("Wild 'N' Grind");
      if (data[i].cat.indexOf("wild") != -1) {
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

        document.querySelectorAll('.Head .row')[0].innerHTML += ele;
      }
    }
    if (Num == 21) {
      document.title = "Warm & Bold";
      $('.title').text("Warm & Bold");
      if (data[i].cat.indexOf("warm") != -1) {
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

        document.querySelectorAll('.Head .row')[0].innerHTML += ele;
      }
    }
  }
})
function q(num) {
  localStorage.setItem('product', num);
}

