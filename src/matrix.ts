import {Mathf} from "./math";

export class Matrix4x4
{
    /** @internal */ private out = new Float32Array(16);

    /** @internal */ private _identity = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);

    /**
     * Identity matrix
     */
    get identity(): Readonly<Float32Array>
    {
        return this._identity;
    }

    /**
     * Fills matrix with it's full inverse
     * @param matrix to invert. Contains inverted result
     * @returns inverted matrix
     */
    inverse(matrix: Float32Array): Float32Array
    {
        const m0 = matrix[0], m1 = matrix[1], m2 = matrix[2], m3 = matrix[3], m4 = matrix[4], m5 = matrix[5], m6 = matrix[6];
        const m7 = matrix[7], m8 = matrix[8], m9 = matrix[9], m10 = matrix[10], m11 = matrix[11], m12 = matrix[12], m13 = matrix[13];
        const m14 = matrix[14], m15 = matrix[15];

        const t1 = m5 * m10 - m9 * m6;
        const t2 = m6 * m11 - m10 * m7;
        const t3 = m1 * m14 - m13 * m2;
        const t4 = m2 * m15 - m14 * m3;

        const t5 = m4 * m10 - m8 * m6;
        const t6 = m5 * m11 - m9 * m7;
        const t7 = m0 * m14 - m12 * m2;
        const t8 = m1 * m15 - m13 * m3;

        const t9 = m11 * m4 - m7 * m8;
        const t10 = m8 * m5 - m4 * m9;
        const t11 = m15 * m0 - m3 * m12;
        const t12 = m12 * m1 - m0 * m13;

        const mm0 = m15 * t1 - m14 * t6 + m13 * t2;
        const mm1 = m11 * t3 - m10 * t8 + m9 * t4;
        const mm2 = m7 * t3 - m6 * t8 + m5 * t4;
        const mm3 = m3 * t1 - m2 * t6 + m1 * t2;

        const d0 = m0 * mm0;
        const d1 = m4 * mm1;
        const d2 = m8 * mm2;
        const d3 = m12 * mm3;

        const dd0 = 1. / (d0 + d1 - d2 - d3);
        const dd1 = 1. / (d1 + d0 - d2 - d3);
        const dd2 = 1. / (d2 + d3 - d1 - d0);
        const dd3 = 1. / (d2 + d3 - d1 - d0);

        matrix[0] = mm0 * dd0;
        matrix[4] = mm1 * dd1;
        matrix[8] = mm2 * dd2;
        matrix[12] = mm3 * dd3;

        matrix[0] = mm0 * dd0;
        matrix[1] = mm1 * dd1;
        matrix[2] = mm2 * dd2;
        matrix[3] = mm3 * dd3;

        matrix[4] = (m14 * t9 - m12 * t2 - m15 * t5) * dd0;
        matrix[5] = (m10 * t11 - m8 * t4 - m11 * t7) * dd1;
        matrix[6] = (m6 * t11 - m4 * t4 - m7 * t7) * dd2;
        matrix[7] = (m2 * t9 - m0 * t2 - m3 * t5) * dd3;

        matrix[8] = (m12 * t6 - m13 * t9 - m15 * t10) * dd0;
        matrix[9] = (m8 * t8 - m9 * t11 - m11 * t12) * dd1;
        matrix[10] = (m4 * t8 - m5 * t11 - m7 * t12) * dd2;
        matrix[11] = (m0 * t6 - m1 * t9 - m3 * t10) * dd3;

        matrix[12] = (m13 * t5 - m12 * t1 + m14 * t10) * dd0;
        matrix[13] = (m9 * t7 - m8 * t3 + m10 * t12) * dd1;
        matrix[14] = (m5 * t7 - m4 * t3 + m6 * t12) * dd2;
        matrix[15] = (m1 * t5 - m0 * t1 + m2 * t10) * dd3;

        return matrix;
    }

    /**
     * @param v - scale vector
     * @param outMatrix - matrix to write result to
     * @returns a float4x4 scale matrix given a float3 vector containing the 3 axis scales
     */
    scaleWithVector3(v: Float32Array, outMatrix: Float32Array): Float32Array
    {
        this.set(outMatrix,
            v[0], 0.0, 0.0, 0.0,
        0.0,     v[1], 0.0, 0.0,
        0.0, 0.0,      v[2],0.0,
        0.0, 0.0, 0.0, 1.0,
        );
        return outMatrix;
    }

    /**
     * @param v - uniform scale value
     * @param outMatrix - matrix to write result to
     * @returns a float4x4 scale matrix given 3 axis scales
     */
    scaleWithNumber(v: number, outMatrix: Float32Array): Float32Array
    {
        this.set(outMatrix,
            v, 0.0, 0.0, 0.0,
            0.0,     v, 0.0, 0.0,
            0.0, 0.0,      v,0.0,
            0.0, 0.0, 0.0, 1.0,
        );
        return outMatrix;
    }

    /**
     * Calculates the float4x4 matrix result of a matrix multiplication between a float4x4 matrix and a float4x4 matrix
     * @param outMatrixA - contains the result of multiplication
     * @param matrixB - other matrix to multiply
     */
    mul(outMatrixA: Float32Array, matrixB: Float32Array): void
    {
        const a = outMatrixA;
        const b = matrixB;
        const o = this.out;

        o[0]   = a[0]   * b[0] + a[1]  * b[4] + a[2]  * b[8] + a[3]  * b[12];
        o[4]   = a[4]   * b[0] + a[5]  * b[4] + a[6]  * b[8] + a[7]  * b[12];
        o[8]   = a[8]   * b[0] + a[9]  * b[4] + a[10] * b[8] + a[11] * b[12];
        o[12]  = a[12]  * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];

        o[1]   = a[0]  * b[1] + a[1]   * b[5] + a[2]  * b[9] + a[3]  * b[13];
        o[5]   = a[4]  * b[1] + a[5]   * b[5] + a[6]  * b[9] + a[7]  * b[13];
        o[9]   = a[8]  * b[1] + a[9]   * b[5] + a[10] * b[9] + a[11] * b[13];
        o[13]  = a[12] * b[1] + a[13]  * b[5] + a[14] * b[9] + a[15] * b[13];

        o[2]   = a[0]   * b[2] + a[1]  * b[6] + a[2]  * b[10] + a[3]  * b[14];
        o[6]   = a[4]   * b[2] + a[5]  * b[6] + a[6]  * b[10] + a[7]  * b[14];
        o[10]  = a[8]   * b[2] + a[9]  * b[6] + a[10] * b[10] + a[11] * b[14];
        o[14]  = a[12]  * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];

        o[3]   = a[0]   * b[3] + a[1]  * b[7] + a[2]  * b[11] + a[3]  * b[15];
        o[7]   = a[4]   * b[3] + a[5]  * b[7] + a[6]  * b[11] + a[7]  * b[15];
        o[11]  = a[8]   * b[3] + a[9]  * b[7] + a[10] * b[11] + a[11] * b[15];
        o[15]  = a[12]  * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
        this.setWithMatrix(o, outMatrixA);
    }

    /**
     * Sets matrix with rows
     * @param matrix - matrix to set
     */
    set(matrix: Float32Array,
        m00:number,  m01:number,  m02:number,  m03:number,
        m10:number,  m11:number,  m12:number,  m13:number,
        m20:number,  m21:number,  m22:number,  m23:number,
        m30:number,  m31:number,  m32:number,  m33:number)
    {
        matrix[0] = m00; matrix[1] = m10; matrix[2] = m20; matrix[3] = m30;
        matrix[4] = m01; matrix[5] = m11; matrix[6] = m21; matrix[7] = m31;
        matrix[8] = m02; matrix[9] = m12; matrix[10] = m22; matrix[11] = m32;
        matrix[12] = m03; matrix[13] = m13; matrix[14] = m23; matrix[15] = m33;
    }

    /**
     * Set matrix with values from another matrix
     * @param matrix - matrix to copy
     * @param outMatrix - destination matrix
     */
    setWithMatrix(matrix: Readonly<Float32Array>, outMatrix: Float32Array)
    {
        for (let i = 0; i < outMatrix.length; ++i)
        {
            outMatrix[i] = matrix[i];
        }
    }

    /**
     * Returns a float4x4 translation matrix given a float3 translation vector. Result is written to outMatrix
     * @param v - float3 translation vector
     * @param outMatrix - matrix to write result to
     */
    translateWithVector3(v: Float32Array, outMatrix: Float32Array): Float32Array
    {
        this.set(outMatrix,
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            v[0], v[1], v[2], 1.0,
        );
        return outMatrix;
    }

    /**
     * Returns a float4x4 matrix constructed from a quaternion
     * @param quaternion used for matrix construction
     * @param outMatrix - matrix to write result to
     */
    setWithQuaternion(quaternion: Float32Array, outMatrix: Float32Array): Float32Array
    {
        const v2x = quaternion[0] * 2;
        const v2y = quaternion[1] * 2;
        const v2z = quaternion[2] * 2;
        const p = 0x80000000;

        for (let i = 0; i < quaternion.length; ++i)
        {
            this.out[i] = quaternion[i];
        }
        const vx = Mathf.asUint(quaternion[0]);
        const vy = Mathf.asUint(quaternion[1]);
        const vz = Mathf.asUint(quaternion[2]);
        const vw = Mathf.asUint(quaternion[3]);

        outMatrix[0] = v2y * Mathf.asFloat(vy ^ p) - v2z * Mathf.asFloat(vz ^ 0) + 1;
        outMatrix[4] = v2y * Mathf.asFloat(vx ^ 0) - v2z * Mathf.asFloat(vw ^ p);
        outMatrix[8] = v2y * Mathf.asFloat(vw ^ p) - v2z * Mathf.asFloat(vx ^ p);
        outMatrix[12] = 0;

        outMatrix[1] = v2z * Mathf.asFloat(vw ^ p) - v2x * Mathf.asFloat(vy ^ p);
        outMatrix[5] = v2z * Mathf.asFloat(vz ^ p) - v2x * Mathf.asFloat(vx ^ 0) + 1;
        outMatrix[9] = v2z * Mathf.asFloat(vy ^ 0) - v2x * Mathf.asFloat(vw ^ p);
        outMatrix[13] = 0;

        outMatrix[2] = v2x * Mathf.asFloat(vz ^ 0) - v2y * Mathf.asFloat(vw ^ p);
        outMatrix[6] = v2x * Mathf.asFloat(vw ^ p) - v2y * Mathf.asFloat(vz ^ p);
        outMatrix[10] = v2x * Mathf.asFloat(vx ^ p) - v2y * Mathf.asFloat(vy ^ 0) + 1;
        outMatrix[14] = 0;

        outMatrix[3] = 0.;
        outMatrix[7] = 0.;
        outMatrix[11] = 0.;
        outMatrix[15] = 1.;

        return outMatrix;
    }

    /**
     * Returns a float4x4 matrix constructed from a quaternion and a given float3 translation vector
     * @param quaternion used for matrix construction
     * @param translate - float3 translation vector
     * @param outMatrix - matrix to write result to
     */
    setWithQuaternionAndTranslate(quaternion: Float32Array, translate: Float32Array, outMatrix: Float32Array): Float32Array
    {
        this.setWithQuaternion(quaternion, outMatrix);

        outMatrix[3] = translate[0];
        outMatrix[7] = translate[1];
        outMatrix[11] = translate[2];
        outMatrix[15] = 1.;

        return outMatrix;
    }
}