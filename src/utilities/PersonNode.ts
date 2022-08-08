import { Node } from 'react-flow-renderer'

class PersonNode extends Node {
  public depth:number

  constructor (depth:number) {
    super()
    this.depth = depth
  }
} 