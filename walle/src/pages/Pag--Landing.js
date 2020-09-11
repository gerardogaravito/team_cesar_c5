//------------------------------ import libraries
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//------------------------------ import components
import MainHero from "../components/Com--Main-hero";
import CategoryCarrousel from "../components/Com--Category-carrousel";
import RecipeDashboard from "../components/Com--Recipes-dashboard";
import DashboardCard from "../cards/Card--Dashboard";
import InstructionsSection from "../cards/Card--InstructionsSection";
import RecommendationCarrousel from "../components/Com--Recomendations-carrousel";
import Footer from "../components/Com--Footer";
import LoginModal from "../components/Com--LoginModal";

import { getRecipes } from "../actions/recipeActions";

//------------------------------ import styles and images
import "../assets/components-style/Layout.scss";
// import foodPicture from "../assets/images/cardexample.jpeg";

//------------------------------------ COMPONENT ------------------------------------//
const LandingPage = (props) => {
  const userState = useSelector((state) => state.userReducer);
  const recipeState = useSelector((state) => state.recipeReducer.recipes);
  const dispatch = useDispatch();
  // let sliced = [];

  // this are the functions to open and close the modal
  const modalReference = useRef();
  const openLoginModal = () => {
    modalReference.current.openLoginModal();
  };
  const openSignModal = () => {
    modalReference.current.openSignModal();
  };

  useEffect(() => {
    if (Object.keys(userState.user).length > 0) {
      props.history.push("/walle");
    }
    const getData = async () => {
      await dispatch(getRecipes());
    };
    getData();
  }, []);

  console.log(recipeState);

  // const sliced = recipeState.map((recipe) => console.log(recipe));

  return (
    <>
      <div className="Layout">
        <MainHero
          title="Walle"
          description="En Walle puedes encontrar recetas para todos los gustos. Puedes comprar los ingredientes para cocinar. Nos encanta cocinar."
          handleLoginClick={openLoginModal}
          handleSignClick={openSignModal}
        />
        <div className="Layout__body">
          <CategoryCarrousel />
          <RecipeDashboard>
            {/* {recipeState.map((recipe) => {
              return (
                <DashboardCard
                  name={recipe.name}
                  image={recipe.picture}
                  id={recipe.id}
                />
              );
            })} */}
          </RecipeDashboard>
          <InstructionsSection />
          <RecommendationCarrousel />
        </div>
        <Footer />
      </div>
      <LoginModal ref={modalReference} />
    </>
  );
};

export default LandingPage;
