import {Vector4} from "../math/vectors/vector4";

it("creation", () =>
{
    const v = new Vector4();
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(0);
    expect(v.z).toBeCloseTo(0);
    expect(v.w).toBeCloseTo(0);
});
it("creation with numbers", () =>
{
    const v = new Vector4(10.1, 20.2, 30.3, 40.4);
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
    expect(v.z).toBeCloseTo(30.3);
    expect(v.w).toBeCloseTo(40.4);
});
it("creation with array", () =>
{
    const v = new Vector4(new Float32Array([10.1, 20.2, 30.3, 40.4]));
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
    expect(v.z).toBeCloseTo(30.3);
    expect(v.w).toBeCloseTo(40.4);
});
describe("add", () =>
{
    it("add vector", () =>
    {
        const a = new Vector4(10.1, 20.2, 30.3, 40.4);
        const b = new Vector4(40.1, 50.2, 60.3, 70.4);
        const c = a.add(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(50.2);
        expect(c.y).toBeCloseTo(70.4);
        expect(c.z).toBeCloseTo(90.6);
        expect(c.w).toBeCloseTo(110.8);
    });
    it("add inumber2", () =>
    {
        const a = new Vector4(10.1, 20.2, 30.3, 40.4);
        const c = a.add({x: 30.1, y: 40.2, z: 60.3, w: 70.4});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
        expect(c.z).toBeCloseTo(90.6);
        expect(c.w).toBeCloseTo(110.8);
    });
    it("add array", () =>
    {
        const a = new Vector4(10.1, 20.2, 30.3, 40.4);
        const c = a.add(new Float32Array([30.1, 40.2, 60.3, 70.4]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
        expect(c.z).toBeCloseTo(90.6);
        expect(c.w).toBeCloseTo(110.8);
    });
});
it("clone", () =>
{
    const a = new Vector4(10.1, 20.2, 30.3, 40.4);
    const b = a.clone();
    expect(b === a).toBeFalsy();
    expect(b.x).toBeCloseTo(10.1);
    expect(b.y).toBeCloseTo(20.2);
    expect(b.z).toBeCloseTo(30.3);
    expect(b.w).toBeCloseTo(40.4);
});
it("div", () =>
{
    const a = new Vector4(10.2, 20.2, 30.3, 40.4);
    const b = a.div(2);
    expect(b === a).toBeTruthy();
    expect(b.x).toBeCloseTo(5.1);
    expect(b.y).toBeCloseTo(10.1);
    expect(b.z).toBeCloseTo(15.15);
    expect(b.w).toBeCloseTo(20.2);
});
it("equals", () =>
{
    const a = new Vector4(10.2, 20.2, 30.3, 40.4);
    const b = new Vector4(10.200001, 20.200001, 30.300001, 40.400001);
    const c = new Vector4(10.2001, 20.2001, 30.3001, 40.001);
    expect(a.equals(b)).toBeTruthy();
    expect(a.equals(c)).toBeFalsy();
});
it("isZero", () =>
{
    const a = new Vector4(0.000001, 0.000002, 0.000003, 0.000004);
    expect(a.isZero()).toBeTruthy();
});
it("length", () =>
{
    const a = new Vector4(2, 3, 4, 5);
    expect(a.length()).toBe(Math.sqrt(2*2 + 3*3 + 4*4 + 5*5));
});
it("mul", () =>
{
    const a = new Vector4(2, 3, 4, 5);
    a.mul(10);
    expect(a.x).toBe(20);
    expect(a.y).toBe(30);
    expect(a.z).toBe(40);
    expect(a.w).toBe(50);
});
it("normalize", () =>
{
    const a = new Vector4(2, 3, 4, 5);
    a.normalize();
    expect(a.x).toBeCloseTo(2 / Math.sqrt(2*2 + 3*3 + 4*4 + 5*5));
    expect(a.y).toBeCloseTo(3 / Math.sqrt(2*2 + 3*3 + 4*4 + 5*5));
    expect(a.z).toBeCloseTo(4 / Math.sqrt(2*2 + 3*3 + 4*4 + 5*5));
    expect(a.w).toBeCloseTo(5 / Math.sqrt(2*2 + 3*3 + 4*4 + 5*5));
});
describe("scale", () =>
{
    it("by vector", () =>
    {
        const a = new Vector4(20.1, 30.2, 30.3, 40.4);
        const b = new Vector4(10, 20, 30, 40);
        const c = a.scale(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
        expect(c.w).toBeCloseTo(1616);
    });
    it("by array", () =>
    {
        const a = new Vector4(20.1, 30.2, 30.3, 40.4);
        const c = a.scale(new Float32Array([10, 20, 30, 40]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
        expect(c.w).toBeCloseTo(1616);
    });
    it("by numbers", () =>
    {
        const a = new Vector4(20.1, 30.2, 30.3, 40.4);
        const c = a.scale({x: 10, y: 20, z: 30, w: 40});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
        expect(c.w).toBeCloseTo(1616);
    });
});
describe("set", () =>
{
    it("numbers", () =>
    {
        const a = new Vector4();
        a.set(10.1, 20.1, 30.3, 40.4);
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
        expect(a.w).toBeCloseTo(40.4);
    });
    it("inumbers", () =>
    {
        const a = new Vector4();
        a.set({x: 10.1, y: 20.1, z: 30.3, w: 40.4});
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
        expect(a.w).toBeCloseTo(40.4);
    });
    it("array", () =>
    {
        const a = new Vector4();
        a.set(new Float32Array([10.1, 20.1, 30.3, 40.4]));
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
        expect(a.w).toBeCloseTo(40.4);
    });
});
describe("sub", () =>
{
    it("by vector", () =>
    {
        const a = new Vector4(20.1, 30.2, 40.3, 50.4);
        const b = new Vector4(10, 20, 30, 40);
        const c = a.sub(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
        expect(c.w).toBeCloseTo(10.4);
    });
    it("by array", () =>
    {
        const a = new Vector4(20.1, 30.2, 40.3, 50.4);
        const c = a.sub(new Float32Array([10, 20, 30, 40]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
        expect(c.w).toBeCloseTo(10.4);
    });
    it("by numbers", () =>
    {
        const a = new Vector4(20.1, 30.2, 40.3, 50.4);
        const c = a.sub({x: 10, y: 20, z: 30, w: 40});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
        expect(c.w).toBeCloseTo(10.4);
    });
});