


  const randomNumber= Math.trunc(Math.random()*20)+1;
  console.log(randomNumber)
   let score= 20;
   let highscore=0;
  

   const check = document.querySelector('.check');
   check.addEventListener('click',function(){

    document.querySelector('.guess');
   const guess=(Number(document.querySelector('.guess').value));
    console.log(guess);
    
    if(!guess){
        document.querySelector('.message').textContent= 'no number'
        document.querySelector('.score').textContent= score;
         score--;
    }
    else if(guess===randomNumber){
         document.querySelector('.message').textContent= 'correct number😍'
         document.querySelector('.number').textContent=randomNumber;
         document.querySelector('.score').textContent= score;
         score--;
         document.querySelector('body').style.backgroundColor='blue'
            if(score > highscore){
                highscore= score;
                document.querySelector('.highscore').textContent= highscore;
            }
    }
    else if(guess < randomNumber){
        if(score >1){
             document.querySelector('.message').textContent= 'Too Low'
             
         document.querySelector('.score').textContent= score;
         score--;
             

        }
        else{
            document.querySelector('.message').textContent= 'you lose the game'
            document.querySelector('.score').textContent= 0;
        

        }
       
    }
    else if(guess > randomNumber){
        if(score >1){
             document.querySelector('.message').textContent= 'Too High'
             
         document.querySelector('.score').textContent= score;
         score--;
             

        }
        else{
            document.querySelector('.message').textContent= 'you lose the game'
            document.querySelector('.score').textContent= 0;

        }
        

    }
   })
//    REFRESH THE GAME
 const again= document.querySelector('.again');
 again.addEventListener('click',function(){
            score=20;
                const randomNumber= Math.trunc(Math.random()*20)+1;
            console.log(randomNumber)
            document.querySelector('.message').textContent= 'start guessing'
            document.querySelector('.score').textContent= score;
            document.querySelector('.number').textContent="?";
            document.querySelector('.guess').value='';
            document.querySelector('body').style.backgroundColor='black';



   
 })


   