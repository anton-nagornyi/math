import {Mathf} from "../math";
import {Vector2} from "../vectors/vector2";
import {Vector3} from "../vectors/vector3";
import {Vector4} from "../vectors/vector4";

it("array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    expect(Mathf.vector.length(a)).toBeCloseTo(6.025);
});

it("numbers2", () =>
{
    const a = {x: 1.1, y: 2.2};
    expect(Mathf.vector.length(a)).toBeCloseTo(2.459);
});

it("numbers3", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3};
    expect(Mathf.vector.length(a)).toBeCloseTo(4.116);
});

it("numbers4", () =>
{
    const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
    expect(Mathf.vector.length(a)).toBeCloseTo(6.025);
});

it("vector2", () =>
{
    const a = new Vector2(1.1, 2.2);
    expect(Mathf.vector.length(a)).toBeCloseTo(2.459);
});

it("vector3", () =>
{
    const a = new Vector3(1.1, 2.2, 3.3);
    expect(Mathf.vector.length(a)).toBeCloseTo(4.116);
});

it("vector4", () =>
{
    const a = new Vector4(1.1, 2.2, 3.3, 4.4);
    expect(Mathf.vector.length(a)).toBeCloseTo(6.025);
});