import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import {
  RestaurantContextProvider,
  RestaurantsContext,
} from "../context/RestaurantsContext";
import Reviews from "./Reviews";
import StarRating from "./StarRating";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        // udate our global state
        setSelectedRestaurant(response.data.data.restaurant);
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
          <div className="mt-3">
            <Reviews />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;
