/**
 * 千分位分割,默认保留两位
 * @param {number} data 需要转换数字 
 * @param {number} num 保留几位小数 (默认保留2位)
 * @return {string} 返回数值字符串
 */
 var toFixedString = function (data, num = 2) {
    if (!data) {
        data = '0';
    }
    return Number(data).toFixed(num).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

/**
 * 把科学计数法转为数值字符串
 * @param {number} num 需要转换数字 
 * @return {string} 返回数值字符串
 */
var toNonExponential = function (num) {
    num = Number(num);
    if (isNaN(num)) {
        return 0;
    }
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}
export { 
    toFixedString,
    toNonExponential,
};