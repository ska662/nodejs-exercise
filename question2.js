var input = prompt("enter 5 numbers");
var arr = input.split(" ");
var largest=0;
for(x in arr)
{
	if(largest<arr[x])
		largest=arr[x];
}
console.log(arr[arr.length-1]);


/*a=1;
b=2;
c=3;
d= 4;
f=5;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}*/