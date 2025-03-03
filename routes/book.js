import express from "express";
import { gym, facility, booking, allFeatures } from "../data/gympage.js"; 

const bookRouter = express.Router();
const specificBookingOptions = booking.map(option => option.name.toLowerCase());

bookRouter.get("/", (req, res) => {
  // Filter booking options to include only the specific ones
  const filteredBookingOptions = booking.filter(option =>
    specificBookingOptions.includes(option.name.toLowerCase())
  );

  // Render the page with only the filtered booking options
  res.render("pages/gympart", {
    headTitle: "Our Gym Booking",
    title: "Gym Booking",
    description: "At our gym, we make fitness accessible and convenient with flexible booking options designed to suit your individual needs and lifestyle. Whether you're looking for a one-time workout experience, a full year of unlimited access, or exclusive member-only perks, we have a range of booking choices that ensure you get the most out of your fitness journey.",
    features: [],  
    featureData: null, 
    facilities: [],  
    bookingOptions: filteredBookingOptions,  
    allFeatures: allFeatures, 
    sidebarLinks: filteredBookingOptions,  
  });
});

bookRouter.get("/:slug", (req, res) => {
  const requestedSlug = req.params.slug;
  const bookingData = booking.find(b => b.slug === requestedSlug);

  if (!bookingData) {
    return res.status(404).send("Booking option not found");
  }

  res.render("pages/gympart", {
    headTitle: bookingData.name,
    title: bookingData.name,
    featureData: bookingData,
    features: [],
    facilities: [],
    bookingOptions: [bookingData],
    allFeatures: allFeatures,
    sidebarLinks: booking
  });
});

export default bookRouter;