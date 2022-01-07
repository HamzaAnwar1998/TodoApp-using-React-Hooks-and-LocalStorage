// we need useState and useEffect hooks
import React,{useState,useEffect} from 'react'

// icons from react icons kit
// main Icon component
import { Icon } from 'react-icons-kit'

// icons themselves
import {plus} from 'react-icons-kit/feather/plus'
import {edit2} from 'react-icons-kit/feather/edit2'
import {trash} from 'react-icons-kit/feather/trash'

export const Form = () => {

    return (
        <>
          {/* form component */}
            <div className="form">
              <form autoComplete="off">
                <div className="input-and-button">
                  <input type='text' placeholder="Add an Item" required/>
                  <div className='button'>
                    <button type="submit">
                      <Icon icon={plus} size={20}/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          {/* end of form component */}
        </>
    )
}