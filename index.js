
var getFormatNumber = num => {
	num = String(num);
	var n1 = Number(num.charAt(0));
	var n2 = Number(num.substr(1));
	n1 = n1 * Math.pow(10, num.length - 1);
	return [n1, n2];
}

var listFormat = (n, callback) => {
	var n = n; 
    	var num = n;
	var range = 1; 
    	while(n != 0){
		var format = getFormatNumber(num);
        	n = format[format.length - 1];
        	if(!n){
			if(!range){
				break;
			}
			range = 0; 
        	} 
        	num = n;
		callback.apply(this, format);
    	}
}

for(var i = 1; i <= 1000; i++){
	var num = i;
	var changeNum = num;
	var entro = false;
	var numLast = 0;
	//var total = 1;
	var numberCharRoman = "";
	do {
		var add = true;
        	var numeroRomano = "";
        	var valRomanCode = 0;
		//numeros 1 - 3
        	if(changeNum >= 1 && changeNum <= 3){
            		numeroRomano = 'I';
            		valRomanCode = 1;
        	}
		//numeros 4 - 8
        	if(changeNum >= 4 && changeNum <= 8){
            		numeroRomano = 'V';
            	valRomanCode = 5;
        	}
		//numeros entre 9 - 39
        	if(changeNum >= 9 && changeNum <= 39){
            		numeroRomano = 'X';
            		valRomanCode = 10;
        	}
		//numeros entre 40 - 89
        	if(changeNum >= 40 && changeNum <= 89){
            		numeroRomano = 'L';
            	valRomanCode = 50;
        	}
		//numeros entre 90 - 399
        	if(changeNum >= 90 && changeNum <= 399){
            		numeroRomano = 'C';
            		valRomanCode = 100;
        	}
		//numeros entre 400 - 900
        	if(changeNum >= 400 && changeNum <= 899){
            		numeroRomano = 'D';
            		valRomanCode = 500;
        	}
		//numeros entre 900 - 1000
		if(changeNum >= 900 && changeNum <= 1000){
	        	numeroRomano = 'M';
            		valRomanCode = 1000;
        	}
		var res = Math.abs(changeNum - valRomanCode);
		if((changeNum > 40 && changeNum < 50) || (changeNum > 90 && changeNum < 100) || (changeNum > 400 && changeNum < 500) || (changeNum > 900 && changeNum < 1000)){
			if(changeNum > 100){
				numLast = 100 - res;
				res = valRomanCode - 100;	
			}else{
				numLast = 10 - res;
				res = valRomanCode - 10;
			}
			add = false;
		}
		
        	changeNum = res;
		if(!changeNum){
			changeNum = numLast;
			if(numLast > 0){
				numLast = 0;
			}
		}
		if(add){
			numberCharRoman += numeroRomano;
		}
		
	} while(changeNum != 0) {
		var order = [
			['VI', 4, 'IV'],
			['XI', 9, 'IX'],
			['LX', 40, 'XL'],
			['CX', 90, 'XC'],
			['DC', 400, 'CD'],
			['MC', 900, 'CM']
		];
		var k = 0;
		//ordenar los numeros
		listFormat(i, (n1, n2) => {
            		order.forEach(e => {
				if(numberCharRoman.indexOf(e[0]) != -1){
					if(n1 == e[1] || n2 == e[1]){
						if(n2 || !k){
							numberCharRoman = numberCharRoman.replace(e[0], e[2]);	
						}
					}
				}
            		});
			k++;
		});
		
    		console.log("Numero: ", i, " ", numberCharRoman); 	   
    }
};
