export var longestPalindrome = function(s) {
    let currentSubstring = "";
    let longestSubstring;
    if(s.length === 0){
        longestSubstring = "";
    } else{
        longestSubstring = s[0];
    }
    for(let i = 0; i < s.length; i++){
        currentSubstring = s[i];
        
        for(let j = 1; s[i+j] === s[i-j] && s[i+j];j++){
            currentSubstring = `${s[i-j]}${currentSubstring}${s[i+j]}`
        }
        if(currentSubstring.length > longestSubstring.length){
            longestSubstring = currentSubstring;
        }

        if(s[i] === s[i+1]){ // Handle even length substrings
            currentSubstring = s[i] + s[i+1];
            for(let j = 1; s[i+j+1] === s[i-j] && s[i-j]; j++){
                currentSubstring = `${s[i-j]}${currentSubstring}${s[i+j+1]}`
            }
            if(currentSubstring.length > longestSubstring.length){
                longestSubstring = currentSubstring;
            }
        }
    }
    return longestSubstring
};
