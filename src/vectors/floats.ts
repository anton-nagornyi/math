import {INumber2, INumber3, INumber4} from "./numbers";

export abstract class AVectorData
{
    abstract value: Float32Array;
}

export class Float2 extends AVectorData implements INumber2
{
    value = new Float32Array(2);

    get x(): number
    {
        return this.value[0];
    }
    get y(): number
    {
        return this.value[1];
    }
    set x(value: number)
    {
        this.value[0] = value;
    }
    set y(value: number)
    {
        this.value[1] = value;
    }
}

export class Float3 extends AVectorData implements INumber3
{
    value = new Float32Array(3);

    get x(): number
    {
        return this.value[0];
    }
    get y(): number
    {
        return this.value[1];
    }
    get z(): number
    {
        return this.value[2];
    }
    set x(value: number)
    {
        this.value[0] = value;
    }
    set y(value: number)
    {
        this.value[1] = value;
    }
    set z(value: number)
    {
        this.value[2] = value;
    }
}

export class Float4 extends AVectorData implements INumber4
{
    value = new Float32Array(4);

    get x(): number
    {
        return this.value[0];
    }
    get y(): number
    {
        return this.value[1];
    }
    get z(): number
    {
        return this.value[2];
    }
    get w(): number
    {
        return this.value[3];
    }
    set x(value: number)
    {
        this.value[0] = value;
    }
    set y(value: number)
    {
        this.value[1] = value;
    }
    set z(value: number)
    {
        this.value[2] = value;
    }
    set w(value: number)
    {
        this.value[3] = value;
    }
}