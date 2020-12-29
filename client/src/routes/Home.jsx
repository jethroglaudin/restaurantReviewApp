import React, { useContext, useEffect } from 'react';
import AddRestaurant from '../components/AddRestaurant.jsx';
import Header from '../components/Header.jsx';
import { RestaurantList } from '../components/RestaurantList.jsx';
import PrivateRoute from "../components/PrivateRoute";
import AuthContext from "../context/auth/authContext";

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, []);
    return (
        <div>
           <Header />
           <AddRestaurant />
           <RestaurantList />
        </div>
    )
}

export default Home;

