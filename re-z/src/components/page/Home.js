import React from 'react';

import Navbar from '../Navbar';
import Loader from '../Loader';
import CarruselHome from '../CarruselHome';
import GridRecipe from '../GridRecipe';
import GridRecipeInvert from '../GridRecipeInvert';
import ButtonCategory from '../ButtonCategory';
import RecipeGarden from '../RecipeGarden';


class Home extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData();
        window.scrollTo(0, 0); //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
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
                <RecipeGarden title="Recetas Recomendadas" name='Ver más'/>
                <ButtonCategory/>
                <GridRecipe />
                <GridRecipeInvert />
            </div>
        )
    }
}

export default Home; 