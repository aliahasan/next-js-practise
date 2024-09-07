import MyMeals from "@/components/MyMeals";
import React from "react";

const Meal = () => {
  return (
    <div className=" flex flex-col items-center py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Choose Your Meals</h1>
        <p className="text-lg t">Find and choose meals of your choice by searching below.</p>
      </div>
      <MyMeals></MyMeals>
    </div>
  );
};

export default Meal;



