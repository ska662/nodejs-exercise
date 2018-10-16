var array1 = ["a","b","c","d"];
var array2 = ["a","c"];
var x=0;
var result = [];
var result1 = [];
for(x=0;x<array1.length;x++)
{
	result[array1[x]]=true;
}
for(x=0;x<array2.length;x++)
{
	if(result[array2[x]]==true)
		result[array2[x]]=false;
	else
		result1.push(array2[x]);
}
for(x=0;x<array1.length;x++)
{
	if(result[array1[x]]==true)
		result1.push(array1[x]);
}
console.log(result1);