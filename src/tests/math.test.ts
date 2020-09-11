import {expectToBeCloseToArray, extractMNArray} from "./utils";
import {Mathf} from "../math/math";

it("inverse", () =>
{
    const a = new Float32Array([
        0.91266, 0.62074, -0.47088, 7.00000,
        -0.16671, 0.54915, 0.40080, 8.00000,
        1.32885, -0.75244, 1.58366, 9.00000,
        120.00000, 100.00000, 12.00000, 1.00000
    ]);

    Mathf.matrix4x4.inverse(a);

    const res = extractMNArray(a, 4, 4) as number[][];
    expectToBeCloseToArray(res, [
        [0.3407601, -0.3098896, -0.8310228, 0.07000723],
        [-0.5463482, 0.5995138, 0.4634307, 0.04924404],
        [0.2203247, -0.2925903, 0.2339267, 0.01295606],
        [0.002542847, 0.006429811, 0.004373719, -0.0006075]
    ]);
});
it("inverse 2", () =>
{
    const a = new Float32Array([
        3.0999999046325684, 0, 0, 0,
        0, 3.200000047683716, 0, 0,
        0, 0, 3.299999952316284, 0,
        -3.729999542236328, -3.859999895095825, -3.990000009536743, 1
    ]);

    Mathf.matrix4x4.inverse(a);

    expectToBeCloseToArray(a,         [
        0.3225806653499603, 0, 0, 0,
        -0, 0.3125, 0, 0,
        -0, -0, 0.3030303120613098, 0,
        1.2032257318496704, 1.2062499523162842, 1.2090909481048584, 1
    ]);
});
it("setFromQuaternion", () =>
{
    const out = new Float32Array(16);
    Mathf.matrix4x4.setWithQuaternion(new Float32Array([0.2530835, 0.2757274, 0.209042, 0.9034515]), out);

    const res = extractMNArray(out, 4, 4);
    console.log(res);
    //float4x4(0.7605518f, -0.2381545f, 0.6040228f, 0f,  0.5172827f, 0.7845004f, -0.3420202f, 0f,  -0.3924024f, 0.5725746f, 0.7198463f, 0f,  0f, 0f, 0f, 1f)
});

it("eulerXYZ", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerXYZ(q, e);
    expectToBeCloseToArray(Array.from(q), [-0.6828381, -0.04752338, -0.7271288, -0.05251011]);
});
it("eulerXZY", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerXZY(q, e);
    expectToBeCloseToArray(Array.from(q), [0.2307151, -0.04752338, -0.7271288, -0.6448222]);
});
it("eulerYXZ", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerYXZ(q, e);
    expectToBeCloseToArray(Array.from(q), [-0.6828381, -0.04752338, -0.3401144, -0.6448222]);
});
it("eulerYZX", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerYZX(q, e);
    expectToBeCloseToArray(Array.from(q), [-0.6828381, 0.6444353, -0.3401144, -0.05251011]);
});
it("eulerZXY", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerZXY(q, e);
    expectToBeCloseToArray(Array.from(q), [0.2307151, 0.6444353, -0.7271288, -0.05251011]);
});
it("eulerZYX", () =>
{
    const q = new Float32Array(4);
    const e = new Float32Array([20, 30, 33.4]);
    Mathf.quaternion.eulerZYX(q, e);
    expectToBeCloseToArray(Array.from(q), [0.2307151, 0.6444353, -0.3401144, -0.6448222]);
});
it("quaternion mul", () =>
{
    const q1 = new Float32Array([0.1, 0.55, 0.3, 0.4]);
    const q2 = new Float32Array([0.33, 0.42, 0.78, 0.99]);
    Mathf.quaternion.mul(q1, q2);
    expectToBeCloseToArray(Array.from(q1), [0.534, 0.7334999, 0.4695, -0.102]);
});
