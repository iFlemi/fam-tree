import { assert } from 'chai'
import { Gender, Person } from './Person'

const someNumber = 1
const someString = 'someString'
const someNumbers = [2, 3]
const mappableGender = 'male'
const unspecifiedGender = 'unspecified'

describe('Person tests', function () {
  it('maps valid gender on construction', function () {
    const person = new Person(someNumber, someString, mappableGender, someNumbers, someNumbers)
    assert.equal(person.gender, Gender[mappableGender])
  })
  it('maps invalid gender to unspecified on construction', function () {
    const person = new Person(someNumber, someString, mappableGender, someNumbers, someNumbers)
    assert.equal(person.gender, Gender[unspecifiedGender])
  })
})