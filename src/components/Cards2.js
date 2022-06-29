import React from 'react'
import styled from 'styled-components'

export default function CardsTwo({src, title}) {
  return (
    <CardsBloc3 className='flex flex-col items-center justify-center gap-5'>
        <img src={src} alt=""/>
        <h4>{title}</h4>
    </CardsBloc3>
  )
}

const CardsBloc3 = styled.div`
box-shadow : 0px 0px 5px grey;
border-radius : 0.4rem;
text-align: center;
width : 18rem;
height : 12rem;

img {
    width : 3.51rem
}

h4 {
    font-size : 1.3rem;
    font-weight : 500;
    color : #2f3b6c
}
`



