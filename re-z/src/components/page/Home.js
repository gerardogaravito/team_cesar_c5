import React from 'react';

import Navbar from '../Navbar';
import FooterA from '../FooterA';
import Loader from '../Loader';
import CarruselHome from '../CarruselHome'

import Button from '../Button'
import CardVerticalScroll from '../CardVerticalScroll'
import RecipeCardHorizontalSimple from '../RecipeCardHorizontalSimple'
import RecipeCardSquare from '../RecipeCardSquare'

class Home extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({loading: true, error:null });

        try {
            const data = await [];
            this.setState({ loading: false, data: data});
        }catch (error){
            this.setState({ loading: false, error: error});
        }
    };

    render(){
        if(this.state.loading === true){
            return <Loader/>
        }
        return (
            <div className="Home-container">
                <Navbar />
                <CarruselHome /> 
            </div>
        )
    }
}

export default Home; 