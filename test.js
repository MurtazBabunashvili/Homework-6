
let first_resolve = new Promise((res, rej) => {
    res("Resolved first")
})

let second_reject = new Promise((res, rej) => {
    rej("Rejected second")
})

let third_resolve = new Promise((res, rej) => {
    res("Resolved third")
})

let fourth_reject = new Promise((res, rej) => {
    rej("Rejected fourth")
})

let fifth_reject = new Promise((res, rej) => {
    rej("Resolved fifth")
})

Promise.allSettled([first_resolve, second_reject, third_resolve, fourth_reject, fifth_reject]).then(arr => {
    console.log(arr.filter(el => el.status === 'rejected'))
})