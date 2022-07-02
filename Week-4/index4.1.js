// const getName = () =>
//     new Promise((res, rej) => {
//         var num = Math.round(Math.random() * 100);
//         if (num % 5 == 0) rej(num);
//         else res(num);
//     });

// getName()
//     .then((res) => console.log(`Random Number is: ${res}`))
//     .catch((rej) => console.log(`No is divisible by 5: ${rej}`))
//     .finally(() => console.log(`Promise Handled`));




const randomNumber = () => Math.floor(Math.random() * 101);

class CustomPromise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        }

        const reject = (value) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };

        try {
            handler(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }

    then(onFulfilled) {
        if (this.status === 'fulfilled') {
            onFulfilled(this.value);
        }
    }

    catch(onRejected) {
        if (this.status === 'rejected') {
            onRejected(this.value);
        }
    }

}

const p1 = new CustomPromise((resolve, reject) => {
    if ((randomNumber() % 5) !== 0) {
        resolve('Promise Resolved')
    } else {
        reject('Promise Rejected')
    }
});
p1.then((res) => console.log(res));
p1.catch((res) => console.log(res));