export class Quaternion
{
    /**
     * Returns a quaternion constructed by first performing a rotation around the x-axis, then the y-axis and finally the z-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerXYZ - a float3 vector containing euler x,y,z angles in radians
     */
    eulerXYZ(quaternion: Float32Array, eulerXYZ: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerXYZ[0];
        let sy = 0.5 * eulerXYZ[1];
        let sz = 0.5 * eulerXYZ[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz - sy * sz * cx;
        q[1] = sy * cx * cz + sx * sz * cy;
        q[2] = sz * cx * cy - sx * sy * cz;
        q[3] = cx * cy * cz + sy * sz * sx;
    }
    /**
     * Returns a quaternion constructed by first performing a rotation around the x-axis, then the z-axis and finally the y-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerXZY - a float3 vector containing euler x,z,y angles in radians
     */
    eulerXZY(quaternion: Float32Array, eulerXZY: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerXZY[0];
        let sy = 0.5 * eulerXZY[1];
        let sz = 0.5 * eulerXZY[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz + sy * sz * cx;
        q[1] = sy * cx * cz + sx * sz * cy;
        q[2] = sz * cx * cy - sx * sy * cz;
        q[3] = cx * cy * cz - sy * sz * sx;
    }
    /**
     * Returns a quaternion constructed by first performing a rotation around the y-axis, then the x-axis and finally the z-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerYXZ - a float3 vector containing euler y,x,z angles in radians
     */
    eulerYXZ(quaternion: Float32Array, eulerYXZ: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerYXZ[0];
        let sy = 0.5 * eulerYXZ[1];
        let sz = 0.5 * eulerYXZ[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz - sy * sz * cx;
        q[1] = sy * cx * cz + sx * sz * cy;
        q[2] = sz * cx * cy + sx * sy * cz;
        q[3] = cx * cy * cz - sy * sz * sx;
    }
    /**
     * Returns a quaternion constructed by first performing a rotation around the y-axis, then the z-axis and finally the x-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerYZX - a float3 vector containing euler y,z,x angles in radians
     */
    eulerYZX(quaternion: Float32Array, eulerYZX: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerYZX[0];
        let sy = 0.5 * eulerYZX[1];
        let sz = 0.5 * eulerYZX[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz - sy * sz * cx;
        q[1] = sy * cx * cz - sx * sz * cy;
        q[2] = sz * cx * cy + sx * sy * cz;
        q[3] = cx * cy * cz + sy * sz * sx;
    }
    /**
     * Returns a quaternion constructed by first performing a rotation around the z-axis, then the x-axis and finally the y-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerZXY - a float3 vector containing euler z,x,y angles in radians
     */
    eulerZXY(quaternion: Float32Array, eulerZXY: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerZXY[0];
        let sy = 0.5 * eulerZXY[1];
        let sz = 0.5 * eulerZXY[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz + sy * sz * cx;
        q[1] = sy * cx * cz - sx * sz * cy;
        q[2] = sz * cx * cy - sx * sy * cz;
        q[3] = cx * cy * cz + sy * sz * sx;
    }
    /**
     * Returns a quaternion constructed by first performing a rotation around the z-axis, then the y-axis and finally the x-axis.
     * All rotation angles are in radians and clockwise when looking along the rotation axis towards the origin.
     * @param quaternion - contains construction result
     * @param eulerZYX - a float3 vector containing euler z,y,x angles in radians
     */
    eulerZYX(quaternion: Float32Array, eulerZYX: Float32Array): void
    {
        const q = quaternion;
        let sx = 0.5 * eulerZYX[0];
        let sy = 0.5 * eulerZYX[1];
        let sz = 0.5 * eulerZYX[2];

        const cx = Math.cos(sx);
        const cy = Math.cos(sy);
        const cz = Math.cos(sz);

        sx = Math.sin(sx);
        sy = Math.sin(sy);
        sz = Math.sin(sz);

        q[0] = sx * cy * cz + sy * sz * cx;
        q[1] = sy * cx * cz - sx * sz * cy;
        q[2] = sz * cx * cy + sx * sy * cz;
        q[3] = cx * cy * cz - sy * sx * sz;
    }

    /**
     * Calculates the result of transforming the quaternion b by the quaternion outQuaternion
     * @param outQuaternion - result of transformation is written here
     * @param b - quaternion
     */
    mul(outQuaternion: Float32Array, b: Float32Array): void
    {
        const a = outQuaternion;
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const aw = a[3];

        const bx = b[0];
        const by = b[1];
        const bz = b[2];
        const bw = b[3];

        a[0] = aw * bx + (ax * bw + ay * bz) - az * by;
        a[1] = aw * by + (ay * bw + az * bx) - ax * bz;
        a[2] = aw * bz + (az * bw + ax * by) - ay * bx;
        a[3] = aw * bw - (ax * bx + ay * by) - az * bz;
    }
}