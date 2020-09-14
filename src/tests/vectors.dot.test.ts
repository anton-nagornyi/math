import {Mathf} from "../math";
import {Vector2} from "../vectors/vector2";
import {Vector3} from "../vectors/vector3";
import {Vector4} from "../vectors/vector4";

it("array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(333.3);
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    const b = {x: 10.1, y: 20.2};
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(55.55);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const b = {x: 10.1, y: 20.2, z: 30.3};
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(155.54);
});

it("numbers4", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(333.3);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const b = new Vector2(10.1, 20.2);
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(55.55);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const b = new Vector3(10.1, 20.2, 30.3);
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(155.54);
});

it("vector4", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const b = new Vector4(10.1, 20.2, 30.3, 40.4);
    expect(Mathf.vector.dot(a, b)).toBeCloseTo(333.3);
});