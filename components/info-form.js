import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import Input from 'components/input'
import Button from 'components/button'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default (props) => {
  let value = props.value;
  let typing = (e) => {
    let newSet = { ...value };
    let id = e.target.id,
      inner = e.target.value;
    newSet[id] = inner;
    props.update({ ...newSet }, "infoForm");
  }

  return (
    <div>
      <h3>
        Get Your Quote
      </h3>
      <form className={cx(layout.f_row, layout.f_wrap, layout.justify_between)}>
        <Input
          id='name'
          value={value.name}
          placeholder=' Name'
          type='text'
          onChange={typing}
          className={cx(layout.block_12_mob, layout.block_5)}
        />
        <Input
          id='phone'
          value={value.phone}
          placeholder=' Phone'
          type='phone'
          onChange={typing}
          className={cx(layout.block_12_mob, layout.block_6)}
        />
        <Input
          id='email'
          value={value.email}
          placeholder=' Email'
          type='text'
          onChange={typing}
          className={cx(layout.block_12)}
        />
        <textarea placeholder="Message" id="message" onChange={typing}>{value.message}</textarea>
        <div className={cx(layout.f_row, layout.justify_end, layout.block_12)}>
          <Button type='button' simple onClick={props.submitForm}>Submit Form</Button>
        </div>
      </form>
    </div>
  )
}
