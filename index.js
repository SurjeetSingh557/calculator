// Variables
var ans='';
var tempans='';
var signholder=''
// Sign variable
var display=document.getElementById("displayArea");
var allClear=document.getElementById("AC");
var sign=document.getElementById("sign");
var divide=document.getElementById("divide");
var percentage=document.getElementById("percentage");
var multiply=document.getElementById("multiply");
var subtract=document.getElementById("subtract");
var addition=document.getElementById("addition");
var equalstoo=document.getElementById("Equalstoo");
var dot=document.getElementById("dot");
var clear=document.getElementById("CE")


// Number variable
var pressed_9=document.getElementById("pressed_9");
var pressed_8=document.getElementById("pressed_8");
var pressed_7=document.getElementById("pressed_7");
var pressed_6=document.getElementById("pressed_6");
var pressed_5=document.getElementById("pressed_5");
var pressed_4=document.getElementById("pressed_4");
var pressed_3=document.getElementById("pressed_3");
var pressed_2=document.getElementById("pressed_2");
var pressed_1=document.getElementById("pressed_1");
var pressed_0=document.getElementById("pressed_0");







// functions to change the display everytime when some event happens:
function changeDisplay(){
    display.innerText=ans;
};

// function to clear Everything the display when AC is clicked:
function allClearDisplay(){
    ans=''
    tempans=''
    signholder=''
    changeDisplay();
};

// Function to clear only one wrong input
function clearOneSpace(){
    if(ans==''){
        return;
    }else{
        ans=ans.slice(0,-1);
        changeDisplay();
    }
}

// Now all the sign functionality will be below:

function signChange(){
    if (ans.includes('-')){
        ans=ans.slice(1);
    }else{
        if (ans=='0' || ans=='' || ans=="Error"){
            return;
        }else{
            ans='-'+ans;
        }   
    }
    changeDisplay();
};

function dividedby(){
    if (ans==''){
        return;
    }else if (signholder !='' && tempans!=''){
        getAnswer()
        tempans=ans;
        ans=''
        changeDisplay()
        signholder='/'
    }else{        
        tempans=ans;
        ans=''
        signholder='/'
        changeDisplay();
    }
};

function percentageof(){
    if (ans==''){
        return;
    }else if (signholder !='' && tempans!=''){
        getAnswer()
        tempans=ans;
        ans=''
        changeDisplay()
        signholder='%'
    }else{        
        tempans=ans;
        ans=''
        signholder='%'
        changeDisplay();
    }
};

function multiplyby(){
    if (ans==''){
        return;
    }else if (signholder !='' && tempans!=''){
        getAnswer()
        tempans=ans;
        ans=''
        changeDisplay()
        signholder='*'
    }else{        
        tempans=ans;
        ans=''
        signholder='*'
        changeDisplay();
    }
};

function subtractby(){
    if (ans==''){
        return;
    }else if (signholder !='' && tempans!=''){
        getAnswer()
        tempans=ans;
        ans=''
        changeDisplay()
        signholder='-'
    }else{        
        tempans=ans;
        ans=''
        signholder='-'
        changeDisplay();
    }
};

function addby(){
    if (ans==''){
        return;
    }else if (signholder !='' && tempans!=''){
        getAnswer()
        tempans=ans;
        ans=''
        changeDisplay()
        signholder='+'
    }else{        
        tempans=ans;
        ans=''
        signholder='+'
        changeDisplay();
    }
};


function getAnswer(){
    if (signholder !=''){
        if (signholder=='%'){
            ans=tempans*(ans/100);
            tempans=''
            signholder=''            
        }else{
            if (signholder=='/' && ans=='0'){
                ans='Error';
            }else{
                ans=eval(tempans + signholder + ans);
                tempans=''
                signholder=''
            }
        }
        changeDisplay()
    }else{
        if (ans==''){
            ans='Error'
        }
        changeDisplay()
        return;
    }
}



// Adding the variables on pressing the key button

function key_Pressed_9(){
    if(ans=='0' || ans=="Error"){
        ans='9';
    }else{
        ans=ans+'9';
    }
    changeDisplay();
};

function key_Pressed_8(){
    if(ans=='0' || ans=="Error"){
        ans='8';
    }else{
        ans=ans+'8';
    }
    changeDisplay();
};

function key_Pressed_7(){
    if(ans=='0' || ans=="Error"){
        ans='7';
    }else{
        ans=ans+'7';
    }
    changeDisplay();
};

function key_Pressed_6(){
    if(ans=='0' || ans=="Error"){
        ans='6';
    }else{
        ans=ans+'6';
    }
    changeDisplay();
};

function key_Pressed_5(){
    if(ans=='0' || ans=="Error"){
        ans='5';
    }else{
        ans=ans+'5';
    }
    changeDisplay();
};

function key_Pressed_4(){
    if(ans=='0' || ans=="Error"){
        ans='4';
    }else{
        ans=ans+'4';
    }
    changeDisplay();
};

function key_Pressed_3(){
    if(ans=='0' || ans=="Error"){
        ans='3';
    }else{
        ans=ans+'3';
    }
    changeDisplay();
};

function key_Pressed_2(){
    if(ans=='0' || ans=="Error"){
        ans='2';
    }else{
        ans=ans+'2';
    }
    changeDisplay();
};

function key_Pressed_1(){
    if(ans=='0' || ans=="Error"){
        ans='1';
    }else{
        ans=ans+'1';
    }
    changeDisplay();
};

function key_Pressed_0(){
    if (ans=='0' || ans=="Error"){
       return;
    }
    ans=ans+'0';
    changeDisplay();
};
function key_pressed_dot(){
    if (ans.includes('.') || ans=="Error"){
        return;
    }else{
        ans=ans+'.'
    }
    changeDisplay();
}

// Events listners and function calls
changeDisplay();
allClear.addEventListener('click',allClearDisplay);
clear.addEventListener('click',clearOneSpace);
sign.addEventListener('click',signChange);
divide.addEventListener('click',dividedby);
percentage.addEventListener('click',percentageof);
multiply.addEventListener('click',multiplyby);
equalstoo.addEventListener('click',getAnswer);
dot.addEventListener('click',key_pressed_dot);
subtract.addEventListener('click',subtractby);
addition.addEventListener('click',addby);

// Variable events
pressed_9.addEventListener('click',key_Pressed_9);
pressed_8.addEventListener('click',key_Pressed_8);
pressed_7.addEventListener('click',key_Pressed_7)
pressed_6.addEventListener('click',key_Pressed_6)
pressed_5.addEventListener('click',key_Pressed_5)
pressed_4.addEventListener('click',key_Pressed_4)
pressed_3.addEventListener('click',key_Pressed_3)
pressed_2.addEventListener('click',key_Pressed_2)
pressed_1.addEventListener('click',key_Pressed_1)
pressed_0.addEventListener('click',key_Pressed_0)




