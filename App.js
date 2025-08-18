import React from 'react';
import GroceryList from './GroceryList';
import Car from './car'; // ✅ Make sure file name matches exactly
import Phone from './phone';
import SweetsList from './SweetsList';
import Electronics from './Electronics';
import CanteenMenu from './CanteenMenu';
import JuiceList from './JuiceList';
import Restaurant from './Restaurant';
import TempleList from './TempleList';
import TailorShop from './TailorShop'; // Adjust path if needed
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const groceries = ['Rice', 'Wheat', 'Sugar', 'Milk', 'Oil'];

  return (
    <div className="App">
      <h1>React Lab - Car Component</h1>
      <Car
        brand="Toyota"
        model="Fortuner"
        color="Black"
        year="2022"
      />

      <h1>React Lab - Grocery List</h1>
      <GroceryList items={groceries} />
       <h1>React Lab - Phone Component</h1>
      <Phone />
      <h1>React Lab - Sweets List</h1>
      <SweetsList />
      <h1>React Lab - Electronics Component</h1>
      <Electronics />
      <h1>React Lab - Canteen Menu</h1>
      <CanteenMenu />
      <h1>React Lab - Juice List</h1>
      <JuiceList />
       <h1>React Lab - Restaurant Menu</h1>
      <Restaurant />
      <h1>React Lab - Temple List</h1>
      <TempleList />
     {/* TailorShop Section with Bootstrap Styling */}
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Tailor Shop Services</h4>
        </div>
        <div className="card-body">
          <TailorShop />
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;