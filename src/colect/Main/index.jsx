import React from 'react'
import MainCards from '../../components/MainCard'
import cls from './Main.module.scss'




const Main = () => {
  return (
    <div>
      <div className={cls.scrolbar}>
          <div className={cls.advantages_item}>
           <MainCards />
          </div>
        </div>
    </div>
  )
}

export default Main