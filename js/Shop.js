$.getJSON('../js/Products.json', function (data) {
  for (var i = 0; i < data.length; i++) {
    var ele = `
            <a href="product.html" class="col-6 col-md-4 col-lg-3 " id="op"  onclick="x(${data[i].id})">
              <div class="product" >
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
    document.querySelectorAll('.Head .row')[0].innerHTML += ele;
  }
})
function x(num) {
  localStorage.setItem('product', num);
}

