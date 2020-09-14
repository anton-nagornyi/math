import {INumber2} from "./numbers";
import {Float2} from "./floats";
import {Mathf} from "../math";

class Zero implements INumber2
{
    get x() {return 0.};
    get y() {return 0.};
}
class One implements INumber2
{
    get x() {return 1.};
    get y() {return 1.};
}
class Left implements INumber2
{
    get x() {return -1.};
    get y() {return 0.};
}
class Right implements INumber2
{
    get x() {return 1.};
    get y() {return 0.};
}
class Up implements INumber2
{
    get x() {return 0.};
    get y() {return 1.};
}
class Down implements INumber2
{
    get x() {return 0.};
    get y() {return -1.};
}

export interface IVector2 extends INumber2
{
    add(v: INumber2): IVector2;
    add(v: Float32Array): IVector2;
    set(x: number, y: number): IVector2;
    set(v: INumber2): IVector2;
    sub(v: INumber2): IVector2;
    sub(v: Float32Array): IVector2;
    length(): number;
    normalize(): IVector2;
    div(a: number): IVector2;
    mul(a: number): IVector2;
    rotate(angle: number, arroundPoint?:INumber2): IVector2;
    clone(): IVector2;
    equals(other: INumber2): boolean;
    isZero(): boolean;
    scale(v: INumber2): IVector2;
    scale(v: Float32Array): IVector2;
}

export class Vector2 extends Float2 implements IVector2
{
    constructor()
    constructor(v: Float32Array)
    constructor(x: number, y: number)
    constructor(v?: any, y?: number)
    {
        super();
        if (v === undefined)
        {
            this.value[0] = 0.;
            this.value[1] = 0.;
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
        }
    }

    static readonly zero = new Zero();
    static readonly one = new One();
    static readonly left = new Left();
    static readonly right = new Right();
    static readonly up = new Up();
    static readonly down = new Down();

    add(v: INumber2 | Float32Array): IVector2
    {
        return Mathf.vector.add(this, v, this);
    }

    clone(): IVector2
    {
        return new Vector2(this.value[0], this.value[1]);
    }

    div(a: number): IVector2
    {
        Mathf.vector.div(this.value, a);
        return this;
    }

    equals(other: INumber2 | Float32Array): boolean
    {
        return Mathf.vector.equals(this, other);
    }

    isZero(): boolean
    {
        return this.equals(Vector2.zero);
    }

    length(): number
    {
        return Mathf.vector.length(this);
    }

    mul(a: number): IVector2
    {
        Mathf.vector.mul(this.value, a);
        return this;
    }

    normalize(): IVector2
    {
        Mathf.vector.div(this.value, Mathf.vector.length(this.value));
        return this;
    }

    rotate(angle: number, arroundPoint?: INumber2): IVector2
    {
        const a = angle * Mathf.deg2Rad;
        if ( arroundPoint )
        {
            this.sub(arroundPoint);
        }
        const px = this.x * Math.cos(a) - this.y * Math.sin(a);
        const py = this.x * Math.sin(a) + this.y * Math.cos(a);
        this.x = px;
        this.y = py;
        if ( arroundPoint )
        {
            this.add(arroundPoint);
        }
        return this;
    }

    scale(v: INumber2 | Float32Array): IVector2
    {
        return Mathf.vector.scale(this, v, this);
    }

    set(x: number, y: number): IVector2;
    set(v: INumber2): IVector2;
    set(v: Float32Array): IVector2;
    /** @internal */
    set(x: number | INumber2 | Float32Array, y?: number): IVector2
    {
        if (y !== undefined)
        {
            this.value[0] = x as number;
            this.value[1] = y;
            return this;
        }
        if (x instanceof Float32Array)
        {
            this.value[0] = x[0];
            this.value[1] = x[1];
            return this;
        }
        this.value[0] = (x as INumber2).x;
        this.value[1] = (x as INumber2).y;
        return this;
    }

    sub(v: INumber2 | Float32Array): IVector2
    {
        return Mathf.vector.sub(this, v, this);
    }
}