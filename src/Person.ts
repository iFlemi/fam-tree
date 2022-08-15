export class Person {
  id: bigint
  name: string
  gender: Gender
  parents: bigint[]
  children: bigint[]

  constructor(id: bigint, name: string, gender: string, parents: bigint[], children: bigint[]) {
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

