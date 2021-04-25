import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import Input from 'components/input'
import Button from 'components/button'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default (props) => {
	let value = props.value;
	let  typing = (e) =>{
        let newSet = {...value};
        let id = e.target.id,
         inner = e.target.value;
        newSet[id] = inner;
        props.update({...newSet}, "infoForm");    
	}
	
  return (
    <div>
      <h3>
        Get Your Quote
				</h3>
      <form className="d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around">
        <div className="my-4 col-12 col-md-6">
          <Input
            id='name'
            value={value.name}
            placeholder=' Name'
            type='text'
            onChange={typing}
          />
        </div>
        <div className="my-4 col-12 col-md-6">
          <Input
            id='phone'
            value={value.phone}
            placeholder=' Phone'
            type='phone'
            onChange={typing}
          />
        </div>
        <div className="my-4 col-12">
          <Input
            id='email'
            value={value.email}
            placeholder=' Email'
            type='text'
            onChange={typing}
          />
        </div>
        <div className="my-4 col-12">
          <textarea className="pl-2" placeholder="Message" id="message" onChange={typing}>{value.message}</textarea>
        </div>
        <div className="my-4 pr-md-5 pr-3 d-flex justify-content-end col-12">
          <Button size='lg' type='button' simple onClick={props.submitForm}>Submit Form</Button>
        </div>
      </form>
    </div>
  )
}
