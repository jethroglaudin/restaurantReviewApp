import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import {
  RestaurantContextProvider,
  RestaurantsContext,
} from "../context/RestaurantsContext";
import AuthContext from "../context/auth/authContext";
import AddReview from "./AddReview";
import Reviews from "./Reviews";
import StarRating from "./StarRating";

const RestaurantDetail = () => {
  const { id } = useParams();
  const authContext = useContext(AuthContext);
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  useEffect(() => {
    authContext.loadUser();
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);
        // udate our global state

        setSelectedRestaurant(response.data.data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        // fragments
        <>
          <h1 className={"text-center display-1"}>
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning m1-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : `(0)`}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
