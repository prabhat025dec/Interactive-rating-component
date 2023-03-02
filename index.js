
var numberOFRoundbutton=document.querySelectorAll(".round-button").length;
//console.log(numberOFRoundbutton);

for(var i=0;i<numberOFRoundbutton;i++){
    let x=i;
    document.querySelectorAll(".round-button")[i].addEventListener("click",function(){
         for(var y=0;y<numberOFRoundbutton;y++){
            if(y!=x){
                document.querySelectorAll(".round-button")[y].classList.remove("click");
            }
         }
         document.querySelectorAll(".round-button")[x].classList.add("click"); 

         
         //alert("I got clicked");    
    });
}

let p=-1;
function myFunction(field){
          p=field;
}

function myFunction2() {
       if((p>=1)&&(p<=5)){
          
          document.getElementById("display2").classList.remove("hidden");
          document.querySelector(".selected p").textContent="You selected "+p+" out of 5"
        
          
       }
       
    
  }

  
  