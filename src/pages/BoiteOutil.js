import React from 'react'
import Cards3 from '../components/Cards3'
import Bloc5Home from '../components/Bloc5';

export default function BoiteOutil() {
  const items4 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      bouton : 'Consulter',
      id : 8
    },
    {
      src : 'img/ico12.svg',
      title : 'Préavis de démission',
      contenu : 'Estimez la duréer de préavis à respecter en cas de démission',
      bouton : 'Calculer',
      id : 9
    },
    {
      src : 'img/ico13.svg',
      title : 'Salaire brut/net',
      contenu : 'Estimez le salaire : brut en net, net après impôt, calcul heures supplémentaires, coût total employeur',
      bouton : 'Estimer',
      id : 10
    },
    {
      src : 'img/ico14.svg',
      title : 'Modèles de documents',
      contenu : 'Téléchargez et utilisez des modèles de lettres et de documents personnalisables',
      bouton : 'Découvrir',
      id : 11
    }
  ]
  const items5 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      bouton : 'Consulter',
      id : 8
    },
    {
      src : 'img/ico12.svg',
      title : 'Préavis de démission',
      contenu : 'Estimez la duréer de préavis à respecter en cas de démission',
      bouton : 'Calculer',
      id : 9
    },
    {
      src : 'img/ico13.svg',
      title : 'Salaire brut/net',
      contenu : 'Estimez le salaire : brut en net, net après impôt, calcul heures supplémentaires, coût total employeur',
      bouton : 'Estimer',
      id : 10
    },
    {
      src : 'img/ico14.svg',
      title : 'Modèles de documents',
      contenu : 'Téléchargez et utilisez des modèles de lettres et de documents personnalisables',
      bouton : 'Découvrir',
      id : 11
    }
  ]
  const items6 = [
    {
      src : 'img/ico11.svg',
      title : 'Trouver sa convention collective',
      contenu : 'Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.',
      bouton : 'Consulter',
      id : 8
    },
    {
      src : 'img/ico12.svg',
      title : 'Préavis de démission',
      contenu : 'Estimez la duréer de préavis à respecter en cas de démission',
      bouton : 'Calculer',
      id : 9
    }
  ]
  return (
    <>
    <div className='px-80 py-28'>
      <h2 className='text-center pb-10 text-blue-tx font-medium text-3xl'>Retouvez tout nos outils</h2>
      <div className='flex gap-5 pb-5'>
        {
          items4.map((item4) => (
            <Cards3 key={item4.id} src={item4.src} title={item4.title} contenu={item4.contenu} bouton={item4.bouton} />
          ))
        }
      </div>
      <div className='flex gap-5 pb-5'>
        {
          items5.map((item5) => (
            <Cards3 key={item5.id} src={item5.src} title={item5.title} contenu={item5.contenu} bouton={item5.bouton} />
          ))
        }
      </div>
      <div className='flex gap-5'>
        {
          items6.map((item6) => (
            <Cards3 key={item6.id} src={item6.src} title={item6.title} contenu={item6.contenu} bouton={item6.bouton} />
          ))
        }
      </div>
    </div>
    <Bloc5Home />
    </>
  )
}
