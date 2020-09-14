import {Mathf} from "../math/math";
import {expectToBeCloseToArray} from "./utils";
import {Vector2} from "../math/vectors/vector2";
import {Vector3} from "../math/vectors/vector3";
import {Vector4} from "../math/vectors/vector4";

it("array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const c = Mathf.vector.div(a, 2);
    expect(c === a).toBeTruthy();
    expectToBeCloseToArray(a, [0.55, 1.1, 1.65, 2.2]);
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
});

it("numbers4", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
    expect(c.w).toBeCloseTo(2.2);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
});

it("vector4", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const c = Mathf.vector.div(a, 2);
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
    expect(c.w).toBeCloseTo(2.2);
});

it("numbers2 and dest", () =>
{
    const a = {x: 1.1, y: 2.2};
    const c1 = new Vector2();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
});

it("numbers3 and dest", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const c1 = new Vector3();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
});

it("numbers4 and dest", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const c1 = new Vector4();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
    expect(c.w).toBeCloseTo(2.2);
});

it("vector2 and dest", () =>
{
    const a = new Vector2(1.1, 2.2);
    const c1 = new Vector2();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector2).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
});

it("vector3 and dest", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const c1 = new Vector3();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector3).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
});

it("vector4 and dest", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const c1 = new Vector4();
    const c = Mathf.vector.div(a, 2, c1);
    expect(c === c1).toBeTruthy();
    expect(c instanceof Vector4).toBeTruthy();
    expect(c.x).toBeCloseTo(0.55);
    expect(c.y).toBeCloseTo(1.1);
    expect(c.z).toBeCloseTo(1.65);
    expect(c.w).toBeCloseTo(2.2);
});