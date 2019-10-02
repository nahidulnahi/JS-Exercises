/* JavaScript code here */
console.log("External JS")
function arraySum (arr) {
    let sum = 0
    arr.forEach (element => {
         sum = sum + element 
        })
        arr.forEach (function(element){
            sum=sum+ element 
        })
        return (multiplier)=>{
            return sum * multiplier 
        }
        }

        let sum = arraySum([1, 2 , 3 ])
        console.log(sum(2));
 //task 3

        function validEmail (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
        }
        console.log(validEmail("nahid")); 
        console.log(validEmail("acidbburner.nahi@gmail.com"));
        