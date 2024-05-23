import React from "react";
import {
  Box,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  chakra,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  FormHelperText,
  Flex,
  Avatar,
  Icon,
  Button,
  Divider,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const DynamicForm = ({ headers }) => {
  return (
    <Box bg="background">
      <>
        <GridItem
          mt={[5, null, 0]}
          colSpan={{
            md: 2,
          }}
          bg="background"
        >
          <chakra.form
            method="POST"
            shadow="lg"
            rounded={[null, "md"]}
            overflow={{
              sm: "hidden",
            }}
          >
            <Stack
              px={4}
              py={5}
              spacing={6}
              p={{
                sm: 6,
              }}
            >
              {headers?.map((header, index) => {
                return (
                  <Flex key={index + header.title.fr} gap={10}>
                    <FormControl>
                      <FormLabel
                        htmlFor={header.title.fr}
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        {header.title.fr}
                      </FormLabel>
                      <Input
                        type={header.format}
                        name={header.title.fr}
                        id={header.title.fr}
                        mt={1}
                        focusBorderColor="secondary"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        htmlFor={header.title.en}
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        {header.title.en}
                      </FormLabel>
                      <Input
                        type={header.format}
                        name={header.title.en}
                        id={header.title.en}
                        mt={1}
                        focusBorderColor="secondary"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                    <FormControl dir="rtl">
                      <FormLabel
                        htmlFor={header.title.ar}
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        {header.title.ar}
                      </FormLabel>
                      <Input
                        type={header.format}
                        name={header.title.ar}
                        id={header.title.ar}
                        mt={1}
                        focusBorderColor="secondary"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                  </Flex>
                );
              })}
            </Stack>
            <Box
              px={{
                base: 4,
                sm: 6,
              }}
              py={3}
              bg="gray.50"
              _dark={{
                bg: "#121212",
              }}
              textAlign="right"
            >
              <Button
                type="submit"
                colorScheme="brand"
                _focus={{
                  shadow: "",
                }}
                fontWeight="md"
              >
                Save
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </>
    </Box>
  );
};

export default DynamicForm;
