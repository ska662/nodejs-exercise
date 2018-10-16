var student = [
{ StudentName: 'David', Marks: 80},
{ StudentName: 'Vinoth', Marks: 77},
{ StudentName: 'Divya', Marks: 88},
{ StudentName: 'Ishitha', Marks: 95},
{ StudentName: 'Thomas', Marks: 68}
];

function avg(arr){
	var sum=0;
	for (var i = 0; i < arr.length; i++) {
		sum = sum + arr[i].Marks;
	}
	return sum/arr.length;
}

function grade(marks){
	if(marks<60){
		return "F";
	}
	else if(marks<70){
		return "D";
	}
	else if(marks<80){
		return "C";
	}
	else if(marks<90){
		return "B";
	}
	else{
		return "A";
	}
}

console.log(grade(avg(student)));



