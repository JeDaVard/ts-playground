import { NumbersCollection } from './NumbersCollection'
import { CharCollection } from './CharCollection'
import { LinkedList } from './LinkedList'

const arrInt = [10, 3, -5, 0]
const arrStr = 'Xxbadc'

const numberCollection = new NumbersCollection(arrInt)

numberCollection.sort()
console.log(numberCollection)

const charCollection = new CharCollection(arrStr)

charCollection.sort()
console.log(charCollection)

const linkedList = new LinkedList()

linkedList.add(100)
linkedList.add(-200)
linkedList.add(-9000)
linkedList.add(30)
linkedList.add(4000)

linkedList.sort()
linkedList.print()
