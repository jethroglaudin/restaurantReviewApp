import React from 'react';
import AddRestaurant from '../components/AddRestaurant.jsx';
import Header from '../components/Header.jsx';
import { RestaurantList } from '../components/RestaurantList.jsx';
import PrivateRoute from "../components/PrivateRoute";

const Home = () => {
    return (
        <div>
           <Header />
           <AddRestaurant />
           <RestaurantList />
        </div>
    )
}

export default Home;

