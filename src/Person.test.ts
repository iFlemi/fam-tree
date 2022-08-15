import { assert } from 'chai'
import { Gender, Person } from './Person'

const someNumber = BigInt(1)
const someString = 'someString'
const someNumbers = [BigInt(2), BigInt(3)]
const mappableGender = 'male'

describe('Person tests', function () {
  it('maps valid gender on construction', function () {
    const person = new Person(someNumber, someString, mappableGender, someNumbers, someNumbers)
    assert.equal(person.gender, Gender[mappableGender])
  })
  it('maps invalid gender to unspecified on construction', function () {
    const person = new Person(someNumber, someString, 'banana', someNumbers, someNumbers)
    assert.equal(person.gender, Gender.unspecified)
  })
})