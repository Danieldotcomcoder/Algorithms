function appendAndDelete(s, t, k) {

    let result;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            count++
        } else break;
    }
    let deletedletters = s.length - count
    let remainingletters = t.length - count
    if ((deletedletters + remainingletters) <= k) {
         if ((s.length < t.length) & deletedletters === 0 & count < k) {
       result = 'No' 
    } 
      else {
        result = 'Yes'
      }
    }
    else {

        result = 'No'
    }
    
    return result;
    
}

console.log(appendAndDelete(['z','z','z','z','z'],['z','z','z','z','z','z','z'],4));
// ['z','z','z','z','z'],['z','z','z','z','z','z','z']