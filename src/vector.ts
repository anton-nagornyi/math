import {INumber2, INumber3, INumber4} from "./vectors/numbers";
import {Vector2} from "./vectors/vector2";
import {Vector3} from "./vectors/vector3";
import {Vector4} from "./vectors/vector4";
import {AVectorData} from "./vectors/floats";

const epsilon = 1e-5;

export class Vector
{
    /**
     * Returns a sum of two vectors element wise
     * @param outV1 - sum is written here
     * @param v2 - vector to add
     */
    add(outV1: Float32Array, v2: Float32Array): Float32Array;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber4, v2: INumber2, dest?: Vector4): Vector4;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber4, v2: INumber3, dest?: Vector4): Vector4;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber3, v2: INumber2, dest?: Vector3): Vector3;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber3, v2: INumber4, dest?: Vector3): Vector3;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber2, v2: INumber2, dest?: Vector2): Vector2;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber2, v2: INumber3, dest?: Vector2): Vector2;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber2, v2: INumber4, dest?: Vector2): Vector2;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber3, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber4, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber4, v2: Float32Array, dest?: Vector4): Vector4;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: Float32Array, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber3, v2: Float32Array, dest?: Vector3): Vector3;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: Float32Array, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: INumber2, v2: Float32Array, dest?: Vector2): Vector2;
    /**
     * Returns a sum of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    add(v1: Float32Array, v2: INumber2, dest?: Vector2): Vector2;

    /** internal */ add(arg1: any, arg2: any, dest?: any): any
    {
        if (arg1 instanceof Float32Array && arg2 instanceof Float32Array)
        {
            for (let i = 0; i < arg1.length; ++i)
            {
                arg1[i] += arg2[i];
            }
            return arg1;
        }

        if (arg1 instanceof Float32Array)
        {
            if (arg2.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg1[0] + arg2.x;
                dest.value[1] = arg1[1] + arg2.y;
                dest.value[2] = arg1[2] + arg2.z;
                dest.value[3] = arg1[3] + arg2.w;
                return dest;
            }
            if (arg2.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg1[0] + arg2.x;
                dest.value[1] = arg1[1] + arg2.y;
                dest.value[2] = arg1[2] + arg2.z;
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg1[0] + arg2.x;
            dest.value[1] = arg1[1] + arg2.y;
            return dest;
        }

        if (arg2 instanceof Float32Array)
        {
            if (arg1.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg2[0] + arg1.x;
                dest.value[1] = arg2[1] + arg1.y;
                dest.value[2] = arg2[2] + arg1.z;
                dest.value[3] = arg2[3] + arg1.w;
                return dest;
            }
            if (arg1.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg2[0] + arg1.x;
                dest.value[1] = arg2[1] + arg1.y;
                dest.value[2] = arg2[2] + arg1.z;
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg2[0] + arg1.x;
            dest.value[1] = arg2[1] + arg1.y;
            return dest;
        }

        if (arg1.w !== undefined)
        {
            if (!dest) dest = new Vector4();
            dest.value[0] = arg1.x + arg2.x;
            dest.value[1] = arg1.y + arg2.y;
            dest.value[2] = arg1.z + (arg2.z === undefined ? 0 : arg2.z);
            dest.value[3] = arg1.w + (arg2.w === undefined ? 0 : arg2.w);
            return dest;
        }
        if (arg1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.value[0] = arg1.x + arg2.x;
            dest.value[1] = arg1.y + arg2.y;
            dest.value[2] = arg1.z + (arg2.z === undefined ? 0 : arg2.z);
            return dest;
        }

        if (!dest) dest = new Vector2();
        dest.value[0] = arg1.x + arg2.x;
        dest.value[1] = arg1.y + arg2.y;
        return dest;
    }
    /**
     * Returns a subtraction of two vectors element wise
     * @param outV1 - sum is written here
     * @param v2 - vector to subtract
     */
    sub(outV1: Float32Array, v2: Float32Array): Float32Array;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber4, v2: INumber2, dest?: Vector4): Vector4;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber4, v2: INumber3, dest?: Vector4): Vector4;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber3, v2: INumber2, dest?: Vector3): Vector3;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber3, v2: INumber4, dest?: Vector3): Vector3;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber2, v2: INumber2, dest?: Vector2): Vector2;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber2, v2: INumber3, dest?: Vector2): Vector2;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber2, v2: INumber4, dest?: Vector2): Vector2;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber3, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber4, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber4, v2: Float32Array, dest?: Vector4): Vector4;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: Float32Array, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber3, v2: Float32Array, dest?: Vector3): Vector3;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: Float32Array, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: INumber2, v2: Float32Array, dest?: Vector2): Vector2;
    /**
     * Returns a subtraction of two vectors element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    sub(v1: Float32Array, v2: INumber2, dest?: Vector2): Vector2;

    /** @internal */ sub(arg1: any, arg2: any, dest?: any): any
    {
        if (arg1 instanceof Float32Array && arg2 instanceof Float32Array)
        {
            for (let i = 0; i < arg1.length; ++i)
            {
                arg1[i] -= arg2[i];
            }
            return arg1;
        }

        if (arg1 instanceof Float32Array)
        {
            if (arg2.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg1[0] - arg2.x;
                dest.value[1] = arg1[1] - arg2.y;
                dest.value[2] = arg1[2] - arg2.z;
                dest.value[3] = arg1[3] - arg2.w;
                return dest;
            }
            if (arg2.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg1[0] - arg2.x;
                dest.value[1] = arg1[1] - arg2.y;
                dest.value[2] = arg1[2] - arg2.z;
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg1[0] - arg2.x;
            dest.value[1] = arg1[1] - arg2.y;
            return dest;
        }

        if (arg2 instanceof Float32Array)
        {
            if (arg1.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg1.x - arg2[0];
                dest.value[1] = arg1.y - arg2[1];
                dest.value[2] = arg1.z - arg2[2];
                dest.value[3] = arg1.w - arg2[3];
                return dest;
            }
            if (arg1.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg1.x - arg2[0];
                dest.value[1] = arg1.y - arg2[1];
                dest.value[2] = arg1.z - arg2[2];
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg1.x - arg2[0];
            dest.value[1] = arg1.y - arg2[1];
            return dest;
        }

        if (arg1.w !== undefined)
        {
            if (!dest) dest = new Vector4();
            dest.value[0] = arg1.x - arg2.x;
            dest.value[1] = arg1.y - arg2.y;
            dest.value[2] = arg1.z - (arg2.z === undefined ? 0 : arg2.z);
            dest.value[3] = arg1.w - (arg2.w === undefined ? 0 : arg2.w);
            return dest;
        }
        if (arg1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.value[0] = arg1.x - arg2.x;
            dest.value[1] = arg1.y - arg2.y;
            dest.value[2] = arg1.z - (arg2.z === undefined ? 0 : arg2.z);
            return dest;
        }

        if (!dest) dest = new Vector2();
        dest.value[0] = arg1.x - arg2.x;
        dest.value[1] = arg1.y - arg2.y;
        return dest;
    }
    /**
     * Returns a multiplication of a vector and number element wise
     * @param outV1 - multiplication is written here
     * @param a - number to multiply
     */
    mul(outV1: Float32Array, a: number): Float32Array;
    /**
     * Returns a multiplication of a vector by a number
     * @param v1 - vector
     * @param a - number
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    mul(v1: INumber4, a: number, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by a number
     * @param v1 - vector
     * @param a - number
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    mul(v1: INumber3, a: number, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by a number
     * @param v1 - vector
     * @param a - number
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    mul(v1: INumber2, a: number, dest?: Vector2): Vector2;
    /** @internal */ mul(arg1: any, a: number, dest?: any): any
    {
        if (arg1 instanceof Float32Array)
        {
            for (let i = 0; i < arg1.length; ++i)
            {
                arg1[i] *= a;
            }
            return arg1;
        }

        if (arg1.w !== undefined)
        {
            if (!dest) dest = new Vector4();
            dest.value[0] = arg1.x * a;
            dest.value[1] = arg1.y * a;
            dest.value[2] = arg1.z * a;
            dest.value[3] = arg1.w * a;
            return dest;
        }
        if (arg1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.value[0] = arg1.x * a;
            dest.value[1] = arg1.y * a;
            dest.value[2] = arg1.z * a;
            return dest;
        }

        if (!dest) dest = new Vector2();
        dest.value[0] = arg1.x * a;
        dest.value[1] = arg1.y * a;
        return dest;
    }

    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param outV1 - multiplication is written here
     * @param v2 - vector to multiply
     */
    scale(outV1: Float32Array, v2: Float32Array): Float32Array;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber4, v2: INumber2, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber4, v2: INumber3, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber3, v2: INumber2, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber3, v2: INumber4, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber2, v2: INumber2, dest?: Vector2): Vector2;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber2, v2: INumber3, dest?: Vector2): Vector2;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber2, v2: INumber4, dest?: Vector2): Vector2;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber3, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber4, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber4, v2: Float32Array, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: Float32Array, v2: INumber4, dest?: Vector4): Vector4;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber3, v2: Float32Array, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: Float32Array, v2: INumber3, dest?: Vector3): Vector3;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector
     * @param v2 - second vector as array
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: INumber2, v2: Float32Array, dest?: Vector2): Vector2;
    /**
     * Returns a multiplication of a vector by another vector element wise
     * @param v1 - first vector as array
     * @param v2 - second vector
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    scale(v1: Float32Array, v2: INumber2, dest?: Vector2): Vector2;

    /** @internal */ scale(arg1: any, arg2: any, dest?: any): any
    {
        if (arg1 instanceof Float32Array && arg2 instanceof Float32Array)
        {
            for (let i = 0; i < arg1.length; ++i)
            {
                arg1[i] *= arg2[i];
            }
            return arg1;
        }

        if (arg1 instanceof Float32Array)
        {
            if (arg2.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg1[0] * arg2.x;
                dest.value[1] = arg1[1] * arg2.y;
                dest.value[2] = arg1[2] * arg2.z;
                dest.value[3] = arg1[3] * arg2.w;
                return dest;
            }
            if (arg2.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg1[0] * arg2.x;
                dest.value[1] = arg1[1] * arg2.y;
                dest.value[2] = arg1[2] * arg2.z;
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg1[0] * arg2.x;
            dest.value[1] = arg1[1] * arg2.y;
            return dest;
        }

        if (arg2 instanceof Float32Array)
        {
            if (arg1.w !== undefined)
            {
                if (!dest) dest = new Vector4();
                dest.value[0] = arg2[0] * arg1.x;
                dest.value[1] = arg2[1] * arg1.y;
                dest.value[2] = arg2[2] * arg1.z;
                dest.value[3] = arg2[3] * arg1.w;
                return dest;
            }
            if (arg1.z !== undefined)
            {
                if (!dest) dest = new Vector3();
                dest.value[0] = arg2[0] * arg1.x;
                dest.value[1] = arg2[1] * arg1.y;
                dest.value[2] = arg2[2] * arg1.z;
                return dest;
            }
            if (!dest) dest = new Vector2();
            dest.value[0] = arg2[0] * arg1.x;
            dest.value[1] = arg2[1] * arg1.y;
            return dest;
        }

        if (arg1.w !== undefined)
        {
            if (!dest) dest = new Vector4();
            dest.value[0] = arg1.x * arg2.x;
            dest.value[1] = arg1.y * arg2.y;
            dest.value[2] = arg1.z * (arg2.z === undefined ? 1. : arg2.z);
            dest.value[3] = arg1.w * (arg2.w === undefined ? 1. : arg2.w);
            return dest;
        }
        if (arg1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.value[0] = arg1.x * arg2.x;
            dest.value[1] = arg1.y * arg2.y;
            dest.value[2] = arg1.z * (arg2.z === undefined ? 1. : arg2.z);
            return dest;
        }

        if (!dest) dest = new Vector2();
        dest.value[0] = arg1.x * arg2.x;
        dest.value[1] = arg1.y * arg2.y;
        return dest;
    }
    /**
     * Returns a division of a vector and number element wise
     * @param outV1 - division is written here
     * @param a - number to divide by
     */
    div(outV1: Float32Array, a: number): Float32Array;
    /**
     * Returns a division of a vector by number element wise
     * @param v1 - vector
     * @param a - number to divide by
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    div(v1: INumber4, a: number, dest?: Vector4): Vector4;
    /**
     * Returns a division of a vector by number element wise
     * @param v1 - vector
     * @param a - number to divide by
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    div(v1: INumber3, a: number, dest?: Vector3): Vector3;
    /**
     * Returns a division of a vector by number element wise
     * @param v1 - vector
     * @param a - number to divide by
     * @param dest - optional. Destination where to write result. In case it is provided it will be returned
     */
    div(v1: INumber2, a: number, dest?: Vector2): Vector2;
    /** @internal */ div(arg1: any, a: number, dest?: any): any
    {
        if (arg1 instanceof Float32Array)
        {
            for (let i = 0; i < arg1.length; ++i)
            {
                arg1[i] /= a;
            }
            return arg1;
        }

        if (arg1.w !== undefined)
        {
            if (!dest) dest = new Vector4();
            dest.value[0] = arg1.x / a;
            dest.value[1] = arg1.y / a;
            dest.value[2] = arg1.z / a;
            dest.value[3] = arg1.w / a;
            return dest;
        }
        if (arg1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.value[0] = arg1.x / a;
            dest.value[1] = arg1.y / a;
            dest.value[2] = arg1.z / a;
            return dest;
        }

        if (!dest) dest = new Vector2();
        dest.value[0] = arg1.x / a;
        dest.value[1] = arg1.y / a;
        return dest;
    }
    /**
     * Returns vector inversion as 1 / outV[i]
     * @param outV - result is written here
     */
    inverse(outV: Float32Array): Float32Array
    {
        for (let i = 0; i < outV.length; ++i)
        {
            outV[i] = 1. / outV[i];
        }
        return outV;
    }

    /**
     * Returns true if vectors are equal (if the magnitude of their difference is less than 1e-5)
     * @param v1 - first vector
     * @param v2 - second vector
     */
    equals(v1: Float32Array, v2: Float32Array): boolean;
    /**
     * Returns true if vectors are equal (if the magnitude of their difference is less than 1e-5)
     * @param v1 - first vector
     * @param v2 - second vector
     */
    equals(v1: INumber4, v2: INumber4): boolean;
    /**
     * Returns true if vectors are equal (if the magnitude of their difference is less than 1e-5)
     * @param v1 - first vector
     * @param v2 - second vector
     */
    equals(v1: INumber3, v2: INumber3): boolean;
    /**
     * Returns true if vectors are equal (if the magnitude of their difference is less than 1e-5)
     * @param v1 - first vector
     * @param v2 - second vector
     */
    equals(v1: INumber2, v2: INumber2): boolean;
    /** @internal */ equals(v1: any, v2: any): boolean
    {
        if (v1 instanceof Float32Array && v2 instanceof Float32Array)
        {
            return this.getEqual(v1 as any as Float32Array, v2 as any as Float32Array);
        }
        if (v1 instanceof AVectorData && v2 instanceof AVectorData)
        {
            return this.getEqual(v1.value, v2.value);
        }
        if (v1 instanceof AVectorData && v2 instanceof Float32Array)
        {
            return this.getEqual(v1.value, v2 as any as Float32Array);
        }
        if (v2 instanceof AVectorData && v1 instanceof Float32Array)
        {
            return this.getEqual(v1 as any as Float32Array, v2.value);
        }

        const av1 = v1 as any;
        const av2 = v2 as any;
        if (av1.w !== undefined)
        {
            return (
                Math.abs(av1.w - av2.w) <= epsilon &&
                Math.abs(av1.z - av2.z) <= epsilon &&
                Math.abs(av1.y - av2.y) <= epsilon &&
                Math.abs(av1.x - av2.x) <= epsilon
            );
        }
        if (av1.z !== undefined)
        {
            return (
                Math.abs(av1.z - av2.z) <= epsilon &&
                Math.abs(av1.y - av2.y) <= epsilon &&
                Math.abs(av1.x - av2.x) <= epsilon
            );
        }

        return (
            Math.abs(av1.y - av2.y) <= epsilon &&
            Math.abs(av1.x - av2.x) <= epsilon
        );
    }

    /**
     * Returns length(magnitude) of a vector
     * @param v - vector
     */
    length(v: Float32Array): number;
    /**
     * Returns length(magnitude) of a vector
     * @param v - vector
     */
    length(v: INumber2): number;
    /**
     * Returns length(magnitude) of a vector
     * @param v - vector
     */
    length(v: INumber3): number;
    /**
     * Returns length(magnitude) of a vector
     * @param v - vector
     */
    length(v: INumber4): number;
    /** @internal */ length(v: any) : number
    {
        if (v instanceof Float32Array) return this.getLength(v as any as Float32Array);
        if (v instanceof AVectorData)
        {
            return this.getLength(v.value);
        }

        const av = v as any;
        if (av.w !== undefined)
        {
            return Math.sqrt(av.x * av.x + av.y * av.y + av.z * av.z + av.w * av.w);
        }
        if (av.z !== undefined)
        {
            return Math.sqrt(av.x * av.x + av.y * av.y + av.z * av.z);
        }
        return Math.sqrt(av.x * av.x + av.y * av.y);
    };
    /**
     * Returns distance between two points
     * @param p1 - first point
     * @param p2 - second point
     */
    distance(p1: Float32Array, p2: Float32Array): number;
    /**
     * Returns distance between two points
     * @param p1 - first point
     * @param p2 - second point
     */
    distance(p1: INumber4, p2: INumber4): number;
    /**
     * Returns distance between two points
     * @param p1 - first point
     * @param p2 - second point
     */
    distance(p1: INumber3, p2: INumber3): number;
    /**
     * Returns distance between two points
     * @param p1 - first point
     * @param p2 - second point
     */
    distance(p1: INumber2, p2: INumber2): number;
    /** @internal */distance(p1: any, p2: any) : number
    {
        if (p1 instanceof Float32Array && p2 instanceof Float32Array)
        {
            return this.getDistance(p1, p2);
        }
        if (p1 instanceof AVectorData && p2 instanceof AVectorData)
        {
            return this.getDistance(p1.value, p2.value);
        }
        if (p1 instanceof Float32Array)
        {
            if (p2.w !== undefined)
            {
                let d = 0, s = 0;
                s = p1[3] - p2.w; d += s*s;
                s = p1[2] - p2.z; d += s*s;
                s = p1[1] - p2.y; d += s*s;
                s = p1[0] - p2.x; d += s*s;
                return Math.sqrt(d);
            }
            if (p2.z !== undefined)
            {
                let d = 0, s = 0;
                s = p1[2] - p2.z; d += s*s;
                s = p1[1] - p2.y; d += s*s;
                s = p1[0] - p2.x; d += s*s;
                return Math.sqrt(d);
            }
            let d = 0, s = 0;
            s = p1[1] - p2.y; d += s*s;
            s = p1[0] - p2.x; d += s*s;
            return Math.sqrt(d);
        }

        if (p2 instanceof Float32Array)
        {
            if (p1.w !== undefined)
            {
                let d = 0, s = 0;
                s = p2[3] - p1.w; d += s*s;
                s = p2[2] - p1.z; d += s*s;
                s = p2[1] - p1.y; d += s*s;
                s = p2[0] - p1.x; d += s*s;
                return Math.sqrt(d);
            }
            if (p1.z !== undefined)
            {
                let d = 0, s = 0;
                s = p2[2] - p1.z; d += s*s;
                s = p2[1] - p1.y; d += s*s;
                s = p2[0] - p1.x; d += s*s;
                return Math.sqrt(d);
            }
            let d = 0, s = 0;
            s = p2[1] - p1.y; d += s*s;
            s = p2[0] - p1.x; d += s*s;
            return Math.sqrt(d);
        }

        if (p1.w !== undefined)
        {
            let d = 0, s = 0;
            s = p2.w - p1.w; d += s*s;
            s = p2.z - p1.z; d += s*s;
            s = p2.y - p1.y; d += s*s;
            s = p2.x - p1.x; d += s*s;
            return Math.sqrt(d);
        }
        if (p1.z !== undefined)
        {
            let d = 0, s = 0;
            s = p2.z - p1.z; d += s*s;
            s = p2.y - p1.y; d += s*s;
            s = p2.x - p1.x; d += s*s;
            return Math.sqrt(d);
        }
        let d = 0, s = 0;
        s = p2.y - p1.y; d += s*s;
        s = p2.x - p1.x; d += s*s;
        return Math.sqrt(d);
    };

    /**
     * Returns dot product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     */
    dot(v1: INumber4, v2: INumber4): number;
    /**
     * Returns dot product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     */
    dot(v1: INumber3, v2: INumber3): number;
    /**
     * Returns dot product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     */
    dot(v1: INumber2, v2: INumber2): number;
    /**
     * Returns dot product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     */
    dot(v1: Float32Array, v2: Float32Array): number;
    /** @internal */dot(v1: any, v2: any): number
    {
        if (v1 instanceof Float32Array)
        {
            return this.getDot(v1, v2 as any as Float32Array);
        }
        if (v1.w !== undefined)
        {
            return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
        }
        if (v1.z !== undefined)
        {
            return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
        }
        return v1.x * v2.x + v1.y * v2.y
    }

    /**
     * Returns cross product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Result will be written here and then returned
     */
    cross(v1: INumber3, v2: INumber3, dest?: Vector3): Vector3
    /**
     * Returns cross product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Result will be written here and then returned
     */
    cross(v1: INumber2, v2: INumber2, dest?: Vector3): Vector3
    /**
     * Returns cross product of two vectors
     * @param v1 - first vector
     * @param v2 - second vector
     * @param dest - optional. Result will be written here and then returned
     */
    cross(v1: Float32Array, v2: Float32Array, dest?: Float32Array): Float32Array
    /** @internal */ cross(v1: any, v2: any, dest?: any): any
    {
        if (v1 instanceof Float32Array)
        {
            if (!dest) dest = new Float32Array(v1.length);
            if (v1.length === 3)
            {
                dest[0] = v1[1] * v2[2] - v1[2] * v2[1];
                dest[1] = v1[2] * v2[0] - v1[0] * v2[2];
                dest[2] = v1[0] * v2[1] - v1[1] * v2[0];
                return dest;
            }
            if (v1.length === 2)
            {
                dest[0] = 0;
                dest[1] = 0;
                dest[2] = v1[0] * v2[1] - v1[1] * v2[0];
                return dest;
            }
            return undefined;
        }

        if (v1.z !== undefined)
        {
            if (!dest) dest = new Vector3();
            dest.x = v1.y * v2.z - v1.z * v2.y;
            dest.y = v1.z * v2.x - v1.x * v2.z;
            dest.z = v1.x * v2.y - v1.y * v2.x;
            return dest;
        }

        if (!dest) dest = new Vector3();
        dest.x = 0;
        dest.y = 0;
        dest.z = v1.x * v2.y - v1.y * v2.x;
        return dest;
    }

    /** @internal */ private getLength(v: Float32Array): number
    {
        let s = 0;
        for (let i = 0; i < v.length; ++i)
        {
            s += v[i] * v[i];
        }
        return Math.sqrt(s);
    }
    /** @internal */ private getEqual(v1: Float32Array, v2: Float32Array): boolean
    {
        if (v1.length !== v2.length) return false;
        for (let i = 0; i < v1.length; ++i)
        {
            if (Math.abs(v1[i] - v2[i]) > epsilon) return false;
        }
        return true;
    }
    /** @internal */ private getDistance(v1: Float32Array, v2: Float32Array): number
    {
        let d = 0;
        for (let i = 0; i < v1.length; ++i)
        {
            const s = v1[i] - v2[i];
            d += s * s;
        }
        return Math.sqrt(d);
    }
    /** @internal */ private getDot(v1: Float32Array, v2: Float32Array): number
    {
        let product = 0;
        for (let i = 0; i < v1.length; ++i)
        {
            product += v1[i] * v2[i];
        }
        return product;
    }
}