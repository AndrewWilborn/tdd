 export var isMatch = function(s, p) {
    // console.log("---------------------")
    // console.log(s)
    // console.log(p)
    if(s.length === 0 && p.length === 0){
        return true;
    }
    if(p.length === 0){
        return false;
    }
    if(p[1] !== "*"){
        if(s[0]===p[0] || (p[0] === '.' && s.length > 0)){
            return isMatch(s.slice(1), p.slice(1));
        }
        return false;
    }
    // Handle *
    if(p[0] === p[2] && p[3] === "*"){ // shortcut duplicate * instances
        return isMatch(s, p.slice(2))
    }
    
    if(s[0]!==p[0] && (p[0] !== "." || s.length === 0)){
        if(isMatch(s, p.slice(2))){
            return true;
        }
        return false;
    }
    
    // we know that s[0] matches p[0] at this stage
    if(isMatch(s.slice(1), p) || isMatch(s, p.slice(2))){
        return true
    }
    return false;
};
