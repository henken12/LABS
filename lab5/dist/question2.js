"use strict";
//console.log("==============question 2=========================================")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
        }
        else {
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
const testPrime = (n) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield isPrime(n);
        console.log(result); // Logs { prime: true } if prime
    }
    catch (error) {
        console.error(error); // Logs { prime: false } if not prime
    }
});
