import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Foooter className='bg-[#e4e8ef]'>
      <div className="flex gap-40">
        <div>
          <p>Code du travail numérique</p>
          <ul>
            <li>Le droit du travail</li>
            <li>Glossaire</li>
            <li>A propos</li>
            <li>Mentions légales</li>
            <li>Accessiblité : partiellement conforme</li>
            <li>Politique de confidentialité</li>
            <li>Statistiques d'utilisation</li>
            <li>Intégrer les outils du Code du travail numérique</li>
          </ul>
        </div>
        <div>
          <p>Aidez-nous à améliorer cet outil</p>
          <ul>
            <li>Contact</li>
            <li>Contribuer sur Gibhub</li>
            <li>Journal des modifications</li>
          </ul>
        </div>
        <div>
          <p>En collaboration avec</p>
          <ul>
            <li>La Direction Général du Travail</li>
            <li>La fabrique des Ministères sociaux</li>
            <li>beta.gouv.fr</li>
          </ul>
        </div>
      </div>
    </Foooter>
  )
}

const Foooter = styled.div`
padding-left: 22rem;
color : #2f3b6c;
padding-bottom : 3rem;
font-size : 1.1rem;

p {
  font-weight : 600;
  padding-bottom : 1rem;
  margin-top : 3rem
}

li {
  padding-bottom : 1rem
}
`
