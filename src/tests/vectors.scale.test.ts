import {Mathf} from "../math";
import {expectToBeCloseToArray} from "./utils";
import {Vector2} from "../vectors/vector2";
import {Vector3} from "../vectors/vector3";
import {Vector4} from "../vectors/vector4";

it("array and array", () =>
{
    const a = new Float32Array([1.1, 2.2, 3.3, 4.4]);
    const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
    const c = Mathf.vector.scale(a, b);
    expect(c === a).toBeTruthy();
    expectToBeCloseToArray(a, [11.110000610351562,44.44000244140625,99.98999786376953,177.760009765625]);
});

describe("dimension 2", () =>
{
    describe("numbers2", () =>
    {
        it("numbers2 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("numbers2 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("numbers2 and array", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("array and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
        });
    });

    describe("vector2", () =>
    {
        it("vector2 and numbers2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and numbers3", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and numbers4", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("vector2 and vector2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and vector3", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and vector4", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("vector2 and array", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("array and vector2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
        });
    });

    describe("numbers2 and dest", () =>
    {
        it("numbers2 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("numbers2 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("numbers2 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("numbers2 and array", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("array and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
        });
    });

    describe("vector2 and dest", () =>
    {
        it("vector2 and numbers2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and numbers3", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and numbers4", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("vector2 and vector2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and vector3", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("vector2 and vector4", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });

        it("vector2 and array", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
        });
        it("array and vector2", () =>
        {
            const a = new Vector2(1.1, 2.2);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector2();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector2).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
        });
    });
});

describe("dimension 3", () =>
{
    describe("numbers3", () =>
    {
        it("numbers3 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("numbers3 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("numbers3 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("numbers3 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("numbers3 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("numbers3 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("numbers3 and array", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("array and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
        });
    });

    describe("vector3", () =>
    {
        it("vector3 and numbers2", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("vector3 and numbers3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("vector3 and numbers4", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("vector3 and vector2", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("vector3 and vector3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("vector3 and vector4", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("vector3 and array", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("array and vector3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
        });
    });

    describe("numbers3 and dest", () =>
    {
        it("numbers3 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("numbers3 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("numbers3 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("numbers3 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("numbers3 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("numbers3 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("numbers3 and array", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("array and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
        });
    });

    describe("vector3 and dest", () =>
    {
        it("vector3 and numbers2", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("vector3 and numbers3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("vector3 and numbers4", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("vector3 and vector2", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
        });
        it("vector3 and vector3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("vector3 and vector4", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });

        it("vector3 and array", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
        });
        it("array and vector3", () =>
        {
            const a = new Vector3(1.1, 2.2, 3.3);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector3();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector3).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
        });
    });
});

describe("dimension 4", () =>
{
    describe("numbers4", () =>
    {
        it("numbers4 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("numbers4 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("numbers4 and array", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });
        it("array and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
            expect(c.w).toBeCloseTo(177.76);
        });
    });

    describe("vector4", () =>
    {
        it("vector4 and numbers2", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and numbers3", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and numbers4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("vector4 and vector2", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector2(10.1,20.2);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and vector3", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector3(10.1,20.2, 30.3);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and vector4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("vector4 and array", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(a, b);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });
        it("array and vector4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c = Mathf.vector.scale(b, a);
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
            expect(c.w).toBeCloseTo(177.76);
        });
    });

    describe("numbers4 and dest", () =>
    {
        it("numbers4 and numbers2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and numbers3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("numbers4 and vector2", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and vector3", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("numbers4 and vector4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("numbers4 and array", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });
        it("array and numbers4", () =>
        {
            const a = {x: 1.1, y: 2.2, z: 3.3, w: 4.4};
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
            expect(c.w).toBeCloseTo(177.76);
        });
    });

    describe("vector4 and dest", () =>
    {
        it("vector4 and numbers2", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and numbers3", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2, z: 30.3};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and numbers4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = {x: 10.1, y: 20.2, z: 30.3, w: 40.4};
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("vector4 and vector2", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector2(10.1,20.2);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(3.3);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and vector3", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector3(10.1,20.2, 30.3);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(4.4);
        });
        it("vector4 and vector4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Vector4(10.1,20.2, 30.3, 40.4);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });

        it("vector4 and array", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(a, b, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.110000610351562);
            expect(c.y).toBeCloseTo(44.44000244140625);
            expect(c.z).toBeCloseTo(99.98999786376953);
            expect(c.w).toBeCloseTo(177.760009765625);
        });
        it("array and vector4", () =>
        {
            const a = new Vector4(1.1, 2.2, 3.3, 4.4);
            const b = new Float32Array([10.1, 20.2, 30.3, 40.4]);
            const c1 = new Vector4();
            const c = Mathf.vector.scale(b, a, c1);
            expect(c === c1).toBeTruthy();
            expect(c instanceof Vector4).toBeTruthy();
            expect(c.x).toBeCloseTo(11.11);
            expect(c.y).toBeCloseTo(44.44);
            expect(c.z).toBeCloseTo(99.99);
            expect(c.w).toBeCloseTo(177.76);
        });
    });
});