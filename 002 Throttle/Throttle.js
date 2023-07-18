// function throttle(fn, limiter) {
//     let previousTime = 0;

//     return function(){
//         let currentTime = new Date().getTime();
//         if (currentTime - previousTime > limiter){
//             previousTime = currentTime;
//             return fn(...arguments);
//         }
//     }
// }

function mouseAnalytics(e) {
    console.log({ x: e.clientX, y: e.clientY })
}

document.addEventListener('mousemove', _.throttle(mouseAnalytics, 1000));