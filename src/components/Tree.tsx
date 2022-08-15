import React from 'react'
import { exampleTree } from '../exampleTree'
import PersonComponent from './Person'
import { Person } from '../Person'
import * as R from 'ramda'

const groupByParents = (tree: Person[]) => {
  return R.groupBy((p: Person) => {
    const children = R.sort((a, b) => Number(a - b), p.children)
    return R.join('', children)
  }, tree)
}

export default function Tree() {
  const people = exampleTree.map(p => new Person(BigInt(p.id), p.name, p.gender, p.parents.map(pa => BigInt(pa)), p.children.map(c => BigInt(c))))
  const parents = groupByParents(people)
  console.log('thing', parents)
  return (
    <div className='tree'>
      {people.map(p => <PersonComponent key={p.id.toString()} person={p} />)}
    </div>
  )
}