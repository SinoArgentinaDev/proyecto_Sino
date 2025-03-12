import React, { useState } from 'react';
import { RoadMap } from './RoadMap';
import { AllServices } from '../AllServices/AllServices';

export const RoadMapContainer = () => {
  const [showRoadMap, setShowRoadMap] = useState(false);

  return (
    <div className="flex flex-col items-center">

    <AllServices/>

      {/* Mostrar RoadMap debajo de la tarjeta */}
      {showRoadMap && (
        <div className="w-full mt-6">
          <RoadMap />
        </div>
      )}
    </div>
  );
};
