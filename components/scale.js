import cx from 'classnames'
import Input from './input'

import layout from 'styles/layout.module.scss'

export default (props) => {
  const {
    id,
    options,
    onChange
  } = props
  
  const changed = (e, i) => {
    onChange(e.target.value, id, options.indexOf(i))
  }

  return (
    <div className={cx(layout.f_col, layout.f_wrap, layout.justify_center, layout.align_around)}>
      {
        options.map((i) => {

          return (
            <Input
              id={i.name}
              type='radio'
              value={i.value}
              onChange={(e)=> changed(e, i)}
              label={i.definition}
              checked={i.checked}
            />
          )

        })
      }

    </div>
  )
}
