import React from 'react'
import styled from 'styled-components'
import Cards from '../components/Cards';
import CardsTwo from '../components/Cards2';
import Cards3 from '../components/Cards3';
import Bloc5Home from '../components/Bloc5';

export default function Home() {
  const items = [
    {
      src : 'img/ico3.svg',
      title : 'Temps de travail',
      id : 1
    },
    {
      src : 'img/ico4.svg',
      title : 'Congés et repos',
      id : 2
    },
    {
      src : 'img/ico5.svg',
      title : 'Emploi et formation professionnelle',
      id : 3
    }
  ]
  const items2 = [
    {
      src : 'img/ico6.svg',
      title : 'Temps de travail',
      id : 4
    },
    {
      src : 'img/ico7.svg',
      title : 'Congés et repos',
      id : 5
    },
    {
      src : 'img/ico8.svg',
      title : 'Emploi et formation professionnelle',
      id : 6
    },
    {
      src : 'img/ico9.svg',
      title : 'Emploi et formation professionnelle',
      id : 7
    }
  ]
  const items3 = [
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
  return (
    <>
      <Header className="bg-[#7994d4] flex items-center justify-end text-[#2f3b6c]">
        <div className="">
          <h2 className="text-4xl pb-2">Bienvenue sur</h2>
          <h1 className="text-5xl pb-5">le Code du travail numérique</h1>
          <p className="pb-5">
            Obtenez les réponses à vos questions sur le droit du travail.
          </p>
          <p className="font-medium">Recherchez par mots-clés</p>
          <input
            className="modifInput"
            type="text"
            placeholder="congés payés, durée de préavis"
          />
        </div>
        <div className="">
          <img src="img/bg.svg" alt="" width={600} />
        </div>
      </Header>
      <Bloc2 className="pb-56">
        <div className="text-center text-2xl text-[#2f3b6c]">
          <h3>A la une</h3>
        </div>
        <div className="cardsModif">
          <div className="flex gap-5 pb-5">
            <Cards
              title="Dossiers"
              title2="Covid-19 : fin du protocole sanitaire"
            />
            <Cards
              title="Salaire"
              title2="Salaire brut/net"
              consulter="Consulter"
            />
          </div>
          <div className="flex gap-5">
            <Cards
              title="Conditions de travail"
              title2="Chaleur et canicule au travail : les précautions à prendre"
            />
            <Cards
              title="Congés pour évènement familial"
              title2="Les congés pour evènements familiaux"
            />
          </div>
        </div>
      </Bloc2>
      <Bloc3>
        <div className='flex pb-10'>
          <div className="ligne1 modifpadding text-blue-tx">
            <h2 className='font-medium'>Thèmes</h2>
            <p className='text-lg '>
              Retrouvez tous nos contenus
              organisés par thèmes
            </p>
          </div>
          <div className="flex gap-5">
            <CardsTwo src='img/ico1.svg' title='Embauche et contrat de travail' />
            <CardsTwo src='img/ico2.svg' title='Salaire et Rémunération' />
          </div>
        </div>
        <>
        <div className='pb-5 bloc3-ligne2'>
            <img src="img/bg2.svg" alt=""/>
            <div className='flex gap-5'>
              {
                items.map((item) => (
                  <CardsTwo key={item.id} src={item.src} title={item.title} />
                ))
              }
            </div>
        </div>
        </>
        <div className='flex gap-5 pb-10'>
          {
            items2.map((item2) => (
              <CardsTwo key={item2.id} src={item2.src} title={item2.title} />
            ))
          }
        </div>
        <div className='flex justify-center pb-10'>
            <button className='text-white bg-red-400 rounded text-lg'>Voir tous les thèmes</button>
        </div>
      </Bloc3>
      <Bloc4 className='py-20 px-96 text-blue-tx'>
        <div>
          <h2 className='font-medium'>Boîte à outils</h2>
          <p className='text-lg'>Trouvez des réponses personnalisées selon votre situation</p>
        </div>
        <div className='flex gap-5 py-16'>
          {
            items3.map((item3) => (
              <Cards3 key={item3.id} src={item3.src} title={item3.title} contenu={item3.contenu} bouton={item3.bouton} />
            ))
          }
        </div>
        <div className='text-center'>
          <button className='text-lg bg-red-400 rounded text-[#fff]'>Voir tous les outils</button>
        </div>
      </Bloc4>
      <Bloc5Home />
      <Bloc6 className='px-96 py-10'>
        <h2 className='pb-8'>Sites associés</h2>
        <div className='flex gap-36'>
          <img src="img/1.webp" alt="" />
          <img src="img/4.svg" alt="" />
          <img src="img/2.svg" alt="" />
        </div>
      </Bloc6>
    </>
  );
}

const Header = styled.div`
padding-left: 28rem;
padding-right: 23rem;


.modifInput {
    width: 47rem;
    height: 3rem;
    position: absolute;
    border-radius: 0.5rem;
    border: 0.03rem solid #2f3b6c;
}
`

const Bloc2 = styled.section`
padding-left: 22rem;
padding-right: 22rem;

.cardsModif {
    margin-top : 3rem;
}
`

const Bloc3 = styled.div`
padding-left: 23rem;
padding-right: 20rem;

// background-color : grey;
border-radius : 0rem 2rem 2rem 0rem;

.bloc3-ligne2 {
  display : flex;
  gap : 4.4rem
}

.modifpadding{
  padding-right : 30rem
}

h2 {
  border-left: 0.2rem solid blue;
  font-size : 2rem;
}

img {
  width : 15rem;
}

button {
  width : 20rem;
  height : 3rem
}
`

const Bloc4 = styled.div`
h2 {
  font-size : 2rem
}


button {
  width : 20rem;
  height : 3rem
}
`


const Bloc6 = styled.div`
color : #2f3b6c;

img {
  width : 18rem;
  height : 6rem
}

h2 {
  font-size : 2rem;
}
`