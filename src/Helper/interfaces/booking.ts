export interface IBookingInfo {
    checkIn: string;
    checkOut: string;
    numberOfGuests: number | string;
    personalDetails: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    },
    location: {
        billingAddress: string;
        billingCountry: string;
        postalCode: string;
        city: string;
    }
}