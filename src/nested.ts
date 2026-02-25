import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let pubQuestions: Question[] = questions;
    pubQuestions = pubQuestions.filter((x: Question): boolean => x.published);
    return pubQuestions;

    //return [];
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let nonEmpty: Question[] = questions;
    nonEmpty = nonEmpty.filter(
        (x: Question): boolean =>
            x.body != "" || x.expected != "" || x.options.length != 0,
    );
    //console.log(questions);
    //console.log("nonEmpty");
    //console.log(nonEmpty);
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    let choosenQ: Question[] = questions;
    choosenQ = choosenQ.filter((x: Question): boolean => x.id == id);
    if (choosenQ.length == 0) {
        return null;
    } else {
        //console.log(choosenQ[0]);
        let toReturn: Question = choosenQ[0];
        return toReturn;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let choosenQ: Question[] = questions;
    choosenQ = choosenQ.filter((x: Question): boolean => x.id != id);

    return choosenQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    let choosenQ: string[] = [];
    choosenQ = questions.map((x) => x.name);
    return choosenQ;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let myAnswers: Answer[] = [];
    myAnswers = questions.map(
        (x): Answer => ({
            questionId: x.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return myAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    let published: Question[] = questions;
    published = published.map((x) => ({ ...x, published: true }));

    return published;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQ: Question[] = [...questions, makeBlankQuestion(id, name, type)];
    //console.log(questions);
    //console.log(newQ);
    return newQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    let newQue: Question[] = questions;
    newQue = newQue.map(
        (x: Question): Question =>
            x.id == targetId ? { ...x, name: newName } : x,
    );
    return newQue;
    //return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let newArray: Question[] = [...questions];
    let myIndex: number = newArray.findIndex(
        (x: Question): boolean => x.id == targetId,
    );
    let myItem: Question = newArray[myIndex];
    let newOptions: string[] = [];
    if (targetOptionIndex === -1) {
        newOptions = [...myItem.options, newOption];
        //wmyItem.options.push(newOption);
        //newOptions = myItem.options;
    } else {
        //let newOptions:String[]=[]
        newOptions = [
            ...myItem.options.slice(0, targetOptionIndex),
            newOption,
            ...myItem.options.slice(targetOptionIndex + 1),
        ];
    }
    newArray = newArray.map(
        (x: Question): Question =>
            x.id == targetId ? { ...x, options: newOptions } : x,
    );
    /**console.log(questions);
    console.log(newOption);
    console.log(targetId);
    console.log(targetOptionIndex);
    console.log(newOptions);
    console.log(myItem);
    console.log(newArray);
    return newArray;
    */
    return newArray;
}
