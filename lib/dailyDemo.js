import Demo1 from "@/app/demo-1/Demo";
// import Demo3 from "@/app/demo-3/Demo";
// import Demo4 from "@/app/demo-4/Demo";
// import Demo10 from "@/app/demo-10/Demo";

// Only Demo1 is active. Re-add others to ROTATION to bring them back.
const ROTATION = [Demo1 /*, Demo3, Demo4, Demo10 */];

export const getDailyDemo = () => {
  return ROTATION[Math.floor(Math.random() * ROTATION.length)];
};
