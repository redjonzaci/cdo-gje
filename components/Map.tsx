import { css } from '@emotion/css';
import { useEffect, useRef, useState } from 'react';

export default function Map({ city }: { city: string | undefined }) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const geocoder = new google.maps.Geocoder();
  const [cityCoordinates, setCityCoordinates] = useState({
    // By default, coordinates of Tirana
    lat: 41.327546,
    lng: 19.818698,
  });

  useEffect(() => {
    if (city) {
      geocoder
        .geocode({
          address: city === 'Gjirokastër' ? 'Bashkia Gjirokastër' : city,
        })
        .then((value: google.maps.GeocoderResponse) => {
          const location = value.results[0].geometry.location;
          setCityCoordinates({ lat: location.lat(), lng: location.lng() });
        });
    }
  }, [city]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          zoom: 15,
          center: cityCoordinates,
          mapTypeId: 'hybrid',
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setCenter(cityCoordinates);
    }
  }, [cityCoordinates]);

  return (
    <div
      ref={ref}
      className={css({
        width: 500,
        height: 500,
      })}
    />
  );
}
