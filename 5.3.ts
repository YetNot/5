class MyArray<T> {
    private data: T[];
  
    constructor(...elements: T[]) {
        this.data = elements;
    }
  
    areElementsEqual(index1: number, index2: number): boolean {
        if (typeof this.data[index1] === 'object' && typeof this.data[index2] === 'object') {
        return JSON.stringify(this.data[index1]) === JSON.stringify(this.data[index2]);
        }
        else return this.data[index1] === this.data[index2];
    }
  
    private flattenArray(arr: any[], result: any[]): any[] {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) this.flattenArray(arr[i], result);
            else result.push(arr[i]);
        }
        return result;
    }
  
    flatten(): T[] {
        return this.flattenArray(this.data, []);
    }
}

const myArray = new MyArray<number | number[]>(1, [2, 3, 4, 5, 6]);

console.log(myArray.areElementsEqual(1, 2)); // false
console.log(myArray.flatten()); // [1, 2, 3, 4, 5, 6]
