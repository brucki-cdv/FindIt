import style from "./SelectOptions.module.css";
import { useState } from "react";
import SelectContainer from "./SelectContainer";
import SelectHeader from "./SelectHeader";
import SelectListContainer from "./SelectListContainer";
import SelectList from "./SelectList";
import SelectListItem from "./SelectListItem";
import SelectLabel from "./SelectLabel";

import { AiOutlineDollarCircle } from "react-icons/ai";

const SelectItem = ({ options, defaultValue, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <SelectHeader onClick={toggling}>{selectedOption}</SelectHeader>
      {isOpen && (
        <SelectListContainer>
          <SelectList>
            {options.length < 0 ? (
              <SelectListItem>Lack of data</SelectListItem>
            ) : (
              <>
                {options.map((option) => {
                  return (
                    <SelectListItem onClick={onOptionClicked(option.value)}>
                      {option.name}
                    </SelectListItem>
                  );
                })}
              </>
            )}
          </SelectList>
        </SelectListContainer>
      )}
    </SelectContainer>
  );
};

export default SelectItem;
