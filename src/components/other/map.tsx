import useMap from '../../hooks/use-map';
import { useRef, useEffect, useState } from 'react';
import { layerGroup , Marker } from 'leaflet';
import cn from 'classnames';
import { MapIcons } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';

type MapProps = {
  className: string;
  isHoverActive: boolean;
}

const Map : FC<MapProps> = ({className, isHoverActive}) => {
  const mapRef = useRef(null);
  const city = useAppSelector((state) => state.cityDetailed);
  const map = useMap(mapRef, city!);
  const [currentCity, setCurrentCity] = useState(city);
  const selectedPoint = useAppSelector((state) => state.selectedPoint);
  const points = useAppSelector((state) => state.points);

  useEffect(() => {
    if (map && city) {
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
  }, [map, points, selectedPoint, isHoverActive, city, currentCity]);

  if (!city) {
    return null;
  }

  return (
    <section className={cn(className, 'map')}ref={mapRef}/>
  );
};

export default Map;
