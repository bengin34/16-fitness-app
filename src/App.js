import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//test
/**
* @description This function returns a JSX component that renders a Box component
* with a Navbar and Routes components inside it. The Box component has a width of
* 400px and an x-axis position of "auto".
* 
* @returns { string } The output returned by this function is a JSX element representing
* a box with a width of 400px and a navigation bar. Within the box are two routes:
* the root route ("/") rendering an <Home /> component and the exercise detail route
* ("/exercise/:id") rendering an <ExerciseDetail /> component.
*/
const App = () => {
  return (
    <Box width="400px" sx={{ width: {xl:'1488px'}}} x="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
