import {Vector3} from "../vectors/vector3";

it("creation", () =>
{
    const v = new Vector3();
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(0);
    expect(v.z).toBeCloseTo(0);
});
it("creation with numbers", () =>
{
    const v = new Vector3(10.1, 20.2, 30.3);
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
    expect(v.z).toBeCloseTo(30.3);
});
it("creation with array", () =>
{
    const v = new Vector3(new Float32Array([10.1, 20.2, 30.3]));
    expect(v.x).toBeCloseTo(10.1);
    expect(v.y).toBeCloseTo(20.2);
    expect(v.z).toBeCloseTo(30.3);
});
describe("add", () =>
{
    it("add vector", () =>
    {
        const a = new Vector3(10.1, 20.2, 30.3);
        const b = new Vector3(40.1, 50.2, 60.3);
        const c = a.add(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(50.2);
        expect(c.y).toBeCloseTo(70.4);
        expect(c.z).toBeCloseTo(90.6);
    });
    it("add inumber2", () =>
    {
        const a = new Vector3(10.1, 20.2, 30.3);
        const c = a.add({x: 30.1, y: 40.2, z: 60.3});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
        expect(c.z).toBeCloseTo(90.6);
    });
    it("add array", () =>
    {
        const a = new Vector3(10.1, 20.2, 30.3);
        const c = a.add(new Float32Array([30.1, 40.2, 60.3]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(40.2);
        expect(c.y).toBeCloseTo(60.4);
        expect(c.z).toBeCloseTo(90.6);
    });
});
it("clone", () =>
{
    const a = new Vector3(10.1, 20.2, 30.3);
    const b = a.clone();
    expect(b === a).toBeFalsy();
    expect(b.x).toBeCloseTo(10.1);
    expect(b.y).toBeCloseTo(20.2);
    expect(b.z).toBeCloseTo(30.3);
});
it("div", () =>
{
    const a = new Vector3(10.2, 20.2, 30.3);
    const b = a.div(2);
    expect(b === a).toBeTruthy();
    expect(b.x).toBeCloseTo(5.1);
    expect(b.y).toBeCloseTo(10.1);
    expect(b.z).toBeCloseTo(15.15);
});
it("equals", () =>
{
    const a = new Vector3(10.2, 20.2, 30.3);
    const b = new Vector3(10.200001, 20.200001, 30.300001);
    const c = new Vector3(10.2001, 20.2001, 30.3001);
    expect(a.equals(b)).toBeTruthy();
    expect(a.equals(c)).toBeFalsy();
});
it("isZero", () =>
{
    const a = new Vector3(0.000001, 0.000002, 0.000003);
    expect(a.isZero()).toBeTruthy();
});
it("length", () =>
{
    const a = new Vector3(2, 3, 4);
    expect(a.length()).toBe(Math.sqrt(2*2 + 3*3 + 4*4));
});
it("mul", () =>
{
    const a = new Vector3(2, 3, 4);
    a.mul(10);
    expect(a.x).toBe(20);
    expect(a.y).toBe(30);
    expect(a.z).toBe(40);
});
it("normalize", () =>
{
    const a = new Vector3(2, 3, 4);
    a.normalize();
    expect(a.x).toBeCloseTo(2 / Math.sqrt(2*2 + 3*3 + 4*4));
    expect(a.y).toBeCloseTo(3 / Math.sqrt(2*2 + 3*3 + 4*4));
    expect(a.z).toBeCloseTo(4 / Math.sqrt(2*2 + 3*3 + 4*4));
});
describe("scale", () =>
{
    it("by vector", () =>
    {
        const a = new Vector3(20.1, 30.2, 30.3);
        const b = new Vector3(10, 20, 30);
        const c = a.scale(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
    });
    it("by array", () =>
    {
        const a = new Vector3(20.1, 30.2, 30.3);
        const c = a.scale(new Float32Array([10, 20, 30]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
    });
    it("by numbers", () =>
    {
        const a = new Vector3(20.1, 30.2, 30.3);
        const c = a.scale({x: 10, y: 20, z: 30});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(201);
        expect(c.y).toBeCloseTo(604);
        expect(c.z).toBeCloseTo(909);
    });
});
describe("set", () =>
{
    it("numbers", () =>
    {
        const a = new Vector3();
        a.set(10.1, 20.1, 30.3);
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
    });
    it("inumbers", () =>
    {
        const a = new Vector3();
        a.set({x: 10.1, y: 20.1, z: 30.3});
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
    });
    it("array", () =>
    {
        const a = new Vector3();
        a.set(new Float32Array([10.1, 20.1, 30.3]));
        expect(a.x).toBeCloseTo(10.1);
        expect(a.y).toBeCloseTo(20.1);
        expect(a.z).toBeCloseTo(30.3);
    });
});
describe("sub", () =>
{
    it("by vector", () =>
    {
        const a = new Vector3(20.1, 30.2, 40.3);
        const b = new Vector3(10, 20, 30);
        const c = a.sub(b);
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
    });
    it("by array", () =>
    {
        const a = new Vector3(20.1, 30.2, 40.3);
        const c = a.sub(new Float32Array([10, 20, 30]));
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
    });
    it("by numbers", () =>
    {
        const a = new Vector3(20.1, 30.2, 40.3);
        const c = a.sub({x: 10, y: 20, z: 30});
        expect(c === a).toBeTruthy();
        expect(c.x).toBeCloseTo(10.1);
        expect(c.y).toBeCloseTo(10.2);
        expect(c.z).toBeCloseTo(10.3);
    });
});