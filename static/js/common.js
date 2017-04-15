/*
公用js
*/
var rootPath = '/paymer';

function getCookie(key){
    var cookie = document.cookie;
    var arr1 = cookie.split('; ');
    for(var i=0,len=arr1.length;i<len;i++){
        var arr2 = arr1[i].split('=');
        if(arr2[0] == key){
            return arr2[1];
        }
    }
    return '';
}


