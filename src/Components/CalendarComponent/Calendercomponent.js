import React, { Fragment, useState, useEffect } from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import Twpicker from "./TWpicker";
const moment = extendMoment(originalMoment);

const Calender = ({ props, setvalue, date }) => {
    const today = moment();
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

    useEffect(() => {
        if (date.key !== "") {
            switchcasehandle(date.key);
        }
    }, [date]);

    const [Daterange, setDaterange] = useState(
        moment.range(date.startDate, date.endDate)
    );

    const onSelect = value => {
        setDaterange(value);
        setvalue(value.start.format("YYYY-MM-DD"), value.end.format("YYYY-MM-DD"));
    };

    const renderSelectionValue = () => {
        return (
            <div>
                {Daterange.start.format("YYYY-MM-DD")}
                {" - "}
                {Daterange.end.format("YYYY-MM-DD")}
            </div>
        );
    };

    const TWHandle = value => {
        console.log("TWhandle value selected", value);

        let daterange = switchcasehandle(value);
        setDaterange(daterange);
        setvalue(
            daterange.start.format("YYYY-MM-DD"),
            daterange.end.format("YYYY-MM-DD"),
            value
        );
    };

    return (
        <Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <div style={{ alignSelf: "center" }}>
                    <h5>{renderSelectionValue()}</h5>
                </div>
                <DateRangePicker
                    value={Daterange}
                    onSelect={onSelect}
                    singleDateRange={false}
                    numberOfCalendars={2}
                />
            </div>
            <Twpicker TWHandle={TWHandle} />
            {/* <Button onClick={this.handleClick}>
                {this.state.templateValue === null ? "Date range Template" : this.state.templateValue}
                </Button>
                    <Menu
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={() => { this.onTemplatevalueChange("TD") }}>Today</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("YD") }}>Tommorow</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("TW") }}>This Week</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("LW") }}>Last Week</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("2W") }}>Last 2 Week</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("L30D") }}>Last 30 Days</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("TM") }}>This Month</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("LM") }}>Last Month</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("3M") }}>Last 3 Months</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("6M") }}>Last 6 Months</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("12M") }}>Last 12 Months</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("TY") }}>This Year</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("LY") }}>Last Year</MenuItem>
                        <MenuItem onClick={() => { this.onTemplatevalueChange("Custom") }}>Custom</MenuItem>
                    </Menu> */}

            {/* <DropdownMenu
                        trigger={this.state.templateValue === null ? "Date range Template" : this.state.templateValue}
                        triggerType="button"
                        //onOpenChange={e => console.log('dropdown opened', e)}
                        isMenuFixed={true}
                        //autoFocus={true}
                        appearance="tall"
                        shouldFitContainer={true}
                    >
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("TD") }}>Today</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("YD") }}>Tommorow</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("TW") }}>This Week</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("LW") }}>Last Week</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("2W") }}>Last 2 Week</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("L30D") }}>Last 30 Days</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("TM") }}>This Month</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("LM") }}>Last Month</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("3M") }}>Last 3 Months</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("6M") }}>Last 6 Months</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("12M") }}>Last 12 Months</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("TY") }}>This Year</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("LY") }}>Last Year</DropdownItem>
                        <DropdownItem onClick={() => { this.onTemplatevalueChange("Custom") }}>Custom</DropdownItem>
                    </DropdownMenu> */}
        </Fragment>
    );
};

export default Calender;
