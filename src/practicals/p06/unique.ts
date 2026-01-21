import { create } from "domain";

function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  return [...new Set(arr1 && arr2)]
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const UniqueNum = getUniqueNumbers(arr1,arr2);
console.log(UniqueNum);