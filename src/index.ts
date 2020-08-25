import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharCollection } from './CharCollection'
import { LinkedList } from './LinkedList'

const arrInt = [10, 3, -5, 0]
// const arrStr = 'Xxbadc'
//
// const numbersCollection = new NumbersCollection(arrInt)
// const charCollection = new CharCollection(arrStr)
//
// const sorter = new Sorter(numbersCollection)
// const charSorter = new Sorter(charCollection)
//
// const linkedList = new LinkedList()
//
// linkedList.add(100)
// linkedList.add(-200)
// linkedList.add(-9000)
// linkedList.add(30)
// linkedList.add(4000)
//
// const linkedSorter = new Sorter(linkedList)
// linkedSorter.sort()
//
// linkedList.print()
//
// sorter.sort()
// charSorter.sort()
// console.log(sorter.collection)
// console.log(charSorter.collection)

const numberCollection = new NumbersCollection(arrInt)

numberCollection.sort()
console.log(numberCollection)
