import {Mathf} from "../math/math";
import {expectToBeCloseToArray} from "./utils";

it("inverse", () =>
{
    const a = new Float32Array([10, 20, 30]);
    Mathf.vector.inverse(a);
    expectToBeCloseToArray(a, [1 / 10, 1 / 20, 1 / 30])
});