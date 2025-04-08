"use client";
import { useState } from "react";
import Section from "../Section";

interface Costs {
  bathtub: { metal: number; plastic: number; ceramic: number };
  jacuzzi: number;
  sink: number;
  showerTray: number;
  defects: { chips: number; cracks: number; rust: number; holes: number };
}

interface CalculatorDictionary {
  title: string;
  plumbingType: string;
  bath: string;
  jacuzzi: string;
  sink: string;
  showerTray: string;
  defectsTitle: string;
  defects: Record<keyof Costs["defects"], string>;
  calculateButton: string;
  total: string;
  note: string;
}

const COSTS: Costs = {
  bathtub: { metal: 450, plastic: 460, ceramic: 550 },
  jacuzzi: 1100,
  sink: 295,
  showerTray: 260,
  defects: { chips: 30, cracks: 60, rust: 20, holes: 60 },
};

const CostCalculator: React.FC<{ dictionary: CalculatorDictionary }> = ({ dictionary }) => {
  const [type, setType] = useState<keyof Omit<Costs, "defects">>("bathtub");
  const [material, setMaterial] = useState<keyof Costs["bathtub"]>("metal");
  const [defects, setDefects] = useState<(keyof Costs["defects"])[]>([]);
  const [total, setTotal] = useState<number>(0);

  const calculateTotal = () => {
    let cost = type === "bathtub" ? COSTS.bathtub[material] : COSTS[type];
    defects.forEach((defect) => {
      cost += COSTS.defects[defect];
    });
    setTotal(cost);
  };

  const capitalizeFirstLetter = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <Section py={12}>
      <div className="max-w-[1096px] px-16 py-16 mx-auto bg-white rounded-3xl">
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-10 text-center">
          {dictionary.title}
        </h2>

        <div className="flex flex-wrap gap-20 justify-center text-lg">
          <div className="w-auto min-w-[250px]">
            <p className="font-semibold mb-6">{dictionary.plumbingType}</p>
            <div className="space-y-2">
              <label className="block">
                <input
                  type="radio"
                  name="type"
                  value="bathtub"
                  checked={type === "bathtub"}
                  onChange={() => setType("bathtub")}
                />{" "}
                {dictionary.bath}
              </label>

              {type === "bathtub" && (
                <div className="ml-4 space-y-2">
                  {Object.keys(COSTS.bathtub).map((mat) => (
                    <label key={mat} className="ml-2">
                      <input
                        type="radio"
                        name="material"
                        value={mat}
                        checked={material === mat}
                        onChange={() =>
                          setMaterial(mat as keyof Costs["bathtub"])
                        }
                      />{" "}
                      {capitalizeFirstLetter(mat)}
                    </label>
                  ))}
                </div>
              )}

              {(["jacuzzi", "sink", "showerTray"] as const).map((item) => (
                <label key={item} className="block">
                  <input
                    type="radio"
                    name="type"
                    value={item}
                    checked={type === item}
                    onChange={() => setType(item)}
                  />{" "}
                  {dictionary[item]}
                </label>
              ))}
            </div>
          </div>

          <div className="w-auto min-w-[250px] ml-4">
            <p className="font-semibold mb-6">{dictionary.defectsTitle}</p>
            <div className="space-y-2">
              {Object.entries(COSTS.defects).map(([key, price]) => (
                <label key={key} className="block">
                  <input
                    type="checkbox"
                    value={key}
                    checked={defects.includes(key as keyof Costs["defects"])}
                    onChange={(e) => {
                      setDefects((prev) =>
                        e.target.checked
                          ? [...prev, key as keyof Costs["defects"]]
                          : prev.filter((d) => d !== key)
                      );
                    }}
                  />{" "}
                  {dictionary.defects[key as keyof Costs["defects"]]}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="w-3/5 bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={calculateTotal}
          >
            {dictionary.calculateButton}
          </button>
        </div>

        {total > 0 && (
          <p className="mt-4 text-lg font-semibold text-center">
            {dictionary.total.replace("{{total}}", total.toFixed(2))} <br />
            <span className="text-gray-500 text-sm">{dictionary.note}</span>
          </p>
        )}
      </div>
    </Section>
  );
};

export default CostCalculator;
