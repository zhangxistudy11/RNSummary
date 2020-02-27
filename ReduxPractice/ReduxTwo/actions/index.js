import {
    CHANGE_TEXT
  }from './type'

export const changeInput = text =>({
    type : CHANGE_TEXT,
    inputValue : text
})