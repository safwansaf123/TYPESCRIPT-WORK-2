// if there is no user in or array is empty no data will print//
let userNames: string[] = [];
if(userNames.length === 0){console.log('is there any user listed')} else{console.log(`${userNames}`)}

// if there is one user in or array contain any data will print by else//
let usernames: string[] = ['safwan'];
if(usernames.length === 0){console.log('is there any user listed')} else{console.log(`${usernames}`)};


let numbers:number[]=[1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
numbers.forEach(numbers => {let suffix = "th";if (numbers === 1){suffix = 'st';} else if (numbers === 2){suffix = 'nd';}
else if (numbers === 3){suffix = 'rd';}; console.log(`${numbers}${suffix}`);});
