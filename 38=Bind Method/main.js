var myCustomObj = {
    name: 'Zumon Hossain',
    age:24,
    job:'Student',

    anotherObj:{
        name:'Ft Shanto',
        value:function(){
            console.log('My Name is ' +this.name);
        }
    }
}



var anotherFun = myCustomObj.anotherObj.value.bind(myCustomObj);

anotherFun()