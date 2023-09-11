function threeSum(arr, target) {
// write your code here

	arr.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i + 1]) continue;
	  
	  let j=i+1; let k=arr.length-1;

	  while (j < k) {
	  	let sum = arr[i] + arr[j] + arr[k];

		  if (sum === 0) {
		  	result.push([arr[i], arr[j], arr[k]]);

			  while(arr[j]===arr[j+1]) j++;
			  while(arr[k]===arr[k-1]) k--;

			  j++;
			  k--;
		  }

		  else if(sum < 0){
			  j++;
		  }

		  else{
			  k--;
		  }
	  }
	  
    
  }

  return result;
  
}

module.exports = threeSum;
