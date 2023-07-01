var threeSum = function(nums) {
    let map = {};
    let solutions = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(map[nums[i]+nums[j]] !== undefined){ // if map has ni + nj in it
                solutions.push([nums[i], nums[j], 0-nums[i]-nums[j]])
            }
            
        }
        map[0-nums[i]] = i;
    }
    // this should correctly yield all the triplets
    // now sort and remove duplicates
    solutions.map((arr) => arr.sort((a,b)=>a-b))
    let finalSolutions = []
    solutions.forEach((arr) => {
        if(!finalSolutions.includes(arr)){
            finalSolutions.push(arr)
        }
    })
    return finalSolutions;
};

console.log(threeSum([-1,0,1,2,-1,-4]))