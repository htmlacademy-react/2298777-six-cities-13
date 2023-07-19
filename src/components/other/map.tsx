import useMap from '../../hooks/use-map';
import { useRef, useEffect, useState } from 'react';
import { City, Location } from '../../types';
import { layerGroup , Marker } from 'leaflet';
import cn from 'classnames';
import { MapIcons } from '../../const';
import { FC } from 'react';

type MapProps = {
  city: City;
  points: Location[];
  className: string;
  isHoverActive: boolean;
  selectedPoint?: Location;
}

const Map : FC<MapProps> = ({city, points, className, isHoverActive, selectedPoint}) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const [currentCity, setCurrentCity] = useState(city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            isHoverActive && selectedPoint?.latitude === point.latitude && selectedPoint.longitude === point.longitude ?
              MapIcons.ActiveIcon :
              MapIcons.DefaultIcon
          )
          .addTo(markerLayer);
      });

      if (currentCity !== city) {
        map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
        setCurrentCity(city);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, isHoverActive, city]);

  return (
    <section className={cn(className, 'map')} ref={mapRef}></section>
  );
};

export default Map;
