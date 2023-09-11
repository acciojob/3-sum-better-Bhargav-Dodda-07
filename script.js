function threeSum(arr, target) {
// write your code here

	arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      let left = i + 1;
      let right = arr.length - 1;
      const currentTarget = target - arr[i];

      while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === currentTarget) {
          result.push([arr[i], arr[left], arr[right]]);
          while (left < right && arr[left] === arr[left + 1]) left++;
          while (left < right && arr[right] === arr[right - 1]) right--;
          left++;
          right--;
        } else if (sum < currentTarget) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result
  
}

module.exports = threeSum;
