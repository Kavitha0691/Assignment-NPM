import express from "express";
import { gym, allFeatures, booking } from "../data/gympage.js"; 

const gymRouter = express.Router();
const specificGymFeatures = ["cardio", "weight lift", "yoga"];

gymRouter.get("/", (req, res) => {
  // Filter gym features (Cardio, Weight Lift, Yoga)
  const filteredGymFeatures = gym.filter(feature => 
    specificGymFeatures.includes(feature.name.toLowerCase())
  );

  // Render the page with only the filtered gym features
  res.render("pages/gympart", {
    headTitle: "Our Gym",
    title: "Flex Fitness Gym",
    description: "Explore Our Flex Fitness Gym Facilities and Training Programs. Step into a fitness environment designed for success and supported by the latest equipment, expert trainers, and a range of specialized programs to help you reach your fitness goals. Our gym is equipped with cutting-edge technology, offering everything from high-tech cardio machines to free weights, strength training equipment, and functional fitness areas. Whether you're looking to build strength, improve endurance, or boost flexibility, our facilities cater to all types of fitness enthusiasts. In addition to our top-notch gym space, we provide a variety of training programs that are tailored to meet the diverse needs of our members. From high-intensity cardio and strength training to yoga, Pilates, and group fitness classes, there's something for everyone. Our certified trainers are dedicated to helping you get the most out of every session, offering personalized guidance and motivation to help you achieve your fitness milestones..",
    features: filteredGymFeatures, 
    featureData: null,  
    facilities: [],  
    bookingOptions: [],  
    allFeatures: allFeatures, 
    sidebarLinks: filteredGymFeatures, 
  });
});

gymRouter.get("/:slug", (req, res) => {
  // Find the specific gym feature based on the slug
  const featureData = gym.find((g) => g.slug === req.params.slug);

  if (!featureData || !specificGymFeatures.includes(featureData.name.toLowerCase())) {
    return res.status(404).send("Feature not found");
  }

  // Render the page with the selected gym feature
  res.render("pages/gympart", {
    headTitle: featureData.name,
    title: featureData.name,
    featureData: featureData,  
    features: specificGymFeatures.map(name => gym.find(f => f.name.toLowerCase() === name)), 
    facilities: [], 
    bookingOptions: [],  
    allFeatures: allFeatures, 
    sidebarLinks: specificGymFeatures.map(name => gym.find(f => f.name.toLowerCase() === name)), 
  });
});

export default gymRouter;