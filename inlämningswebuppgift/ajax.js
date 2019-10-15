function loadDoc(name,idForTexten,color) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById(idForTexten).innerHTML = this.responseText;
       changeColor(color,idForTexten);
      }
    };
    xhttp.open("GET",name, true);
    xhttp.send();
  }

function changeColor(color,idForTexten){
    document.getElementById(idForTexten).style.color=color;

}

function chartUrl(chartUrl,idForImg){
    var todo =document.getElementById(idForImg).value;
    $.ajax({
        url :chartUrl,             
          data: {idForImg:todo,"CMD":"chartUrl"},
          type: "GET",
          contentType: "image/png",
          dataType: "text",
        success: function(data) { 
            /* alert(data); */
              $("#"+idForImg).html('<img src="' + data + '" />');
        }
    });
}

 
