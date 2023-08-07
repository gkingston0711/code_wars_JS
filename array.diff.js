/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Should pass Basic tests", () => {
        assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
        assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
        assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
        assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
        assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
        assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    });
});

function arrayDiff(a, b) {
    //console.log(b)
    const myArr = []
    let LA = a.length
    let LB = b.length

    for (var i = 0; i < LA; i++) {
        //console.log(a[i])
        let flag = true

        for(var j =0; j < LB; j++){
            if(a[i]===b[j]){
                flag = false
            }
        }
        if(flag === true){
            myArr.push(a[i])
        }
    }
    return(myArr)
}

