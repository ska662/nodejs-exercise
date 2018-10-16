var input = prompt("enter items:");
if(input)
{
	var arr = input.split(" ");
	var setStr = new Set();
	//var arrayStr = [];
	for(x=0;x<arr.length;x++)
	{
		setStr.add(arr[x]);
	}
	console.log(setStr);
}
