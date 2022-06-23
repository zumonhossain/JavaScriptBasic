

function callMyName(name, callback){
    var myAge = 20;
    callback(myAge);
    console.log('It is interesting? Yes it is Mr.' + name);
}
function hello(age){
    console.log('I am passed throung argument and my age is:' + age);
}
callMyName('Zumon Hossain', hello);