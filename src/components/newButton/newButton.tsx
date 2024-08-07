import React from 'react'
import { ComponentPropsWithoutRef } from 'react'
import styles from './newButton.module.css'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

const NewButton: React.FC<ButtonProps> = ({ variant = 'primary', fullWidth, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
    ></button>
  )
}

export default NewButton
