export let test17: number = 100;

export type Test17Type = {
    name: string;
    age: number;
};

// namespace N17 {
//     export type Test17Type = {
//         name: string;
//         age: number;
//     };
// }

// {
//     let testType: N17.Test17Type = {
//         name: "John",
//         age: 30,
//     };
// }

declare global {
    interface Doggy {
        name: string;
        age: number;
    }
}
export {};
