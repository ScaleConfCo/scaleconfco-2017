import React from 'react'
import { Link } from "phenomic"

const Information = () => {
  return (
    <div className="pa5 mw80 center">
      <div className="flex flex-column flex-row-l">
        <div className="w-70-l w-100">
          <h2 className="eau-book white ttu f-s-t">
            <span className="eau-bold">More</span> Information
          </h2>
          <p className="white open-sans lh-copy">
            Are you new to the city and don’t know where to stay? Want to go site seeing? Still have some un answered questions?
            Check out these useful links:
          </p>
        </div>
        <div className="w-100 w-30-l bright-green eau-book f-1-75">
          <p>
            <Link to="/hotels" className="no-underline bright-green">Hotels and Hostals</Link>
          </p>
          <p>
             <Link to="/city-guide" className="no-underline bright-green">City Guide</Link>
          </p>
          <p>
            <Link to="/faq" className="no-underline bright-green">FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
