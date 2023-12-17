function mincost(arr)
{ 
//write your code here
// return the min cost
  let totalCost =0;
	arr.sort((a,b) => b-a);
	while(arr.length>1){
		let currentCost = arr[arr.length-1] + arr[arr.length -2];
		totalCost+=currentCost;
		arr.pop(); arr.pop();
		arr.push(currentCost);
		arr.sort((a,b) => b-a);
	}
	return totalCost;
}

module.exports=mincost;
