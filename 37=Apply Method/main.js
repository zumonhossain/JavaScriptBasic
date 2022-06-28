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

myCustomObj.anotherObj.value();
myCustomObj.anotherObj.value.call(myCustomObj);