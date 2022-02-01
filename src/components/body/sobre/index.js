import React from 'react';
import "./sobre.css";

import SocialContato from "../../comp/social-contato/index";


function Sobre() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Meu nome é Raphael, <br />
          <span className='about-name'>Experiências</span><br />
          <h6>Atuei como Desenvolvedor Web e busco uma recolocação no mercado de trabalho. <br />

            Busco sempre entender a regra de negócio para assim
            desenvolver uma solução que irá atender as necessidades do cliente.<br />

          </h6>
        </div>

        <div className='about-bottom'>

          <img src={require("../../../assets/icons/top.jpg")} className="picture"/>

        </div>

   

      </div>

      <SocialContato />
    </div>
  );

}

export default Sobre;
