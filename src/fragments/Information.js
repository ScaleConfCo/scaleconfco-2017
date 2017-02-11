import React from 'react';

const Information = () => {
  return (
    <div className="pa5 mw80 center">
      <div className="flex">
        <div className="w-70-l w-50">
          <h2 className="eau-book white ttu f-s-t">
            <span className="eau-bold">More</span> Information
          </h2>
          <p className="white open-sans lh-copy">
            Are you new to the city and don’t know where to stay? Want to go site seeing? Still have some un answered questions?
            Check out these useful links:
          </p>
        </div>
        <div className="w50 w-30-l bright-green eau-book f-1-75">
          <p>
            Hotels and Hostals
          </p>
          <p>
            City Guide
          </p>
          <p>
            FAQ
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
