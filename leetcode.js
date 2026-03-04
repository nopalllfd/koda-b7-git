/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num += nums[i];
  }
  for (let j = 0; j <= k; j++) {
    console.log(num);
    if (num < k) {
      return num;
    } else {
      num -= k;
    }
  }
  return num;
};
