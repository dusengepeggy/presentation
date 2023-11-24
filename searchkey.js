const student={
    stdId:1001,
    name:'KARERA Kenny',
    age:20,


};
const searchKey=(key)=>{
    if (student.hasOwnProperty(key)===true) {
        return student[key];
    } else {
        return "No such key";
    }


}
console.log(searchKey("name"));

console.log(searchKey("id"));
