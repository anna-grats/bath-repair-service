"use client";
import { useState } from "react";

const COSTS = {
  bathtub: { metal: 450, plastic: 460, ceramic: 550 },
  jacuzzi: 1100,
  sink: 295,
  showerTray: 260,
  defects: { chips: 30, cracks: 60, rust: 20, holes: 60 },
};

export default function CostCalculator() {
  const [type, setType] = useState<"bathtub" | "jacuzzi" | "sink" | "showerTray">("bathtub");
  const [material, setMaterial] = useState<"metal" | "plastic" | "ceramic">("metal");
  const [defects, setDefects] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let cost = type === "bathtub" ? COSTS.bathtub[material] : COSTS[type];
    defects.forEach((defect) => {
      cost += COSTS.defects[defect as keyof typeof COSTS.defects];
    });
    setTotal(cost);
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-[20px] p-6">
      <h2 className="text-xl font-bold mb-4">Calculate the approximate cost</h2>
      <p className="font-semibold mb-2">Specify the type of plumbing:</p>
      <div className="space-y-2">
        <label className="block">
          <input type="radio" name="type" value="bathtub" checked={type === "bathtub"} onChange={() => setType("bathtub")} /> Bath </label>
        {type === "bathtub" && (
          <div className="ml-4 space-y-2">
            <label><input type="radio" name="material" value="metal" checked={material === "metal"} onChange={() => setMaterial("metal")} /> Metal </label>
            <label><input type="radio" name="material" value="plastic" checked={material === "plastic"} onChange={() => setMaterial("plastic")} /> Plastic </label>
            <label><input type="radio" name="material" value="ceramic" checked={material === "ceramic"} onChange={() => setMaterial("ceramic")} /> Ceramic </label>
          </div>
        )}
        <label className="block"><input type="radio" name="type" value="jacuzzi" checked={type === "jacuzzi"} onChange={() => setType("jacuzzi")} /> Jacuzzi</label>
        <label className="block"><input type="radio" name="type" value="sink" checked={type === "sink"} onChange={() => setType("sink")} /> Sink</label>
        <label className="block"><input type="radio" name="type" value="showerTray" checked={type === "showerTray"} onChange={() => setType("showerTray")} /> Shower tray</label>
      </div>

      <p className="font-semibold mt-4">Indicate the presence of defects:</p>
      <div className="space-y-2">
        {Object.entries(COSTS.defects).map(([key, price]) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              value={key}
              checked={defects.includes(key)}
              onChange={(e) => {
                const newDefects = e.target.checked ? [...defects, key] : defects.filter((d) => d !== key);
                setDefects(newDefects);
              }}
            /> {key.charAt(0).toUpperCase() + key.slice(1)} ({price}$)
          </label>
        ))}
      </div>

      <button
        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={calculateTotal}
      >
        Calculate
      </button>

      {total > 0 && (
        <p className="mt-4 text-lg font-semibold">
          Total: {total.toFixed(2)} $ <br />
          <span className="text-gray-500 text-sm">*excluding the specialist's visit and precise assessment</span>
        </p>
      )}
    </div>
  );
}