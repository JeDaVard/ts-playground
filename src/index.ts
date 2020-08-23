import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharCollection } from './CharCollection'

const arrInt = [10, 3, -5, 0]
const arrStr = 'Xxbadc'

const numbersCollection = new NumbersCollection(arrInt)
const charCollection = new CharCollection(arrStr)

const sorter = new Sorter(numbersCollection)
const charSorter = new Sorter(charCollection)
sorter.sort()
charSorter.sort()
console.log(sorter.collection)
console.log(charSorter.collection)
