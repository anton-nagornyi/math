import {Mathf} from "../math";
import {expectToBeCloseToArray} from "./utils";
import {Vector2} from "../vectors/vector2";
import {Vector3} from "../vectors/vector3";
import {Vector4} from "../vectors/vector4";

it("array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const c = Mathf.vector.mul(a, 2);
    expect(c === a).toBeTruthy();
    expectToBeCloseToArray(a, [2.2, 4.4, 6.6, 8.8]);
});
it("mul matrix", () =>
{
    const b = new Float32Array([
        0.2140887, 0.2551409, -0.2794729, 0.1140481,
        -0.19862, 0.3490749, 0.1665314, -0.999124,
        0.3221057, 0.04566975, 0.2884409, -1.278768,
        0, 0, 0, 0.9999999
    ]);

    const a = new Float32Array([10, 15, 20]);

    Mathf.vector.mul(a, b);

    expectToBeCloseToArray(a,         [
        5.603701114654541, 8.700927734375, 5.472060203552246
    ]);
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
});

it("numbers4", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
    expect(c.w).toBeCloseTo(8.8);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
});

it("vector4", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const c = Mathf.vector.mul(a, 2);
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
    expect(c.w).toBeCloseTo(8.8);
});

it("numbers2 and dest", () =>
{
    const a = {x: 1.1, y: 2.2};
    const c1 = new Vector2();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
});

it("numbers3 and dest", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const c1 = new Vector3();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
});

it("numbers4 and dest", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const c1 = new Vector4();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
    expect(c.w).toBeCloseTo(8.8);
});

it("vector2 and dest", () =>
{
    const a = new Vector2(1.1, 2.2);
    const c1 = new Vector2();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
});

it("vector3 and dest", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const c1 = new Vector3();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
});

it("vector4 and dest", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const c1 = new Vector4();
    const c = Mathf.vector.mul(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(2.2);
    expect(c.y).toBeCloseTo(4.4);
    expect(c.z).toBeCloseTo(6.6);
    expect(c.w).toBeCloseTo(8.8);
});