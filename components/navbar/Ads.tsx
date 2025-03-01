"use client";

import { useState } from "react";

function Ads() {
  const [isAds, setIsAds] = useState(true);
  return (
    <div>
      {isAds && (
        <div className="h-12 bg-gray-900 text-white flex items-center justify-center">
          <span className="h-12 inline-block flex items-center justify-center">
            Buy Anything can go here
          </span>
          <button onClick={() => setIsAds(false)} className="ml-4 text-white">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Ads;
