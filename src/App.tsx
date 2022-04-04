import React from 'react';
import BookingForm from "./Components/BookingForm";
import {IBookingInfo} from "./Helper/interfaces/booking";
import {useFormik} from "formik";
import bookingValidator from "./Helper/validations/booking";
import {countries} from "./Helper/constants/countries";
const initialFormData: IBookingInfo = {
  checkIn: "",
  checkOut:"",
  numberOfGuests: '',
  personalDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  location: {
    billingAddress: "",
    billingCountry: "",
    postalCode: "",
    city: ""
  }
}

const handleSubmit = async (values: IBookingInfo) => {

}

const onSubmit = () => {
//
}

const App = () => {
  const formik = useFormik<IBookingInfo>({
    initialValues: initialFormData,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: bookingValidator
  });

  return (
      <BookingForm
        formik={formik}
        countries={countries().map(country => ({name: country.name, code: country.code}))}
        onSubmit={onSubmit}
      />);
}

export default App;