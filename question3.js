var input = prompt("enter a number");
var str = "";
if(input)
{
	var arr = input.split("");
	var x=0;
	for(x in arr)
	{
		if(arr[x]%2==0 && arr[x+1]%2==0)
			str=str+arr[x]+"-";
		else
			str=str+arr[x];
	}
}
console.log(str);