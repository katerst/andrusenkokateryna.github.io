alert( 'ПРЕДУПРЕЖДЕНИЕ!'+'\n'+ 'Игра для детей не старше трех лет:D'+'\n'+ 'Поймай все яйца!'+'\n'+'Kроме тех, которые лишние.')

var basket=document.getElementById('basket');
function changeCursor(){
  document.body.style.cursor = basket;
}

document.onmousemove=function(event){
basket.style.position='fixed';
basket.style.left=event.clientX+-30+'px';


}

var act=0;
var egg=document.getElementById('egg');
var egg1=document.getElementById('egg1')
var egg2=document.getElementById('egg2')
var egg3=document.getElementById('egg3')
var egg4=document.getElementById('egg4')



function move(){
egg.style.marginTop=act+50+'px';
egg1.style.marginTop=act+10+'px';
egg2.style.marginTop=act+40+'px';
egg3.style.marginTop=act+15+'px';
egg4.style.marginTop=act+30+'px';



act=act+8;
 
 
  if(act>=900){
    
     egg.style.marginLeft =40+'px';
     egg1.style.marginLeft =20+'px';
     egg2.style.marginLeft =30+'px';
     egg3.style.marginLeft=50+'px';
     egg4.style.marginLeft=10+'px';

     act= 0;
     }
   
     
}

var tr=setInterval(move, 100);
document.getElementById('egg').onmouseenter=function(){
this.style.display='none';
}

document.getElementById('egg1').onmouseenter=function(){
egg1.style.display='none';



}

document.getElementById('egg2').onmouseenter=function(){
this.style.display='none';


}


document.getElementById('egg3').onmouseenter=function(){
document.write ('Game Over');
document.body.style.color='#fff';
document.body.style.background='url(https://avatanplus.com/files/resources/mid/57c584573c84b156db8cf4d0.jpg)';
document.body.style.backgroundSize='cover';
document.body.style.fontSize='50px';
document.body.style.textAlign='center'


}

document.getElementById('egg4').onmouseenter=function(){
document.write ('Game Over');
document.body.style.color='#fff';
document.body.style.background='url(https://avatanplus.com/files/resources/mid/57c584573c84b156db8cf4d0.jpg)';
document.body.style.backgroundSize='cover';
document.body.style.fontSize='50px';
document.body.style.textAlign='center'
}



