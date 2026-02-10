/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let length: number = numbers.length;
    //console.log(length);
    let newNumbers: number[] = [];
    //console.log(numbers);
    if (length >= 1) {
        newNumbers = [numbers[0], numbers[length - 1]];
    } else {
        newNumbers = [];
    }
    //console.log(newNumbers);
    return newNumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let doubled: number[] = [];
    doubled = numbers.map((x: number): number => x * 3);
    return doubled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let strings: number[] = [];
    strings = numbers.map((x: string): number => (Number(x) ? Number(x) : 0));
    return strings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removeDol: string[] = [];
    removeDol = amounts.map((x: string): string =>
        x.includes("$") ? x.replace("$", "") : x,
    );
    let finishedProduct: number[] = [];
    finishedProduct = removeDol.map((x: string): number =>
        Number(x) ? Number(x) : 0,
    );
    return finishedProduct;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //console.log(messages);
    let noExclaim: string[] = [];
    noExclaim = messages.map((x: string): string =>
        x.endsWith("!") ? x.toUpperCase() : x,
    );
    let finished: string[] = [];
    finished = noExclaim.filter((x: string): boolean => !x.includes("?"));
    //console.log(finished);
    return finished;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let under4Array: string[] = [];
    under4Array = words.filter((x: string): boolean => x.length < 4);
    return under4Array.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //console.log(colors);
    let removeRGB: string[] = [];
    removeRGB = colors.filter((x: string): boolean => x != "red");
    removeRGB = removeRGB.filter((x: string): boolean => x != "blue");
    removeRGB = removeRGB.filter((x: string): boolean => x != "green");
    //console.log(removeRGB);
    let endValue: boolean = removeRGB.length == 0;
    //console.log(endValue);
    return endValue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let finishedString: string = "";
    finishedString = sum + "=" + addends.join("+");
    if (addends.join("+") == "") {
        finishedString = finishedString + "0";
    }
    return finishedString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //const myNegitive = values.find((price: number): boolean => price < 10);
    //console.log(values);
    let newArray: number[] = [...values];
    let myIndex: number = newArray.findIndex(
        (price: number): boolean => price < 0,
    );
    if (myIndex != -1) {
        //console.log(myIndex);
        myIndex += 1;
        newArray = newArray.slice(0, myIndex - 1);
        // let sum: number = newArray.reduce(
        //     (currentTotal: number, num: number) => currentTotal + num,
        //     0,
        // );
        // console.log(newArray);
        // console.log(sum);
        // newArray = values;
        // newArray.splice(myIndex, 0, sum);
        // console.log(newArray);
    } else {
        newArray = [...values];
        myIndex = newArray.length;
    }
    let sum: number = newArray.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    //console.log(newArray);
    //console.log(sum);
    newArray = [...values];
    newArray.splice(myIndex, 0, sum);
    console.log(newArray);
    //console.log([100, 199, 1, -5, 300, 7, 3]);

    return newArray;
}
