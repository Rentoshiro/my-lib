import React from 'react'
import { ComponentPropsWithoutRef } from 'react'

export type RadioGroupProps = {
  variant?: 'default' | 'active' | 'hover' | 'focus' | 'disabled'
} & ComponentPropsWithoutRef<'div'>

const RadioGroup: React.FC<RadioGroupProps> = ({ variant = 'default', ...rest }) => {
  return (
    <div>
      <input type="radio" id="default" name="group" />
      <label htmlFor="default">Default</label>
    </div>
  )
}

export default RadioGroup
