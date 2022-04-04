import React, { useState, useEffect } from "react";
import "react-daterange-picker/dist/css/react-calendar.css"; // For some basic styling. (OPTIONAL)
import Select from "react-select";
import Calendar from "./Calendercomponent";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

const DateRangeComponent = ({ valueChanged, itemcode, intialvalue }) => {
    const switchcasehandle = value => {
        let daterange = moment.range(today.clone(), today.clone());
        switch (value) {
            case "TD": {
                daterange = moment.range(today.clone(), today.clone());
                break;
            }
            case "YD": {
                daterange = moment.range(
                    today.clone().subtract(1, "days"),
                    today.clone()
                );
                break;
            }
            case "TW": {
                daterange = moment.range(
                    today.clone().startOf("week"),
                    today.clone().endOf("week")
                );
                break;
            }
            case "LW": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(7, "days")
                        .startOf("week"),
                    today
                        .clone()
                        .subtract(7, "days")
                        .endOf("week")
                );
                break;
            }
            case "2W": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(14, "days")
                        .startOf("week"),
                    today
                        .clone()
                        .subtract(7, "days")
                        .endOf("week")
                );
                break;
            }
            case "L30D": {
                daterange = moment.range(
                    today.clone().subtract(31, "days"),
                    today.clone()
                );
                break;
            }
            case "TM": {
                daterange = moment.range(
                    today.clone().startOf("month"),
                    today.clone().endOf("month")
                );
                break;
            }
            case "LM": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(31, "days")
                        .startOf("month"),
                    today
                        .clone()
                        .subtract(31, "days")
                        .endOf("month")
                );
                break;
            }
            case "3M": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(90, "days")
                        .startOf("month"),
                    today.clone()
                );
                break;
            }
            case "6M": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(180, "days")
                        .startOf("month"),
                    today.clone()
                );
                break;
            }
            case "12M": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(364, "days")
                        .startOf("month"),
                    today.clone()
                );
                break;
            }
            case "TY": {
                daterange = moment.range(today.clone().startOf("year"), today.clone());
                break;
            }
            case "LY": {
                daterange = moment.range(
                    today
                        .clone()
                        .subtract(364, "days")
                        .startOf("year"),
                    today.clone()
                );
                break;
            }
            default: {
                daterange = moment.range(today.clone(), today.clone());
                break;
            }
        }
        return daterange;
    };

    const today = moment();

    console.log("intial", intialvalue);

    const [date, Setdate] = useState({
        startDate: "",
        endDate: "",
        key: ""
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Setdate({
            startDate: intialvalue.startDate,
            endDate: intialvalue.endDate,
            key: intialvalue.key
        });
    }, [intialvalue]);

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            height: state.selectProps.height,
            borderBottom: "1px dotted pink",
            color: state.selectProps.menuColor,
            padding: 20
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";
            return { ...provided, opacity, transition };
        }
    };

    const setvalue = (startdate, enddate, key) => {
        console.log("inside date picker setvalues", startdate, enddate, key);
        //setOpen(false)
        Setdate({ startDate: startdate, endDate: enddate, key: key });
    };

    const CustomCalender = props => {
        return <Calendar props={props} setvalue={setvalue} date={date} />;
    };
    return (
        <Select
            options={[{ label: "", value: "" }]}
            value={{
                label: date.startDate + "---" + date.endDate,
                value: date.startDate
            }}
            components={{ Option: CustomCalender }}
            onMenuClose={() => {
                let value = date;
                valueChanged(value);
                //setOpen(state => !state);
                console.log("menuclosed");
            }}
            styles={customStyles}
            maxMenuHeight="200"
            closeMenuOnSelect={false}
        />
    );
};
export default DateRangeComponent;
