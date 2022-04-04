import React from 'react';
import {IBookingInfo} from "../Helper/interfaces/booking";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {FormikProps, useFormikContext} from "formik";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from "@material-ui/core/Divider";
import DateRangePicker from "./CalendarComponent/DateRangeCompnentContainer";

type IBookingProps = {
    formik: FormikProps<IBookingInfo>;
    countries: Array<{name: string; code: string}>;
    onSubmit: () => void
};

const FavouritePropertiesPage = (props: IBookingProps) => {
    const { formik, countries, onSubmit } = props;
    const { setFieldValue } = useFormikContext();


    let selectedvalues = {
        startDate: "2022-04-02",
        endDate: "2022-05-02",
        key: ""
    };

    const valueChanged = (dateobject: any) => {
        setFieldValue('checkIn', dateobject.startDate)
        setFieldValue('checkOut', dateobject.endDate)
    };

    return (
            <div className={'md:w-3/5 mx-auto mt-10 sm:w-4/5'}>
                <h2 className={'font-extrabold text-2xl mb-3'}>Booking your suite at limehouse</h2>
                <Divider />
                <div className="w-full flex flex-col space-y-4 mt-5">
                    <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Check in/out Dates
                                <span className={'font-extrabold text-red-700'} >*</span>
                            </div>
                            <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                            <DateRangePicker intialvalue={selectedvalues} valueChanged={valueChanged}
                                             itemcode={undefined} />
                            </div>
                            {formik.errors.date && formik.touched.date && (
                                <div className="w-full text-red-600">{formik.errors.date}</div>
                            )}
                        </FormControl>
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Number of guests
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Number of guests"
                                required
                                color="primary"
                                variant="outlined"
                                type="number"
                                name="numberOfGuests"
                                InputLabelProps={{
                                    shrink: false,

                                }}
                                value={formik.values.numberOfGuests}
                                onChange={formik.handleChange('numberOfGuests')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.numberOfGuests && formik.touched.numberOfGuests && (
                                <div className="w-full text-red-600">{formik.errors.numberOfGuests}</div>
                            )}
                        </FormControl>
                    </div>
                    <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                First Name
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="First Name"
                                required
                                color="primary"
                                variant="outlined"
                                name="personalDetails.firstName"
                                value={formik.values.personalDetails.firstName}
                                onChange={formik.handleChange('personalDetails.firstName')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.personalDetails?.firstName && formik.touched.personalDetails?.firstName && (
                                <div className="w-full text-red-600">{formik.errors.personalDetails?.firstName}</div>
                            )}
                        </FormControl>
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Last Name
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Last Name"
                                required
                                color="primary"
                                variant="outlined"
                                name="personalDetails.lastName"
                                value={formik.values.personalDetails.lastName}
                                onChange={formik.handleChange('personalDetails.lastName')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.personalDetails?.lastName && formik.touched.personalDetails?.lastName && (
                                <div className="w-full text-red-600">{formik.errors.personalDetails?.lastName}</div>
                            )}
                        </FormControl>
                    </div>
                    <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Billing Address
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Billing Address"
                                required
                                color="primary"
                                variant="outlined"
                                name="location.billingAddress"
                                value={formik.values.location.billingAddress}
                                onChange={formik.handleChange('location.billingAddress')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.location?.billingAddress && formik.touched.location?.billingAddress && (
                                <div className="w-full text-red-600">{formik.errors.location?.billingAddress}</div>
                            )}
                        </FormControl>
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Billing Country
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <Select
                                value={formik.values.location.billingCountry}
                                name={'location.billingCountry'}
                                labelId="location.billingCountry"
                                placeholder="Select Country..."
                                onChange={formik.handleChange('location.billingCountry')}
                                onBlur={formik.handleBlur}
                                inputProps={{ 'aria-label': 'Select Country' }}
                            >
                            <MenuItem value="" disabled selected>Select Country...</MenuItem>
                                {countries.map((x: any) => (
                                    <MenuItem key={x.code} value={x.code}>{x.name}</MenuItem>
                                ))}
                            </Select>
                            {formik.errors.location?.billingCountry && formik.touched.location?.billingCountry && (
                                <div className="w-full text-red-600">{formik.errors.location?.billingCountry}</div>
                            )}
                        </FormControl>
                    </div>
                    <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                PostalCode
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Postal Code"
                                required
                                color="primary"
                                variant="outlined"
                                name="location.postalCode"
                                value={formik.values.location.postalCode}
                                onChange={formik.handleChange('location.postalCode')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.location?.postalCode && formik.touched.location?.postalCode && (
                                <div className="w-full text-red-600">{formik.errors.location?.postalCode}</div>
                            )}
                        </FormControl>
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                City
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="City"
                                required
                                color="primary"
                                variant="outlined"
                                name="location.city"
                                value={formik.values.location.city}
                                onChange={formik.handleChange('location.city')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.location?.city && formik.touched.location?.city && (
                                <div className="w-full text-red-600">{formik.errors.location?.city}</div>
                            )}
                        </FormControl>
                    </div>
                    <div className="w-full flex md:flex-row md:space-x-4 sm:flex-col sm:space-y-2">
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Phone Number
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Phone Number"
                                required
                                color="primary"
                                variant="outlined"
                                name="personalDetails.phoneNumber"
                                value={formik.values.personalDetails.lastName}
                                onChange={formik.handleChange('personalDetails.phoneNumber')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.personalDetails?.phoneNumber && formik.touched.personalDetails?.phoneNumber && (
                                <div className="w-full text-red-600">{formik.errors.personalDetails.phoneNumber}</div>
                            )}
                        </FormControl>
                        <FormControl required variant="outlined" fullWidth>
                            <div>
                                Email
                                <span className={'font-extrabold text-red-700'}>*</span>
                            </div>
                            <TextField
                                placeholder="Email"
                                color="primary"
                                type="email"
                                variant="outlined"
                                name="personalDetails.email"
                                value={formik.values.personalDetails.email}
                                onChange={formik.handleChange('personalDetails.email')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.personalDetails?.email && formik.touched.personalDetails?.email && (
                                <div className="w-full text-red-600">{formik.errors.personalDetails.email}</div>
                            )}
                        </FormControl>
                    </div>
                    <div className="w-full flex flex-row">
                        <Button
                            disabled={formik.isSubmitting || !formik.isValid}
                            size="large"
                            variant="outlined"
                            style={{backgroundColor: "green"}}
                            onClick={onSubmit}
                        >
                            BOOK NOW
                        </Button>
                    </div>
                </div>
            </div>
    )
}
export default FavouritePropertiesPage;
