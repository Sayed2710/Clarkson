$(document).ready(function () {

    $.getJSON('../js/press.json', function (data) {

        for (var i = 0; i < data.length; i++) {
            var ele = `
        <div class="col-6 col-sm-4 col-lg">
          <a href=""><div class="img">
            <img src="${data[i].image}" width="100%">
          </div></a>
             <div class="info">
                ${data[i].title}
             </div>
         </div> `

            document.querySelectorAll('.posts .row')[0].innerHTML += ele;

        }

    })
})