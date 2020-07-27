function randomDigit(){
     const min=1000;
     const max=9999;
    let result= Math.round((Math.random()*max)+min);
    
    while(result>max){
    
        result= Math.round((Math.random()*max)+min);
    
    }
  
    document.getElementById('randomPin').value=result;
    
    
    }
    
    

    function userInput(clicked_id){


//         let x=clicked_id;
        let y=clicked_id;
        const str=document.getElementById('numberInput').value;
        if(str.length<4){

document.getElementById('numberInput').value+=y;}



    }


    function backCursor(){
    const str=document.getElementById('numberInput').value;
    
    let newStr=str.slice(0,-1);
    document.getElementById('numberInput').value=newStr;
   

    }


    function clearInput(){
     
        const str="";
        document.getElementById('numberInput').value=str;




    }
 


    function submitButton(){

   const oldStr=document.getElementById('randomPin').value;
   const newStr=document.getElementById('numberInput').value;

   if(oldStr==newStr&oldStr.length!=0&newStr.length!=0){

    document.getElementById('success').style.display="block";
   }

   if(oldStr.length==0||newStr.length==0){
       
     if(oldStr.length==0){
        document.getElementById('randomPin').value="Generate Random Pin First";
        timeFunction(); 
    }
     if(newStr.length==0){
        document.getElementById('numberInput').value="Enter Your Pin";
     }
      timeFunction();
   }

   if(newStr.length<4){
       
    
       document.getElementById('numberInput').value="Pin Must Contain 4 Numbers";
       timeFunction();

  }

   else if(oldStr!=newStr&oldStr.length!=0&newStr.length!=0){


    document.getElementById('wrong').style.display="block";
    // let chancesLeft=document.getElementById('chance').innerText;
    // let chancesLeftNumber=parseInt(chancesLeft);
    // chancesLeftNumber=chancesLeftNumber-1;
    chanceCount();
   }







    }




    function timeFunction() {
        setTimeout(function(){ location.reload();}, 5000);
    }

    

    function chanceCount(){

        const val=document.getElementById('chance').innerText;
        const newVal=parseInt(val);
        let decreaseVal=newVal;
        if(decreaseVal>0){
        decreaseVal=decreaseVal-1;
        document.getElementById('chance').innerText=decreaseVal;
        
    }

        if(decreaseVal==0){
           
          const button=document.getElementById('submit');
          button.style.background = 'red';
        button.disabled = true;

        }


    }


    