import React from 'react'
import styled from 'styled-components'

export default function Bloc5() {
  return (
      <Bloc5Home className='bg-[#e4e8ef] text-center py-20'>
          <h2 className='font-medium pb-5'>Besoin de plus d'informations ?</h2>
          <p className='pb-5 text-lg'>Les services du ministère du Travail en région informent, conseillent et orientent les salariés et les <br />employeurs du secteur privé sur leurs questions en droit du travail</p>
          <button className='text-lg bg-blue-500 rounded'>Contacter nos services en région</button>
      </Bloc5Home>
  )
}

const Bloc5Home = styled.div`
color : #2f3b6c;

h2 {
  font-size : 2rem;
}

button {
  color : #fff;
  width : 20rem;
  height : 3rem
}
`
