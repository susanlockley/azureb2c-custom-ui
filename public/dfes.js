$(document).ready(function() {
    var elemDiv = document.createElement('div');
    elemDiv.id = 'app';
    document.body.appendChild(elemDiv);

    var app = new Vue({
      el: '#app'
    })
  })