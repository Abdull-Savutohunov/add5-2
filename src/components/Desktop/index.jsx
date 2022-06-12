import React from 'react'
import { Link } from 'react-router-dom'
import { navList } from '../../utils/List'
import cls from './isDesktop.module.scss'

const Desktop = () => {
  return (
    <div className={cls.row}>
      <div className={cls.search__container}>
        <input className={cls.search__input} type="text" placeholder="Search" />
        <div className={cls.logo_card}>
          <img className={cls.logo_img} src="https://poisk-firm.ru/storage/employer/logo/50/84/76/f7bb8aca18f50da0b48cb17b24.jpg" alt="" />
        </div>
      </div>
      <div className={cls.nav_item}>
        <ul>
            {/* <button className={cls.login_btn}>
              {
                navList.map(item => <div key={item.id} className={cls.login_btn_2}>
                  <Link to={item.path}>
                    {item.button}
                  </Link>
                </div>)
              }
            </button> */}
              {
                navList.map(item => <li key={item.id} className={cls.nav_list}>
                  <Link to={item.path}>
                    {item.title}
                  </Link>
                </li>)
              }
        </ul>
      </div>
    </div>
  )
}

export default Desktop