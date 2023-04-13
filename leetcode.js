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
//             arr[i] = highest
//             highest = breakPoint
//
//         } else {
//             arr[i] = highest
//         }
//         if (i === 0) {
//             arr[arr.length - 2] = preLast
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
// var peakIndexInMountainArray = function(arr) {
//
//     let left = -1
//     let right = arr.length
//
//     while (right-left >1) {
//         let middle = Math.floor((right+left)/2)
//
//         if(arr[middle] < arr[middle+1]){
//             left = middle
//         }else {
//             right = middle
//         }
//     }
//
//     return left+1
// };
//
// var search = function(nums, target) {
//     let left=0
//     let right = nums.length -1
//
//     while(left <= right){
//         let middle = Math.floor((left+right)/2)
//         let result = nums[middle]
//         if(result===target){
//             return middle
//         }
//
//         if(result > target){
//             right = middle-1
//         }else {
//             left = middle+1
//         }
//
//
//
//     }
//     return -1
//
//
// };


// const quickSort = (array) => {
//     if (array.length < 2) {
//         return array
//     } else {
//         const middle = array[0]
//         const leftArr = []
//         const rightArr = []
//
//         for (let i = 1; i < array.length; i++) {
//             const current = array[i]
//             if (current < middle) {
//                 leftArr.push(current)
//             } else {
//                 rightArr.push(current)
//             }
//         }
//
//         return [...quickSort(leftArr),middle,...quickSort(rightArr)]
//     }
//
// }
//
// console.log(quickSort([3,5,4,2,1]))


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

// заводим объекм куда будем складывать значение/индекс
// высчитываем разницу между таргетом и текущим значением
// если в нашем объекте нет ключа по разнице между таргетом кладем в объект как


// nums = [  11, 15,7, 2,], target = 9
// //                 ^
// // {11:0,15:1,7:2,
//
//
// var twoSum = function (nums, target) {
//     const result = {}
//
//     for (let i = 0; i < nums.length; i++) {
//         let pointer = target - nums[i]
//         if (result[pointer] === undefined) {
//             result[nums[i]] = i
//         } else {
//             return [ result[pointer], i ]
//         }
//
//
//
//     }
//
// };
// console.log(twoSum(nums, target))
//
// // "()[]{}"
// var isValid = function(s) {
//     const stack = []
//     const map = {
//         ')':'(',
//         "]":'[',
//         "}":"{"
//     }
//
//     for(let i=0;i<s.length;i++){
//
//         if(map[s[i]] !== undefined){
//             if(map[s[i]] !== stack.pop()) return false
//
//         }else{
//             stack.push(s[i])
//         }
//     }
//
//     return stack.length === 0
// };
//
// var isPalindrome = function(s) {
//     const regExp = /[^a-zA-Z0-9]/g
//     const replacedStr= s.replace(regExp,'').toLowerCase()
//     const secondRepl = s.replace(regExp,'').toLowerCase().split('').reverse().join('')
//     return replacedStr === secondRepl
// };
// console.log(isPalindrome( "A man, a plan, a canal: Panama"))
// var maxProfit = function(prices) {
//     let profit=0;
//     let whatToBuy = prices[0]
//
//     for(let i=0;i<prices.length;i++){
//         if(whatToBuy > prices[i]){
//             whatToBuy = prices[i]
//         }
//
//         const currentProfit = prices[i]-whatToBuy
//         if(currentProfit>profit){
//             profit=currentProfit
//         }
//
//
//     }
//
//
//
//
//     return profit;
// };
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false
//
//     const first = s.split('').sort().join('')
//     const second = t.split('').sort().join('')
//     return first === second
// };
// isAnagram("anagram", "nagaram")
//
// var search = function (nums, target) {
//     let low = 0
//     let high = nums.length - 1
//
//
//     while (high > low) {
//         let middle = Math.floor((high + low) / 2)
//         let guess = nums[middle]
//
//         if (guess === target) {
//             return middle
//         }
//         if (guess < target) {
//             low = middle+1
//         } else {
//             high = middle -1
//         }
//
//     }
//
//
//     return -1
//
// };


// const brackatesMap = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
// }
//
// const isClosed = (str) => [')', ']', '}'].includes(str)
// const test = "()[]{}"
// const isValid = (str) => {
//     const stack = []
//     for (let i = 0; i < str.length; i++) {
//         const current = str[i]
//         if(isClosed(current)){
//             if(stack.pop() !== brackatesMap[current]) return false
//
//         } else{
//             stack.push(current)
//         }
//
//     }
//
//     return stack.length === 0
// }
//
// console.log(isValid(test))


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let midIdx = arr[mid]
//
//         if (midIdx === target) {
//             return mid;
//         } else if (midIdx< target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//
//     return -1;
// }
//
//
//


