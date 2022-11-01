//Make The String Great
//Valid Parentheses
//Crawler Log Folder
//Evaluate Reverse Polish
//Remove All Adjacent Duplicates In String


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

// const nums = [1,2]
// var thirdMax = function (nums) {
//     let max = -Infinity,mid = -Infinity,min = Infinity;
//
//     for(let num of nums){
//
//         if(num > max){
//             min = mid;
//             mid = max;
//             max = num;
//         }else if(num > mid && num < max){
//             min = mid;
//             mid = num;
//         }else if(num > min && num < mid){
//             min = num;
//         }
//     }
//     return (min > -Infinity) ? min : max;
// };
// console.log(thirdMax(nums))
//
// var thirdMax = function(nums) {
//     const set = new Set(nums)
//
//     let max = Math.max(...set)
//
//     if (set.size < 3) {
//         return max
//     }
//
//     set.delete(max)
//     max = Math.max(...set)
//     set.delete(max)
//     return Math.max(...set)
// };
// const variant = '(({{[]}}))'
//
// const isValid = (str) => {
//
//     const stack = []
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         const current = str[i]
//         if (isClosed(current)) {
//             if (map[current] !== stack.pop()) return false
//         } else {
//             stack.push(current)
//         }
//     }
//
//     return stack.length === 0
// }
//
// const isClosed = (ch) => {
//     return [ ']', '}', ')' ].includes(ch)
// }
//
// console.log(isValid(variant))
//
//
// const isValidString = (str) => {
//     const set = new Set([ '}', ')', ']' ])
//     const stack = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         const current = str[i]
//         if (set.has(current)) {
//             if (map[current] !== stack.pop()) return false
//         } else {
//             stack.push(current)
//
//         }
//
//     }
//
//     return stack.length === 0
// }
//
//
//
//
// console.log(isValidString('{{}}'))

//
// const example1 = [ 'aabb', 'ab', 'ba', 'cd', 'dc', 'cccd' ]
//
// const getAmountOfPairs = (arra) => {
//     const counts = {};
//     let count = 0;
//
//     for (let i = 0; i < arra.length; i++) {
//         arra[i] = [ ...new Set(arra[i]) ].join('')
//
//     }
//     for (let j = 0; j < arra.length; j++) {
//         const reversed = arra[j + 1]?.split('')?.reverse()?.join('')
//         if (arra[j].length === arra[j + 1]?.length) {
//             if (arra[j] !== arra[j + 1]) {
//                 if (arra[j] === reversed) {
//                     arra[j + 1] = reversed
//                     continue
//                 }
//             }
//         }
//     }
//
//     arra.forEach((x) => {
//         counts[x] = (counts[x] || 0) + 1;
//     });
//
//     Object.values(counts).forEach(el => {
//         count += el
//     })
//
//     return count
// }
//
//
// console.log(getAmountOfPairs(example1))

// const nums = [ 2, 3, 4, 7 ]
// const target = 9
//
// function twoSum(nums, target) {
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             return [i+1, j+1];
//         }
//     }
// }}
// let result;
// let numObj = {};
// for (let i = 0; i < nums.length; i++) {
//     let pointer = target - nums[i];
//
//     if (numObj[pointer] !== undefined) {
//         result = [ numObj[pointer], i ]
//     }
//     numObj[nums[i]] = i
//
// }
// console.log(result)
// console.log(numObj)
// }


