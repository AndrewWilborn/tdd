export var threeSum = function(nums) {
    let map = {};
    let solutions = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(map[nums[i]+nums[j]] !== undefined){ // if map has ni + nj in it
                let triplet = [nums[i], nums[j], 0-nums[i]-nums[j]]
                triplet = triplet.sort((a,b)=>a-b)
                let isDuplicate = false;
                solutions.forEach((arr) => {
                    if(arr[0] === triplet[0] && arr[1] === triplet[1]){
                        isDuplicate = true;
                    }
                })
                if(!isDuplicate){
                    solutions.push(triplet);
                }
            }
            
        }
        map[0-nums[i]] = i;
    }
    return solutions;
};
