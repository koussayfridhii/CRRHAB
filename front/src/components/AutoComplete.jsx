import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Icon, InputGroup, InputRightElement } from "@chakra-ui/react";

export default function AutoCompleteMade({
  options,
  language = "fr",
  setFiltredData,
}) {
  //   const options = ["apple", "appoint", "zap", "cap", "japan"];
  let filtredData = [];
  const [text, setText] = useState("");
  let data = [];
  options.forEach((option) => {
    data.push(option.name?.[language]);
    data.push(option.speciality?.[language]);
    data.push(option.email);
    data.push(option.orcid);
  });
  data = [...new Set(data)];
  const changInputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const optionsFilter = () => {
    filtredData = options.filter((option) => {
      return (
        option.name?.[language].toLowerCase().includes(text.toLowerCase()) ||
        option.email.toLowerCase().includes(text.toLowerCase()) ||
        option.speciality?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.orcid.toLowerCase().includes(text.toLowerCase())
      );
    });
    setFiltredData(filtredData);
  };
  useEffect(() => {
    optionsFilter();
  }, [text]);
  return (
    <>
      <AutoComplete rollNavigation>
        {({ isOpen }) => (
          <>
            <InputGroup onChange={changInputHandler}>
              <AutoCompleteInput variant="filled" placeholder="Search..." />
              <InputRightElement>
                <Icon as={isOpen ? ChevronRightIcon : ChevronDownIcon} />
              </InputRightElement>
            </InputGroup>
            <AutoCompleteList>
              {data?.map((option, index) => (
                <AutoCompleteItem
                  key={`option${index}`}
                  value={option}
                  textTransform="capitalize"
                  align="center"
                  onClick={(e) => {
                    setText(e.target.innerText);
                  }}
                >
                  {option}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </>
        )}
      </AutoComplete>
    </>
  );
}
