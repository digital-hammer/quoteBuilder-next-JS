import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default (props) => {
  const {
    pages = 0,
    design = 0,
    programming = 0
  } = props

  return (
    <div className={global.price_card}>
      {pages > 0 && (
        <h5>
          Basic Site Needs:
          <span className={global.float_right}>$ {pages}</span>
        </h5>
      )}
      {pages > 0 && (
        <h5>
          Dynamic Design:
          <span className={global.float_right}>$ {design}</span>
        </h5>
      )}
      {pages > 0 && (
        <h5>
          Programming:
          <span className={global.float_right}>$ {programming}</span>
        </h5>
      )}
      <hr />
      <h4 className={global.bold}>
        Subtotal:
        <span className={global.float_right}>$ {pages + design + programming}</span>
      </h4>
    </div>
  )
}
