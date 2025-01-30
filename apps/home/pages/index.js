import dynamic from "next/dynamic";
import Link from "next/link";

// const PricingPage = dynamic(() => import("pricing/PricingPage"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <h1>Home App</h1>
      {/* <PricingPage /> */}
      <Link href="http://localhost:3001">
        <button>Go to Pricing App</button>
      </Link>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  background: "#0070f3",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
  marginTop: "10px",
};
