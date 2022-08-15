import React, {FC} from 'react'
import { Person, Gender } from '../Person'
import PersonComponent from './Person'


interface ParentProps {
    first: Person
    second: Person
}

const ParentsComponent: FC<ParentProps> = (props) => {
  return (
    <div>
      <PersonComponent key={props.first.id.toString()} person={props.first}/>
      <PersonComponent key={props.second.id.toString()} person={props.second}/>
    </div>
  )
}

export default ParentsComponent