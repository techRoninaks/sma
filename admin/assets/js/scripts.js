function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}

function deleteData(id,pageName){
  var confirmTxt = "Confirm deletion?";
  if(pageName == "posts"){
      confirmTxt = "Remove comment?";
  }
  if(confirm(confirmTxt)){
      var phpFile = "";
      switch(pageName){
          case 'customer': phpFile = "delete_user";
                      break;
          case 'user': phpFile = "delete_customer_order";
                      break;
          case 'admin': phpFile = "delete_Admin";
                      break;            
      }
      var xhr =  new XMLHttpRequest();
      var params = 'id='+id;
      xhr.onreadystatechange  =  function() {
              if (this.readyState == 4 && this.status == 200) {//if result successful
                  var message = 'Deletion successful!';
                  if(pageName == "posts"){
                          message = 'Removed successfully!';
                  }
                  if(xhr.responseText !== "0"){
                          alert(message);
                          window.location.reload();
                  } else {
                      alert('Deletion Failed!');
                  }
              }
      };
      xhr.open("POST", "assets/php/"+phpFile+".php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(params);
  } else {
      return;
  }
}

function deleteData(id,pageName){
  var confirmTxt = "Confirm deletion?";
  if(pageName == "posts"){
      confirmTxt = "Remove comment?";
  }
  if(confirm(confirmTxt)){
      var phpFile = "";
      switch(pageName){
          case 'customer': phpFile = "delete_user";
                      break;
          case 'user': phpFile = "delete_customer_order";
                      break;
          case 'admin': phpFile = "delete_Admin";
                      break;            
      }
      var xhr =  new XMLHttpRequest();
      var params = 'id='+id;
      xhr.onreadystatechange  =  function() {
              if (this.readyState == 4 && this.status == 200) {//if result successful
                  var message = 'Deletion successful!';
                  if(pageName == "posts"){
                          message = 'Removed successfully!';
                  }
                  if(xhr.responseText !== "0"){
                          alert(message);
                          window.location.reload();
                  } else {
                      alert('Deletion Failed!');
                  }
              }
      };
      xhr.open("POST", "assets/php/"+phpFile+".php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(params);
  } else {
      return;
  }
}

function refund(id,pageName){
  var confirmTxt = "Confirm Refund ?";
  if(pageName == "user"){
      confirmTxt = "Confirming Refund ?";
  }
  if(confirm(confirmTxt)){
      var phpFile = "";
      switch(pageName){
          case 'user': phpFile = "refund";
                      break;
      }
      var xhr =  new XMLHttpRequest();
      var params = 'id='+id;
      xhr.onreadystatechange  =  function() {
              if (this.readyState == 4 && this.status == 200) {//if result successful
                  var message = 'Refund message posted successfully !';
                  if(pageName == "posts"){
                          message = 'Refund message posted !';
                  }
                  if(xhr.responseText !== "0"){
                          alert(message);
                          window.location.reload();
                  } else {
                      alert('Refund message posting unsuccessfull');
                  }
              }
      };
      xhr.open("POST", "assets/php/"+phpFile+".php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(params);
  } else {
      return;
  }
}