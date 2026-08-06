function one(){
    const username="Ridanshu"

    function two(){  //Inner Function can access the outer function variables but outer function cannot access the inner function variables

        const website="You Tube"
        // console.log(username)
    }
    // console.log(website)

    two()

}

one()

if(true){
    const username="Ridanshu"
    if(username==="Ridanshu"){
        const website=" You Tube"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++++++++++ Interestinng +++++++++++++++++++++++++++
console.log(addone(7))
function addone(num){
    return num+1;
}


console.log(addTwo(7))     //This is called Hosting 
const addTwo=function(num){
    return num+2
}
