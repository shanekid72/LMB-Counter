import { getDailyDemo } from "@/lib/dailyDemo";

// Disable static optimization so the rotation re-evaluates on each request
// (otherwise the picked demo would be frozen at build time).
export const dynamic = "force-dynamic";

export default function Page() {
  const Demo = getDailyDemo();
  return <Demo />;
}
