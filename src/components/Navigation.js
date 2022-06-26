import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

export default function Navigation() {
    const items = [
        {
            name:"Home",
            slug:"/",
            id: 1,
        },
        {
            name:"Boite à outils",
            slug:"/BoiteOutil",
            id: 2,
        },
        {
            name:"Thème",
            slug:"/Theme",
            id: 3,
        },
    ]
  return (
    <Nav className="flex py-2 items-center justify-between">
      <div className="flex space-x-10">
        <img src="img/3.svg" alt="" width={135} />
        <img src="img/logo.svg" alt="" width={170} />
      </div>
      <div className=''>
        <ul className='flex gap-5 '>
          {items.map((item) => (
            <Link to={item.slug} key={item.id}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
padding-left: 22rem;
padding-right: 22rem;
`
