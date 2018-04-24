/*var year=2018;
var name=prompt('What is your name?');
var age= prompt('How old are you?');
alert( name+', '+ 'ваш год рождения:' + '  ' + (year-age) );

*/


/*function myFunction() {
	var rub = 'руб';
		number=prompt('Введите количество рублей');
		present=prompt('Введите процент, который нужно узнать от'+' '+ number +' '+ rub);
		result= number*present/100;
		number+=rub;
		present+='%';
		result='oт'+' '+number+' '+present +' '+'составляет:'+' '+result+rub;
		alert(result);
 		
 }*/

/* var country=['Россия','Австралия', 'Польша', 'Латвия', 'Чехия'];
 	 popul=[142, 9, 38, 2, 11];

var elem = document.getElementsByTagName('div')[0],
	br='mil.<br>',
	ru=country[0]+'- '+popul[0]+br,
	av=country[1]+'- '+popul[1]+br,
	pl=country[2]+'- '+popul[2]+br,
	lv=country[3]+'- '+popul[3]+br,
	cz=country[4]+'- '+popul[4]+br;
 elem.innerHTML=(ru+av+pl+lv+cz);
 */

/*var arr4=['text',78.5, 'text', 0, 'text', 50, 'text',-90,'text'];
arr4=arr4.filter(function(elem){
  return  elem<=0||0<=elem;
  });
result='В тексте встречаются такие числа:'+ '  ' + arr4;
alert(result);*/

/*var i;
for (var i =0;  i <10; i++) {
console.log(i);
}*/

/*var num=2;
while (num <= 5){
  console.log(num);
  num++;
}

///////////////////////////////
///////////////////////////////
var num1=2;
for (; num1<=5; num1++) {
	console.log(num1);
}
//*//////////////////////////////////////////////////////
///////////////////////////////
/*do {
	var num2=2;
	console.log(num2);
	num2++;

}
while(num2<5);*/

/*var sdvig = 0;
var test = document.getElementById('test')
function move(){
test.style.marginLeft = sdvig + 'px';
test.style.marginTop = sdvig + 'px';
sdvig = sdvig+3;
}



var tr=setInterval(move,70);

document.getElementById('stop').onclick=function(){
clearInterval(tr)
}
*/

/*document.addEventListener("DOMContentLoaded", function(event){
	console.log('DOM fully loaded and parsed');
});


function modifyText(){ 
	var t2=document.getElementById('t2');
	if(t2.firstChild.nodeValue=='три'){
		t2.firstChild.nodeValue='два';
	}else{
		t2.firstChild.nodeValue='три';
	}
}


var el=document.getElementById('outside');
el.addEventListener('click', modifyText, false);


var div=document.getElementById('div');
var listener=function(event){
	console.log(event.pageX);
		
	div.removeEventListener('click', listener, false);

};
div.addEventListener('click', listener, false);

*/
/*var ball=document.createElement('img');
document.body.appendChild(ball);
ball.src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/soccer-ball-o-64.png';
ball.style.width='80px';
ball.style.left='0px';
ball.style.top='0px';
ball.style.position='absolute';

var boundX=window.innerWidth;
var boundY=window.innerHeight;
var speed=10;
var x=1;
var y=1;

function screensaver (){
var posX=ball.offsetLeft;
var posY=ball.offsetTop;

if(posX+ball.offsetWidth>boundX||posX<0){
x*=-1;
}
if(posY+ball.offsetHeight>boundY||posY<0){
y*=-1;
}


ball.style.left=ball.x+(speed*x)+'px';
ball.style.top=ball.y+(speed*y)+'px';

setTimeout(screensaver,20);
}

screensaver()
*/

/*window.onload=function(){
	if(localStorage.getItem('bgcolor')!=null){
		var color=localStorage.getItem('bgcolor');
		document.getElementsByTagName('body')[0].style.background=color;
	}
	document.getElementById('green').onclick=function(){
		console.log('work green');
		document.getElementsByTagName('body')[0].style.background='green';
		localStorage.setItem('bgcolor','green');
		
	}

	document.getElementById('red').onclick=function(){
		console.log('work red');
		document.getElementsByTagName('body')[0].style.background='red';
		localStorage.setItem('bgcolor','red');
	}
}*/


/*window.onload=function(){

var todoList=[];
 if(localStorage.getItem('todo')!=undefined){
    todoList=JSON.parse(localStorage.getItem('todo'));
  }


document.getElementById('add').onclick=function(){
		var d=document.getElementById('in').value;
   // {todo: Добавить хлеб, check: false}
   var temp={};
   temp.todo=d;
   temp.check=false;
   var i=todoList.length;
   todoList[i]=temp;
   console.log(todoList);
  out();
  localStorage.setItem('todo',JSON.stringify(todoList))
}
function out(){
  var out=" ";
  for(var key in todoList){
   
    if(todoList[key].check==true){
      out+='<input type="checkbox"checked>'
    }else{
      out+='<input type="checkbox">';
    }
     out+=todoList[key].todo+'<br>';
  }
  document.getElementById('out').innerHTML=out;
}
}
*/



//Создаем у всех li кнопки close (крестик)
var myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
    createCloseButton(myNodelist[i]);
}

//Добавляем выделение при клике на li
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Создание нового элемента из данных в myInput
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("The field dont't be empty!");
    } else {
        //Создаем новый элемент li
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById('myUL').appendChild(li);

        //Делаем кнопку для удаления (крестик)
        createCloseButton(li);

        //Чистим поле input
        document.getElementById('myInput').value = "";
    }
}

function createCloseButton(node) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);
    span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
}











