// const getColor=()=>{
//     //creating random hex code
//     const randomNumber = Math.floor(Math.random()*16777215);

//     const randomCode = "#"+randomNumber.toString(16);
//     console.log(randomNumber,randomCode);
// }

// document.getElementById("btn").addEventListener("click",getColor)

//We can also write like this

document.getElementById("btn").addEventListener("click",()=>{   //using arrow fn as a parameter  
    //creating random hex code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
})