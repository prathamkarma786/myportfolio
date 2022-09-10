import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/pratham-vishwakarma-91a0a41a6/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/prathamkarma786" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/pratham_vk/" target="_blank" rel="noreferrer" ><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials