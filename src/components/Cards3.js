import React from 'react'
import styled from 'styled-components'

export default function Cards3({src, title, contenu, bouton}) {
  return (
    <CardsBloc4 className='flex flex-col items-center justify-center gap-5'>
        <img src={src} alt=""/>
        <h4>{title}</h4>
        <p className='text-lg'>{contenu}</p>
        <p className="text-[#f66663] text-lg">{bouton}</p>
    </CardsBloc4>
  )
}

const CardsBloc4 = styled.div`
box-shadow : 0px 0px 5px grey;
border-radius : 0.4rem;
text-align: center;
width : 18rem;
height : 22rem;

img {
    width : 3.5rem
}

h4 {
    font-size : 1.3rem;
    font-weight : 500;
    color : #2f3b6c
}
`