// console.log(twoSum(nums, target))
//
// const summm = (nums, target) => {
//
//     let obj = {}
//
//     for (let i = 0; i < nums.length; i++) {
//         let result = target - nums[i]
//
//         if (obj[result] !== undefined) {
//             return [ obj[result], i ]
//         } else {
//             obj[nums[i]] = i
//         }
//
//     }
// }
// console.log(summm(nums, target))
// const price = [ 7, 1, 5, 3, 6, 4 ]
// var maxProfit = function (prices) {
//     // let profit = 0;
//     // for (let i = 0; i < prices.length - 1; i++) {
//     //     for (let j = i + 1; j < prices.length; j++) {
//     //         const currentProfit = prices[j] - prices[i];
//     //
//     //         if (currentProfit > profit) {
//     //             profit = currentProfit;
//     //         }
//     //     }
//     // }
//     //
//     // return profit;
//
//
//     let profit = 0;
//
//     let stockToBuy = prices[0];
//
//     for (let i = 1; i < prices.length; i++) {
//         if (stockToBuy > prices[i]) {
//             stockToBuy = prices[i];
//         }
//
//         const currentProfit = prices[i] - stockToBuy;
//
//         if (currentProfit > profit) {
//             profit = currentProfit;
//         }
//     }
//
//     return profit;
//
// };
//
// console.log(maxProfit(price))

//resolved
// const nums = [ 2, 14, 18, 22, 22 ]
// var containsDuplicate = function (nums) {
//     const deleteDuple = new Set(nums).size
//     return deleteDuple !== nums.length
// };
//
// console.log(containsDuplicate(nums))
// const s = "()[]{}"
// var isValid = function (s) {
//     const stack = []
//     const map = {
//         '}':'{',
//         ")":"(",
//         "]":"["
//     }
//     const isClosed = new Set([ ']', '}', ')' ])
//     for (let i = 0; i < s.length; i++) {
//         const current = s[i]
//         if (isClosed.has(current)) {
//             if (map[current] !== stack.pop()) return false
//         } else {
//             stack.push(current)
//         }
//     }
//     return stack.length ===0
// };
// console.log(isValid(s))

// const first = "A man, a plan, a canal: Panama"
// var isPalindrome = function (s) {
//    let myStr= s.replace(/[^a-zA-Z0-9]/g,'')
//
//     let count = myStr.length - 1
//     for (let i = 0; i < myStr.length; i++, count--) {
//         if (myStr[i].toLowerCase() !== myStr[count].toLowerCase()) {
//             return false
//         }
//     }
//     return true
// }
//
//
// console.log((isPalindrome(first)))
//
// const isValid = (str) => {
//     const set = new Set([ ']', '}', ')' ])
//     const stack = [];
//     const map = {
//         '}': '{',
//         ')': '(',
//         ']': '['
//     }
//
//     for (let i = 0; i < str.length; i++) {
//         let current = str[i]
//         if (set.has(current)) {
//             if (map[current] !== stack.pop()) return false
//         } else {
//             stack.push(current)
//         }
//
//     }
//     return stack.length === 0
// }
//
// console.log(isValid('{{}]}'))

// const sumTwo = (nums, target) => {
//     const counter = {}
//
//     for (let i = 0; i < nums.length; i++) {
//         let pointer = target - nums[i]
//         if (counter[pointer] !== undefined) {
//             return [ counter[pointer], i ]
//         } else {
//             counter[nums[i]] = i
//         }
//
//
//     }
//
// }
//
// console.log(sumTwo([ 2, 7, 11, 15 ], 9))
// const s = "anagram", t = "nagaram"
//
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false
//     const sortedS = s.split('').sort().join('')
//     let sortedT = t.split('').sort().join('')
//     return  sortedS === sortedT
//
// };
//
// console.log(isAnagram(s, t))


