// N = number of seats 
// K = spaces between diners 
// M = number of current diners 
// S = array of seated positions 

// (howManyDiners(15, 2, 3, [11, 6, 14]))

function howManyDiners (N, K, M, S) {
    S.sort(((a,b) => a-b))
    // [6, 11, 14]

    let totalPeople = 0
    for (let i=0; i<M; i++) {
        if (i === 0) {
            let numOfFreeChairs = S[i] - 1 
            console.log(`i is ${i}, free chairs is ${numOfFreeChairs}`)
            if (K < numOfFreeChairs) {
                // 5 , K=1 => 2 people 
                // 5, K=2 => 1 person 
                // 6 , K=1 => 3 people 
                totalPeople += Math.floor((numOfFreeChairs)/(K+1)) 
                console.log(`i is ${i}, value is ${S[i]}`,totalPeople)
            }

        } else if (i === M-1) {
            let numOfFreeChairs = N - S[i]
            console.log(`i is ${i}, free chairs is ${numOfFreeChairs}`)
            if (K < numOfFreeChairs) {
                totalPeople += Math.floor((numOfFreeChairs)/(K+1)) 
                console.log(`i is ${i}, value is ${S[i]}`,totalPeople)
            }
            numOfFreeChairs = S[i] - S[i-1] - 1 
            console.log(`i is ${i}, free chairs is ${numOfFreeChairs}`)
            if (K < numOfFreeChairs) totalPeople += Math.floor((numOfFreeChairs-K)/(K+1)) 
            console.log(`i is ${i}, value is ${S[i]}`,totalPeople)
        }
         else {
            let numOfFreeChairs = S[i] - S[i-1] - 1 
            console.log(`i is ${i}, free chairs is ${numOfFreeChairs}`)
            if (K < numOfFreeChairs) totalPeople += Math.floor((numOfFreeChairs-K)/(K+1)) 
            console.log(`i is ${i}, value is ${S[i]}`,totalPeople)
        } 
    }
    return totalPeople
}

// function checkRight(benchArray, i, K) {
//     for (let j=i+1; j<=K+i && j<benchArray.length; j++) {
//         if (benchArray[j] === 1) return false 
//     }
//     return true 
// }

// function checkLeft(benchArray, i, K) {
//     for (let j=i-1; j>=i-K && j>-1; j--) {
//         if (benchArray[j] === 1) return false 
//     }
//     return true 
// }

// function howManyDiners(N, K, M, S) {
//     // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     // [0, 1, 0, x, 0, 1, 0, x, 0, x]

//     // create bench array 
//     let benchArray = []
//     let numOfDiners = 0

//     for (let i=0; i<N; i++) benchArray.push(0)

//     //console.log(benchArray)

//     // add 1s to bench array to represent where people are seated
//     for (let i=0; i<M; i++) benchArray[S[i] - 1] = 1 
    

//     console.log(benchArray)


//     // loop through the array
//         // for each element check surrounding K number of spaces 
//         // for first element, only check right 
//         // for last element, only check left 
//         // if conditions met, increment numOfDiners and change element to 1 

//     for (let i=0; i< benchArray.length; i++) {
//         console.log(`Checking seat ${i}`)
//         let canSit = true 
//         if (benchArray[i] === 1) continue 
//         if (i === 0) {
//             canSit = checkRight(benchArray, i, K)
//         } else if (i === benchArray.length-1) {
//             canSit = checkLeft(benchArray, i, K)
//         } else {
//             canSit = checkLeft(benchArray, i, K)
//             if(canSit) canSit = checkRight(benchArray, i, K)       
//         }
//         if (canSit) {
//             numOfDiners++
//             benchArray[i] = 1
//             console.log(`Sitting at seat ${i}`)
//         }
//         console.log(benchArray)
//     }
//     return numOfDiners
// }


// function howManyDiners(N, K, M, S) {

//     let totalSpots = 0 

//     for (let i=1; i<=N; i++) {
//         // if current spot is taken, continue to next spot 
//         if (S.includes(i)) continue 
//         // otherwise check surrounding K number of values 
//         // special case - i=1 
//         // special case i=N 
//         // everything else 
//         let canSit = true 
//         if (i === 1) {
//             for (let j=1; j<=K; j++) {
//                 if (S.includes(i+j)) canSit = false 
//             }
//         } else if (i === N) {
//             for (let j=1; j<=K; j++) {
//                 if (S.includes(i-j)) canSit = false 
//             }
//         } else {
//             for (let j=1; j<=K && i+j<=N; j++) {
//                 if (S.includes(i+j)) canSit = false 
//             }
//             for (let j=1; j<=K && i-j>0; j++) {
//                 if (S.includes(i-j)) canSit = false 
//             }
//         }
        
//         if (canSit) {
//             totalSpots++ 
//             S.push(i)
//         }
//     }

//     return totalSpots

// }

//console.log(howManyDiners(10, 1, 2, [2,6]))
//console.log(howManyDiners(15, 2, 3, [11, 6, 14]))
// let arrayA = new Array(500000).fill(0)
// for (let i=0; i< 500000; i++) {
//     arrayA
// }


console.log(howManyDiners((10 ** 15), 1, 3, [1, (10 ** 15), ((10 ** 4)-1)] ))