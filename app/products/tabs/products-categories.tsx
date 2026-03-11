"use client";

import React from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HospitalsBed from "@/app/products/tabs/hospital-beds";
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

type ProductTab = {
  name: string;
  value: string;
  description: string;
  render: () => React.ReactNode;
};

const tabs: ProductTab[] = [
  {
    name: "Hospital Beds",
    value: "hospital_beds",
    description:
      "Explore ICU beds, manual beds, semi-electric beds, and other hospital bed solutions.",
    render: () => <HospitalsBed name="Hospital Beds" />,
  },
  {
    name: "General Ward Furniture",
    value: "general_ward_furniture",
    description:
      "Functional and durable ward furniture designed for everyday healthcare environments.",
    render: () => <GeneralWardFurniture />,
  },
  {
    name: "Patient Transportation",
    value: "patient_transportation",
    description:
      "Reliable transportation equipment for safe and comfortable patient movement.",
    render: () => <PatientTransportation />,
  },
  {
    name: "General Purpose Trolleys",
    value: "general_purpose_trolleys",
    description:
      "Practical trolley solutions for organized workflow and hospital utility support.",
    render: () => <GeneralPurposeTrolleys />,
  },
  {
    name: "Operation Theater Furniture",
    value: "operation_theater_furniture",
    description:
      "Specialized furniture and support equipment for modern operation theater use.",
    render: () => <OperationTheaterFurniture />,
  },
  {
    name: "Clinical Furniture",
    value: "clinical_furniture",
    description:
      "Clinical-grade furniture designed for consultation, treatment, and examination rooms.",
    render: () => <ClinicalFurniture />,
  },
  {
    name: "Storage Cabinets",
    value: "storage_cabinets",
    description:
      "Smart and durable storage solutions for instruments, supplies, and equipment.",
    render: () => <StorageCabinets />,
  },
  {
    name: "Obstetric Furniture",
    value: "obstetric_furniture",
    description:
      "Specialized furniture designed for maternity and obstetric care environments.",
    render: () => <ObstetricFurniture />,
  },
  {
    name: "Paediatric Furniture",
    value: "paediatric_furniture",
    description:
      "Comfortable and healthcare-friendly furniture solutions for paediatric spaces.",
    render: () => <PaediatricFurniture />,
  },
  {
    name: "Emergency Crash Trolleys",
    value: "emergency_crash_trolleys",
    description:
      "Quick-access emergency trolleys designed for critical care and urgent response.",
    render: () => <EmergencyCrashTrolleys />,
  },
  {
    name: "Electro Medical Equipment",
    value: "electro_medical_equipment",
    description:
      "Essential electro-medical equipment for diagnostics, treatment, and support.",
    render: () => <ElectroMedicalEquipment />,
  },
];

const ProductsCategories = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].value);

  const currentTab = tabs.find((tab) => tab.value === activeTab) ?? tabs[0];

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]"
        >
          <aside className="self-start lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="mb-3 rounded-2xl bg-slate-900 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-300">
                      Browse
                    </p>
                    <h3 className="text-base font-semibold">
                      Product Categories
                    </h3>
                  </div>
                </div>
              </div>

              <TabsList className="flex h-auto w-full flex-row gap-2 overflow-x-auto rounded-2xl bg-transparent p-0 lg:flex-col">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="group h-auto min-w-max justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-700 shadow-none transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50 hover:text-slate-900 data-[state=active]:border-cyan-200 data-[state=active]:bg-cyan-50 data-[state=active]:text-slate-900 lg:min-w-0 lg:w-full"
                  >
                    <span className="pr-3 text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                      {tab.name}
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=active]:translate-x-0.5" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Category
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {currentTab.name}
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {currentTab.description}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="mt-0 outline-none"
                >
                  {tab.render()}
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsCategories;
