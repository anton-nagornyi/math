export abstract class VectorData<T = Float32Array | Int32Array>
{
    abstract value: T;
}