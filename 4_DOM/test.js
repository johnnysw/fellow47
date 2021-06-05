/**
 * 
 * @param {string} className 要查找的类的名称
 * @param {string} tagName 限定的标签名称
 * @param {object} context 限定的搜索范围
 * @returns 查找到的元素的数组
 */
function getByClassName(className, tagName, context){
    var result = [];
    // 判断当前浏览器是否支持getElementsByClassName
    // 能力检测！！
    if(  document.getElementsByClassName  ){
        return document.getElementsByClassName(className);
    }else{
        // var arr = document.getElementsByTagName("*");
        var arr = document.getElementsByTagName(tagName);
        for(var i=0; i<arr.length; i++){
            if(arr[i].className.indexOf(className) != -1){ //"aa bb" == "aa"
                result.push(arr[i]);
            }
        }
        return result;
    }
}