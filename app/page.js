import { getDailyDemo } from "@/lib/dailyDemo";
// import VideoSplash from "./VideoSplash";

// Disable static optimization so the rotation re-evaluates on each request
// (otherwise the picked demo would be frozen at build time).
export const dynamic = "force-dynamic";

export default function Page() {
  const Demo = getDailyDemo();
  return <Demo />;
  // Re-enable intro video splash by wrapping:
  // return (
  //   <VideoSplash>
  //     <Demo />
  //   </VideoSplash>
  // );
}
