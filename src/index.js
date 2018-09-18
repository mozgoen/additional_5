module.exports = function check(str, bracketsConfig) {
  // your solution
    if (str.length % 2 !== 0) {
        return false;
    }

    if (str[0] === ")" || str[0] === "}" || str[str.length - 1] === "(" || str[str.length - 1] === "{") {
        return false;
    }

    let arrOfBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        if ( Array.isArray(bracketsConfig[i]) ) {
            let arr = bracketsConfig[i];
            for (let j = 0; j < arr.length; j++) {
                arrOfBrackets.push(arr[j]);
            }
        } else {
            arrOfBrackets.push(bracketsConfig[i]);
        }
    }



    let arrOfOpenBrackets = [];

    function findIndex(current, arrOfBrackets) {
        for (let i = 0; i < arrOfBrackets.length; i++) {
            if (current === arrOfBrackets[i]) {
                return i;
            }
        }
    }

    for (let i = 0; i < str.length; i++) {

        let current = str[i];

        let j = findIndex(current, arrOfBrackets);

        if (current === arrOfBrackets[j + 1] && j < arrOfBrackets.length - 1) {
            if (arrOfOpenBrackets.indexOf(current) === -1) {
                arrOfOpenBrackets.push(current);
            } else {
                let lastInOpenBrackets = arrOfOpenBrackets[arrOfOpenBrackets.length - 1];
                if (current !== lastInOpenBrackets) {
                    return false
                } else {
                    arrOfOpenBrackets.pop();
                }
            }
        } else {
            if (j % 2 === 0) {
                arrOfOpenBrackets.push(current);
            } else {
                let lastInOpenBrackets = arrOfOpenBrackets[arrOfOpenBrackets.length - 1];
                if (j - 1 !== arrOfBrackets.indexOf(lastInOpenBrackets)) {
                    return false
                } else {
                    arrOfOpenBrackets.pop();
                }
            }

        }

    }


    return true;


}
