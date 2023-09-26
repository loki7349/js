//Immediately Invoked function Expression(IIFE)

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);
})();
//chai()

( (name) =>  {
    //Un-Named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("loki")