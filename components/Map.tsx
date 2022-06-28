import { css } from '@emotion/css';
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface MapProps extends google.maps.MapOptions {
  city: string | undefined;
  center: google.maps.LatLngLiteral;
  children: ReactNode;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const Map: FC<MapProps> = ({ city, center, children, onClick, onIdle }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const geocoder = new google.maps.Geocoder();
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (city) {
      geocoder
        .geocode({
          address: city === 'Gjirokastër' ? 'Bashkia Gjirokastër' : city,
        })
        .then((value: google.maps.GeocoderResponse) => {
          const location = value.results[0].geometry.location;
          map?.setCenter({ lat: location.lat(), lng: location.lng() });
        });
    }
  }, [city]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          zoom: 15,
          // By default coordinates of Tirana
          center: { lat: 41.327546, lng: 19.818698 },
          mapTypeId: 'hybrid',
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
    }
  }, [center]);

  useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div
        ref={ref}
        className={css({
          width: 500,
          height: 500,
        })}
      />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // Set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
