// In an arthmetic progression: the difference between any number and the previous is always equal i.e x2-x1 = x3-x2
//In a geometric progression: the ratio of any number and it's previous number is always thesame i.e x2/x1 = x3/x2
'Use strict';

const aritGeo = (a) =>{

let diff = a[1] - a[0], // difference
ratio = a[1] / a[0], // ratio
arith = true,
geo = true;
if(a.length === 0){ //tests for []

	return 0;
}	
	else{
	
	for(let i = 0; i < a.length - 1; i++)
	{
	    if( a[i + 1] - a[i] !== diff ) arith = false;//tests for AP
	    if(a[i + 1] / a[i] !== ratio) geo = false;//tests for GP
	}
	
	if(arith === true)
	    return "arithmetic";
	else if(geo === true)
	    return "geometric";
	else
	    return -1;
	}

}

module.exports = {
	aritGeo: aritGeo	
};