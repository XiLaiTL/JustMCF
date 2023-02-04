import { test } from "vitest";
import { registerOnArray } from "../src/lib/ArrayHelper";

registerOnArray()

test('push All', () => {
    const fir = [1, 2, 3, 4]
    const sec = [5, 6, 7, 8, 9]
    fir.pushAll(sec)
    console.log(fir)
})