/**
 * Created by hpedskis on 3/5/17.
 */

/*/
function Foo(num){ this.x = num};
Foo.prototype.printX = function() {console.log(this.x);}
function Bar(num1, num2){
    Foo.call(this, num1);
    this.y = num2;
}
Bar.prototype = Object.create(Foo.prototype);
var b = Bar(100, 200);
b.printX();
console.log((typeof Foo));
/*/

 const obj = {

     punctuate: function(){
         return this.words.map((w) => {
             if(this.s === undefined){
                 return '';
             }else{
                 return w + this.s;
             }
         });

     },
     s: '!',
     words: ['foo', 'bar', 'baz']

 };
 console.log(obj.punctuate());

 function frankenstein(arr1, arr2){
     let firstNum = Math.floor(arr1.length/2);
     let secondNum = Math.floor(arr2.length/2);
     let res = [];
     res = res.concat(arr1.slice(0, firstNum));
     res =res.concat(arr2.slice(secondNum+1));
     return res;
 }

 let arr1 = [1,2,3,4,5,6,7];
 let arr2 = ['a','a', 'a'];
 console.log(frankenstein(arr1, arr2));