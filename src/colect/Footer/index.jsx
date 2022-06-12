import React from 'react'
import cls from './Footer.module.scss'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className={cls.footer_container}>
      <hr className={cls.footer_line}/>
      <div className={cls.list}>
        <ul >
          <li>
            <a href="">Лидеры</a>
          </li>  
          <li>
            <a href="">Подборки</a>
          </li>  
          <li>
            <a href="">Поддержка </a>
          </li>  
          <li>
            <a href="">О компании</a>
          </li>  
          <li>
            <a href="">Новинки</a>
          </li>  
          <li>
            <a href="">Скидки</a>
          </li>  
          <li>
            <a href="">Блог</a>
          </li>  
          <li>
            <a href="">Контакты</a>
          </li>  
          <li>
            <a href="">Предзаказы </a>
          </li>  
          <li>
            <a href="">Подарочные карты </a>
          </li> 
          <li>
            <a href="">Вакансии</a>
          </li> 
        </ul>
        <div className={cls.footer_icons}>
            <FaTelegramPlane />
            <AiFillYoutube />
            <BsDiscord />
          </div>
      </div>
      <div className={cls.footer_content}>
        <div className={cls.footer_img}>
          <img src="https://gabestore.ru/images/footericon.png" alt="" />
        </div>
        <div className={cls.footer_title}>
          <p>
            Все продаваемые ключи закупаются у официальных дистрибьюторов
          </p>
          <p>
              и издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer