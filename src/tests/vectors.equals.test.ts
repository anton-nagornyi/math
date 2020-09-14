import {Mathf} from "../math/math";
import {Vector2} from "../math/vectors/vector2";
import {Vector3} from "../math/vectors/vector3";
import {Vector4} from "../math/vectors/vector4";

it("array and array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const b = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const c = new Float32Array([1.1, 2.21, 3.3, 4.4]);
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    const b = {x: 1.1, y: 2.2};
    const c = {x: 1.11, y: 2.2};
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    const b = {x: 1.1, y: 2.2, z: 3.3};
    const c = {x: 1.11, y: 2.2, z: 3.3};
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("numbers4", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const b = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    const c = {x: 1.11, y: 2.2, z: 3.3, w: 4.4};
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    const b = new Vector2(1.1, 2.2);
    const c = new Vector2(1.1, 2.21);
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    const b = new Vector3(1.1, 2.2, 3.3);
    const c = new Vector3(1.1, 2.21, 3.3);
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});

it("vector4", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    const b = new Vector4(1.1, 2.2, 3.3, 4.4);
    const c = new Vector4(1.1, 2.21, 3.3, 4.4);
    expect(Mathf.vector.equals(a, b)).toBeTruthy();
    expect(Mathf.vector.equals(a, c)).toBeFalsy();
});