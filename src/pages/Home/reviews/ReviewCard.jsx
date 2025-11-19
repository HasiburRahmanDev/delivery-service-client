import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-md rounded-xl p-6 border border-gray-200">
      <div className="flex items-start gap-2 mb-4">
        <FaQuoteLeft className="text-teal-400 text-xl" />
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">{testimonial}</p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-teal-900 rounded-full">
          <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
