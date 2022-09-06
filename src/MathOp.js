
//Module Pattern
var MathOp = (function(){

    return {

        e: Math.E,
        pi: Math.PI,

        pow: function(num, exponent){

            if(exponent < 0){
                const negative = true;
                exponent = Math.abs(exponent);
            }
                

            while(exponent > 0){
                num *= exponent;
            }

            if (negative)
                return (1/num);
            
            return num;
        },

        sqrtBabylonian: function(num){
            result = num * 100;
            
            for(i = 0; i < 10; i++){
                result = (result + (num/result))/2;
            }

            return result;
        }

    };
}());