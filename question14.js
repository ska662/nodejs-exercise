var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
/*var occupationArray = myObj.filter(myObj=>myObj.occupation==="Programmer");
console.log(occupationArray);*/
var occupationArray = [];
myObj.forEach(function(myObj){
	if(myObj.occupation=="Programmer")
	occupationArray.push(myObj);
});

console.log(occupationArray);

var byAge = myObj.slice(0);
byAge.sort(function(a,b) {
	return b.age-a.age;
});
console.log('by age:');
console.log(byAge);

var result = myObj.reduce(function(result, myObj){
  result[myObj.occupation] = (result[myObj.occupation] || []).concat(myObj);
  return result;
}, {});

console.log(result);

var nameArray = [];

myObj.forEach(function(myObj){
	nameArray.push(myObj.name);
});

console.log(nameArray);