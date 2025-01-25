
   const cat = document.querySelector('img');
   const movingCatSrc = cat.src;
   const dancingCatUrl = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

   const screenWidth = window.innerWidth;
   const catWidth = cat.width;
   const middlePosition = ( screenWidth - catWidth) / 2;

   let position = 0;
   let catMovementTimer;

   function catWalk (){
      position+= 10;
      cat.style.left = `${position}px`;


      if (position > screenWidth){
         position = -catWidth;
      }

      if (position >= middlePosition && position <= middlePosition + 10){
         clearInterval(catMovementTimer);
         cat.src = dancingCatUrl;

         return new Promise ((resolve)=>{
            setTimeout(() => {
               cat.src = movingCatSrc;
               resolve();
            }, 5000);

         });
   }
}

function startWalk(){
   catMovementTimer= setInterval(()=> {
      catWalk().then(()=> {
         clearInterval(catMovementTimer);
         startWalk();
      });
   }, 50)
}
   window.addEventListener('load',startWalk);