// const test = [[1,3],[2,6],[8,10],[15,18]]
// const merge = (intervals) => {
//     if (!intervals.length) return intervals;
//
//     intervals.sort((a, b) => a[0] - b[0]);
//     console.log(intervals)
//     let res = [intervals[0]];
//     console.log(res)
//
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] <= res[res.length-1][1]) {
//             res[res.length-1][1] = Math.max(intervals[i][1], res[res.length-1][1]);
//         } else {
//             res.push(intervals[i]);
//         }
//     }
//
//     return res;
// };
//
// merge(test)


// https://leetcode.com/problems/merge-k-sorted-lists/
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// const mergeKLists = (lists) => {
//     const mergeTwoLists = (l1, l2) => {
//         const dummyHead = new ListNode(0);
//         let tail = dummyHead;
//
//         while (l1 && l2) {
//             if (l1.val < l2.val) {
//                 tail.next = l1;
//                 l1 = l1.next;
//             } else {
//                 tail.next = l2;
//                 l2 = l2.next;
//             }
//             tail = tail.next;
//         }
//
//         tail.next = l1 || l2;
//         return dummyHead.next;
//     }
//
//     if (!lists.length) return null;
//
//     while (lists.length > 1) {
//         const l1 = lists.shift();
//         const l2 = lists.shift();
//         const merged = mergeTwoLists(l1, l2);
//         lists.push(merged);
//     }
//
//     return lists[0];
// };

// https://leetcode.com/problems/linked-list-cycle/
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
//
// const hasCycle = (head) => {
//     let slow = head;
//     let fast = head;
//
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//
//         if (slow === fast) {
//             return true;
//         }
//     }
//
//     return false;
// };

// https://leetcode.com/problems/add-two-numbers/
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
//
// const addTwoNumbers = (l1, l2) => {
//     const dummyHead = new ListNode(0);
//     let curr = dummyHead;
//     let carry = 0;
//
//     while (l1 || l2 || carry) {
//         const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
//         carry = Math.floor(sum / 10);
//         curr.next = new ListNode(sum % 10);
//         curr = curr.next;
//         l1 = l1 ? l1.next : null;
//         l2 = l2 ? l2.next : null;
//     }
//
//     return dummyHead.next;
// };

// https://leetcode.com/problems/reverse-linked-list/
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
//
// const reverseList = (head) => {
//     let prev = null;
//     let curr = head;
//
//     while (curr) {
//         const next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//
//     return prev;
// };


// https://leetcode.com/problems/binary-search/
// const ser = (arr, target) => {
//     let left = 0
//     let right = arr.length - 1
//
//     while (left <= right) {
//         let mid = Math.floor((right+left)/2)
//         if(arr[mid]===target) return mid
//
//         if(arr[mid] < target){
//             left = mid +1
//         }else {
//             right = mid -1
//         }
//
//
//     }
//     return -1
// }

//
// https://leetcode.com/problems/guess-number-higher-or-lower/
// const guessNumber = (n) => {
//     let left = 1;
//     let right = n;
//
//     while (left <= right) {
//         const mid = Math.floor((right + left) / 2);
//         const result = guess(mid);
//
//         if (result === 0) {
//             return mid;
//         } else if (result === 1) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
// };


// https://leetcode.com/problems/search-a-2d-matrix/
// const searchMatrix = (matrix, target) => {
//     if (!matrix.length || !matrix[0].length) return false;
//
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let left = 0;
//     let right = rows * cols - 1;
//
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         const value = matrix[Math.floor(mid / cols)][mid % cols];
//
//         if (value === target) {
//             return true;
//         } else if (value < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//
//     return false;
// };

// https://leetcode.com/problems/search-in-rotated-sorted-array/
// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//
//     // find the pivot index using binary search
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//
//         if (nums[mid] > nums[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//
//     let pivot = left;
//     left = 0;
//     right = nums.length - 1;
//
//     // determine which subarray the target belongs to and perform binary search
//     if (target >= nums[pivot] && target <= nums[right]) {
//         left = pivot;
//     } else {
//         right = pivot - 1;
//     }
//
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//
//     return -1; // target not found
// }
//

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// function findMin(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//
//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);
//
//         if (nums[mid] > nums[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }
//
//     return nums[left];
// }


// function flatten(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
// }
//
// function bind(fn, context, ...args) {
//     return function (...newArgs) {
//         return fn.apply(context, args.concat(newArgs));
//     };
// }
//
// Function.prototype.myBind = function (context, ...args) {
//     const that = this;
//     return function (...newArgs) {
//         return that.apply(context, args.concat(newArgs));
//     };
// };

function add(x) {
    function next(y) {
        return add(x + y);
    }

    next.valueOf = function () {
        return x;
    };

    return next;
}

function curry(fn) {
    return (...args) => args.length < fn.length ? curry(fn.bind(null, ...args)) : fn(...args);
}

// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let count = promises.length;
//
//         if (count === 0) {
//             resolve(results);
//             return;
//         }
//
//         function onResolve(i, value) {
//             results[i] = value;
//             count--;
//
//             if (count === 0) {
//                 resolve(results);
//             }
//         }
//
//         promises.forEach((promise, i) => {
//             promise.then(value => onResolve(i, value))
//                 .catch(error => reject(error));
//         });
//     });
// }
//
//
function flatten(arr) {
    let flatArr = [];
    while (arr.length) {
        const current = arr.shift();
        if (Array.isArray(current)) {
            arr.unshift(...current);
        } else {
            flatArr.push(current);
        }
    }
    return flatArr;
}


// class MyPromise {
//     constructor(executor) {
//         this.state = 'pending';
//         this.value = undefined;
//         this.reason = undefined;
//
//         const resolve = value => {
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled';
//                 this.value = value;
//             }
//         };
//
//         const reject = reason => {
//             if (this.state === 'pending') {
//                 this.state = 'rejected';
//                 this.reason = reason;
//             }
//         };
//
//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }
//
//     then(onFulfilled, onRejected) {
//         if (this.state === 'fulfilled') {
//             return new MyPromise((resolve, reject) => {
//                 try {
//                     const result = onFulfilled(this.value);
//                     if (result instanceof MyPromise) {
//                         result.then(resolve, reject);
//                     } else {
//                         resolve(result);
//                     }
//                 } catch (error) {
//                     reject(error);
//                 }
//             });
//         } else if (this.state === 'rejected') {
//             return new MyPromise((resolve, reject) => {
//                 try {
//                     const result = onRejected(this.reason);
//                     if (result instanceof MyPromise) {
//                         result.then(resolve, reject);
//                     } else {
//                         resolve(result);
//                     }
//                 } catch (error) {
//                     reject(error);
//                 }
//             });
//         }
//     }
//
//     catch(onRejected) {
//         return this.then(null, onRejected);
//     }
//
//     static resolve(value) {
//         return new MyPromise(resolve => resolve(value));
//     }
//
//     static reject(reason) {
//         return new MyPromise((resolve, reject) => reject(reason));
//     }
//
//     static all(promises) {
//         return new MyPromise((resolve, reject) => {
//             const results = [];
//             let count = promises.length;
//
//             if (count === 0) {
//                 resolve(results);
//                 return;
//             }
//
//             function onResolve(i, value) {
//                 results[i] = value;
//                 count--;
//
//                 if (count === 0) {
//                     resolve(results);
//                 }
//             }
//
//             promises.forEach((promise, i) => {
//                 promise.then(value => onResolve(i, value))
//                     .catch(error => reject(error));
//             });
//         });
//     }
//
//     static race(promises) {
//         return new MyPromise((resolve, reject) => {
//             promises.forEach(promise => {
//                 promise.then(resolve)
//                     .catch(reject);
//             });
//         });
//     }
// }
//
//
// const data = [
//     {id: 1, age: 20, name: "Иван", country: "Russia", registred: true},
//     {id: 2, age: 30, name: "Дима", country: "Usa", registred: true},
//     {id: 3, age: 25, name: "Федор", country: "Russia", registred: true},
//     {id: 4, age: 20, name: "Коля", country: "Usa", registred: false},
//     {id: 5, age: 30, name: "Денис", country: "Russia", registred: true},
//     {id: 6, age: 50, name: "Жека", country: "Usa", registred: true},
//     {id: 7, age: 20, name: "Гена", country: "Russia", registred: false}
// ];
//
// const result = data.reduce((acc, item) => {
//     const {id, country, ...rest} = item;
//     if (!acc[country]) {
//         acc[country] = {};
//     }
//     acc[country][id] = rest;
//     return acc;
// }, {});


// Первая задача: нам дан пароль в виде массива целых положительных чисел,
// и представим что есть кодовый замок с известной шириной и высотой (например такой:
//  1   2   3   4
// 5   6   7   8
// 9 10 11 12
// )
// Кодовый замок может быть любого размера, но он всегда прямоугольной или квадратной формы.
//     Чтобы ввести код, пользователь может передвигать палец влево, вправо, вниз, вверх и по диагонали на 1 клетку.
//     Написать функцию, которая посчитает, за какое число движений пальца по клеткам с числами кодового замка пользователь сможет набрать данный пароль.
//
// Решение начинается с создания функции minMovementsToEnterPassword, которая принимает два аргумента: массив password, содержащий заданный пароль, и двумерный массив lock, представляющий кодовый замок. Функция начинает с инициализации переменных movements и currPos. Переменная movements отвечает за количество движений пальца по клеткам кодового замка, а currPos - за текущую позицию пальца на замке. Изначально палец находится в верхнем левом углу замка, поэтому начальная позиция пальца равна [0, 0].
//
// Затем функция перебирает элементы массива password в цикле for. Для каждого элемента value функция находит позицию элемента на кодовом замке с помощью вспомогательной функции findValuePosition. Функция findValuePosition принимает два аргумента: значение, которое нужно найти, и массив, в котором нужно найти это значение. Функция перебирает все элементы массива lock во вложенном цикле и сравнивает их со значением value. Когда находится соответствующий элемент, функция возвращает его позицию в виде массива [i, j], где i - индекс строки, а j - индекс столбца.
//
// После того, как функция findValuePosition находит позицию элемента на кодовом замке, функция minMovementsToEnterPassword вычисляет количество движений пальца по клеткам замка, необходимое для того, чтобы переместить палец с текущей позиции currPos на позицию targetPos, где targetPos - позиция элемента на замке. Для этого используется формула: Math.abs(targetPos[0] - currPos[0]) + Math.abs(targetPos[1] - currPos[1]). Полученное значение добавляется к переменной movements, а затем текущая позиция пальца обновляется на позицию targetPos.
//
// В конце цикла функция minMovementsToEnterPassword возвращает переменную movements, которая содержит общее количество движений пальца по клеткам кодового замка, необходимое для ввода заданного пароля.

//x0 = (n-1)%width
//y0 = floor((n-1)/width)
// const calcSteps = (pass, width) => {
//     let steps = 0
//     let x0, y0, x1, y1;
//     for (let i = 1; i < pass.length; i++) {
//         x0 = (pass[i - 1] - 1) % width
//         y0 = Math.floor((pass[i - 1] - 1) / width)
//         x1 = (pass[i] - 1) % width
//         y1 = Math.floor((pass[i] - 1) / width)
//
//         steps += Math.max(Math.abs(x0 - x1), Math.abs(y0 - y1))
//
//
//     }
//     return steps
// }
//
// console.log(calcSteps([1, 11, 2], 4))

//     Вторая задача: дан список температур по дням, все температуры разные.
//     Для каждого дня найти, через сколько дней станет теплее (если теплее не станет, то ответ 0).
//
// in: [14, 13, 15, 11, 9, 12, 16]
// out: [2, 1, 4, 2, 1, 1, 0]
// function findWarmerDays(temperatures) {
//     const length = temperatures.length
// // результирующий массив на длинну температу
//     // перебор брутфорсом
//     // если следующая температура выше, записываем разницу между индексами и складываем в резалт по первому индексу
//     const warmDays = new Array(length).fill(0)
//
//     for(let i = 0;i<length;i++){
//         for(let j = i+1;j<length;j++){
//             if(temperatures[j]>temperatures[i]){
//                 warmDays[i]=j-i
//                 break
//             }
//         }
//
//     }
//     return warmDays
// //
// // }
//
//
// function findWarmerDays(temperatures) {
//     const length = temperatures.length
// // результирующий массив на длинну температу
//     // перебор брутфорсом
//     // если следующая температура выше, записываем разницу между индексами и складываем в резалт по первому индексу
//     const warmDays = new Array(length).fill(0)
//
//     for(let i = 0;i<length;i++){
//         for(let j = i+1;j<length;j++){
//             if(temperatures[j]>temperatures[i]){
//                 warmDays[i]=j-i
//                 break
//             }
//         }
//
//     }
//     return warmDays
//
// }
//
// function findWarmerDays(temperatures) {
//     const length = temperatures.length
//     const stack = []
//     const warmDays = new Array(length).fill(0)
//
//     for(let i = 0;i<length;i++){
//         while(stack.length > 0 && temperatures[i]> temperatures[stack.at(-1)]){
//             const lastStackIdx = stack.pop()
//             warmDays[lastStackIdx] = i - lastStackIdx
//         }
//         stack.push(i)
//     }
//
//     return warmDays
//
//
// }
//
// const input = [14, 13, 17, 11, 9, 12, 16];
// const output = findWarmerDays(input);
// console.log(output); // [2, 1, 0, 2, 1, 1, 0]


// const map = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
// }
// const getIsClosed = (elem) => [']', '}', ')'].includes(elem)


// const isValid = (str) => {
//     const stack = []
//
//     for (let i = 0; i < str.length; i++) {
//         const current = str[i]
//         if (getIsClosed(current)) {
//             if (stack.pop() !== map[current]) return false
//         }else {
//             stack.push(current)
//         }
//
//
//
//     }
//
//     return stack.length === 0
// }
//
//
// console.log(isValid('[[{]]'))


// const getWarmDays = (temps) => {
//     const length = temps.length
//     const warmDays = new Array(length).fill(0)
//     const stack = []
//
//     for (let i = 0; i < length; i++) {
//         while (stack.length >0 && temps[i]>temps[stack.at(-1)]){
//             const lastStackIdx = stack.pop()
//             warmDays[lastStackIdx] = i-lastStackIdx
//         }
//         stack.push(i)
//
//     }
//
//
//     return warmDays
// }
//
// console.log(getWarmDays([14, 13, 17, 11, 9, 12, 16]))


// const getMovements = (pass, width) => {
//     let x0, y0, x1, y1
//     let steps = 0
//
//     for (let i = 1; i < pass.length; i++) {
//         x0 = (pass[i - 1]-1 )% width
//         y0 = Math.floor((pass[i-1]-1)/width)
//         x1 = (pass[i]-1)% width
//         y1 = Math.floor((pass[i]-1)/width)
//         steps += Math.max(Math.abs(x0-x1),Math.abs(y0-y1))
//
//     }
//
//     return steps
// }
//
//  console.log(getMovements([1, 11, 2], 4))


// // Для данных массивов найти число, которое встречается во всех трех массивах
// const arr1 = [1,2,4,5]
// const arr2 = [3,3,4]
// const arr3 = [2,3,4,5]
//
//
// const findNum = (arr1,arr2,arr3)=>{
//     const sumArr = [...arr1,...arr2,...arr3].sort()
//     let number =-1
//     for(let i =0;i<sumArr.length;i++){
//         if(sumArr[i]===sumArr[i+1]&&sumArr[i+2]===sumArr[i]){
//             number=sumArr[i]
//         }
//     }
//     return number
//
// }
// const findNum1 = (arr1,arr2,arr3)=>{
//     const commonNumbers = arr1.filter(num => arr2.includes(num) && arr3.includes(num));
//     return commonNumbers.length > 0 ? commonNumbers[0]:-1
//
// }
// console.log(findNum1(arr1,arr2,arr3))

// function quicksort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//
//     const pivot = arr[Math.floor(Math.random() * arr.length)];
//     const left = [];
//     const right = [];
//
//     for (const elem of arr) {
//         if (elem < pivot) {
//             left.push(elem)
//         } else if (elem > pivot) {
//             right.push(elem)
//         }
//     }
//
//
//     return [...quicksort(left), pivot, ...quicksort(right)];
// }

// Пример использования
// const arr = [7, 2, 1, 6, 8, 5, 3, 4];
// const sortedArr = quicksort(arr);
// console.log(sortedArr);
//
// function findSubstringPositions(str, substr) {
//     const positions = [];
//     let index = 0;
//
//     while ((index = str.indexOf(substr, index)) !== -1) {
//         positions.push(index);
//         index++;
//     }
//
//     return positions;
// }

// Пример использования
// const str = 'hello world, world is great';
// const substr = 'world';
// const positions = findSubstringPositions(str, substr);
// console.log(positions); // [6, 13]
//
// function dijkstra(graph, start, end) {
//     const distances = {};
//     const visited = {};
//     const previous = {};
//     const path = [];
//
//     // Инициализируем расстояния
//     for (let vertex in graph) {
//         distances[vertex] = Infinity;
//     }
//     distances[start] = 0;
//
//     while (Object.keys(visited).length < Object.keys(graph).length) {
//         // Находим вершину с наименьшим расстоянием
//         let currentVertex = null;
//         let shortestDistance = Infinity;
//         for (let vertex in distances) {
//             if (!visited[vertex] && distances[vertex] < shortestDistance) {
//                 currentVertex = vertex;
//                 shortestDistance = distances[vertex];
//             }
//         }
//
//         // Обновляем расстояния до соседних вершин
//         for (let neighbor in graph[currentVertex]) {
//             let distance = graph[currentVertex][neighbor];
//             let newDistance = distances[currentVertex] + distance;
//             if (newDistance < distances[neighbor]) {
//                 distances[neighbor] = newDistance;
//                 previous[neighbor] = currentVertex;
//             }
//         }
//
//         visited[currentVertex] = true;
//         if (currentVertex === end) {
//             // Построение пути
//             while (previous[currentVertex]) {
//                 path.push(currentVertex);
//                 currentVertex = previous[currentVertex];
//             }
//             path.push(start);
//             break;
//         }
//     }
//
//     return { distance: distances[end], path: path.reverse() };
// }
//
// // Пример использования
// const graph = {
//     A: { B: 4, C: 2 },
//     B: { A: 4, C: 1, D: 5 },
//     C: { A: 2, B: 1, D: 8 },
//     D: { B: 5, C: 8 },
// };
// const start = 'A';
// const end = 'D';
// const result = dijkstra(graph, start, end);
// console.log(result.distance); // 7
// console.log(result.path); // ["A", "C", "B", "D"]
//
// function longestCommonSubstring(str1, str2) {
//     const dp = Array(str1.length + 1)
//         .fill()
//         .map(() => Array(str2.length + 1).fill(0));
//     let maxLength = 0;
//
//     for (let i = 1; i <= str1.length; i++) {
//         for (let j = 1; j <= str2.length; j++) {
//             if (str1[i - 1] === str2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//                 maxLength = Math.max(maxLength, dp[i][j]);
//             }
//         }
//     }
//
//     return maxLength;
// }
//
// // Пример использования
// const str1 = 'abcdefg';
// const str2 = 'defghi';
// const length = longestCommonSubstring(str1, str2);
// console.log(length); // 3
//
// function findPairWithSum(arr, sum) {
//     const hashMap = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         const current = arr[i];
//         const difference = sum - current;
//
//         if (hashMap[difference] !== undefined) {
//             return [current, difference];
//         }
//
//         hashMap[current] = i;
//     }
//
//     return null;
// }
//
// // Пример использования
// const arr = [1, 2, 3, 4, 5, 6];
// const sum = 8;
// const pair = findPairWithSum(arr, sum);
// console.log(pair); // [2, 6]
//
// function findMinPath(matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     const dp = Array(rows)
//         .fill()
//         .map(() => Array(cols).fill(0));
//
//     // Инициализируем первую строку и первый столбец
//     dp[0][0] = matrix[0][0];
//     for (let i = 1; i < rows; i++) {
//         dp[i][0] = dp[i - 1][0] + matrix[i][0];
//     }
//     for (let j = 1; j < cols; j++) {
//         dp[0][j] = dp[0][j - 1] + matrix[0][j];
//     }
//
//     // Заполняем оставшуюся часть таблицы
//     for (let i = 1; i < rows; i++) {
//         for (let j = 1; j < cols; j++) {
//             dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
//         }
//     }
//
//     // Восстанавливаем путь
//     const path = [];
//     let i = rows - 1;
//     let j = cols - 1;
//     while (i > 0 || j > 0) {
//         path.unshift([i, j]);
//         if (i === 0) {
//             j--;
//         } else if (j === 0) {
//             i--;
//         } else {
//             if (dp[i - 1][j] < dp[i][j - 1]) {
//                 i--;
//             } else {
//                 j--;
//             }
//         }
//     }
//     path.unshift([0, 0]);
//
//     return { distance: dp[rows - 1][cols - 1], path };
// }
//
// // Пример использования
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// const result = findMinPath(matrix);
// console.log(result.distance); // 21
// console.log(result.path); // [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]
//
// function permute(str) {
//     const result = [];
//
//     function backtrack(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current);
//             return;
//         }
//
//         for (let i = 0; i < remaining.length; i++) {
//             const next = current + remaining[i];
//             const rest = remaining.slice(0, i) + remaining.slice(i + 1);
//             backtrack(next, rest);
//         }
//     }
//
//     backtrack('', str);
//
//     return result;
// }
//
// // Пример использования
// const str = 'abc';
// const permutations = permute(str);
// console.log(permutations); // ["abc", "acb", "bac", "bca", "cab", "cba"]
//
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
//
// function findLCA(root, p, q) {
//     if (root === null) {
//         return null;
//     }
//
//     if (root.val === p.val || root.val === q.val) {
//         return root;
//     }
//
//     const left = findLCA(root.left, p, q);
//     const right = findLCA(root.right, p, q);
//
//     if (left !== null && right !== null) {
//         return root;
//     }
//
//     return left !== null ? left : right;
// }
//
// // Пример использования
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
//
// const p = root.left.left;
// const q = root.left.right;
// const lca = findLCA(root, p, q);
// console.log(lca.val); // 2


// async function promiseHash(object) {
//     // Hint: Object.entries(object)
//     const myArr = Object.entries(object)
//     const result = {};
//
//     // for (const [key, value] of Object.entries(object));
//
//     for(let i=0;i<myArr.lenght;i++){
//         const currentKey = myArr[i][0]
//         const currentFiled = myArr[i][1]
//         result[currentKey] = await currentFiled
//     }
//
//     return result
//
//
// }
//
// test.skip("works like Promise.all, but for objects", async () => {
//     const result = await promiseHash({
//         name: Promise.resolve("John Lennon"),
//         age: Promise.resolve(42),
//         spouse: {
//           name: Promise.resolve("Yoko Ono")
//         }
//     });
//
//     expect(result).toEqual({
//         name: "John Lennon",
//         age: 42,
//         spouse: {
//           name: "Yoko Ono"
//         }
//     });
// });

// function promiseHash(hash) {
//     const keys = Object.keys(hash);
//     const promises = [];
//     const results = {};
//
//     for (let i = 0; i < keys.length; i++) {
//         const key = keys[i];
//         const value = hash[key];
//
//         if (typeof value === 'object') { // если значение - объект, рекурсивно вызываем функцию
//             promises.push(promiseHash(value).then((subResults) => {
//                 results[key] = subResults;
//             }));
//         } else { // иначе обрабатываем значение как обычный промис
//             const promise = Promise.resolve(value);
//             promises.push(promise);
//
//             promise.then((val) => {
//                 results[key] = val;
//             });
//         }
//     }
//
//     return Promise.all(promises).then(() => {
//         return results;
//     });
// }
// const res =  promiseHash({
//     name: Promise.resolve("John Lennon"),
//     age: Promise.resolve(42),
//     spouse: {
//         name: Promise.resolve("Yoko Ono")
//     }
// })
// console.log(res)

// const str = 'abbaca'
// const removeDuplicates = (str) => {
//
//     const stack = []
//
//     for (let i = 0; i < str.length; i++) {
//         if (stack.length && str[i] === stack.at(-1)) {
//             stack.pop()
//         } else {
//             stack.push(str[i])
//         }
//
//     }
//
//     return stack.join('')
// }
// console.log(removeDuplicates(str))

// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// const minOperations = (inputArray) => {
//     const stack = [];
//     for (const folder of inputArray) {
//         switch (folder) {
//             case "../":
//                 if (stack.length) {
//                     stack.pop();
//                 }
//                 break;
//             case "./":
//                 break;
//             default:
//                 stack.push(folder);
//                 break;
//         }
//     }
//
//     return stack.length
// }
//
// console.log(minOperations(["d1/","d2/","../","d21/","./"]))
// const tokens = ["2", "1", "+", "3", "*"]
//
// const evaluate = ({first, second, operation}) => {
//     switch (operation) {
//         case '+': {
//             return second + first
//         }
//         case '-': {
//             return first - second
//         }
//         case '/': {
//             return Math.trunc(first / second)
//         }
//         default: {
//             return second * first
//         }
//     }
// }
//
// const evalRPN = (tokens) => {
//
//     const stack = []
//
//     for (const token of tokens) {
//         if (['*', '/', '+', '-'].includes(token)) {
//             const second = stack.pop()
//             const first = stack.pop()
//             stack.push(evaluate({first, second, operation: token}))
//         } else {
//             stack.push(Number(token))
//         }
//
//     }
//
//     return stack
// };
//
//
// console.log(evalRPN(tokens))
//
// const s = "leEeetcode"
// const delta = 32
// const isGood = (first, second) => {
//
//
//     return Math.abs(first.charAt(0) - second.charAt(0)) !== delta
//
// }
// const makeStringAgain = (str) => {
//     const stack = []
//
//     for (const ch of str) {
//         stack.push(ch)
//
//         if (stack.length > 1) {
//             const first = stack.at(-1)
//             const second = stack.at(-2)
//             if (isGood(first, second)) {
//                 stack.pop()
//                 stack.pop()
//             }
//
//         }
//
//     }
//
//     return stack.join('')
//
// }
//
// console.log(makeStringAgain('abBAcC'))


const s = "cbaebabacd", p = "abc"
// Output: [0,6]


// const findAllAnagram = (str, secondStr) => {
//     const sorted = secondStr.split('').sort().join('')
//     const result = []
//
//     for (let i = 0; i < str.length; i++) {
//         if (str.slice(i, i + secondStr.length).split('').sort().join('') === sorted) {
//             result.push(i)
//         }
//
//     }
//     return result
// }
//
//
// console.log(findAllAnagram(s,p))

// function findAnagrams(s, p) {
//     const result = [];
//     const freqCounter = {};
//
//     // Инициализация счетчика частоты для строки p
//     for (let char of p) {
//         freqCounter[char] = (freqCounter[char] || 0) + 1;
//     }
//     console.log(freqCounter)
//     let leftIdx = 0, rightIdx = 0, count = p.length;
//
//     while (rightIdx < s.length) {
//         let rightValue = s[rightIdx]
//         let leftValue = s[leftIdx]
//
//         if (freqCounter[rightValue] > 0) {
//             count--;
//         }
//         freqCounter[rightValue] = (freqCounter[rightValue] || 0) - 1;
//         rightIdx++;
//
//         if (count === 0) {
//             result.push(leftIdx);
//         }
//
//         if (rightIdx - leftIdx === p.length) {
//             if (freqCounter[leftValue] >= 0) {
//                 count++;
//             }
//             freqCounter[leftValue]++;
//             leftIdx++;
//         }
//     }
//
//     return result;
// }
//
// const anagramIndices = findAnagrams(s, p);
// console.log(anagramIndices); // Вывод: [0, 6]

// const num = "1432219", k = 3
//
// function removeKdigits(num, k) {
//     const stack = [];
//
//     for (let digit of num) {
//         while (k > 0 && stack.length && digit < stack.at(-1)) {
//             stack.pop();
//             k--;
//         }
//         stack.push(digit);
//     }
//
//     while (k--) {
//         stack.pop();
//     }
//
//     let result = stack.join('').replace(/^0+/, '');
//     return result || '0';
// }
// removeKdigits(num,k)

// function landPerimeter(arr) {
//     let perimeter = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === 'X') {
//                 perimeter += 4;
//
//                 if (i > 0 && arr[i - 1][j] === 'X') {
//                     perimeter -= 2;
//                 }
//                 if (j > 0 && arr[i][j - 1] === 'X') {
//                     perimeter -= 2;
//                 }
//             }
//         }
//     }
//
//     return `Total land perimeter: ${perimeter}`;
//
// }

// function findMaxSum(n) {
//     for (let i = n, j, k; i > 1; i--) {
//         j = n - (n + i) % 2;
//         k = n - (n + i + j) % 5;
//         if ((j + k) % 3 == 0) return i + j + k;
//     }
//     return 0;
// }
//
// findMaxSum(10)

//
// const arr1 = [1, 2, 3, 45,]
// const arr2 = [2, 3, 4, 5, 45, 66]
//
//
// const mergeArrat = (arr1, arr2) => {
//     const stack = []
//     let idx1=0
//     let idx2=0
//
//     while (arr1[idx1] !== undefined || arr2[idx2] !== undefined) {
//         if (arr1[idx1] === arr2[idx2]) {
//             stack.push(arr1[idx1])
//             idx1++
//             idx2++
//         } else if (arr1[idx1] < arr2[idx2]) {
//             stack.push(arr1[idx1])
//             idx1++
//         } else {
//             stack.push(arr2[idx2])
//             idx2++
//         }
//
//
//     }
//
//     return stack
// }
//
// console.log(mergeArrat(arr1,arr2))


// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

const getLeftIdx = (input, target) => {
    let left = -1
    let right = input.length

    while (right - left > 1) {
        let middle = Math.floor((left + right) / 2)
        if (target <= input[middle]) {
            right = middle
        } else {
            left = middle
        }
    }
    return input[right] === target ? right : -1
}

const getRightIdx = (input, target) => {
    let left = -1
    let right = input.length

    while (right - left > 1) {
        let middle = Math.floor((left + right) / 2)
        if (target >= input[middle]) {
            left = middle
        } else {
            right = middle
        }
    }


    return input[left] === target ? left : -1
}

const searchRange = (input, target) => {
    return [getLeftIdx(input, target), getRightIdx(input, target)]
}
function findCurrentRange(nums, target) {
    let arr = [];
    for(let i = nums.indexOf(target); i <= nums.lastIndexOf(target); i++) {
        arr.push(i)
    }
    return arr;
}
console.log(searchRange([5,7,7,8,8,10],8))