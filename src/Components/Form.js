import React from 'react'
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'

export const Form = () => {

    return (
        <div className="form">
          <form autoComplete="off">
            <div className="input-and-button">
              <input type='text' placeholder="Add an Item"/>
              <div className='button'>
                <button type="submit">
                  <Icon icon={plus} size={20}/>
                </button>
              </div>
            </div>
          </form>
        </div>
    )
}
