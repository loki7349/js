const myObject1={
    js: "javascript",
    cpp: "c++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    
        
    // console.log(myObject1[key]);
    console.log(`${key} shortcut is for ${myObject1[key]}`);
}


const programming=["js","rb","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
    
}

const map1= new Map()
map.set('IN',"india")
map.set('USA',"State of america")
map.set('Fr',"France")

for (const key in map1) {
    console.log(key);
}

