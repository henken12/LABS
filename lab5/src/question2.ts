


//console.log("==============question 2=========================================")


const isPrime = (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
        } else {
            for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
                if (n % i === 0) {
                    reject({ prime: false });
                    return;
                }
            }
            resolve({ prime: true });
        }
    });
};

console.log('start');
isPrime(7)
    .then(console.log) // Logs { prime: true }
    .catch(console.error); // Would log { prime: false } if the number is not prime
console.log('end');


const testPrime = async (n: number) => {
    try {
        const result = await isPrime(n);
        console.log(result); // Logs { prime: true } if prime
    } catch (error) {
        console.error(error); // Logs { prime: false } if not prime
    }
};
