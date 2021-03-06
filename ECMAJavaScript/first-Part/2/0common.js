/*
 *获取指定格式时间
 * @param dt 日期的对象
 * @returns {string} 返回的是字符串的日期和时间
 */

function getDate(dt) {
    var year = dt.getFullYear();//年
    var month = dt.getMonth()+1;//月
    var day = dt.getDate();//日
    var hour = dt.getHours();//时
    var minute = dt.getMinutes();//分
    var second = dt.getSeconds();//秒

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒";
}
//polyfill
//forEach 是在第五版本里被添加到 ECMA-262 标准的；这样它可能在标准的其他实现中不存在，
// 你可以在你调用 forEach 之前 插入下面的代码，在本地不支持的情况下使用 forEach()。
// 该算法是 ECMA-262 第5版中指定的算法。算法假定Object和TypeError拥有它们的初始值。
// callback.call 等价于Function.prototype.call()。
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {//解决 .forEach 在低版本浏览器通用的问题

    Array.prototype.forEach = function(callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}

/***
 *
 * @param id的值，string类型的
 * @returns {HTMLElement | null} 元素对象
 */
function my$(id) {
   return document.getElementById(id)
};