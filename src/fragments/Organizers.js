import React from 'react';

export const Organizers = () => {
  return (
    <div className="mw80 center tc">
      <h2 className="eau-book white ttu f-26 mb4 dib-l tl-l w-25-l">
        <span className="blue1 w3 h3 dib fl mr3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        </span>
        <span className="eau-bold">Organized</span> with love by
      </h2>
      <div className="mt3-l flex items-center justify-center flex-column flex-row-l">
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/juan.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Juan David Castillo
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/cathe.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Catherine Lopez
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/pony.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Valeria Garcia
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/montofriend.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Fernando Montoya
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/nicolas.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Nicolás Hock
          </p>
        </div>
      </div>
    </div>
  );
}

export default Organizers;
