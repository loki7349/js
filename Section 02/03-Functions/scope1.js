//let a=890
//if (true) {
//    let a=34
//const b=3;
//console.log("inner",a);
//var c=9
//}


//console.log(a);
//console.log(b);
//console.log(c)


function one(){
    const username="loki"

    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
//one()


if(true){
    const username=" loki"
    if (username===" loki") {
        const website="youtube"
        //console.log(website + username);
        
    }
    //console.log(website);
}

//console.log(username);

//***********interesting **********//

//console.log(addOne(5));
function addOne(num){
    return num+1
}

//addTwo(5)
const addTwo= function(num){
    return num+2
}
