//! this is the page whew I am loading the pricing project's index.js using module federation

import Loader from "@/components/shared/Loader/Loader";
import { useState, useEffect, lazy, Suspense } from "react";

let RemoteTitle = () => null;

const Pricing = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (process.browser) {
    RemoteTitle = lazy(() => import("pricing/pricing-page"));
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {/* Pricing project's thing here */}
        <RemoteTitle />
      </Suspense>
    </div>
  );
};

export default Pricing;
