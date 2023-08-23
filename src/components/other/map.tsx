import useMap from '../../hooks/use-map';
import { useRef, useEffect, useState } from 'react';
import { layerGroup , Marker } from 'leaflet';
import cn from 'classnames';
import { MapIcons } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks/use-store';
import { getCityDetailed, getPoints, getSelectedPoint } from '../../store/slices/offers-data/selectors';
import { getNearByLocations } from '../../store/slices/near-by-data/selectors';
import { getCurrentOffer } from '../../store/slices/offer-data/selectors';

type MapProps = {
  className: string;
  isHoverActive: boolean;
}

const Map : FC<MapProps> = ({className, isHoverActive}) => {
  const mapRef = useRef(null);
  const city = useAppSelector(getCityDetailed);
  const map = useMap(mapRef, city!);
  const [currentCity, setCurrentCity] = useState(city);
  const selectedPoint = useAppSelector(getSelectedPoint);
  let points = useAppSelector(getPoints);
  const nearByPoints = useAppSelector(getNearByLocations);
  const currentOffer = useAppSelector(getCurrentOffer);

  if (!isHoverActive) {
    points = nearByPoints.slice();
    if (currentOffer?.location) {
      points.push(currentOffer.location);
    }
  }

  useEffect(() => {
    if (map && city) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        if (JSON.stringify(point) === JSON.stringify(currentOffer?.location)) {
          marker.setIcon(MapIcons.ActiveIcon).addTo(markerLayer);
          return;
        }

        marker
          .setIcon(
            isHoverActive && JSON.stringify(point) === JSON.stringify(selectedPoint) ?
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
