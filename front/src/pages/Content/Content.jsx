import React from "react";
import "./Content.scss";
import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Organisation from "../../components/Organigram";
import { motion } from "framer-motion"; // Importez Framer Motion
import { useInView } from "react-intersection-observer"; // Importez useInView depuis react-intersection-observer

const Content = () => {
  const language = useSelector((state) => state.language.language);
  const data = {
    ar: `
    مركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية(CRRHAB) يقع في شط مريم - سوسة. منذ إنشائه في عام 2006، يمتلك CRRHAB توجهاً نحو البستنة وفريقه تطور مع وتيرة التوظيفات التي حدثت وبناء المرافق. يكرس CRRHAB الآن نفسه للبحث الأساسي والتطبيقي في الإنتاج التقليدي والبيولوجي، وحماية وحفظ الخضروات والفواكه للاستجابة للمطالب البيئية، الاجتماعية والاقتصادية لقطاع البستنة. المستقبل يبدو واعداً بفضل فريق كفء، مرافق ومعدات حديثة والعديد من التعاونات مع الجهات المعنية في قطاع البستنة داخل وخارج البلاد.\n يعمل الباحثون وموظفو الدعم في CRRHAB على تحديد وسائل تطوير ونقل المعرفة وإنتاج التكنولوجيا والمنتجات المبتكرة، مع السعي للتكيف مع التغيرات المناخية، حماية البيئة والحفاظ على صحة الإنسان.
    `,
    fr: `
      Le Centre Régional des Recherches en Horticulture et Agriculture Biologique (CRRHAB) est situé à Chott-Mariem-Sousse. Depuis sa création en 2006, le CRRHAB a une vocation horticole et son équipe s’est développée au rythme des embauches qui ont eu lieu et la construction des locaux de travail. Le CRRHAB se dédie maintenant à la recherche fondamentale et appliquée en production conventionnelle et biologique, protection et conservation des légumes et des fruits pour répondre aux impératifs environnementaux, sociaux et économiques du secteur horticole. L’avenir se veut prometteur grâce à une équipe compétente, des installations et équipements modernes et de nombreuses collaborations avec des intervenants du secteur horticole à l’intérieur et à l’extérieur du pays.\n Les chercheurs et le personnel d’appui du CRRHAB s’emploient à déterminer des moyens de développer et de transférer les connaissances et de produire des technologies et des produits novateurs, tout en s’efforçant de s’adapter aux changements climatiques, de protéger l’environnement et de préserver la santé humaine.
    `,
    en: `
    Regional Research Center in Horticulture and Organic Agriculture (CRRHAB) is located in Chott-Mariem-Sousse. Since its creation in 2006, CRRHAB has had a horticultural vocation and its team has developed in line with the hiring that has taken place and the construction of work premises. CRRHAB is now dedicated to fundamental and applied research in conventional and organic production, protection, and conservation of vegetables and fruits to meet the environmental, social, and economic demands of the horticultural sector. The future looks promising thanks to a competent team, modern facilities and equipment, and numerous collaborations with stakeholders in the horticultural sector inside and outside the country.\n The researchers and support staff of CRRHAB strive to determine ways to develop and transfer knowledge and produce innovative technologies and products, while striving to adapt to climate changes, protect the environment, and preserve human health.
    `,
  };
  const missionsTitle = {
    ar: "المركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية",
    fr: "Centre Régional des Recherches en Horticulture et Agriculture Biologique (CRRHAB)",
    en: "Regional Research Center in Horticulture and Organic Agriculture (CRRHAB)",
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        bg={"background"}
        py={{ base: 1, xl: 10 }}
        px={{ base: 1, xl: 10 }}
        mx={"auto"}
        my={6}
        shadow={"2xl"}
        className="content"
        w={{ base: "95%", xl: "90%", "2xl": "95%" }}
        borderRadius={"lg"}
        dir={language === "ar" ? "rtl" : "ltr"}
        ref={ref1}
      >
        <section>
          <Box
            as={motion.div}
            initial={{ y: 50 }}
            animate={inView1 ? { y: 0 } : { y: 50 }}
            transition={{ duration: 1 }}
            w="full"
            bg="white"
            _dark={{ bg: "background" }}
            shadow={"lg"}
            minH={"30dvh"}
            mx={"auto"}
            my={"5dvh"}
            p={{ base: 2, xl: 10 }}
          >
            <Heading
              _dark={{
                bg: "secondary",
              }}
              fontSize={{ base: "lg", xl: "xl", "2xl": "xxl" }}
              fontFamily={"body"}
              color={"white"}
              bg={"primary"}
              px={5}
              py={2}
              fontWeight={400}
              borderRadius={"lg"}
              mb={6}
            >
              {missionsTitle?.[language]}
            </Heading>
            <Flex
              justify={"start"}
              align={"center"}
              direction="column"
              py={7}
              mt={10}
              px={{ base: 2, xl: 10 }}
              gap={10}
            >
              {data[language].split("\n").map((text, i) => (
                <Text
                  key={i}
                  textAlign="justify"
                  color={"text"}
                  fontSize="xl"
                  mb={2}
                >
                  <Highlight
                    query="crrhab"
                    styles={{
                      color: "text",
                      px: "2",
                      py: "1",
                      fontWeight: "bold",
                    }}
                  >
                    {text}
                  </Highlight>
                </Text>
              ))}
            </Flex>
          </Box>
        </section>

        <section>
          <Heading
            as={motion.div}
            initial={{ x: -50 }}
            animate={inView2 ? { x: 0 } : { x: -50 }}
            transition={{ duration: 1 }}
            _dark={{
              bg: "secondary",
            }}
            fontSize={"xxl"}
            fontFamily={"body"}
            color={"white"}
            bg={"primary"}
            px={5}
            py={2}
            fontWeight={400}
            borderRadius={"lg"}
            mb={6}
            ref={ref2}
          >
            {language === "en"
              ? "ORGANIZATION OF THE CENTER"
              : language === "fr"
              ? "ORGANISATION DU CENTRE"
              : "تنظيم المركز"}
          </Heading>
          <Organisation />
        </section>
      </Box>
    </Box>
  );
};

export default Content;
