import { Box, chakra, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const ODD = () => {
    const language = useSelector(state=> state.language.language)
    return (
        <Box py={3} px={10} bg="background" shadow="lg" dir={"ar" === language ? "rtl" : "ltr"}>
            <chakra.p w="90%" mx="auto" textAlign="justify" mb={5} fontSize="lg">
            {"fr" === language ? (`Selon la résolution 70/1 de l'Assemblée générale des Nations Unies et en application de l'Agenda 2030 pour le
développement durable. Le CRRHAB contribue en tant qu'un établissement de recherche à la réalisation des
objectifs de développement durable suivants :`) : "en" === language ? (`According to the United Nations General Assembly resolution 70/1 and in application of the 2030 Agenda for Sustainable Development, the CRRHAB contributes as a research institution to the achievement of the following sustainable development goals:`):(`وفقًا لقرار الجمعية العامة للأمم المتحدة رقم 70/1 وتطبيقًا لخطة 2030 للتنمية المستدامة، يساهم المركز الجهوي للبحوث في البستنة و الفلاحة البيولوجية
 كمؤسسة بحثية في تحقيق الأهداف التالية للتنمية المستدامة:
`)}
            </chakra.p>
            <Image src="./assets/images/ODDf.jpg" mx="auto" mb={5} alt="objectives of sustainable development" objectFit="contain" />
        </Box>
    );
}

export default ODD;
