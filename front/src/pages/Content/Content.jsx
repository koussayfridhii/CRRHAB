import React from "react";
import "./Content.scss";
import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Organisation from "../../components/Organigram";
import { motion } from "framer-motion"; // Importez Framer Motion
import { useInView } from "react-intersection-observer"; // Importez useInView depuis react-intersection-observer
import AvatarWithRipple from "./Avatar";

const Content = () => {
  const language = useSelector((state) => state.language.language);
  // Définir un objet pour stocker les données multilingues pour le CRRHAB
  const data = {
    // Texte en arabe
    ar: `
    مركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية(CRRHAB) يقع في شط مريم - سوسة. في الأصل، كان قطبًا إقليميًا للبحث والتطوير الزراعي ثم تحول في عام 2006 إلى مركز للبحث الأساسي والتطبيقي في الإنتاج البستني التقليدي والبيولوجي وتطور فريقه مع وتيرة التوظيفات التي حدثت وبناء المرافق. \n يدرك باحثو CRRHAB أن البستنة التونسية تواجه العديد من العوائق، بما في ذلك الجفاف، تملح التربة ومياه الري وظهور العديد من المشاكل الصحية النباتية. يقوم الباحثون في CRRHAB بتكييف أبحاثهم ومنظماتهم ومواردهم باستمرار لدعم مشاريع البحث ومعالجة القضايا الناشئة المتعلقة بالإنتاج وحماية المحاصيل، المعالجة بعد الحصاد وخلق قيمة مضافة، التسويق وحماية البيئة. \n يبدو مستقبل CRRHAB واعدًا بفضل فريق من الباحثين، الموظفين الإداريين، الفنيين والعمال الأكفاء والمتضامنين وأيضًا بفضل التعاونات الوطنية والدولية التي تسعى جميعها إلى تحديد وسائل لتطوير ونقل المعرفة وإنتاج تقنيات ومنتجات مبتكرة مع السعي للتكيف مع التغيرات المناخية، حماية البيئة والحفاظ على صحة الإنسان.
  `,
    // Texte en français
    fr: `
    Le Centre Régional des Recherches en Horticulture et Agriculture Biologique (CRRHAB) est situé à Chott-Mariem-Sousse. A l’origine, il était un pôle régional de recherche développement agricole puis il s’est converti en 2006 en un centre de recherche fondamentale et appliquée en production horticole conventionnelle et biologique et son équipe s’est développée au rythme des embauches qui ont eu lieu et la construction des locaux de travail. \n Conscients que l’horticulture tunisienne est confrontée à plusieurs handicaps entre autres la sécheresse, la salinisation des sols et des eaux d’irrigation et l’émergence de plusieurs problèmes phytosanitaires, les chercheurs du CRRHAB adaptent en permanence leurs recherches, leurs organisations et leurs ressources pour soutenir les projets de recherche et traiter les questions émergentes liées à la production et la protection des cultures, le traitement post-récolte et la création de valeur ajoutée, la commercialisation et la préservation de l’environnement. \n L’avenir du CRRHAB se veut prometteur grâce à une équipe de chercheurs, d’agents administratifs, de techniciens et d’ouvriers compétents et solidaires et grâce aussi à des collaborations nationales et internationales qui s’emploient tous ensemble à déterminer des moyens de développer et de transférer les connaissances et de produire des technologies et des produits novateurs tout en s’efforçant de s’adapter aux changements climatiques, de protéger l’environnement et de préserver la santé humaine.
  `,
    // Texte en anglais
    en: `
    Regional Research Center in Horticulture and Organic Agriculture (CRRHAB) is located in Chott-Mariem-Sousse. Originally, it was a regional agricultural research and development hub, then in 2006 it became a center for fundamental and applied research in conventional and organic horticultural production, and its team developed with the pace of hiring that took place and the construction of work premises. \n Aware that Tunisian horticulture faces several handicaps, including drought, soil and irrigation water salinization, and the emergence of several phytosanitary problems, CRRHAB researchers constantly adapt their research, organizations, and resources to support research projects and address emerging issues related to production and crop protection, post-harvest processing, and the creation of added value, marketing, and environmental preservation. \n The future of CRRHAB looks promising thanks to a team of competent and supportive researchers, administrative staff, technicians, and workers, and also thanks to national and international collaborations that all work together to determine ways to develop and transfer knowledge and produce innovative technologies and products while striving to adapt to climate change, protect the environment, and preserve human health.
  `,
    directeur: {
      fr: "Bettaibi Taoufik",
      ar: "توفيق بالطيبي",
      en: "Bettaibi Taoufik",
      img: "/assets/images/photo du directeur.jpg",
    },
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
            p={{ base: 2, xl: 5 }}
          >
            <Flex
              justify={"start"}
              align={"center"}
              direction="column"
              py={7}
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
            <AvatarWithRipple language={language} data={data} />
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
