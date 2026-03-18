import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-[420px] flex flex-col">
      <div className="bg-lime-500 text-white text-center py-4">
        <p className="font-bold uppercase tracking-wider text-sm">
          📍 Proudly Serving: Cincinnati · Hyde Park · Oakley · West Chester · Mason
        </p>
      </div>
      <iframe
        loading="lazy"
        frameBorder="0"
        title="Lopez Lawncare & Landscaping - Serving Cincinnati, OH"
        src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Cincinnati+OH&z=11&output=embed"
        className="w-full flex-1 border-0"
        aria-label="Map showing Cincinnati, OH service area"
      />
    </div>
  );
}
