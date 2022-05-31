import { css } from '@emotion/css';
import { Wrapper } from '@googlemaps/react-wrapper';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import Map from '../../../../components/Map';
import Marker from '../../../../components/Marker';
import cities from '../../../../constants/cities';
import currencies from '../../../../constants/currencies';
import { houseCategories, houseTypes } from '../../../../constants/houses';

export default function PostForm({ setPosts }: { setPosts: Function }) {
  const [isHouseChecked, setIsHouseChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    cityId: 0,
    houseTypeId: 0,
    houseCategoryId: 0,
    currencyId: 0,
  });
  const [click, setClick] = useState<google.maps.LatLng>();
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClick(e.latLng!);
  };

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;
    const descriptionInput = form.elements.namedItem(
      'description'
    ) as HTMLInputElement;
    const surfaceInput = form.elements.namedItem('surface') as HTMLInputElement;
    const priceInput = form.elements.namedItem('price') as HTMLInputElement;

    axios
      .post('/api/', {
        title: titleInput.value,
        description: descriptionInput.value,
        cityId: formValues.cityId,
        houseTypeId: formValues.houseTypeId,
        houseCategoryId: formValues.houseCategoryId,
        surface: parseInt(surfaceInput.value),
        price: parseInt(priceInput.value),
        currencyId: formValues.currencyId,
      })
      .then((response) => {
        console.log(response);
        axios.get('/api/').then((response) => {
          console.log(response);
          setPosts(response.data);
        });
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="title">Titulli</InputLabel>
        <Input id="title" />
      </FormControl>
      <FormControl fullWidth variant="standard">
        <TextField
          id="description"
          margin="normal"
          label="Pershkrimi"
          multiline
          rows={5}
          variant="filled"
        />
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isHouseChecked}
              onChange={() => setIsHouseChecked(!isHouseChecked)}
            />
          }
          label="Shtepi"
        />
      </FormGroup>
      {isHouseChecked && (
        <FormGroup
          className={css({
            '&': {
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            },
          })}
        >
          <div
            className={css({
              '&': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              },
            })}
          >
            <div
              className={css({
                '&': {
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  marginBottom: '1rem',
                },
              })}
            >
              <FormControl sx={{ width: '22ch' }}>
                <InputLabel htmlFor="houseType">Veprimi</InputLabel>
                <Select
                  id="houseType"
                  onChange={(event) => {
                    setFormValues({
                      ...formValues,
                      houseTypeId: parseInt(event.target.value as string),
                    });
                  }}
                  value={formValues.houseTypeId || ''}
                  variant="standard"
                >
                  {houseTypes.map((houseType) => (
                    <MenuItem key={houseType.id} value={houseType.id}>
                      {houseType.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ width: '22ch' }}>
                <InputLabel htmlFor="city">Qyteti</InputLabel>
                <Select
                  id="city"
                  onChange={(event) => {
                    setFormValues({
                      ...formValues,
                      cityId: parseInt(event.target.value as string),
                    });
                  }}
                  value={formValues.cityId || ''}
                  variant="standard"
                >
                  {cities.map((city) => (
                    <MenuItem key={city.id} value={city.id}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Wrapper
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
              language="AL"
              region="AL"
            >
              <Map
                center={center}
                city={
                  cities.find((city) => city.id === formValues.cityId)?.name
                }
                onClick={onClick}
                onIdle={onIdle}
                zoom={zoom}
              >
                {click && <Marker position={click} />}
              </Map>
            </Wrapper>
          </div>
          <div
            className={css({
              '&': {
                display: 'flex',
                justifyContent: 'space-evenly',
              },
            })}
          >
            <FormControl sx={{ width: '22ch' }}>
              <InputLabel htmlFor="houseCategory">Kategoria</InputLabel>
              <Select
                id="houseCategory"
                onChange={(event) => {
                  setFormValues({
                    ...formValues,
                    houseCategoryId: parseInt(event.target.value as string),
                  });
                }}
                value={formValues.houseCategoryId || ''}
                variant="standard"
              >
                {houseCategories.map((houseCategory) => (
                  <MenuItem key={houseCategory.id} value={houseCategory.id}>
                    {houseCategory.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="surface"
              sx={{ width: '22ch' }}
              label="Siperfaqja"
              type="number"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <span>
                    m<sup>2</sup>
                  </span>
                ),
              }}
            />
          </div>
          <div
            className={css({
              '&': {
                display: 'flex',
                justifyContent: 'space-evenly',
              },
            })}
          >
            <FormControl sx={{ width: '22ch' }}>
              <InputLabel htmlFor="currency">Valuta</InputLabel>
              <Select
                id="currency"
                onChange={(event) => {
                  setFormValues({
                    ...formValues,
                    currencyId: parseInt(event.target.value as string),
                  });
                }}
                value={formValues.currencyId || ''}
                variant="standard"
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.id} value={currency.id}>
                    {currency.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="price"
              sx={{ width: '22ch' }}
              label="Cmimi"
              type="number"
              variant="standard"
              InputProps={{
                endAdornment: formValues.currencyId
                  ? formValues.currencyId === 1
                    ? 'ALL'
                    : 'EUR'
                  : '',
              }}
            />
          </div>
        </FormGroup>
      )}
      <div
        className={css({
          '&': {
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'flex-end',
          },
        })}
      >
        <Button type="submit" variant="contained">
          Posto
        </Button>
      </div>
    </form>
  );
}
