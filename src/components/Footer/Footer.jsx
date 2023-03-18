import React from "react";

export const Footer = () => {
  const dataYear = new Date().getFullYear();
  const companyName = "Rick & Morty, Inc"

  return (
    <div>
        <footer>
            <ul className="footer fs-6 text-center">
              <hr />
                <li><a href="#" className="text-light">Home</a></li>
                <li><a href="#" className="text-light">Features</a></li>
                <li><a href="#" className="text-light">Pricings</a></li>
                <li><a href="#" className="text-light">About</a></li>
                <div className="m-3">
                  <li className="text-light"> {dataYear} © Copyright {companyName} </li>
                </div>
             
            </ul>
        </footer>
    </div>
  )
};
