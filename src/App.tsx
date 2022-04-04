import React, { useState, useEffect } from "react";
import BookingForm from "./Components/BookingForm";
import { IBookingInfo } from "./Helper/interfaces/booking";
import { useFormik } from "formik";
import bookingValidator from "./Helper/validations/booking";
import axios from "axios";
import { API, END_POINTS } from "./Helper/constants/urls";

const initialFormData: IBookingInfo = {
  date: "",
  numberOfGuests: "",
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
    city: "",
  },
};

const handleSubmit = async (values: IBookingInfo) => {
  //
};

const onSubmit = () => {
  // TODO call the handleSubmit
};

const App = () => {
  const [countries, setCountries] = useState<
    Array<{ country: string; code: string }>
  >([]);
  const formik = useFormik<IBookingInfo>({
    initialValues: initialFormData,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: bookingValidator,
  });

  useEffect(() => {
    axios.get(API + END_POINTS.GET_COUNTRIES).then((res) => {
      setCountries(res.data);
    });
  }, [countries]);
  return (
    <BookingForm
      formik={formik}
      countries={countries.map((country) => ({
        name: country.country,
        code: country.code,
      }))}
      onSubmit={onSubmit}
    />
  );
};

export default App;
