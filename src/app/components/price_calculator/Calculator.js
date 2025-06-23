"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPagesCount, setSelectedPagesCount] = useState(null);
  const [selectedModulesCount, setSelectedModulesCount] = useState(null);

  const siteTypePrice = () => {
    if (selectedType == "Promo Site") {
      return 1250;
    }

    if (selectedType == "Landing Page") {
      return 950;
    }
    if (selectedType == "Corporate Site" || selectedType == "Business Site") {
      return 1700;
    }

    if (selectedType == "Online Store") {
      return 2100;
    }
    return 0;
  };

  const sitePagesPrice = () => {
    if (selectedPagesCount == "1-4") {
      return 100;
    }
    if (selectedPagesCount == "4-10") {
      return 300;
    }
    if (selectedPagesCount == "10+") {
      return 500;
    }
    return 0;
  };

  const siteModulesPrice = () => {
    if (selectedModulesCount == "0") {
      return 0;
    }

    if (selectedModulesCount == "1-4") {
      return 300;
    }
    if (selectedModulesCount == "4-8") {
      return 600;
    }
    if (selectedModulesCount == "8-12") {
      return 900;
    }
    if (selectedModulesCount == "12+") {
      return 1500;
    }
    return 0;
  };

  const countSum = () => {
    return siteTypePrice() + siteModulesPrice() + sitePagesPrice();
  };

  const clearAll = () => {
    setSelectedType(null);
    setSelectedPagesCount(null);
    setSelectedModulesCount(null);
  };

  return (
    <div className="row">
      <Step1 selectedType={selectedType} setSelectedType={setSelectedType} />
      <Step2
        selectedPagesCount={selectedPagesCount}
        setSelectedPagesCount={setSelectedPagesCount}
        disabled={!selectedType}
      />
      <Step3
        selectedModulesCount={selectedModulesCount}
        setSelectedModulesCount={setSelectedModulesCount}
        disabled={!selectedPagesCount}
      />

      <div className="col-3 col-12-xsmall padding-all-inner">
        <button style={{ width: "100%" }} onClick={clearAll}>
          Сбросить
        </button>
        <div style={{ padding: "10px" }}>
          <h3>Site type: {selectedType}</h3>
          <h3>Pages Count: {selectedPagesCount}</h3>
          <h3>Modules Count: {selectedModulesCount}</h3>
          <h3>Total: {countSum()} $</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
