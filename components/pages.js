import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import Input from 'components/input'
import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default (props) => {
  let value = props.value;
  let update = (e, def) => {
    let option = `${e.target.id}`;
    let val = Number(e.target.value);
    props.update({
      siteType: option,
      design: (value.pages * 100) + val,
      subtotal: (value.pages * 100) + val,
      pages: value.pages
    }, "pages", def)
  }
  let pageNumber = (e, def) => {
    let val = Number(e.target.value)
    props.update({
      siteType: value.siteType,
      pages: val,
      design: value.design + (val * 100),
      subtotal: value.design + (val * 100),
    }, "pages", def)
  }
  return (
    <form className={cx(layout.f_col, layout.f_wrap, layout.justify_around, layout.align_between)}>
      <h3>Lets Start With Pages</h3>
      <Input
        id='basic'
        value={240}
        label='Fast Design with Less Consulting & Meetings'
        type='radio'
        checked={value.siteType === "basic"}
        onChange={update}
        definition='We build a templated site, with consoltations in the beginning to get the proper theme and styling. A more hands off approach.'
      />
      <Input
        id='custom'
        value={600}
        label='Custom Website with Consultative Process'
        type='radio'
        checked={value.siteType === "custom"}
        onChange={update}
        definition='We build you a custom site, with multiple consaltations to get capture exactly what you invision, where you get to be a part of the large and small scale process.'
      />

      <Input
        id='pages'
        value={value.pages}
        label='How many pages will you want custom built?'
        type='number'
        step='1'
        min='0'
        max='1000'
        onChange={pageNumber}
        className={global.page_num}
        required
        labelBefore
        definition="This is the number of pages you will want us to build for you (Home, contact, ect.). Any page you won't want to build on your own."
      />
    </form>
  )
}
