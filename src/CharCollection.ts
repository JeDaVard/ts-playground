export class CharCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length
    }

    isGreater(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('')

        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join('')
    }
}