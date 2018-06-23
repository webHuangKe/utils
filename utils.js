/**
 * 
 * @param {需要设置的数字} money 
 * @param {保留小数点几位} num 
 */
export function toMoney(money = 0, num = 2) {
  return money.toFixed(num)
}

/**
 * 
 * @param {data      type: Date       需要格式化的时间} data 
 * @param {time      type: boolean    是否显示时分秒} time 
 * @param {interval  type: string     年月份以什么样的方式间隔} interval 
 */
export function changeTimeStyle({data, time, interval}) {
  let date = data ? new Date(data) : new Date()
  let mm = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  let month = date.getMonth();
  let day = date.getDate();
  if (mm < 10) mm = '0' + mm;
  if (hours < 10) hours = '0' + hours;
  if (seconds < 10) seconds = '0' + seconds;
  if (month < 10) month = '0' + (month + 1);
  if (day < 10) day = '0' + day;
  return date.getFullYear() + interval + month + interval + day + ' ' + hours + ':' + mm + ':' + seconds;
}

/**
* 获取图片
* @param {input中图片的数据  } file 
* @param {拿到经过处理的图片（base64）数据后的回调} fn  
* 支持多图片
*/
export function getImageData(file, fn) {
  if (typeof FileReader === 'undefined') {
    alert('您的浏览器不支持图片上传，请升级您的浏览器');
    return false;
  }
  let images = [];
  let leng = file.length;
  for (let i = 0; i < leng; i++) {
    var reader = new FileReader();
    reader.readAsDataURL && reader.readAsDataURL(file[i]);
    reader.onload = function (e) {
      images.push(e.target.result)
      if (images.length === leng) {
        fn && fn(images)
      }
    }
  }
}

/**
* @description 检测字符串
* @param str 待处理字符串
* @param type 待检测的类型
*/
export function typeCheck(str, type) {
  switch (type) {
      case 'email':
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'mobile':
          return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case 'tel':
          return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'number':
          return /^[0-9]$/.test(str);
      case 'english':
          return /^[a-zA-Z]+$/.test(str);
      case 'text':
          return /^\w+$/.test(str);
      case 'chinese':
          return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower':
          return /^[a-z]+$/.test(str);
      case 'upper':
          return /^[A-Z]+$/.test(str);
      default:
          return true;
  }
}

