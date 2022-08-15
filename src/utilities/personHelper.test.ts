import { assert } from 'chai'
import { Person } from '../Person'
import * as sut from './personHelper'

import { exampleTree } from '../exampleTree'

const children = [4, 5].map(BigInt)
const parent1 = new Person(BigInt(1),'somePerson', 'female', [], children)
const parent2 = new Person(BigInt(2),'somePerson', 'male', [], children)
const notAParent = new Person(BigInt(3),'somePerson', 'male', [], [])
const child = new Person(BigInt(2),'somePerson', 'male', [parent1.id, parent2.id], [])

describe('personHelper', function () {
  
  describe('matchWithOtherParent', function() {
    it('returns a CoupleNode when passsed matching parents', function () {
      const people = [parent1, parent2]
      const result = sut.matchWithOtherParent(parent1, people)
      assert.isTrue(result._type === 'CoupleNode')
    })
    it('returns a SingleNode with no matching parent', function () {
      const people = [notAParent, parent1, parent2]
      const result = sut.matchWithOtherParent(notAParent, people)
      assert.isTrue(result._type === 'SingleNode')
    })
  })

  describe('findParentsWithoutParents', function() {
    it('finds node of tree where both parents do not have parents', function () {
      const people = [parent1, parent2, child]
      const result = sut.findParentsWithoutParents(people)
      assert.isTrue(result?.person.id === parent1.id && result.person2.id === parent2.id)
    })
  })

  describe('convertToTreeNode', function() {
    it('converts one person into a SingleNode', function () {
      const result = sut.convertToTreeNode(parent1, undefined)
      assert.isTrue(result._type === 'SingleNode')
    })
    it('converts two people into a CoupleNode', function () {
      const result = sut.convertToTreeNode(parent1, parent2)
      assert.isTrue(result._type === 'CoupleNode')
    })
  })

  // not a unit test - just here to run the function quickly
  // To see tree, change 'describe.skip' to 'describe.only'
  describe.skip('buildTree', function() {
    it('builds tree from example', function () {
      const tree = sut.default
      console.log(JSON.stringify(tree, (key, value) => typeof value === 'bigint' ? value.toString() : value))
    })
  })
})