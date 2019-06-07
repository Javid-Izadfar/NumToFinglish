/**
 * Name:Javascript Number To Persian Convertor.
 * License: GPL-2.0
 * Generated on 2019-06-07
 * Author:Mahmoud Eskanadri.
 * Copyright:2018 http://Webafrooz.com.
 * version:3.1.0
 * Email:info@webafrooz.com,sbs8@yahoo.com
 * coded with ♥ in Webafrooz.
 * big numbers refrence: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */

"use strict";var Delimiter=" و ",Zero="صفر",Letters=[["","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"],["ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده","بیست"],["","","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"],["","یکصد","دویست","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نهصد"],[""," هزار"," میلیون"," میلیارد"," بیلیون"," بیلیارد"," تریلیون"," تریلیارد","کوآدریلیون"," کادریلیارد"," کوینتیلیون"," کوانتینیارد"," سکستیلیون"," سکستیلیارد"," سپتیلیون","سپتیلیارد"," اکتیلیون"," اکتیلیارد"," نانیلیون"," نانیلیارد"," دسیلیون"," دسیلیارد"]],DecimalSuffixes=["","دهم","صدم","هزارم","ده‌هزارم","صد‌هزارم","میلیونوم","ده‌میلیونوم","صدمیلیونوم","میلیاردم","ده‌میلیاردم","صد‌‌میلیاردم"],PrepareNumber=function(e){var r=e;"number"==typeof r&&(r=r.toString());var t=r.length%3;return 1===t?r="00".concat(r):2===t&&(r="0".concat(r)),r.replace(/\d{3}(?=\d)/g,"$&*").split("*")},ThreeNumbersToLetter=function(e){if(0===parseInt(e,0))return"";var r=parseInt(e,0);if(r<10)return Letters[0][r];if(r<=20)return Letters[1][r-10];if(r<100){var t=r%10,n=(r-t)/10;return t>0?Letters[2][n]+Delimiter+Letters[0][t]:Letters[2][n]}var i=r%10,s=(r-r%100)/100,u=(r-(100*s+i))/10,a=[Letters[3][s]],o=10*u+i;return o>0&&(o<10?a.push(Letters[0][o]):o<=20?a.push(Letters[1][o-10]):(a.push(Letters[2][u]),i>0&&a.push(Letters[0][i]))),a.join(Delimiter)},ClearEndZero=function(e){for(var r=e.split("").reverse(),t=0;t<r.length;t++){if("0"!==r[t])return r.reverse().join("");t--,r.shift()}return""},ConvertDecimalPart=function(e){return""===(e=ClearEndZero(e))?"":(e.length>11&&(e=e.substr(0,11))," ممیز "+Num2persian(e)+" "+DecimalSuffixes[e.length])},Num2persian=function(e){if(e=e.replace(/\D+(?<![.])/g,""),isNaN(parseFloat(e)))return Zero;var r="",t=e,n=e.indexOf(".");if(n>-1&&(t=e.substring(0,n),r=e.substring(n+1,e.length)),t.length>66)return"خارج از محدوده";for(var i=PrepareNumber(t),s=[],u=i.length,a=0;a<u;a+=1){var o=Letters[4][u-(a+1)],l=ThreeNumbersToLetter(i[a]);""!==l&&s.push(l+o)}return r.length>0&&(r=ConvertDecimalPart(r)),s.join(Delimiter)+r};String.prototype.toPersianLetter=function(){return Num2persian(this)},Number.prototype.toPersianLetter=function(){return Num2persian(parseFloat(this).toString())};