// import dynamic from "next/dynamic";
import Link from "next/link";

// const HomePage = dynamic(() => import("home/HomePage"), {
//   ssr: false,
//   loading: () => <p>Loading HomePage...</p>,
// });

export default function Pricing() {
  return (
    <div>
      <h1>Pricing App</h1>

      <Link href="http://localhost:3000">
        <button>Go to Home App</button>
      </Link>
    </div>
  );
}

// Keep button styles...
