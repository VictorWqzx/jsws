/*
Написать Promise.all полифил
*/
// в ручную с .then .catch
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve([]);

        const result = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    result[index] = value;
                    completed++;
                    if (completed === promises.length) resolve(result);
                })
                .catch(reject);
        });
    });
}
// c await
promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
    .then(console.log)
    .catch(console.error);

    async function promiseAll(promises) {
        promises = promises.map(p => Promise.resolve(p));
    
        const results = [];
        for (let i = 0; i < promises.length; i++) {
            results.push(await promises[i]);
        }
        return results;
    }
    
    promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
        .then(console.log)
        .catch(console.error);
    


