import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ value, text }) {
  return (
    <div className="rating">
      <span>
        {
          //display star on the base of the value
          value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )
        }
      </span>
      <span>
        {
          //display star on the base of the value
          value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )
        }
      </span>
      <span>
        {
          //display star on the base of the value
          value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )
        }
      </span>
      <span>
        {
          //display star on the base of the value
          value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )
        }
      </span>
      <span>
        {
          //display star on the base of the value
          value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )
        }
      </span>
      <span className="rating-text"> {text && text} </span>
    </div>
  );
}

export default Rating;