// const removeDuplicates = (str) => {
//
//     const result = []
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === result[result.length - 1]) {
//             result.pop()
//         } else {
//             result.push(str[i])
//         }
//     }
//
//     return result.join('')
// }
// console.log(removeDuplicates('aabbca'))
// const findDuplicate = (nums) => {
//     // const map = {}
//     //
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (map[nums[i]] !== undefined) {
//     //         return nums[i]
//     //     } else {
//     //         map[nums[i]] = nums[i]
//     //     }
//     // }
//
//
//     // first step: arrive both at interception
//     let tortoise = nums[0];
//     let hare = nums[0];
//
//     while (true) {
//         tortoise = nums[tortoise];
//         hare = nums[nums[hare]];
//         if (tortoise === hare) break
//     }
//
//     // reached interception
//     // tortoise walks T steps from 0
//     // hare walks T steps from current position at same speed
//     tortoise = nums[0];
//
//     while (tortoise !== hare) {
//         tortoise = nums[tortoise];
//         hare = nums[hare];
//     }
//
//     return hare;
//
//
// }
// console.log(findDuplicate(withDupl))
// const withDupl = [ 3, 1, 2, 4, 3 ]


// const binarySearch = (list, target) => {
//     let start = 0
//     let end = list.length - 1
//
//     while (start <= end) {
//         let middle = Math.floor((end + start) / 2)
//         let guess = list[middle]
//         if (guess === target) {
//             return middle
//         } else if (guess > target) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//
//     }
//     return -1
//
// }
//
// console.log(binarySearch([ 1, 2,3, 4, 6, 8, 9 ], 3))
//
// const getEvenSummOfFibonacci = (fibbArra) => {
//     let counter = 0
//
//     while (true) {
//         let next = fibbArra[fibbArra.length - 1] + fibbArra[fibbArra.length - 2]
//         if (next < 1_000_000) {
//             // fibbArra.push(next) //O(n) memory O(n) speed
//             fibbArra[0] = fibbArra[1] // O(1) memory O(n) speed
//             fibbArra[1] = next
//             if (next % 2 === 0) {
//                 counter += next
//             }
//         } else {
//             return counter
//         }
//     }
// }
// console.log(getEvenSummOfFibonacci([ 1, 1 ]))

// Find All Numbers Disappeared in an Array
// const Input = [ 4, 3, 2, 7, 8, 2, 3, 1 ]
// const Output = [ 5, 6 ]
// var findDisappearedNumbers = function (nums) {
//     const set = new Set(nums)
//     const result = []
//     for (let i = 1; i <= nums.length; i++) {
//         if (!set.has(i)) {
//             result.push(i)
//         }
//     }
//     return result
// };
//
// console.log(findDisappearedNumbers(Input))
//
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
//     After sorting, it becomes [0,1,9,16,100].
// var sortedSquares = function(nums) {
//
//     return nums.map(e=>e*e).sort((a,b)=>a-b)
// };

// const isValid = (arr) => {
//     const stack = []
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i])
//         } else {
//             if (map[s[i]] !== stack.pop()) return false
//         }
//     }
//
//     return stack.length === 0
//
// }

// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2

// var minOperations = function (logs) {
//     const stack = []
//     for (const item in logs) {
//         console.log(item)
//         if (item === '../') {
//             stack.pop()
//         } else if (item !== './') {
//             stack.push(item)
//         }
//     }
//     return stack.length
// };
// console.log(minOperations([ "d1/", "d2/", "../", "d21/", "./" ]))
// const s = "abBAcC"
// var makeGood = function (s) {
//     const st = []
//
//     for (let i = 0; i < s.length; i++) {
//         st.push(s[i])
//         if (st.length > 1) {
//             const x = st[st.length - 1]
//             const y = st[st.length - 2]
//             if (Math.abs(x.charCodeAt(0) - y.charCodeAt(0)) === 32) {
//                 st.pop()
//                 st.pop()
//             }
//         }
//     }
//
//
// };
//
//
// console.log(makeGood(s))


// var peakIndexInMountainArray = function(arr) {
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             return i
//         }
//     }
// };

//with binary search
var peakIndexInMountainArray = function(arr) {

    let left = -1
    let right = arr.length

    while (right-left >1) {
        let middle = Math.floor((right+left)/2)

        if(arr[middle] < arr[middle+1]){
            left = middle
        }else {
            right = middle
        }
    }

    return left+1
};
