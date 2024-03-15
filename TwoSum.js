nums = [2,7,11,15];
target = 26;
function twoSum(nums, target) {
    for (i=0; i < nums.length; i++){
        num1 = nums[i];
        for (j=i+1; j < nums.length; j++){
            num2 = nums[j];
            if (num1 + num2 == target){
                return [i,j];
            }
        }
    }
};
console.log(twoSum(nums, target));