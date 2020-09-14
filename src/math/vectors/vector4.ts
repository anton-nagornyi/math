import {INumber4} from "./numbers";
import {Mathf} from "../math";
import {Float4} from "./floats";

class Zero implements INumber4
{
    get x() {return 0.};
    get y() {return 0.};
    get z() {return 0.};
    get w() {return 0.};
}
class One implements INumber4
{
    get x() {return 1.};
    get y() {return 1.};
    get z() {return 1.};
    get w() {return 1.};
}

export interface IVector4 extends INumber4
{
    add(v: INumber4): IVector4;
    add(v: Float32Array): IVector4;
    set(x: number, y: number, z: number, w: number): IVector4;
    set(v: INumber4): IVector4;
    set(v: Float32Array): IVector4;
    sub(v: INumber4): IVector4;
    sub(v: Float32Array): IVector4;
    length(): number;
    normalize(): IVector4;
    div(a: number): IVector4;
    mul(a: number): IVector4;
    clone(): IVector4;
    equals(other: INumber4): boolean;
    isZero(): boolean;
    scale(v: INumber4): IVector4;
    scale(v: Float32Array): IVector4;
}

export class Vector4 extends Float4 implements IVector4
{
    constructor()
    constructor(v: Float32Array)
    constructor(x: number, y: number, z: number, w: number)
    constructor(v?: any, y?: number, z?: number, w?: number)
    {
        super();
        if (v === undefined)
        {
            this.value[0] = 0.;
            this.value[1] = 0.;
            this.value[2] = 0.;
            this.value[3] = 0.;
            return;
        }
        if (v instanceof Float32Array)
        {
            for (let i = 0; i < this.value.length; ++i)
            {
                this.value[i] = v[i];
            }
        }
        else
        {
            this.value[0] = v;
            this.value[1] = y!;
            this.value[2] = z!;
            this.value[3] = w!;
        }
    }

    static readonly zero = new Zero();
    static readonly one = new One();

    add(v: INumber4 | Float32Array): IVector4
    {
        return Mathf.vector.add(this, v, this);
    }

    clone(): IVector4
    {
        return new Vector4(this.value);
    }

    div(a: number): IVector4
    {
        Mathf.vector.div(this.value, a);
        return this;
    }

    equals(other: INumber4 | Float32Array): boolean
    {
        return Mathf.vector.equals(this, other);
    }

    isZero(): boolean
    {
        return this.equals(Vector4.zero);
    }

    length(): number
    {
        return Mathf.vector.length(this);
    }

    mul(a: number): IVector4
    {
        Mathf.vector.mul(this.value, a);
        return this;
    }

    normalize(): IVector4
    {
        Mathf.vector.div(this.value, Mathf.vector.length(this.value));
        return this;
    }

    scale(v: INumber4 | Float32Array): IVector4
    {
        return Mathf.vector.scale(this, v, this);
    }

    set(x: number, y: number, z: number, w: number): IVector4;
    set(v: INumber4): IVector4;
    set(v: Float32Array): IVector4;
    /** @internal */
    set(x: number | INumber4 | Float32Array, y?: number, z?: number, w?: number): IVector4
    {
        if (y !== undefined)
        {
            this.value[0] = x as number;
            this.value[1] = y;
            this.value[2] = z!;
            this.value[3] = w!;
            return this;
        }
        if (x instanceof Float32Array)
        {
            this.value[0] = x[0];
            this.value[1] = x[1];
            this.value[2] = x[2];
            this.value[3] = x[3];
            return this;
        }
        this.value[0] = (x as INumber4).x;
        this.value[1] = (x as INumber4).y;
        this.value[2] = (x as INumber4).z;
        this.value[3] = (x as INumber4).w;
        return this;
    }

    sub(v: INumber4 | Float32Array): IVector4
    {
        return Mathf.vector.sub(this, v, this);
    }
}