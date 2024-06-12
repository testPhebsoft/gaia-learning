import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const LabelInput = ({label,type,id,className,placeholder}) => {
  return (
    <div clas>
    <Label className={className} >{label}</Label>
    <div className=' mb-2'>
    <Input className={className} type={type} id={id} placeholder={placeholder}/>
    </div>
    </div>
  )
}

export default LabelInput