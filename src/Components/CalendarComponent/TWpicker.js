import React, { useState } from "react";
import Select, { components } from "react-select";
import DropdownMenu, {
    DropdownItemGroup,
    DropdownItem
} from "@atlaskit/dropdown-menu";

const Twpicker = ({ TWHandle }) => {
    // const customStyles = {
    //     menu: (provided, state) => ({
    //         ...provided,
    //         width: state.selectProps.width,
    //         borderBottom: '1px dotted pink',
    //         color: state.selectProps.menuColor,
    //         padding: 20,
    //     }),
    //     container: (base) => ({
    //         ...base,
    //         display: 'inline-block',
    //         width: base.selectProps.width,
    //     }),
    //     valueContainer: (base) => ({
    //         ...base,
    //         minHeight: base.selectProps.height,
    //     }),

    //     singleValue: (provided, state) => {
    //         const opacity = state.isDisabled ? 0.5 : 1;
    //         const transition = 'opacity 300ms';
    //         return { ...provided, opacity, transition };
    //     },
    // }

    // const colourOptions = [
    //     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    //     { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    //     { value: 'purple', label: 'Purple', color: '#5243AA' },
    //     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    //     { value: 'orange', label: 'Orange', color: '#FF8B00' },
    //     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    //     { value: 'green', label: 'Green', color: '#36B37E' },
    //     { value: 'forest', label: 'Forest', color: '#00875A' },
    //     { value: 'slate', label: 'Slate', color: '#253858' },
    //     { value: 'silver', label: 'Silver', color: '#666666' },
    // ];

    // const ControlComponent = props => (
    //     <div onClick={(e) => {
    //         console.log("clicker")
    //         e.preventDefault()
    //         e.stopPropagation()
    //     }
    //     }>
    //         {<p>Custom Control</p>}
    //         <components.Control {...props} />
    //     </div>
    // );

    const [Range, setRange] = useState({
        name: "Date range Template",
        value: null
    });

    const DropdownChangeHandle = (name, value) => {
        console.log("value selected", value);
        setRange({ name: name, value: value });
        TWHandle(value);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <DropdownMenu
                trigger={Range.name}
                triggerType="button"
                isMenuFixed={true}
                appearance="tall"
                shouldFitContainer={true}
            >
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Today", "TD");
                    }}
                >
                    Today
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Yesterday", "YD");
                    }}
                >
                    Yesterday
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("This Week", "TW");
                    }}
                >
                    This Week
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last Week", "LW");
                    }}
                >
                    Last Week
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last 2 Week", "2W");
                    }}
                >
                    Last 2 Week
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last 30 Days", "L30D");
                    }}
                >
                    Last 30 Days
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("This Month", "TM");
                    }}
                >
                    This Month
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last Month", "LM");
                    }}
                >
                    Last Month
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last 3 Months", "3M");
                    }}
                >
                    Last 3 Months
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last 6 Months", "6M");
                    }}
                >
                    Last 6 Months
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last 12 Months", "12M");
                    }}
                >
                    Last 12 Months
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("This Year", "TY");
                    }}
                >
                    This Year
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Last Year", "LY");
                    }}
                >
                    Last Year
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        DropdownChangeHandle("Custom", "Custom");
                    }}
                >
                    Custom
                </DropdownItem>
            </DropdownMenu>
        </div>
    );
};

export default Twpicker;
