import { test } from "vitest";
//import { } from "../src/@types/ArrayTypes.js";
import { registerOnArray } from "../src/lib/ArrayHelper.js";
import { toSnakeCase } from '../src/lib/StringUtils.js';

registerOnArray()

test('Push All', () => {
    const fir = [1, 2, 3, 4]
    const sec = [5, 6, 7, 8, 9]
    fir.pushAll(sec)
    console.log(fir)
})

test('String To Snake Case', () => {
    console.log(toSnakeCase("PascalCaseName"))
    console.log(toSnakeCase("camelCaseName"))
    console.log(toSnakeCase("Title Case Name"))
    console.log(toSnakeCase("NameSpace:ID"))
})