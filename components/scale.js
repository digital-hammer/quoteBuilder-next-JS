import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default () => {

  return (
    <div className={cx(layout.f_col, layout.f_wrap, layout.justify_center, layout.align_around)}>
      {
        props.options.map((i) => {
          let onChange = (e) => {
            props.onChange(e.target.value, props.id, props.options.indexOf(i))
          }
          return (
            <Input
              id={i.name}
              type='radio'
              value={i.value}
              onChange={onChange}
              label={i.definition}
              checked={i.checked}
            />
          )

        })
      }

    </div>
  )
}
