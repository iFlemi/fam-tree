export class Person {
  id: number
  name: string
  gender: Gender
  parents: number[]
  children: number[]

  constructor(id: number, name: string, gender: string, parents: number[], children: number[]) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.gender = Gender[gender as genderType] ?? Gender.unspecified
    this.parents = parents ?? []
    this.children = children ?? []
  }
}

type genderType = keyof typeof Gender
export enum Gender {
    unspecified,
    male,
    female
}

