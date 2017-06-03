fetch('http://localhost:8080/store', {
    method: 'put',
    body: JSON.stringify({
      'id': '3',
      'website': 'storish.com',
      'storeName': 'store 3',
      'email': 'storess@gmail.com',
      'phone': '3011221234'
    }),

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  })
  .then(() => console.log('updated!!!'))



fetch('http://localhost:8080/store')
  .then(res => res.json())
  .then(data => console.log(data))


//TODO
// load data into front end
// fix styles for login and register
//cart will be customer/bucket/:productId'




fetch('http://localhost:8080/customer/bucket/6')
  .then(function (val) {
    console.log(val)
  });

jQuery.ajax( {
    url: 'http://localhost:8080/customer/bucket/6',
    type: 'PUT',
    
    success: function( response ) {
        console.log('all good')
    }
} );

document.getElementById("btnAddMember").addEventListener("click", function()
{
  var request = new XMLHttpRequest();
  var path = "http://localhost:8080/customer/bucket/"; // enter your server ip and port number
  request.open("POST", path, true); // true = asynchronous
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  var text= '6';
  request.send ( text );
});

$(document).ready(function(){
    $("button").click(function(){
        $.post("http://localhost:8080/customer/bucket/:productId",
        {
          productId: '6'
        },
        function(data,status){
            alert( data  + status);
        });
    });
});

app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});


var xhr = new XMLHttpRequest()
xhr.onload = onload
xhr.open('post', 'http://localhost:8080/customer/bucket/', true)
xhr.setRequestHeader('X-HTTP-Method-Override', 'DELETE')
xhr.send()

function onload () {
  alert('got response: ' + this.responseText)
}