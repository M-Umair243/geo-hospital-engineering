// "use client";
import HospitalsBed from "@/app/products/hospital-beds";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import GeneralWardFurniture from "./general-ward-furniture";
import PatientTransportation from "./patient-transportation";
import GeneralPurposeTrolleys from "./general-purpose-trolleys";
import OperationTheaterFurniture from "./operation-theater-furniture";
import ClinicalFurniture from "./clinical-furniture";
import StorageCabinets from "./storage-cabinets";
import ObstetricFurniture from "./obstetric-furniture";
import PaediatricFurniture from "./paediatric-furniture";
import EmergencyCrashTrolleys from "./emergency-crash-trolleys";
import ElectroMedicalEquipment from "./electro-medical-equipment";
const tabs = [
  {
    name: "Hospital Beds",
    value: "hospital_beds",
    content: <HospitalsBed name={"Hospital Beds"} />,
  },
  {
    name: "General Ward Furniture",
    value: "general_ward_furniture",
    content: <GeneralWardFurniture />,
  },
  {
    name: "Patient Transportation",
    value: "patient_transportation",
    content: <PatientTransportation />,
  },
  {
    name: "General Purpose Trolleys",
    value: "general_purpose_trolleys",
    content: <GeneralPurposeTrolleys />,
  },
  {
    name: "Operation Theater Furniture",
    value: "operation_theater_furniture",
    content: <OperationTheaterFurniture />,
  },
  {
    name: "Clinical Furniture",
    value: "clinical_furniture",
    content: <ClinicalFurniture />,
  },
  {
    name: "Storage cabinets",
    value: "storage_cabinets",
    content: <StorageCabinets />,
  },
  {
    name: "Obstetric Furniture",
    value: "obstetric_furniture",
    content: <ObstetricFurniture />,
  },
  {
    name: "Paediatric Furniture",
    value: "paediatric_furniture",
    content: <PaediatricFurniture />,
  },
  {
    name: "Emergency Crash Trolleys",
    value: "emergency_crash_trolleys",
    content: <EmergencyCrashTrolleys />,
  },
  {
    name: "Electro Medical Equipment",
    value: "electro_medical_equipment",
    content: <ElectroMedicalEquipment />,
  },
];
const ProductsCategories = () => {
  return (
    <div className="w-full max-w-full">
      <Tabs defaultValue="hospital_beds" className="flex-row w-full">
        <TabsList className="bg-gray-300 min-h-screen flex-col justify-start">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary dark:data-[state=active]:text-primary dark:data-[state=active]:bg-primary/20 w-full data-[state=active]:shadow-none dark:data-[state=active]:border-transparent flex justify-start flex-initial h-[30px]"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="w-full max-w-full flex-1">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductsCategories;
