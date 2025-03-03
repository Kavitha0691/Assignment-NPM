import express from "express";
import { gym, facility, booking, allFeatures } from "../data/gympage.js"; 

const facilityRouter = express.Router();

// Specific gym facilities to display (Solarium, Cafe Area, Shop)
const specificGymFacilities = ["solarium", "cafe area", "shop"];

facilityRouter.get("/", (req, res) => {
  const filteredGymFacilities = facility.filter(facility =>
    specificGymFacilities.includes(facility.name.toLowerCase())
  );

  // Render the page with only the filtered gym facilities
  res.render("pages/gympart", {
    headTitle: "Our Gym Facilities",
    title: "Gym Facilities",
    description: "Take advantage of our modern amenities, such as our relaxing Solarium for post-workout recovery, a Cafe Area offering healthy snacks and refreshing beverages, and a well-stocked Shop with premium workout gear, supplements, and accessories. Explore, train, and thrive in an environment that prioritizes your fitness and well-being. With our exceptional facilities and expert-led programs, you'll experience a comprehensive approach to fitness that helps you stay committed, motivated, and empowered every step of the way.",
    features: [],  
    featureData: null,  
    facilities: filteredGymFacilities,  
    bookingOptions: [],  
    allFeatures: allFeatures, 
    sidebarLinks: filteredGymFacilities,  
  });
});

facilityRouter.get("/:slug", (req, res) => {
  // Find the specific facility feature based on the slug
  const featureData = facility.find(f => f.slug === req.params.slug);

  // If feature not found or it's not one of the specific gym facilities
  if (!featureData || !specificGymFacilities.includes(featureData.name.toLowerCase())) {
    return res.status(404).send("Feature not found");
  }

  // Render the page with the selected facility feature
  res.render("pages/gympart", {
    headTitle: featureData.name,
    title: featureData.name,
    featureData: featureData,  
    features: [],  
    facilities: specificGymFacilities.map(name => facility.find(f => f.name.toLowerCase() === name)),  
    bookingOptions: [],  
    allFeatures: allFeatures, 
  });
});

export default facilityRouter;