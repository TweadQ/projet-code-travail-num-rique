import React from 'react'
import Cards4 from '../components/Cards4'
import Bloc5Home from '../components/Bloc5'

export default function Theme() {
  const items7 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 8
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 9
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 10
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 11
    }  
  ]
  const items8 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 12
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 13
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 14
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 15
    }  
  ]
  const items9 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 16
    },
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      src2 : 'img/ico10.svg',
      id : 17
    }
  ]
  return (
    <>
    <div className='px-80 py-28'>
      <h2 className='text-center pb-10 text-blue-tx font-medium text-3xl'>Contenus par thème</h2>
      <p className='text-center pb-10 text-blue-tx text-lg'>Découvrez l'intégralité de nos contenus organisés par grands thèmes</p>
      <div className='flex gap-5 pb-5'>
        {
          items7.map((item7) => (
            <Cards4 key={item7.id} src={item7.src} title={item7.title} contenu={item7.contenu} src2={item7.src2} />
          ))
        }
      </div>
      <div className='flex gap-5 pb-5'>
        {
          items8.map((item8) => (
            <Cards4 key={item8.id} src={item8.src} title={item8.title} contenu={item8.contenu} src2={item8.src2} />
          ))
        }
      </div>
      <div className='flex gap-5'>
        {
          items9.map((item9) => (
            <Cards4 key={item9.id} src={item9.src} title={item9.title} contenu={item9.contenu} src2={item9.src2} />
          ))
        }
      </div>
    </div>
    <Bloc5Home />
    </>
  )
}
