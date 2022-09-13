// const validMountainArray = function (arr) {
//     if (arr.length < 3) return false;
//     let path = "up";
//     let result = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (path === "up") {
//             if (arr[i] === arr[i + 1] || arr[0] > arr[1]) {
//                 return false;
//             }
//             if (arr[i] > arr[i + 1]) {
//                 path = "down";
//             }
//         }
//         if (path === "down") {
//             if (arr[i] < arr[i + 1]) return false;
//             if (arr[i] === arr[i + 1]) {
//                 return false;
//             }
//             if (arr[i] > arr[i + 1]) {
//                 result = true;
//             } else {
//                 if (arr[i + 1] === undefined) {
//                     result = true;
//                 }
//             }
//         }
//
//     }
//     return result;
// };

//
//
// var validMountainArray = function(arr) {
//   if (arr.length < 3) {
//     return false
//   }
//   let direction = "";
//   let lastDirection = ""
//   let counter = 0;
//   for (let i=0;i<arr.length - 1;i++){
//     if (arr[i] === arr[i+1]){
//       return false
//     } else if (arr[i] < arr[i+1]){
//       direction = "up";
//     } else {
//       direction = "down"
//     }
//     if (direction !== lastDirection){
//       counter++;
//       lastDirection = direction;
//     }
//   }
//   return counter === 2 && direction === "down";
// };

//
// var validMountainArray = function(arr) {
//   if (arr.length<3) return false
//   let l = 0, r = arr.length-1
//   while (arr[l]<arr[l+1]) {
//     l++
//   }
//   while (arr[r]<arr[r-1]) {
//     r--
//   }
//
//   //********exclude Monotonic***
//   if (l===r && l!==0 && r!==arr.length-1) return true
//   else return false
// };
//
// console.log(validMountainArray([0, 3, 2, 1]), "true");
// console.log(validMountainArray([1, 3, 2]), "true");
// console.log(validMountainArray([3, 5, 5]), "false");
// console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), "false");
// console.log(validMountainArray([4, 4, 3, 2, 1]), "false");
// console.log(validMountainArray([14, 82, 89, 84, 79, 70, 70, 68, 67, 66, 63, 60, 58, 54, 44, 43, 32, 28, 26, 25, 22, 15, 13, 12, 10, 8, 7, 5, 4, 3]), "false");

// const arr = [400]
// const arr1 = [17, 18, 5, 4, 6, 1]
// let replaceElements = function (arr) {
//     if (arr.length === 1) {
//         arr[0] = -1;
//         return arr
//     }
//
//     let highest = 0
//     let preLast = 0;
//
//     for (var i = arr.length - 1; i >= 0; i--) {
//         if (i === arr.length - 1) {
//             highest = arr[i]
//             preLast = highest
//             arr[i] = -1
//             continue
//         }
//         if (arr[i] > highest) {
//             let breakPoint = arr[i]
//             arr[i]=highest
//             highest = breakPoint
//
//         } else {
//             arr[i] = highest
//         }
//         if(i===0){
//             arr[arr.length-2]=preLast
//         }
//
//     }
//     return arr
//
// };

// let replaceElements = function(arr) {
//     let max = -1;
//
//     for (let i = arr.length -1; i >= 0; i--) {
//         const temp = arr[i];
//
//         arr[i] = max;
//
//         if (temp > max) {
//             max = temp;
//         }
//     }
//
//     return arr;
// };

// console.log(replaceElements(arr), arr)
// console.log(replaceElements(arr1), arr1)

// const removeDuplicatesArr = [ 1, 1, 1, 2, 2, 3, 4 ]
// let removeDuplicates = function(nums) {
//     let count = 0
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]===nums[i+1]){
//             nums[i]='_'
//             count++
//         }
//     }
//     nums.sort()
//     nums.length=nums.length-count
//     nums.sort((a,b)=>a-b)
//     return nums.length
//
// };


// var removeDuplicates = function(nums) {
//     let count = 0;
//
//     for(let i = 0; i < nums.length; i++){
//
//         if(nums[i] === nums[i + 1]){
//             continue;
//         }
//         nums[count] = nums[i];
//         count++;
//
//     }
//
//
//     return count;
//
//
// };
// console.log(removeDuplicates(removeDuplicatesArr),removeDuplicatesArr)


// var removeDuplicates = function(nums) {
//     let count = 1;
//
//     for(let i = 1; i < nums.length; i++){
//
//         if(nums[i] !== nums[count - 1]){
//             nums[count] = nums[i];
//             count++;
//         }
//
//
//     }
//
//
//     return count;
//
//
// };
//
// console.log(removeDuplicates(removeDuplicatesArr),removeDuplicatesArr)
// const nums2 = [0,1,0,3,12]
// let moveZeroes = function (nums) {
//
//     let pointer = 0;
//
//     for(let i=0; i < nums.length; i++){
//         if(nums[i] !== 0) {
//             nums[pointer] = nums[i];
//             pointer ++;
//         }
//     }
//
//     for(let i = pointer; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//
//     return nums;

// };
// var moveZeroes = function(nums) {
//     for (let i = nums.length-1; i>=0;i--){
//         if(nums[i]===0){
//             nums.splice(i,1)
//             nums.push(0)
//         }
//     }
//
// };
// console.log(moveZeroes(nums2), nums2)



// const nums = [3,1,2,4]
// var sortArrayByParity = function(nums) {
//     for (let i = nums.length-1; i>=0;i--){
//         if(nums[i] % 2 !== 0){
//             nums.push(nums[i])
//             nums.splice(i,1)
//
//         }
//     }
//         return nums
// };
// console.log(sortArrayByParity(nums),nums)

// var sortArrayByParity = function(nums) {
//
//     var i = 0, j = 0;
//     var tempValue;
//     for (j; j < nums.length; j++) {
//         if(nums[j] % 2 === 0) {
//             tempValue = nums[i];
//             nums[i] = nums[j];
//             nums[j] = tempValue;
//             i++;
//         }
//     }
//     return nums;
//
// };
// console.log(sortArrayByParity(nums),nums)

// const nums = [0,1,2,2,3,0,4,2]
// var removeElement = function(nums, val) {
//     let count = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
//
//     return count;
// };
// console.log(removeElement(nums,2),nums)

// const heights = [1,1,4,2,1,3]
// var heightChecker = function(heights) {
//
//     const orgHeights = [...heights];
//     const sortedHeights = heights.sort(function(a,b){return a - b});
//     let track = 0;
//     for(let i=0; i < orgHeights.length; i++) {
//         if(orgHeights[i] !== sortedHeights[i]) {
//             track += 1;
//         }
//     }
//     return track;
// };
// console.log(heightChecker(heights))

const nums = [1,2]
var thirdMax = function (nums) {
    let max = -Infinity,mid = -Infinity,min = Infinity;

    for(let num of nums){

        if(num > max){
            min = mid;
            mid = max;
            max = num;
        }else if(num > mid && num < max){
            min = mid;
            mid = num;
        }else if(num > min && num < mid){
            min = num;
        }
    }
    return (min > -Infinity) ? min : max;
};
console.log(thirdMax(nums))

var thirdMax = function(nums) {
    const set = new Set(nums)

    let max = Math.max(...set)

    if (set.size < 3) {
        return max
    }

    set.delete(max)
    max = Math.max(...set)
    set.delete(max)
    return Math.max(...set)
};