//Generating 4 digit Random Numbers where Minimum is 1000 and Max is 9999

function randomDigit(){
     const min=1000;
     const max=9999;
    let result= Math.round((Math.random()*max)+min);
    
    while(result>max){
    
        result= Math.round((Math.random()*max)+min);
    
    }
  
    document.getElementById('randomPin').value=result;
    clearInput();
    document.getElementById('wrong').style.display="none";
    document.getElementById('success').style.display="none";
    
    
    }
    

    //Taking User Input (0-9) and Showing it to the Input Screen
    function userInput(clicked_id){
        let key=clicked_id;
        const str=document.getElementById('numberInput').value;
        //Only 4-Digit Number will be Accepted
        if(str.length<4){

document.getElementById('numberInput').value+=key;}
        //Alert User if there is already 4 digits Have been Inserted
        else if(str.length>=4){
            alert("Pin can contain 4 Digits Only!");
        }
    }

   //Deleting the Last Element of the String using Back Cursor for Bonus Mark
    function backCursor(){
    const str=document.getElementById('numberInput').value;
    
    let newStr=str.slice(0,-1);
    document.getElementById('numberInput').value=newStr;
   

    }


    //For clearing the Screen when C is Pressed for Bonus Mark

    function clearInput(){
     
        const str="";
        document.getElementById('numberInput').value=str;

}
 

  //Submit Button for the Result

    function submitButton(){

   const oldStr=document.getElementById('randomPin').value;
   const newStr=document.getElementById('numberInput').value;


//Checking if both input is not Null and They are Matched
   if(oldStr==newStr&oldStr.length!=0&newStr.length!=0){
    document.getElementById('success').style.display="block";
    document.getElementById('wrong').style.display="none";
    
    document.getElementById('locked').style.display="none";

    //Everytime The Inputs are Matched The number of chance will be set to 3
    document.getElementById('chance').innerText='3';
   }

   if(oldStr.length==0||newStr.length==0){

    /*Checking if Random number has been Generated and Telling user to Generate
    the Random Number First*/
     if(oldStr.length==0){
        document.getElementById('randomPin').value="Generate Random Pin First";
        clearInput();
    }
     
    /*Checking if user has entered the Input and Telling user to Insert the Pin*/
     if(newStr.length==0){
        alert("Enter your Pin Please");
        
     }
     
     
   }

   if(newStr.length!=4&newStr.length>0){
       
    alert("Pin Must Contain 4 Numbers");

  }

   else if(oldStr!=newStr&oldStr.length!=0&newStr.length!=0){
    /*The Inputs are not Matched and The strings are not empty*/

    document.getElementById('wrong').style.display="block";
    document.getElementById('success').style.display="none";
    /*The Number of Chance will be decreased */
    chanceCount();
    clearInput();
   }

    }

    
    //Counting the Number of Chances left for entering the Pin For Bonus Mark
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
          const calculatorBody=document.getElementById('calBody');
          button.style.background = 'red';
          button.disabled = true;
        

        }


    }


    