import React, { useEffect, useState } from "react";

type DropDownProps = {
  options: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  optionSelection: Function;
};

const DropDown = ({ options, optionSelection }: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the city name
   * back to the parent component
   *
   * @param city  The selected city
   */
  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {options.map((option: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(option);
              }}
            >
              {option}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
