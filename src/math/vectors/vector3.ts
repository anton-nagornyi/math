import {INumber3} from "./numbers";
import {Mathf} from "../math";
import {Float3} from "./floats";

class Zero implements INumber3
{
    get x() {return 0.};
    get y() {return 0.};
    get z() {return 0.};
}
class One implements INumber3
{
    get x() {return 1.};
    get y() {return 1.};
    get z() {return 1.};
}
class Left implements INumber3
{
    get x() {return -1.};
    get y() {return 0.};
    get z() {return 0.};
}
class Right implements INumber3
{
    get x() {return 1.};
    get y() {return 0.};
    get z() {return 0.};
}
class Up implements INumber3
{
    get x() {return 0.};
    get y() {return 1.};
    get z() {return 0.};
}
class Down implements INumber3
{
    get x() {return 0.};
    get y() {return -1.};
    get z() {return 0.};
}
class Front implements INumber3
{
    get x() {return 0.};
    get y() {return 0.};
    get z() {return 1.};
}
class Back implements INumber3
{
    get x() {return 0.};
    get y() {return 0.};
    get z() {return -1.};
}

export interface IVector3 extends INumber3
{
    add(v: INumber3): IVector3;
    add(v: Float32Array): IVector3;
    set(x: number, y: number, z: number): IVector3;
    set(v: INumber3): IVector3;
    set(v: Float32Array): IVector3;
    sub(v: INumber3): IVector3;
    sub(v: Float32Array): IVector3;
    length(): number;
    normalize(): IVector3;
    div(a: number): IVector3;
    mul(a: number): IVector3;
    clone(): IVector3;
    equals(other: INumber3): boolean;
    isZero(): boolean;
    scale(v: INumber3): IVector3;
    scale(v: Float32Array): IVector3;
}

export class Vector3 extends Float3 implements IVector3
{
    constructor()
    constructor(v: Float32Array)
    constructor(x: number, y: number, z: number)
    constructor(v?: any, y?: number, z?: number)
    {
        super();
        if (v === undefined)
        {
            this.value[0] = 0.;
            this.value[1] = 0.;
            this.value[2] = 0.;
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
        }
    }

    static readonly zero = new Zero();
    static readonly one = new One();
    static readonly left = new Left();
    static readonly right = new Right();
    static readonly up = new Up();
    static readonly down = new Down();
    static readonly front = new Up();
    static readonly back = new Down();

    add(v: INumber3 | Float32Array): IVector3
    {
        return Mathf.vector.add(this, v, this);
    }

    clone(): IVector3
    {
        return new Vector3(this.value);
    }

    div(a: number): IVector3
    {
        Mathf.vector.div(this.value, a);
        return this;
    }

    equals(other: INumber3 | Float32Array): boolean
    {
        return Mathf.vector.equals(this, other);
    }

    isZero(): boolean
    {
        return this.equals(Vector3.zero);
    }

    length(): number
    {
        return Mathf.vector.length(this);
    }

    mul(a: number): IVector3
    {
        Mathf.vector.mul(this.value, a);
        return this;
    }

    normalize(): IVector3
    {
        Mathf.vector.div(this.value, Mathf.vector.length(this.value));
        return this;
    }

    scale(v: INumber3 | Float32Array): IVector3
    {
        return Mathf.vector.scale(this, v, this);
    }

    set(x: number, y: number, z: number): IVector3;
    set(v: INumber3): IVector3;
    set(v: Float32Array): IVector3;
    /** @internal */
    set(x: number | INumber3 | Float32Array, y?: number, z?: number): IVector3
    {
        if (y !== undefined)
        {
            this.value[0] = x as number;
            this.value[1] = y;
            this.value[2] = z!;
            return this;
        }
        if (x instanceof Float32Array)
        {
            this.value[0] = x[0];
            this.value[1] = x[1];
            this.value[2] = x[2];
            return this;
        }
        this.value[0] = (x as INumber3).x;
        this.value[1] = (x as INumber3).y;
        this.value[2] = (x as INumber3).z;
        return this;
    }

    sub(v: INumber3 | Float32Array): IVector3
    {
        return Mathf.vector.sub(this, v, this);
    }
}