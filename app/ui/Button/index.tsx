import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { ArrowDownRight } from '@/app/ui/Icons/Arrow/Down/Right'

export type Props = {
  label?: string
  icon?: boolean | null
  appearance?: 'default' | 'primary' | 'secondary' | 'outline'
  type?: 'link' | 'button'
  onClick?: string | null | undefined
  href?: string | null
  newTab?: boolean | null
  className?: string | null
}

export const Button: React.FC<Props> = ({
  type = 'link',
  label,
  icon,
  newTab,
  href,
  onClick,
  appearance = 'default',
  className: classNameFromProps,
}) => {
  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  const className = [classNameFromProps, classes[`appearance--${appearance}`], classes.button]
    .filter(Boolean)
    .join(' ')

  const content = (
    <div className={classes.content}>
      {icon ? <ArrowDownRight /> : ''}

      <span className={classes.label}>{label}</span>
    </div>
  )

  if (type === 'link') {
    return (
      <Link {...newTabProps} href={href || ''} className={className}>
        {content}
      </Link>
    )
  } else {
    return (
      //@ts-ignore
      <button onClick={onClick} className={className} {...newTabProps}>
        {content}
      </button>
    )
  }
}
