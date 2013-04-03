var arr=[],obj={},time=[],i=0,j=0,k;
for(;i<50000;i++){
    arr[i]=i;
    obj[i]=i;
}

// For loop
time[0] = new Date();
for(i=0;i<arr.length;i++){
    // HOLY SHIT THIS IS FAST
}
time[0] = new Date() - time[0];

time[1] = new Date();
var keys = Object.keys(obj); // Not actually that fast
time[1] = new Date() - time[1];

time[2] = new Date();
for(i=0;i<keys.length;i++){
    var test = obj[keys[i]];
    // FAST
}
time[2] = new Date - time[2];

time[3] = new Date();
for(k in obj){
    var test = obj[k];
    // FUCK THIS IS SLOW
}
time[3] = new Date() - time[3];

console.log(
    'for array: ' + time[0] + 'ms\n' + 
    'obj keys: ' + time[1] + 'ms\n' + 
    'for obj: ' + time[2] + 'ms\n' + 
    'for-in obj: ' + time[3] + 'ms'
);