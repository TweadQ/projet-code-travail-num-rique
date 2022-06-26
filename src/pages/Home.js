import React from 'react'
import styled from 'styled-components'
import Cards from '../components/Cards';

export default function Home() {
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
      <Bloc2 className="">
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
        <div>
          <div className="ligne1">
            <h2>Thèmes</h2>
            <p>
              Retrouvez tous nos contenus <br />
              organisés par thèmes
            </p>
          </div>
          <div className="">

          </div>
        </div>
        <div>
            <img src="img/bg2.svg" alt=""/>
            {/* boucle à faire */}
        </div>
        <div>
            {/* boucle à faire */}
        </div>
        <div>
            <button className=''>Voir tous les thèmes</button>
        </div>
      </Bloc3>
    </>
  );
}

const Header = styled.div`
padding-left: 28rem;
padding-right: 22rem;


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
padding-right: 23rem;
background-color : grey;
width :85rem;
border-radius : 0rem 2rem 2rem 0rem;


h2 {
  border-left: 0.2rem solid blue;
  font-size : 2rem;
  margin-top : 14rem
}

img {
  width : 15rem;
}
`