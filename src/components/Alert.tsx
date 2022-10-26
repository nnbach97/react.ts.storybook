import React, { FC } from "react";
export interface Props {
  title: string,
  message: string,
  category?: 'success' | 'warning' | 'danger' | 'info'
}

interface IButton {
  name: string,
  color: string
}

const listButton: Array<IButton> = [
  {
    name: 'success',
    color: 'green',
  },
  {
    name: 'warning',
    color: 'amber',
  },
  {
    name: 'danger',
    color: 'red',
  },
  {
    name: 'info',
    color: 'sky',
  },
]

export const Alert: FC<Props> = ({title, message, category = "info"}) => {
  const styling: any = listButton.find((item) => {
    return item.name === category
  })
  return (
    <div role="alert" className={`rounded border-l-4  p-4 border-500 bg-${styling.color}-50 `}>
      <strong className={`block font-medium text-${styling.color}-700`}>{title}</strong>

      <p className={`mt-2 text-sm text-${styling.color}-700`}>
        {message}
      </p>
    </div>
  )
}
