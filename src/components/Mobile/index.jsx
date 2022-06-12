import React from 'react'
import { Link } from 'react-router-dom'
import { navList } from '../../utils/List'
// import Search from '../Search'
import './isMobile.css'


const Mobile = () => {
  return (
    <div className='row'>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
            {/* <div>
              <Search />
            </div> */}
            <div className="logo_card">
              <img className="logo_img" src="https://poisk-firm.ru/storage/employer/logo/50/84/76/f7bb8aca18f50da0b48cb17b24.jpg" alt="" />
            </div>
            
            <div className="menu-items">
              <div className='nav_item'>
                <ul>
                  {
                    navList.map(item => <li key={item.id} className='nav_list'>
                      <Link to={item.path}>
                        {item.button}
                        {item.title}
                      </Link>
                    </li>)
                  }
                </ul>
              </div>
              <li><a href="#">все игры</a></li>
              <li><a href="#">лидеры продаж</a></li>
              <li><a href="#">новинки</a></li>
              <li><a href="#">предзаказы</a></li>
              <li><a href="#">скидки</a></li>
              <li><a href="#">подборки</a></li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Mobile