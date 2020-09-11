export const extractMNArray = (a: Float32Array, m: number, n: number = 1, colMajorLayout = true): number[] | number[][] =>
{
    if (n === 1)
    {
        return Array.from(a);
    }
    const res = new Array<Array<number>>(m);
    for (let i = 0; i < m; ++i)
    {
        res[i] = new Array<number>(n);
    }
    let k = 0;
    if (colMajorLayout)
    {
        for ( let j = 0; j < n; ++j )
        {
            for (let i = 0; i < m; ++i)
            {
                res[i][j] = a[k++];
            }
        }
    }
    else
    {
        for (let i = 0; i < m; ++i)
        {
            for ( let j = 0; j < n; ++j )
            {
                res[i][j] = a[k++];
            }
        }
    }
    return res;
};
export function expectToBeCloseToArray(actual: Float32Array, expected: number[]): void;
export function expectToBeCloseToArray(actual: number[], expected: number[]): void;
export function expectToBeCloseToArray(actual: number[][], expected: number[][]):void;
export function expectToBeCloseToArray(actual:any, expected: Array<any>):void
{
    expect(actual.length).toBe(expected.length);

    if (actual.length > 0)
    {
        if (Array.isArray(actual[0]))
        {
            for (let i = 0; i < actual.length; ++i)
            {
                for (let j = 0; j < actual[0].length; ++j)
                {
                    try
                    {
                        expect(actual[i][j]).toBeCloseTo(expected[i][j]);
                    }
                    catch (e)
                    {
                        console.error(`i: ${i}; j: ${j}`);
                        throw e;
                    }
                }
            }
        }
        else
        {
            for (let i = 0; i < actual.length; ++i)
            {
                try
                {
                    expect(actual[i]).toBeCloseTo(expected[i]);
                }
                catch (e)
                {
                    console.error(`i: ${i}, actual: ${actual}`);
                    throw e;
                }
            }
        }
    }
}