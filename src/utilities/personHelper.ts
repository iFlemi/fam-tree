import { exampleTree } from '../exampleTree'
import { Person } from '../Person'
import { FamilyTreeNode, CoupleNode  } from '../utilities/FamilyTreeNode'
import { isEmpty, symmetricDifference } from 'ramda'

export const matchWithOtherParent = (toCheck: Person, people: Person[]):FamilyTreeNode  => {
  const matchingParent = people?.find(p => p.id !== toCheck.id 
    && p.children?.length > 0 
    && toCheck.children?.length > 0
    && areArraysEqual(p.children, toCheck.children))
  return convertToTreeNode(toCheck, matchingParent)
}

export const convertToTreeNode = (person: Person, matchingParent: Person | undefined):FamilyTreeNode => {
  return matchingParent
    ? { childNodes:[] as FamilyTreeNode[], person, person2: matchingParent, _type: 'CoupleNode' }
    : { childNodes:[] as FamilyTreeNode[], person, _type: 'SingleNode' }
}

const areArraysEqual = <T>(toCheck: T[], other: T[]) => {
  return isEmpty(symmetricDifference(toCheck, other))
}

const getPeopleIdsFromNode = (node: FamilyTreeNode):bigint[] => {
  switch (node._type) {
  case 'SingleNode':
    return [node.person.id]
  case 'CoupleNode':
    return [node.person.id, node.person2.id]
  }
}

const getPersonById = (id:bigint, people:Person[]) => {
  return people.find(p => p.id === id) ?? {} as Person
}

const excludePeopleByIds = (ids:bigint[], people:Person[]) => {
  return people.filter(p => !ids.includes(p.id))
}

export const findParentsWithoutParents = (people:Person[]) => {
  return people.filter(p => isEmpty(p.parents) && !isEmpty(p.children))
    .map(parent => matchWithOtherParent(parent, people) as CoupleNode)
    .find(x => isEmpty(x.person.parents) && isEmpty(x.person2.parents)) ?? {} as CoupleNode
}

export const buildTree = (people:Person[] = getPeopleFromExampleTree()) => {
  const root = findParentsWithoutParents(people)
  const remaining = excludePeopleByIds([root?.person.id, root?.person2.id], people)
  
  const rootChildren = root.person.children.map(c => processChild(c, remaining))
  return {...root, childNodes: rootChildren }
}

const processChild = (personId:bigint, remaining:Person[]):FamilyTreeNode => {
  const person = getPersonById(personId, remaining)
  if (isEmpty(person?.children ?? []))
    return convertToTreeNode(person, undefined)

  const parentNode = matchWithOtherParent(person, remaining)
  const remainingWithoutParents = excludePeopleByIds(getPeopleIdsFromNode(parentNode), remaining)

  const childNodes = person.children.map(cid => processChild(cid, remainingWithoutParents))
  return {...parentNode, childNodes: childNodes}
}

export const getPeopleFromExampleTree = (): Person[] => {
  return exampleTree.map(n => new Person(BigInt(n.id), n.name, n.gender, n.parents.map(BigInt), n.children.map(BigInt)))
}

//TODO: allow passing of different exampleTree objects
export default buildTree()