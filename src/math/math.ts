import {Matrix4x4} from "./matrix";
import {Vector} from "./vector";
import {Quaternion} from "./quaternion";

/**
 * Math functions for static access
 */
export class Mathf
{
    /** @internal*/ private static buf = new ArrayBuffer(8);
    /** @internal*/ private static bufView = new DataView(Mathf.buf);

    /**
     * Access available matrix functions
     */
    static matrix4x4 = new Matrix4x4();
    /**
     * Access available quaternion functions
     */
    static quaternion = new Quaternion();
    /**
     * Access available vector functions
     */
    static vector = new Vector();

    /**
     * Use this to convert degrees to radians
     * @example const rad = deg * Mathf.deg2Rad
     */
    static deg2Rad = Math.PI / 180;
    /**
     * Use this to convert radians to degrees
     * @example const deg = rad * Mathf.rad2Deg
     */
    static rad2Deg = 180 / Math.PI;

    /**
     * Convert number to uint32
     * @param a number to convert
     * @returns uint32 number
     */
    static asUint(a: number): number
    {
        this.bufView.setFloat32(0, a);
        return this.bufView.getUint32(0);
    }
    /**
     * Convert number to int32
     * @param a number to convert
     * @returns int32 number
     */
    static asInt(a: number): number
    {
        this.bufView.setFloat32(0, a);
        return this.bufView.getInt32(0);
    }
    /**
     * Convert number to float
     * @param a number to convert
     * @returns float number
     */
    static asFloat(a: number): number
    {
        this.bufView.setInt32(0, a);
        return this.bufView.getFloat32(0);
    }
}