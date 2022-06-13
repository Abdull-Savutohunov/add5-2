import React from 'react'
import cls from './Search.module.scss'


const Search = () => {
  return (
    <div>
      <div className={cls.container}>
        <div className={cls.search_box}>
          <input type="text" />
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Search