import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

export default function PostForm() {
  return (
    <>
      <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="title">Titulli</InputLabel>
        <Input id="title" />
      </FormControl>
      <FormControl fullWidth variant="standard">
        <TextField
          margin="normal"
          label="Pershkrimi"
          multiline
          rows={5}
          maxRows={10}
          variant="filled"
        />
      </FormControl>
    </>
  );
}
