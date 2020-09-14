import {Mathf} from "../math";
import {Vector2} from "../vectors/vector2";
import {Vector3} from "../vectors/vector3";
import {expectToBeCloseToArray} from "./utils";

it("array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3]);
    const b = new Float32Array([10.1, 20.2, 30.3]);
    const c = Mathf.vector.cross(a, b);
    expectToBeCloseToArray(c, [0, 0, 0]);
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    const b = {x: 10.1, y: 20.2};
    const c = Mathf.vector.cross(a, b);
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const b = {x: 10.1, y: 20.2, z: 30.3};
    const c = Mathf.vector.cross(a, b);
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const b = new Vector2(10.1, 20.2);
    const c = Mathf.vector.cross(a, b);
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const b = new Vector3(10.1, 20.2, 30.3);
    const c = Mathf.vector.cross(a, b);
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});


it("array and dest", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3]);
    const b = new Float32Array([10.1, 20.2, 30.3]);
    const c1 = new Float32Array(3);
    const c = Mathf.vector.cross(a, b, c1);
    expect(c === c1).toBeTruthy();
    expectToBeCloseToArray(c, [0, 0, 0]);
});

it("numbers2 and dest", () =>
{
    const a = {x: 1.1, y: 2.2};
    const b = {x: 10.1, y: 20.2};
    const c1 = new Vector3();
    const c = Mathf.vector.cross(a, b, c1);
    expect(c === c1).toBeTruthy();
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const b = {x: 10.1, y: 20.2, z: 30.3};
    const c1 = new Vector3();
    const c = Mathf.vector.cross(a, b, c1);
    expect(c === c1).toBeTruthy();
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const b = new Vector2(10.1, 20.2);
    const c1 = new Vector3();
    const c = Mathf.vector.cross(a, b, c1);
    expect(c === c1).toBeTruthy();
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const b = new Vector3(10.1, 20.2, 30.3);
    const c1 = new Vector3();
    const c = Mathf.vector.cross(a, b, c1);
    expect(c === c1).toBeTruthy();
    expect(c.x).toBeCloseTo(0);
    expect(c.y).toBeCloseTo(0);
    expect(c.z).toBeCloseTo(0);
});