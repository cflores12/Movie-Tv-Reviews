import React, { useState } from "react";
import DropDown from "./dropdown";

export type List = {
  values: string[];
};

export const Menu = ({ list }: { list: List }): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("");

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const citySelection = (city: string): void => {
    setSelectCity(city);
  };

  return (
    <>
      {/*<div className="announcement">
        <div>
          {selectCity
            ? `You selected ${selectCity} for your travel destination`
            : "Select your travel destination"}
        </div>
      </div>*/}
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectCity ? "Select: " + selectCity : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            options={list.values}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            optionSelection={citySelection}
          />
        )}
      </button>
    </>
  );
};
