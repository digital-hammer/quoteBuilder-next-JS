import cx from 'classnames'
import Header from 'sections/header'
import QuoteMachine from 'sections/quote-machine'

import layout from 'styles/layout.module.scss'

export default () => {
  return (
    <div className={cx(layout.h100_vh, layout.w100_vw, layout.f_row, layout.justify_center, layout.align_center)}>
      <Header />
      <QuoteMachine />
    </div>
  )
}
