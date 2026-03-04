import moment from 'moment';

const dateConvertion = (date) => {
  const validate = moment(date, 'DD-MM-YYYY', true).isValid();
  console.log(`tanggal dimasukkan ${date}`);
  if (!validate) {
    throw new Error('Format tanggal salah');
    console.log(kawidjijawd);
  } else {
    const res = moment(date, 'DD/MM/YYYY');
    const convertedDate = res.format('DD/MM/YYYY');
    return `Hasil konversi adalah ${convertedDate}`;
  }
};

export default dateConvertion;
