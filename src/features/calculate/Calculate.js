import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { twoVars, threeVars } from './calculateSlice'
import './Calculate.css'
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function Calculate(info) {
  const abrv = info.info.abrv;

  const output = useSelector(state => state.calculate[abrv])

  //Display Solution
  var solution = '';
  if(output !== undefined) {
    solution = parseFloat(output).toLocaleString()
  }

  const dispatch = useDispatch()

  var [varOne, setVarOne] = useState('')
  var [varTwo, setVarTwo] = useState('')
  var [varThree, setVarThree] = useState('')

  const onVarOneChanged = e => setVarOne(e.target.value)
  const onVarTwoChanged = e => setVarTwo(e.target.value)
  const onVarThreeChanged = e => setVarThree(e.target.value)

  const onSubmit = e => {
    console.log({e})
    e.preventDefault() 

    //Format Input
    var varOneSanitize = '';
    var varTwoSanitize = '';

    const numbers = [1,2,3,4,5,6,7,8,9,0]
    for(var i = 0; i < varOne.length; i++) {
      if(varOne[i] in numbers || varOne[i] === '-') {
        varOneSanitize = varOneSanitize + varOne[i]
      }
    }
    for(var j = 0; j < varTwo.length; j++) {
      if(parseInt(varTwo[j]) in numbers || varTwo[j] === '-') {
        varTwoSanitize = varTwoSanitize + varTwo[j]
      }
    }
    
    if(info.info.varThreeTitle) {
      if(varOne === '' || varTwo === '' || varThree === '') {
        alert('Missing Input');
        return;
      }
      //Format Three Variable Input
      var varThreeSanitize = '';
      for(var k = 0; k < varThree.length; k++) {
        if(parseInt(varThree[k]) in numbers || varThree[k] === '-') {
          varThreeSanitize = varThreeSanitize + varThree[k]
        }
      }
      dispatch(threeVars({varOne: varOneSanitize, varTwo: varTwoSanitize, varThree: varThreeSanitize, abrv: abrv}))
    }
    else {
      if(varOne === '' || varTwo === '') {
        alert('Missing Input');
        return;
      }
      console.log(varOneSanitize)
      dispatch(twoVars({varOne: varOneSanitize, varTwo: varTwoSanitize, abrv: abrv}))
    }
  }

  if(info.info.varThreeTitle) {
    return (
      <div>
        <Form onSubmit={onSubmit}>
          <h2>{info.info.title}</h2>
          <FormGroup className='display'>
            <Input className='display input' value={varOne} placeholder={info.info.varOneTitle} onChange={onVarOneChanged}></Input>
            <h1 className='display add'> + </h1>
            <Input className='display input' value={varThree} placeholder={info.info.varThreeTitle} onChange={onVarThreeChanged}></Input>
            <h1 className='display divide threeVar'> / </h1>
            <Input className='display input' value={varTwo} placeholder={info.info.varTwoTitle} onChange={onVarTwoChanged}></Input>
          </FormGroup>
          <h2>{solution}</h2>
          <Button className='button'>{info.info.button}</Button>
        </Form>
      </div>
    )
  }
  else {
    return (
      <div>
        <Form onSubmit={onSubmit}>
          <h2>{info.info.title}</h2>
          <FormGroup className='display'>
            <Input className='display input' value={varOne} placeholder={info.info.varOneTitle} onChange={onVarOneChanged}></Input>
            <h1 className='display divide'> / </h1>
            <Input className='display input' value={varTwo} placeholder={info.info.varTwoTitle} onChange={onVarTwoChanged}></Input>
          </FormGroup>
          <h2>{solution}</h2>
          <Button className='button'>{info.info.button}</Button>
        </Form>
      </div>
    )
  }
}
