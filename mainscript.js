document.querySelector('.control-buttons span').onclick=function()
{
   let yourName = prompt("Whats your name?");
   if(yourName=="")
   {
      document.querySelector('.info-container span' ).textContent  ='Unknown';
   }
   else
   {
      document.querySelector('.info-container span' ).textContent  =yourName;
   }
   document.querySelector('.control-buttons').remove();
}
//- - - - - - - - - - - - - - - - - - - -
let  block   = document.querySelector('.memory-game-blocks');

let  blocks    = Array.from(block.children);
let  keysblock = Array.from(Array(blocks.length).keys());
shufell(keysblock);
blocks.forEach((block,index)=>{
   block.style.order=keysblock[index];
   block.addEventListener('click',function()
   {
      fliped(block);
   })
});
function shufell(Array)
{
   var SUMNUMBER = Array.length,temp,rendoms;
   while(SUMNUMBER > 0)
   {
      rendoms = Math.floor(Math.random() * SUMNUMBER);  
      SUMNUMBER--;
      temp             =    Array[SUMNUMBER];
      Array[SUMNUMBER] =    Array[rendoms];
      Array[rendoms]   =    temp;
   }
}
function fliped(selection)
{
   selection.classList.add('is-flipped');

   document.getElementById('FlipCardSound').play();

   let countor =  blocks.filter( CardFliped => CardFliped.classList.contains('is-flipped') );
   if(countor.length ===2)
   {
      STOPCLIKING();
      checkfkiped(countor[0],countor[1]);
   }
}
function  STOPCLIKING()
{
   block.classList.add('stopClick');
   setTimeout(()=>{
      block.classList.remove('stopClick');
   },500)
}
function checkfkiped(firstselect,secondselect)
{
   let triesElement = document.querySelector('.tries span').innerHTML;

   if(firstselect.dataset.images==secondselect.dataset.images)
   {
      triesElement+= 1;
      document.getElementById('fald').play();
       firstselect.classList.remove('is-flipped');
       secondselect.classList.remove('is-flipped');
           firstselect.classList.add('has-match');
          secondselect.classList.add('has-match');
   }
   else
   {
     

     document.getElementById('win').play();

      setTimeout(()=>{
       firstselect.classList.remove('is-flipped');
      secondselect.classList.remove('is-flipped');
      },500)

      
   }
}