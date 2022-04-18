
var Num = localStorage.getItem('product');
$.getJSON('../js/Products.json', function (data) {
    document.title = `${data[Num - 1].name}`;
    var pro = '';

    for (var i = 0; i < data[Num - 1].prop.length; i++) {
        pro += `<li>${data[Num - 1].prop[i]}</li>`
    }

    var ele = `
      <div class="col-12 d-lg-none info">
        <p><span class="text-muted d-block">${data[Num - 1].type}</span>${data[Num - 1].name}</p>
        <p>$ ${data[Num - 1].salary} USD <span class="text-muted d-block">$ ${data[Num - 1].discount} USD</span></p>
     </div>

  <div class="col-12 col-lg-7">
      <div class="img">
          <img src="../imag/products/${data[Num - 1].image}" width="100%">
      </div>
  </div>

  <div class="col-12 col-lg-5 parag">
      <div class="d-none d-lg-block del">
          <ul class="list-unstyled d-block">
              <li class="f text-muted">${data[Num - 1].type}</li>
              <li class="s">${data[Num - 1].name}</li>
              <li class="t"> $ ${data[Num - 1].salary} USD <span class="text-muted"> $ ${data[Num - 1].discount} USD</span></li>
          </ul>
      </div>

      <div class="disc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul>
             ${pro}
          </ul>
      </div>

  </div>`
    document.querySelectorAll('.product .row')[0].innerHTML = ele;
    document.querySelectorAll('.product .row .parag')[0].innerHTML +=
        ` <div class="datasend">
              <h3>Quantity</h3>
               <input type="number" value="1"  min="1" class="d-inline inp" id="inp">
              <button class="addCart" onclick="send(${data[Num - 1].id});">ADD TO CART</button>
          </div>`;
    for (var i = 0; i < 4; i++) {
        var x = Math.round(Math.random() * 15);
        var y;
        while (x == Num - 1 || x == y) {
            x = Math.round(Math.random() * 15);
        }
        y = x;

        var ele = `
            <a href="product.html" class="col-6 col-md-4 col-lg-3 " id="op"  onclick="h(${data[x].id})">
              <div class="product2" >
                <div class="imag">
                  <img src="../imag/products/${data[x].image}"
                  width="100%">
                 </div>
                   <div class="info">
                      <ul class="list-unstyled" style="display: block;">
                        <li class="f">${data[x].name}</li>
                        <li class="s text-muted">${data[x].type}</li>
                        <li class="t">$ ${data[x].salary} USD <span class="text-muted"> $ ${data[x].discount}
                          USD</span></li>
                       </ul>
                  </div>
               </div> 
             </a>`
        document.querySelectorAll('.more .row')[0].innerHTML += ele;
    }
})

function h(num) {
    localStorage.setItem('product', num);
}
