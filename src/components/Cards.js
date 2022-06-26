import React from "react";
import styled from 'styled-components'

export default function Cards({title, title2, consulter}) {
  return (
    <Bloc4Cards className="">
      <h4 className="text-[#2f3b6c]">{title}</h4>
      <h5 className="text-2xl text-[#2f3b6c] font-medium">{title2}</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        accusantium alias libero, voluptatum possimus obcaecati eveniet dolore
        tenetur nisi blanditiis.
      </p>
      <p className="text-[#f66663]">{consulter}</p>
    </Bloc4Cards>
  );
}

const Bloc4Cards = styled.div`
box-shadow : 0px 0px 5px grey;
height: 10.8rem;
border-radius : 1rem;

p, h4, h5 {
    padding-top: 0.5rem;
    padding-left: 0.7rem;
}

`
