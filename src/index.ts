import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const arrInt = [10, 3, -5, 0]

const numbersCollection = new NumbersCollection(arrInt)

const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)
