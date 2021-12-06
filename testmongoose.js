const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
    hobby:String,
}
const mydata = mongoose.model('Cat',schema);

// const kitty3 = new mydata({ name: 'zhang3' });
//  kitty3.save().then(() => console.log('wewewe'));
// const kitty1 = new mydata({ name: 'zhang' ,age:1,health:"good"});
// kitty1.save().then(() => console.log('new schema writed'));
mydata.find({name:"zhang3"},(err,data)=>{console.log(data[0]._doc.name)})