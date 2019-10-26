var postimage = "";
var catId = '';
var labId = '';
var bannerimage = "";
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
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
function getQueryString() {
    var queryString = document.URL.split('?');
    if (queryString.length > 1) {
        queryStrings = queryString[1].split('&');
    }
    return queryString;
}

function reDirect(loc) { //redirect to any page without storing as cache.. mainly used when logged in

    // var page = window.location.protocol+"//"+window.location.hostname+"/helloMyWork/"+loc;
    var page = "../" + loc;
    window.location.replace(page);
}

function setCookie(cname, cvalue = null, exdays = 1) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var value = getCookie(cname);
    if (value === "null" || value === "" || value === "0") {
        return false;
    }
    return true;
}

function cancelFunc(val = 0) {
    setCookie("catOnEdit");

    if (val !== 0) {
        setCookie("catManage");
        // var page = window.location.protocol+"//"+window.location.hostname+"/helloMyWork/admin/login/login.html";
        var page = "login/login.html";
        window.location.replace(page);
    } else {
        window.location.reload();
    }

}

function dataUpdate(pageName) {
    var data = [];
    var myObj = {};
    var phpFile = "";
    var prevName = "";
    var image = "";
    var formData = new FormData();
    switch (pageName) {
        case 'category': phpFile = "updateCategory";
            break;
        case 'label': phpFile = "updateLabel";
            break;

    }
    if (confirm("Confirm Upload?")) {
        if (pageName == 'category') {
            data[0] = document.getElementById("catName").value;
            data[1] = document.getElementById("parentid").value;
            data[2] = document.getElementById("catId").value;
            myObj = { "catName": data[0], "parentid": data[1], "catId": data[2] };
            console.log(myObj);
        }
        else if (pageName == 'label') {
            data[0] = document.getElementById("labelName").value;
            data[1] = document.getElementById("priority").value;
            data[2] = document.getElementById("labId").value;

            myObj = { "labelName": data[0], "priority": data[1], "labId": data[2] };
            console.log(myObj);

        }
        var jSONObj = JSON.stringify(myObj);

        console.log("-> " + jSONObj);
        xhr = new XMLHttpRequest();
        this.responseType = 'text';
        xhr.onreadystatechange = function () {
            var ourData = xhr.response;
            if (this.readyState == 4 && this.status == 200) {
                if (xhr.responseText == '1') {
                    alert(" update failed try again!");
                    cancelFunc();
                }
                else {
                    alert("succesfull");
                    cancelFunc();
                }
            }
        };
        xhr.open("POST", "assets/php/" + phpFile + ".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("jsonObj=" + jSONObj);
    } else {
        return;
    }
}

function fetchData(id, pageName) {
    var phpFile = "";
    switch (pageName) {
        case 'category': phpFile = "fetchCategory";
            break;

        case 'label': phpFile = "fetchLabel";
            break;
    }
    var params = 'id=' + id;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {//if result successful
            var myObj = JSON.parse(xhr.responseText);
            if (xhr.responseText !== "0") {
                if (pageName == "category") {
                    document.getElementById("catName").value = myObj.catName;
                    document.getElementById("parentid").value = myObj.parentid;
                    document.getElementById("catId").value = myObj.catId;
                }
                else if (pageName == "label") {
                    document.getElementById("labelName").value = myObj.labelName;
                    document.getElementById("priority").value = myObj.priority;
                    document.getElementById("labId").value = myObj.labId;

                    // setCookie("catOnEdit",myObj.catName);
                }

            } else {
                alert('Edit Failed!');
            }
        }
    };
    xhr.open("POST", "assets/php/" + phpFile + ".php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

function deleteData1(id, pageName) {
    var confirmTxt = "Confirm deletion?";
    if (pageName == "posts") {
        confirmTxt = "Remove comment?";
    }
    if (confirm(confirmTxt)) {
        var phpFile = "";
        switch (pageName) {
            case 'category': phpFile = "deleteCategory";
                break;

            case 'label': phpFile = "deleteLabel";
                break;
        }

        var xhr = new XMLHttpRequest();
        var params = 'id=' + id;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {//if result successful
                var message = 'Deletion successful!';
                if (pageName == "posts") {
                    message = 'Removed successfully!';
                }
                if (xhr.responseText !== "0") {
                    alert(message);
                    window.location.reload();
                } else {
                    alert('Deletion Failed!');
                }
            }
        };
        xhr.open("POST", "assets/php/" + phpFile + ".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        return;
    }
}



// function importImageCardGenerator(){
//   xhr =  new XMLHttpRequest();
//   this.responseType = 'text';
//   demo.showNotification('top','center', 'ID Generation will take some time, please check in later!', 1);
//   document.getElementById("btnGenerate").disabled = true;
//   xhr.onreadystatechange  =  function() {
//       if (this.readyState == 4 && this.status == 200) {
//         if(xhr.responseText == -1){
//           // alert('Image Creation Error, Please try again latter.')
//           demo.showNotification('top','center', 'Image Creation Error, Please try again latter.', 4);
//         }
//       	else{
//         	document.getElementById("btnGenerate").disabled = false;
//         	demo.showNotification('top','center', 'Image Creation a Success!', 2);
//         }
//       }
//   };
//   xhr.open("GET", "../assets/php/bulkimagecreate.php", true);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.send();
// }
// function importAd(){
//     var link = document.getElementById('A-li').value;
//     var disc = document.getElementById('A-di').value;
//     var adcon = document.getElementById('A-co').value;
//     var img = bannerimage;
//     var datas='link='+link+'&disc='+disc+'&adcon='+adcon+'&img='+img;
//     if(img == ""){
//         alert("Upload Image");
//         return;
//       }
//       $.ajax({
//         type:"POST",
//         data:datas,
//         url:"assets/php/uploadAd.php",
//         success: function (responseData) {
//             window.location.reload();
//           },
//           error: function(XMLHttpRequest, textStatus, errorThrown) {
//             // demo.showNotification('top','center', 'Something went wrong', 4);
//             // window.location = window.location.origin;
//         }
//     });
//     }
//     function updateAd(){
//         var link = document.getElementById('A_link').value;
//         var disc = document.getElementById('A_disc').value;
//         var adcon = document.getElementById('A_content').value;
//         var id = document.getElementById('A_id').value;
//         var img = bannerimage;
//     var data='link='+link+'&disc='+disc+'&adcon='+adcon+'&img='+img+'&id='+id;
//     $.ajax({
//         url:"assets/php/Addupdate.php",
//         type:"POST",
//         data:data,
//       success: function(responseData){
//           window.location.reload();
//         }
//     });
//     }

//     function readFileBanner() {
//         if (this.files && this.files[0]) {
//             var FR= new FileReader();
//             FR.addEventListener("load", function(e) {
//                 bannerimage = e.target.result;
//                 console.log("banner : "+bannerimage)
//             });
//             FR.readAsDataURL( this.files[0] );
//          }
//        }

function deleteData(id, pageName) {
    var confirmTxt = "Confirm deletion?";
    if (pageName == "posts") {
        confirmTxt = "Remove comment?";
    }
    if (confirm(confirmTxt)) {
        var phpFile = "";
        switch (pageName) {
            case 'customer': phpFile = "delete_user";
                break;
            case 'user': phpFile = "delete_customer_order";
                break;
            case 'admin': phpFile = "delete_Admin";
                break;
        }
        var xhr = new XMLHttpRequest();
        var params = 'id=' + id;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {//if result successful
                var message = 'Deletion successful!';
                if (pageName == "posts") {
                    message = 'Removed successfully!';
                }
                if (xhr.responseText !== "0") {
                    alert(message);
                    window.location.reload();
                } else {
                    alert('Deletion Failed!');
                }
            }
        };
        xhr.open("POST", "assets/php/" + phpFile + ".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        return;
    }
}


function refund(id, pageName) {
    var confirmTxt = "Confirm Refund ?";
    if (pageName == "user") {
        confirmTxt = "Confirming Refund ?";
    }
    if (confirm(confirmTxt)) {
        var phpFile = "";
        switch (pageName) {
            case 'user': phpFile = "refund";
                break;
        }
        var xhr = new XMLHttpRequest();
        var params = 'id=' + id;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {//if result successful
                var message = 'Refund message posted successfully !';
                if (pageName == "posts") {
                    message = 'Refund message posted !';
                }
                if (xhr.responseText !== "0") {
                    alert(message);
                    window.location.reload();
                } else {
                    alert('Refund message posting unsuccessfull');
                }
            }
        };
        xhr.open("POST", "assets/php/" + phpFile + ".php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        return;
    }
}

