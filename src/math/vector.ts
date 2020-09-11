export class Vector
{
    /**
     * Returns a sum of two vectors element wise
     * @param outV1 - sum is written here
     * @param v2 - vector to add
     */
    add(outV1: Float32Array, v2: Float32Array): Float32Array
    {
        for (let i = 0; i < outV1.length; ++i)
        {
            outV1[i] += v2[i];
        }
        return outV1;
    }
    /**
     * Returns a multiplication of two vectors element wise
     * @param outV1 - multiplication is written here
     * @param a - vector to multiply
     */
    mul(outV1: Float32Array, a: number)
    {
        for (let i = 0; i < outV1.length; ++i)
        {
            outV1[i] *= a;
        }
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
}