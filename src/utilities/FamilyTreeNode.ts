import { Person } from '../Person'

export type FamilyTreeNode = SingleNode | CoupleNode  

export type SingleNode = {
  person: Person
  childNodes: FamilyTreeNode[]
  readonly _type: 'SingleNode'
}

export type CoupleNode = {
  person: Person
  person2: Person
  childNodes: FamilyTreeNode[]
  readonly _type: 'CoupleNode'
}

export const isSingleNode = (node: FamilyTreeNode): node is SingleNode => 
  node._type === 'SingleNode'

export const isCoupleNode = (node: FamilyTreeNode): node is CoupleNode => 
  node._type === 'CoupleNode'