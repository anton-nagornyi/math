# Math
This is a basic Math package. It contains routins to work with matrices, quaternions and vectors. All those entities are represented as Float32Arrays.
| Property | Description |
| ------ | ------ |
| ```Mathf.matrix4x4``` | access available matrix functions. |
| ```Mathf.quaternion``` | access available quaternion functions. |
| ```Mathf.vector``` | access available vector functions. |
| ```Mathf.deg2Rad``` | use this to convert degrees to radians. |
| ```Mathf.rad2Deg``` | use this to convert radians to degrees. |



| Method | Description |
| ------ | ------ |
| ```Mathf.asUint``` | convert number to uint32. |
| ```Mathf.asInt``` | convert number to int32. |
| ```Mathf.asFloat``` | convert number to float. |



## Matrices
Matrices are stored in the column-major order
| Method | Description |
| ------ | ------ |
| ```Mathf.matrix4x4.identity``` | gets the identity matrix .|
| ```Mathf.matrix4x4.inverse``` | calculates full matrix inversion. |
| ```Mathf.matrix4x4.scaleWithVector3``` | constructs scale matrix from a given float3 vector containing the 3 axis scales. |
| ```Mathf.matrix4x4.scaleWithNumber``` | constructs scale matrix from a given uniform scale value. |
| ```Mathf.matrix4x4.mul``` | calculates the float4x4 matrix result of a matrix multiplication between a float4x4 matrix and a float4x4 matrix. |
| ```Mathf.matrix4x4.set``` | sets matrix with rows. |
| ```Mathf.matrix4x4.setWithMatrix``` | set matrix with values from another matrix. |
| ```Mathf.matrix4x4.translateWithVector3``` | calculates a float4x4 translation matrix given a float3 translation vector. |
| ```Mathf.matrix4x4.setWithQuaternion``` | calculates a float4x4 matrix constructed from a quaternion. |
| ```Mathf.matrix4x4.setWithQuaternionAndTranslate``` | calculates a float4x4 matrix constructed from a quaternion and a given float3 translation vector. |

## Quaternions
| Method | Description |
| ------ | ------ |
| ```Mathf.quaternion.eulerXYZ``` | calculates a quaternion constructed by first performing a rotation around the **x**-axis, then the **y**-axis and finally the **z**-axis |
| ```Mathf.quaternion.eulerXZY``` | calculates a quaternion constructed by first performing a rotation around the **x**-axis, then the **z**-axis and finally the **y**-axis. |
| ```Mathf.quaternion.eulerYXZ``` | calculates a quaternion constructed by first performing a rotation around the **y**-axis, then the **x**-axis and finally the **z**-axis. |
| ```Mathf.quaternion.eulerYZX``` | calculates a quaternion constructed by first performing a rotation around the **y**-axis, then the **z**-axis and finally the **x**-axis. |
| ```Mathf.quaternion.eulerZXY``` | calculates a quaternion constructed by first performing a rotation around the **z**-axis, then the **x**-axis and finally the **y**-axis. |
| ```Mathf.quaternion.eulerZYX``` | calculates a quaternion constructed by first performing a rotation around the **z**-axis, then the **y**-axis and finally the **x**-axis. |
| ```Mathf.quaternion.mul``` | calculates the result of transforming the quaternion **b** by the quaternion **a**. |

## Vectors
| Method | Description |
| ------ | ------ |
| ```Mathf.vector.add``` | returns a sum of two vectors element wise. |
| ```Mathf.vector.mul``` | returns a multiplication of two vectors element wise. |
| ```Mathf.vector.inverse``` | returns vector inversion as ```1 / v[i]```. |