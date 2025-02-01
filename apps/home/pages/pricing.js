import Loader from "@/components/shared/Loader/Loader";
import { useState, useEffect, lazy, Suspense } from "react";

let RemoteTitle = () => null;

const Pricing = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  if (process.browser) {
    RemoteTitle = lazy(() => import("pricing/pricing-page"));
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <RemoteTitle />
      </Suspense>
    </div>
  );
};

export default Pricing;
