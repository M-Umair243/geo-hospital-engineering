import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-full px-10 mt-6 border border-t pt-4">
      <div>
        <h2 className="font-bold">Address</h2>
        <h4 className="font-semibold">Head Office / Factory:</h4>
        <h5 className="font-normal text-md">Geo Hospital Engineering</h5>
        <p className="text-muted-foreground text-sm mt-2">
          243 RB Roshanwali Jhal Faisalabad Pakistan
        </p>
        <p className="text-muted-foreground text-sm">
          <span>Phone:</span>041-2344567
        </p>
        <p className="text-muted-foreground text-sm">
          <span>Email:</span>geohospitalengineering.com
        </p>
      </div>
      <div>
        <h2 className="font-bold">Links</h2>
        <ul className="flex flex-col gap-2 text-muted-foreground">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Categories</h2>
        <ul className="flex flex-col gap-2 text-muted-foreground">
          <li>Hospital Beds</li>
          <li>General Ward Furniture</li>
          <li>Patient Transportation</li>
          <li>General Purpose Trolleys</li>
          <li>Operation Theater Furniture</li>
          <li>Clinical Furniture</li>
          <li>Storage cabinets</li>
          <li>Obstetric Furniture</li>
          <li>Paediatric Furniture</li>
          <li>Emergency Crash Trolleys</li>
          <li>Electro Medical Equipment</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
