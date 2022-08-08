export class Person {
  id: number
  name: string
  gender: Gender
  parents: number[]
  children: number[]

  constructor(id: number, name: string, gender: string, parents: number[], children: number[]) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.gender = Gender[gender] ?? Gender.unspecified
    this.parents = parents ?? []
    this.children = children ?? []
  }
}

export enum Gender {
    unspecified,
    male,
    female
}