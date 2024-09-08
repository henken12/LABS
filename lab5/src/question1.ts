

console.log("==============question 1=========================================")

class Meditation {
    duration: number;
    constructor(duration: number) {
        this.duration = duration;
    }

    start() {


        let currentTime = this.duration;

        const intervalId = setInterval(() => {
            if (currentTime > 0) {
                console.log(currentTime);
                currentTime--;
            } else {
                console.log("Jay Guru Dev");
                clearInterval(intervalId);
            }
        }, 1000);
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");


console.log("==============question 2=========================================")



