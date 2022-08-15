import React, {FC} from 'react'
import { Person, Gender } from '../Person'


interface PersonProps {
    person: Person
}

const PersonComponent: FC<PersonProps> = (props) => {
  return (
    <div className={`person ${Gender[props.person.gender]}`}>
      <span>{props.person.name}</span>
    </div>
  )
}

export default PersonComponent