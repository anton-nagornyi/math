import {Vector2} from "../vectors/vector2";
import {Mathf} from "../math";

it("creation", () =>
{
    const v = new Vector2();
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(0);
});
it("creation with numbers", () =>
{
    const v = new Vector2(10.1, 20.2);
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
});
it("creation with array", () =>
{
    const v = new Vector2(new Float32Array([10.1, 20.2]));
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
});
describe("add", () =>
{
    it("add vector", () =>
    {
        const a = new Vector2(10.1, 20.2);
        const b = new Vector2(30.1, 40.2);
        const c = a.add(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
    });
    it("add inumber2", () =>
    {
        const a = new Vector2(10.1, 20.2);
        const c = a.add({x: 30.1, y: 40.2});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
    });
    it("add array", () =>
    {
        const a = new Vector2(10.1, 20.2);
        const c = a.add(new Float32Array([30.1, 40.2]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
    });
});
it("clone", () =>
{
    const a = new Vector2(10.1, 20.2);
    const b = a.clone();
    expect(b === a).toBeFalsy();
    expect(b.x).toBeCloseTo(10.1);
    expect(b.y).toBeCloseTo(20.2);
});
it("div", () =>
{
    const a = new Vector2(10.2, 20.2);
    const b = a.div(2);
    expect(b === a).toBeTruthy();
    expect(b.x).toBeCloseTo(5.1);
    expect(b.y).toBeCloseTo(10.1);
});
it("equals", () =>
{
    const a = new Vector2(10.2, 20.2);
    const b = new Vector2(10.200001, 20.200001);
    const c = new Vector2(10.2001, 20.2001);
    expect(a.equals(b)).toBeTruthy();
    expect(a.equals(c)).toBeFalsy();
});
it("isZero", () =>
{
    const a = new Vector2(0.000001, 0.000002);
    expect(a.isZero()).toBeTruthy();
});
it("length", () =>
{
    const a = new Vector2(2, 3);
    expect(a.length()).toBe(Math.sqrt(2*2 + 3*3));
});
it("mul", () =>
{
    const a = new Vector2(2, 3);
    a.mul(10);
    expect(a.x).toBe(20);
    expect(a.y).toBe(30);
});
it("normalize", () =>
{
    const a = new Vector2(2, 3);
    a.normalize();
    expect(a.x).toBeCloseTo(2 / Math.sqrt(2*2 + 3*3));
    expect(a.y).toBeCloseTo(3 / Math.sqrt(2*2 + 3*3));
});
it("rotate", () =>
{
    const a = new Vector2(1, 0);
    a.rotate(45);
    expect(a.x).toBeCloseTo(Math.cos(45 * Mathf.deg2Rad));
    expect(a.y).toBeCloseTo(Math.sin(45 * Mathf.deg2Rad));

    a.set(1, 0);
    a.rotate(45, {x: 10, y: 20});
    expect(a.x).toBeCloseTo(17.778175354003906);
    expect(a.y).toBeCloseTo(-0.5060958862304688);
});
describe("scale", () =>
{
    it("by vector", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const b = new Vector2(10, 20);
        const c = a.scale(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
    });
    it("by array", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const c = a.scale(new Float32Array([10, 20]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
    });
    it("by numbers", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const c = a.scale({x: 10, y: 20});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
    });
});
describe("set", () =>
{
    it("numbers", () =>
    {
        const a = new Vector2();
        a.set(10.1, 20.1);
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
    });
    it("inumbers", () =>
    {
        const a = new Vector2();
        a.set({x: 10.1, y: 20.1});
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
    });
    it("array", () =>
    {
        const a = new Vector2();
        a.set(new Float32Array([10.1, 20.1]));
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
    });
});
describe("sub", () =>
{
    it("by vector", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const b = new Vector2(10, 20);
        const c = a.sub(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
    });
    it("by array", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const c = a.sub(new Float32Array([10, 20]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
    });
    it("by numbers", () =>
    {
        const a = new Vector2(20.1, 30.2);
        const c = a.sub({x: 10, y: 20});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
    });
});