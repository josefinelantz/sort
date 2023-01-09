import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  /**
   * Getter function
   */
  get length(): number {
    return this.data.length;
  }

  /**
   * 
   * @param leftIndex 
   * @param rightIndex 
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}