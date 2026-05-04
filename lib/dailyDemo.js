import Demo1 from "@/app/demo-1/Demo";
import Demo3 from "@/app/demo-3/Demo";
import Demo4 from "@/app/demo-4/Demo";
import Demo5 from "@/app/demo-5/Demo";
import Demo6 from "@/app/demo-6/Demo";
import Demo10 from "@/app/demo-10/Demo";

const ROTATION = [Demo1, Demo3, Demo4, Demo5, Demo6, Demo10];

// Boundary is UTC midnight (Date.now() / 86_400_000), not the visitor's local day.
export const getDailyDemo = () => {
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  return ROTATION[dayIndex % ROTATION.length];
};
