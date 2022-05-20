import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import sq from 'date-fns/locale/sq';

export default function DatePicker() {
  return <DayPicker locale={sq} />;
}
