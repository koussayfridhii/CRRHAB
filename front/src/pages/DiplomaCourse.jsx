import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
const DiplomaCourse = () => {
  const language = useSelector((state) => state.language.language);
  const [filtredData, setFiltredData] = useState([]);
  const data = [
    // Thèses soutenues en 2021
    {
      annee: 2021,
      type: { ar: "رسالة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: {
        ar: "درة منصور عجاج ",
        fr: "DORRA MANSOUR AJEJ",
        en: "DORRA MANSOUR AJEJ",
      },
      titre: {
        ar: "دور طفيليات Chalcidoidea والمفترسات العامة في المكافحة البيولوجية لتجمعات حفار أوراق الحمضيات Phyllocnistis citrella Stainton (Lepidoptera: Gracillariidae) في بساتين الحمضيات.",
        fr: "Rôle des parasitoïdes Chalcidoidea et des prédateurs généralistes dans le contrôle biologique des populations de la mineuse des agrumes, Phyllocnistis citrella Stainton (Lepidoptera: Gracillariidae), en vergers d’agrumes.",
        en: "Role of Chalcidoidea parasitoids and generalist predators in the biological control of citrus leafminer populations, Phyllocnistis citrella Stainton (Lepidoptera: Gracillariidae), in citrus orchards.",
      },
      specialite: {
        ar: "وقاية النبات والبيئة",
        fr: "Protection des Plantes et Environnement",
        en: "Plant Protection and Environment",
      },
      directeur: {
        ar: "محمد براهم",
        fr: "Mohamed BRAHAM",
        en: "Mohamed BRAHAM",
      },
      etablissement: {
        ar: "المعهد العالي للفلاحة بشط مريم جامعة سوسة",
        fr: "Institut Supérieur Agronomique de Chott-Mariem, Université de Sousse",
        en: "Higher Institute of Agronomy of Chott-Mariem, University of Sousse",
      },
    },
    // Masters de Recherche soutenus en 2021
    {
      annee: 1,
      type: {
        ar: "ماجستير بحث",
        fr: "Mastère de Recherche",
        en: "Research Master's",
      },
      auteur: {
        ar: "ويداد موساوي",
        fr: "Wided MOUSSAOUI",
        en: "Wided MOUSSAOUI",
      },
      titre: {
        ar: "تأثير سماد التسميد العضوي ومستخلصاته على نمو وانبات الفلفل وتقييم قدرته المضادة للفطريات.",
        fr: "Effet du compost et de ses extraits sur la germination et la croissance du piment et évaluation de son pouvoir antifongique.",
        en: "Effect of compost and its extracts on the germination and growth of pepper and evaluation of its antifungal power.",
      },
      specialite: {
        ar: "البيئة والتنمية المستدامة",
        fr: "Écologie & Environnement",
        en: "Ecology & Environment",
      },
      directeur: {
        ar: "رابب الخالدي وعلي مكي",
        fr: "Rabeb EL KHALDI & Ali MEKKI",
        en: "Rabeb EL KHALDI & Ali MEKKI",
      },
      etablissement: {
        ar: "كلية العلوم بقفصة",
        fr: "Faculté de Sciences de Gafsa",
        en: "Faculty of Sciences of Gafsa",
      },
    },
    // Masters Professionnels soutenus en 2021
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "صفاء بن سعيد",
        fr: "Safa BEN SAID",
        en: "Safa BEN SAID",
      },
      titre: {
        ar: "دراسة القدرة المبيدة للحشرات للتراكيب التي تعتمد على 3 زيوت أساسية على العنكبوتيات الفارسية",
        fr: "Etude du potentiel insecticide des formulations à base de 3 huiles essentielles sur Myzus persicae",
        en: "Study of the insecticidal potential of formulations based on 3 essential oils on Myzus persicae",
      },
      specialite: {
        ar: "",
        fr: "",
        en: "",
      },
      directeur: {
        ar: "",
        fr: "Ikbal CHAIEB",
        en: "Ikbal CHAIEB",
      },
      etablissement: {
        ar: "المعهد العالي للزراعة بشط مريم",
        fr: "Institut supérieur agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "رهاب منصري",
        fr: "Rihab MNASSRI",
        en: "Rihab MNASSRI",
      },
      titre: {
        ar: "استخراج الزيت العطري من حبات شجرة الفستق (Pistacia vera (L.)) بواسطة التقطير بالبخار: نمذجة معلماتية، دراسة خصائصه الفيزيكو-كيميائية ونشاطاته المضادة للحشرات على Tribolium castaneum (Herbst).",
        fr: "Extraction de l’huile essentielle des grappes de Pistacia vera (L.) par hydrodistillation : modélisation paramétrique, étude de ces propriétés physico-chimiques et de ces activités bio-insecticides sur Tribolium castaneum (Herbst).",
        en: "Extraction of essential oil from Pistacia vera (L.) clusters by hydrodistillation: parametric modeling, study of its physicochemical properties and bio-insecticidal activities on Tribolium castaneum (Herbst).",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "أميرة خليف",
        fr: "KHLIF Amira",
        en: "KHLIF Amira",
      },
      titre: {
        ar: "استخراج الزيت العطري من نبات النعناع الطويل (Mentha longifolia) بواسطة التقطير بالبخار: توصيف فيزيوكيميائي ودراسة نشاطاته المضادة للحشرات على بعض آفات المواد الغذائية المخزنة.",
        fr: "Extraction de l’huile essentielle de Mentha longifolia par hydrodistillation : caractérisation physicochimique et étude de ses activités bio-insecticides sur certains ravageurs des denrées stockées.",
        en: "Extraction of essential oil from Mentha longifolia by hydrodistillation: physicochemical characterization and study of its bio-insecticidal activities on certain stored food pests.",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "سهام رجباوي وسيرين عفي",
        fr: "Sihem RAJBAOUI & Sirine AFFI",
        en: "Sihem RAJBAOUI & Sirine AFFI",
      },
      titre: {
        ar: "تحسين استخراج الزيت العطري من نبات الشيح (Artemisia herba alba (L.)) بواسطة التقطير بالبخار، وتوصيف فيزيوكيميائي ودراسة نشاطه المضاد للحشرات على بعض آفات المواد الغذائية المخزنة.",
        fr: "Optimisation de l’extraction de l’huile essentielle d’Artemisia herba alba (L.) par hydrodistillation, caractérisation physico-chimique et étude de son activité bio-insecticide sur certains ravageurs des denrées stockées.",
        en: "Optimization of the extraction of essential oil from Artemisia herba alba (L.) by hydrodistillation, physicochemical characterization and study of its bio-insecticidal activity on certain stored food pests.",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "كريمة الجديدي",
        fr: "Karima JEDIDI",
        en: "Karima JEDIDI",
      },
      titre: {
        ar: "توصيف فيزيوكيميائي وتقييم النشاطات المضادة للحشرات لزيت النعناع الأصلي (Salvia officinalis (L.)) ضد حشرتين للمواد الغذائية المخزنة.",
        fr: "Caractérisation physico-chimique et évaluation des activités bio-insecticides de l’huile essentielle de Salvia officinalis (L.) contre deux insectes des denrées stockées.",
        en: "Physicochemical characterization and evaluation of the bio-insecticidal activities of essential oil from Salvia officinalis (L.) against two stored food insects.",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "أميرة سعد",
        fr: "Amira SAAD",
        en: "Amira SAAD",
      },
      titre: {
        ar: "تثمين الزيوت العطرية من ثلاث نباتات عطرية: روتا شاليبنسيس، الإكاليبتوس، وأرتيميسيا هيربا ألبا من خلال تقييم نشاطها المبيد على السوس البرتقالي (تريبوليوم كاستانيوم).",
        fr: "Valorisation des huiles essentielles de trois plantes aromatiques : Ruta chalepensis, Eucalyptus et Artemisia herba alba par évaluation de leur activité insecticide sur Tribolium castaneum.",
        en: "Valorization of essential oils from three aromatic plants: Ruta chalepensis, Eucalyptus, and Artemisia herba alba by evaluating their insecticidal activity on Tribolium castaneum.",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "رسمي سلطاني",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    {
      annee: 2021,
      type: {
        ar: "ماجستير مهني",
        fr: "Mastère Professionnel",
        en: "Professional Master's",
      },
      auteur: {
        ar: "فاطمة لزاري",
        fr: "Fatma LOZARI",
        en: "Fatma LOZARI",
      },
      titre: {
        ar: "استخلاص وتحسين إنتاجية الزيت العطري من الخزامى (Lavandula stoechas) بواسطة التقطير بالبخار ودراسة نشاطها المضاد للحشرات على السوس البرتقالي (Tribolium castaneum)",
        fr: "Extraction et optimisation du rendement de l’huile essentielle de Lavandula stoechas (L.) par hydrodistillation et étude de ses activités bio-insecticides sur Tribolium castaneum (Herbst).",
        en: "Extraction and yield optimization of essential oil from Lavandula stoechas (L.) by hydrodistillation and study of its bio-insecticidal activities on Tribolium castaneum (Herbst).",
      },
      specialite: {
        ar: "تكنولوجيا العمليات ومراقبة جودة الأغذية",
        fr: "Technologie des Procédés et Contrôle Qualité des Aliments",
        en: "Process Technology and Food Quality Control",
      },
      directeur: {
        ar: "رسمي سلطاني",
        fr: "Rasmi SOLTANI",
        en: "Rasmi SOLTANI",
      },
      etablissement: {
        ar: "كلية العلوم والتقنيات بسيدي بوزيد",
        fr: "Faculté des Sciences et Techniques de Sidi Bouzid",
        en: "Faculty of Sciences and Techniques of Sidi Bouzid",
      },
    },
    // Thèses soutenues en 2022
    {
      annee: 2022,
      type: { ar: "أطروحة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "فاخر عياد", fr: "Fakher Ayed", en: "Fakher Ayed" },
      titre: {
        ar: "التوصيف البيولوجي لـ Sclerotium rolfsii والبحث عن الجزيئات الحيوية النشطة من مختلف الأسمدة العضوية والكائنات الدقيقة المرتبطة بها.",
        fr: "Caractérisation biologique de Sclerotium rolfsii et recherche de biomolécules actives à partir de divers composts et de leurs microorganismes associés.",
        en: "Biological characterization of Sclerotium rolfsii and search for active biomolecules from various composts and their associated microorganisms.",
      },
      specialite: { ar: "فيتياترية", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: {
        ar: "مجدة دعمي رمادي",
        fr: "Mejda Daami-Remadi",
        en: "Mejda Daami-Remadi",
      },
      etablissement: {
        ar: "المعهد الوطني للعلوم الزراعية بتونس",
        fr: "INAT",
        en: "INAT",
      },
      date: "14 يوليو 2022",
    },
    {
      annee: 2022,
      type: { ar: "أطروحة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: {
        ar: "أشرف عبد القافي",
        fr: "Achref Abdelkafi",
        en: "Achref Abdelkafi",
      },
      titre: {
        ar: "مساهمة في دراسة بيولوجيا ذبابة التبغ البيضاء، Bemisia tabaci (Gennadius)، وتوصيف متعايشاتها الداخلية الأولية والثانوية.",
        fr: "Contribution à l’étude de la biologie de l’aleurode du tabac, Bemisia tabaci (Gennadius) et à la caractérisation de ses endosymbiotes primaires et secondaires.",
        en: "Contribution to the study of the biology of the tobacco whitefly, Bemisia tabaci (Gennadius), and to the characterization of its primary and secondary endosymbionts.",
      },
      specialite: { ar: "فيتياترية", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: { ar: "أحمد مكتي", fr: "Ahmed Makni", en: "Ahmed Makni" },
      etablissement: {
        ar: "المعهد الوطني للعلوم الزراعية بتونس",
        fr: "INAT",
        en: "INAT",
      },
      date: "21 يوليو 2022",
    },

    {
      annee: 2022,
      type: { ar: "أطروحة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: {
        ar: "راضية الحفصي",
        fr: "Radhia EL HAFSI",
        en: "Radhia EL HAFSI",
      },
      titre: {
        ar: "علم الأوبئة للعفن الرمادي في الفراولة والبحث عن بدائل المكافحة في الظروف المسيطر عليها.",
        fr: "Épidémiologie de la pourriture grise des fraises et recherche d’alternatives de lutte en conditions contrôlées.",
        en: "Epidemiology of gray mold of strawberries and search for control alternatives under controlled conditions.",
      },
      specialite: { ar: "فيتياترية", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: {
        ar: "مجدة دعمي رمادي",
        fr: "Mejda Daami-Remadi",
        en: "Mejda Daami-Remadi",
      },
      etablissement: {
        ar: "المعهد الوطني للعلوم الزراعية بتونس",
        fr: "INAT",
        en: "INAT",
      },
      date: "1 يوليو 2022",
    },
    {
      annee: 2022,
      type: { ar: "أطروحة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: { ar: "وفاء العماري", fr: "Wafa LAMARI", en: "Wafa LAMARI" },
      titre: {
        ar: "البحث عن مصادر جديدة لمقاومة البطاطس (Solanum tuberosum L.) لمرض الجرب العادي (Streptomyces scabies) وتثمين عوامل المكافحة البيولوجية.",
        fr: "Recherche de nouvelles sources de résistance de la pomme de terre (Solanum tuberosum L.) à la maladie de la gale commune (Streptomyces scabies) et valorisation des agents de lutte biologique",
        en: "Search for new sources of resistance of potato (Solanum tuberosum L.) to common scab disease (Streptomyces scabies) and valorization of biological control agents.",
      },
      specialite: { ar: "فيتياترية", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: {
        ar: "مجدة دعمي رمادي",
        fr: "Mejda Daami-Remadi",
        en: "Mejda Daami-Remadi",
      },
      etablissement: {
        ar: "المعهد الوطني للعلوم الزراعية بتونس",
        fr: "INAT",
        en: "INAT",
      },
      date: "27 يوليو 2022",
    },
    {
      annee: 2022,
      type: { ar: "أطروحة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: {
        ar: "راضية حمودة",
        fr: "Radhia Hammouda",
        en: "Radhia Hammouda",
      },
      titre: {
        ar: "تطوير طريقة مكافحة متكاملة ضد نيماتودا تعقد الجذور Meloidogyne spp. في محاصيل البطاطس والفلفل.",
        fr: "Développement d’une méthode de lutte intégrée contre les nématodes à galles racinaires Meloidogyne spp. sur les cultures de la pomme de terre et du piment",
        en: "Development of an integrated control method against root-knot nematodes Meloidogyne spp. on potato and pepper crops",
      },
      specialite: { ar: "فيتياترية", fr: "Phytiatrie", en: "Phytiatry" },
      directeur: {
        ar: "مجدة دعمي رمادي",
        fr: "Mejda Daami-Remadi",
        en: "Mejda Daami-Remadi",
      },
      etablissement: {
        ar: "المعهد الوطني للعلوم الزراعية بتونس",
        fr: "INAT",
        en: "INAT",
      },
      date: "15 يوليو 2022",
    },
    //Masters de recherche soutenus en 2022

    {
      annee: 2022,
      type: {
        ar: "ماجستير بحث",
        fr: "Mastère de Recherche",
        en: "Research Master's",
      },
      auteur: {
        ar: "سللوي بلحاج",
        fr: "Salwa Belhaj",
        en: "Salwa Belhaj",
      },
      titre: {
        ar: "دراسة الخصائص الغذائية وتثمين الفول البيولوجي والتقليدي",
        fr: "Etude des propriétés nutritionnelles et valorisation de la fève biologique et conventionnelle",
        en: "Study of the nutritional properties and valorization of organic and conventional broad beans",
      },
      specialite: {
        ar: "ماجستير في مراقبة جودة الأغذية والصحة (CQAH)، المعهد العالي لعلوم البيولوجيا الطبية (ISBM)",
        fr: "Master en Contrôle Qualité des aliments et Hygiène CQAH, ISBM",
        en: "Master's in Food Quality Control and Hygiene (CQAH), ISBM",
      },
      directeur: {
        ar: "نادية شايب",
        fr: ": CHAIEB Nadia",
        en: ": CHAIEB Nadia",
      },
      etablissement: {
        ar: "........................",
        fr: "........................",
        en: "........................",
      },
    },

    //PFEs soutenus en 2022

    {
      annee: 2022,
      type: {
        ar: "مشروع تخرج",
        fr: "Projet de fin d'Etudes",
        en: "Graduation Project",
      },
      auteur: {
        ar: "خلود بكوش",
        fr: "Khouloud BACCOUCHE",
        en: "Khouloud BACCOUCHE",
      },
      titre: {
        ar: "دراسة الخصائص الغذائية وتثمين الفول البيولوجي والتقليدي",
        fr: "Etude comparative et évaluation de nouvelles obtentions de tomate via une approche de sélection participative.  ",
        en: "Study of the nutritional properties and valorization of organic and conventional broad beans",
      },
      specialite: {
        ar: "مشروع تخرج مهندس تخصص بساتين ",
        fr: "PFE Ingénieur specialite Horticulture",
        en: "Engineering Graduation Project in Horticulture Specialty",
      },
      directeur: {
        ar: "منيرة الباز",
        fr: ": Elbaz Mounira",
        en: ": Elbaz Mounira",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },

    {
      annee: 2022,
      type: {
        ar: "مشروع تخرج",
        fr: "Projet de fin d'Etudes",
        en: "Graduation Project",
      },
      auteur: {
        ar: "وحيدة قندي",
        fr: "Wahida GONDI",
        en: "Wahida GONDI",
      },
      titre: {
        ar: "تنوع الأصناف المحلية للقرع (Lagenaria siceraria): التوصيف والتثمين",
        fr: "Diversité des écotypes locaux de calebasse (Lagenaria siceraria) : Caractérisation et valorisation",
        en: "Diversity of Local Varieties of Bottle Gourd (Lagenaria siceraria): Characterization and Valorization",
      },
      specialite: {
        ar: "مشروع نهاية الدراسة في الهندسة التخصص في البستنة",
        fr: "Projet de Fin d’Etudes en cycle Ingénieur specialite Horticulture",
        en: "Final Year Project in Engineering with a Specialty in Horticulture",
      },
      directeur: {
        ar: "هالة شيخ روحو",
        fr: ": CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },

    {
      annee: 2022,
      type: {
        ar: "مشروع تخرج",
        fr: "Projet de fin d'Etudes",
        en: "Graduation Project",
      },
      auteur: {
        ar: "منى نصري",
        fr: "Mouna NASRI",
        en: "Mouna NASRI",
      },
      titre: {
        ar: "توصيف وتقييم مقاومة بعض الأصناف من البطيخ (Citrullus lanatus L.) لمرض الفساريوز الوعائي",
        fr: "Caractérisation et évaluation de la résistance à la Fusariose vasculaire de quelques écotypes de pastèque (Citrullus lanatus L.)",
        en: "Characterization and Evaluation of Resistance to Vascular Fusarium Wilt in Some Watermelon (Citrullus lanatus L.) Ecotypes",
      },
      specialite: {
        ar: "العلوم الزراعية",
        fr: "Sciences Agronomiques",
        en: "Agricultural Sciences",
      },
      directeur: {
        ar: "هالة شيخ روحو",
        fr: ": CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },
      etablissement: {
        ar: "المدرسة العليا للفلاحة بالكاف",
        fr: "Ecole Superieure d'Agriculture du Kef",
        en: " Higher School of Agriculture of Kef",
      },
    },

    //Licences Appliquées en 2022

    {
      annee: 2022,
      type: {
        ar: "الإجازة التطبيقية",
        fr: "Licence Appliquée",
        en: "Applied Bachelor's Degree",
      },
      auteur: {
        ar: "خلود بكوش",
        fr: "Emna Chouchène",
        en: "KEmna Chouchène",
      },
      titre: {
        ar: "دمج مستحلب مصنوع من زيت القلي في تركيبة حشرية عضوية",
        fr: "Intégration d’un émulsifiant fabriqué à partir d’huile de friture dans une formulation bioinsecticie",
        en: "Integration of an emulsifier made from frying oil into a bioinsecticide formulation",
      },
      specialite: {
        ar: "الإجازة التطبيقية في التقانة البيئية وتثمين النفايات، المعهد العالي لعلوم البيولوجيا الطبية. ",
        fr: " Licence Appliquée en Biotechnologie Environnementale et Valorisation des rejets, ISBM.",
        en: "Applied Bachelor's Degree in Environmental Biotechnology and Valorization of Waste, ISBM.",
      },
      directeur: {
        ar: "وفاء  الطيب و اقبال شايب",
        fr: ": Tayeb Wafa & Chaieb Ikbal",
        en: ": Tayeb Wafa & Chaieb Ikbal",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },

      date: "11 Juin 2022",
    },

    //-----------------------
    {
      annee: 2022,
      type: {
        ar: "الإجازة التطبيقية",
        fr: "Licence Appliquée",
        en: "Applied Bachelor's Degree",
      },
      auteur: {
        ar: "احلام السباعب",
        fr: "Ahlem Essbai",
        en: "Ahlem Essbai",
      },
      titre: {
        ar: "استخدام نبات القهوة كدعم صلب في تركيبة مبيد حشري عضوي.",
        fr: "Utilisation du marc du café comme support solide dans une formulation bioinsecticide. ",
        en: "Utilization of coffee grounds as a solid support in a bioinsecticide formulation.",
      },
      specialite: {
        ar: "الإجازة التطبيقية في التقانة البيئية وتثمين النفايات، المعهد العالي لعلوم البيولوجيا الطبية. ",
        fr: " Licence Appliquée en Biotechnologie Environnementale et Valorisation des rejets, ISBM",
        en: "Applied Bachelor's Degree in Environmental Biotechnology and Waste Valorization, ISBM.",
      },
      directeur: {
        ar: "وفاء  الطيب و اقبال شايب",
        fr: ": Tayeb Wafa & Chaieb Ikbal",
        en: ": Tayeb Wafa & Chaieb Ikbal",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },

      date: "11 Juin 2022",
    },
    //--------------------------

    {
      annee: 2022,
      type: {
        ar: "الإجازة التطبيقية",
        fr: "Licence Appliquée",
        en: "Applied Bachelor's Degree",
      },
      auteur: {
        ar: "نور الهدى شارني",
        fr: "Nour El Houda CHARNI",
        en: "Nour El Houda CHARNI",
      },
      titre: {
        ar: "سلوك أصناف جديدة من البصل (Allium cepa L.) المقترحة للتسجيل.",
        fr: "Comportement de nouvelles obtentions d’oignon (Allium cepa L.) proposées pour l’inscription.",
        en: "Performance of new onion (Allium cepa L.) cultivars proposed for registration.",
      },
      specialite: {
        ar: "المشروع المهني لنهاية الدراسة في الدورة الأكاديمية التطبيقية، تخصص الزراعة، المدرسة العليا للفلاحة بالكاف.",
        fr: " Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée, specialite Agronomie, Ecole Supérieure d’Agriculture du Kef",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree Program, Specialty in Agronomy, Higher School of Agriculture of Kef.",
      },
      directeur: {
        ar: "هالة شيخ روحو",
        fr: ":CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },

      date: "11 Juin 2022",
    },

    // Habilitation Universitaire soutenue 2023 //

    {
      annee: 2023,
      type: {
        ar: "شهادة التأهيل الجامعي في تخصص علوم إنتاج النباتات*",
        fr: "Diplôme d'habilitation universitaire dans la specialite *Sciences de le production végétale",
        en: "University Habilitation Diploma in the specialty *Plant Production Sciences",
      },
      auteur: {
        ar: "هالة شيخ روحو",
        fr: ":CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },
      titre: {
        ar: "شهادة التأهيل الجامعي في تخصص علوم إنتاج النباتات*.",
        fr: "Diplôme d'habilitation universitaire dans la specialite *Sciences de le production végétale*",
        en: "University Habilitation Diploma in the specialty *Plant Production Sciences*",
      },
      specialite: {
        ar: "المشروع المهني لنهاية الدراسة في الدورة الأكاديمية التطبيقية، تخصص الزراعة، المدرسة العليا للفلاحة بالكاف.",
        fr: " Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée, specialite Agronomie, Ecole Supérieure d’Agriculture du Kef",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree Program, Specialty in Agronomy, Higher School of Agriculture of Kef.",
      },
      directeur: {
        ar: "هالة شيخ روحو",
        fr: ":CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },

      etablissement: {
        ar: "المعهد الوطني للفلاحة بتونس",
        fr: " Institut National Agronomique de Tunisie",
        en: "National Agronomic Institute of Tunisia",
      },

      date: "15 Juin 2023",
    },
    //--------------------------

    // Thèses Doctora soutenues en 2023
    {
      annee: 2023,
      type: { ar: "رسالة دكتوراه", fr: "Thèse de Doctorat", en: "PhD Thesis" },
      auteur: {
        ar: "سوسن بن طيبة",
        fr: "Sawssen Ben Tiba ",
        en: "Sawssen Ben Tiba ",
      },
      titre: {
        ar: "تحديد فيروسات نوكليوبوليهيدرو من عث الطماطم Helicoverpa armigera و S. littoralis ودراسة نشاطاتها البيولوجية.",
        fr: "Identification de nucléopolyhédrovirus isolés des noctuelles de la tomate Helicoverpa armigera et S. littoralis et étude de leurs activités biologiques. ",
        en: "Identification of nucleopolyhedroviruses isolated from tomato fruitworms Helicoverpa armigera and S. littoralis and study of their biological activities.",
      },
      specialite: {
        ar: "أطروحة دكتوراه في العلوم البيولوجية",
        fr: "Thèse de doctorat en Sciences Biologiques",
        en: "PhD Thesis in Biological Sciences",
      },
      directeur: { ar: "اسماء العريف", fr: "Asma Laarif", en: "Asma Laarif" },
      etablissement: {
        ar: "كلية العلوم ببنزرت",
        fr: "Faculté des Sciences de Bizerte",
        en: "Faculty of Sciences of Bizerte",
      },
      date: "24 Février 2023",
    },

    //Masters de recherche soutenus en 2023

    {
      annee: 2023,
      type: {
        ar: "ماجستير بحث",
        fr: "Mastère de Recherche",
        en: "Research Master's",
      },
      auteur: {
        ar: "مروى ثليجاني",
        fr: "Marwa Tlijani",
        en: "Marwa Tlijani",
      },
      titre: {
        ar: "دراسة تأثير التوتر الملحي على المظهر الشكلي والسلوك الفسيولوجي والكيميائي الحيوي لثلاثة أصناف من الفلفل (Capsicum annum L.) الواحاتي.",
        fr: "Etude de l’effet du stress salin sur la morphologie et le comportement physiologique et biochimique de trois cultivars de piments (Capsicum annum L.) oasiens. ",
        en: " Study of the effect of saline stress on the morphological and physiological and biochemical behavior of three oases cultivars of peppers (Capsicum annum L.).",
      },
      specialite: {
        ar: "ماجستير البحث في البيئة والتنوع البيولوجي",
        fr: "Mastère de Recherche en Ecologie et Environnement",
        en: "Research Master's Degree in Ecology and Environment",
      },
      directeur: {
        ar: "رباب الخالدي",
        fr: ": Rabeb El Khaldi",
        en: ": Rabeb El Khaldi",
      },
      etablissement: {
        ar: "كلية العلوم بقفصة",
        fr: "Faculté des Sciences de Gafsa",
        en: "Faculty of Sciences of Gafsa",
      },
    },

    //------Projets de Fin d'Etudes (Cycle Ingénieur) 2023

    {
      annee: 2023,
      type: {
        ar: "مشروع تخرج",
        fr: "Projet de fin d'Etudes",
        en: "Graduation Project",
      },
      auteur: {
        ar: "بلاعي روعة",
        fr: "Balai Roua",
        en: "Balai Roua",
      },
      titre: {
        ar: "دراسة المجموعة الطفيلية التي تشمل Verticillium spp. و Meloidogyne spp. على الباذنجان",
        fr: "Etude du complexe parasitaire impliquant Verticillium spp. et Meloidogyne spp. sur aubergine",
        en: "Study of the parasitic complex involving Verticillium spp. and Meloidogyne spp. on eggplant",
      },
      specialite: {
        ar: " مشروع نهاية الدراسة للدورة الهندسية ",
        fr: "Projet de Fin d’Etudes du cycle ingénieur",
        en: "Final Year Project of the Engineering Program",
      },
      directeur: {
        ar: "هيفاء جبنون خير الدين",
        fr: ": Hayfa Jabnoun-Khiareddine.",
        en: ": Hayfa Jabnoun-Khiareddine.",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },

    {
      annee: 2023,
      type: {
        ar: "مشروع نهاية الدراسة للدورة الهندسية",
        fr: "Projet de Fin d’Etudes du cycle ingénieur",
        en: "Final Year Project of the Engineering Program",
      },
      auteur: {
        ar: "مسكيني سوسن",
        fr: "Meskini Sawsen",
        en: "Meskini Sawsen",
      },
      titre: {
        ar: " تأثير المحفزات الحيوية المستمدة من الطحالب البحرية على شدة الأمراض الفطرية الأرضية المعتمدة وعلى نمو البطاطس",
        fr: "Effet de biostimulants à base d’algues marines sur la sévérité des maladies fongiques d'origine tellurique et sur la croissance de la pomme de terre",
        en: "Effect of biostimulants based on marine algae on the severity of soil-borne fungal diseases and on the growth of potato",
      },
      specialite: {
        ar: " مشروع نهاية الدراسة للدورة الهندسية ",
        fr: "Projet de Fin d’Etudes du cycle ingénieur",
        en: "Final Year Project of the Engineering Program",
      },
      directeur: {
        ar: "هيفاء جبنون خير الدين",
        fr: ": Hayfa Jabnoun-Khiareddine.",
        en: ": Hayfa Jabnoun-Khiareddine.",
      },
      etablissement: {
        ar: "المدرسة العليا للفلاحة بالكاف",
        fr: "Ecole Supérieure d'Agriculture du kef",
        en: "Higher School of Agriculture of Kef",
      },
    },

    {
      annee: 2023,
      type: {
        ar: "مشروع نهاية الدراسة للدورة الهندسية",
        fr: "Projet de Fin d’Etudes du cycle ingénieur",
        en: "Final Year Project of the Engineering Program",
      },
      auteur: {
        ar: "دلول نور",
        fr: "Daldoul Nour",
        en: "Daldoul Nour",
      },
      titre: {
        ar: " إمكانية استخدام Bacillus amyloliquefaciens AG1 كوكيل بيولوجي لمكافحة الأمراض الفطرية الأرضية للبطاطس",
        fr: "Potentiel de Bacillus amyloliquefaciens AG1 comme agent de lutte biologique contre les maladies fongiques de la pomme de terre d’origine tellurique",
        en: "Potential of Bacillus amyloliquefaciens AG1 as a biological control agent against soil-borne fungal diseases of potato",
      },
      specialite: {
        ar: " مشروع نهاية الدراسة للدورة الهندسية ",
        fr: "Projet de Fin d’Etudes du cycle ingénieur",
        en: "Final Year Project of the Engineering Program",
      },
      directeur: {
        ar: "هيفاء جبنون خير الدين",
        fr: ": Hayfa Jabnoun-Khiareddine.",
        en: ": Hayfa Jabnoun-Khiareddine.",
      },
      etablissement: {
        ar: "المدرسة العليا للفلاحة بالكاف",
        fr: "Ecole Supérieure d'Agriculture du kef",
        en: "Higher School of Agriculture of Kef",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع نهاية الدراسة (PFE)، تخصص حماية النباتات للحصول على الشهادة الوطنية لمهندس فلاحي",
        fr: "Projet de Fin d’Etudes (PFE), specialite protection des plantes pour l’obtention du diplôme National d’un Ingénieur Agronome ",
        en: "Final Year Project (FYP), specialization in plant protection for obtaining the National Diploma of Agricultural Engineer ",
      },
      auteur: {
        ar: "ايمان بكوري",
        fr: "Imen Baccouri",
        en: "Imen Baccouri",
      },
      titre: {
        ar: " تأثير ميكروبيوم التربة على انتشار النباتات بالديدان الطفيلية النباتية من جنس Meloidogyne",
        fr: "Influence du microbiote du sol sur l’infestation des plantes par les nématodes phytoparasites du genre Meloidogyne",
        en: "Influence of soil microbiota on plant infestation by phytoparasitic nematodes of the genus Meloidogyne",
      },
      specialite: {
        ar: " مشروع التخرج",
        fr: "Projet de Fin d’Etudes (PFE)",
        en: "Final Year Project (FYP)",
      },
      directeur: {
        ar: "رانية عيادي بن عبد الله  و هاجر رقيق",
        fr: ": Rania Aydi Ben Abdallah & Hajer Regaieg",
        en: ": Rania Aydi Ben Abdallah & Hajer Regaieg",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "l’Institut Supérieur Agronomique de Chott-Mariem (ISA CM)",
        en: " Higher Agronomic Institute of Chott Mariem",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع نهاية الدراسة (PFE)، تخصص حماية النباتات للحصول على الشهادة الوطنية لمهندس فلاحي",
        fr: "Projet de Fin d’Etudes (PFE), specialite protection des plantes pour l’obtention du diplôme National d’un Ingénieur Agronome ",
        en: "Final Year Project (FYP), specialization in plant protection for obtaining the National Diploma of Agricultural Engineer ",
      },
      auteur: {
        ar: "رانية دبابي",
        fr: "Rana Dabbabi",
        en: "Rana Dabbabi",
      },
      titre: {
        ar: "المساهمة في التحقق من نموذج توقع حدوث دودة الثمار توتا الطماطم (Tuta absoluta) (Meyrick، 1917) على مزرعة طماطم تحت البيوت المحمية.",
        fr: "Contribution à la validation d’un modèle de prédiction de l’occurrence de la mineuse de la tomate Tuta absoluta (Meyrick, 1917) sur une culture de tomate conduite sous serre. ",
        en: "Contribution to the validation of a prediction model for the occurrence of the tomato leaf miner Tuta absoluta (Meyrick, 1917) on a greenhouse tomato crop.",
      },
      specialite: {
        ar: " مشروع التخرج",
        fr: "Projet de Fin d’Etudes (PFE)",
        en: "Final Year Project (FYP)",
      },
      directeur: {
        ar: "اسماء لعريف و ثامر بوسلامة",
        fr: ":Laarif Asma & Bouslama Thameur).",
        en: ": Laarif Asma & Bouslama Thameur).",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "l’Institut Supérieur Agronomique de Chott-Mariem (ISA CM)",
        en: " Higher Agronomic Institute of Chott Mariem",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع نهاية الدراسة (PFE)، تخصص حماية النباتات للحصول على الشهادة الوطنية لمهندس فلاحي",
        fr: "Projet de Fin d’Etudes (PFE), specialite protection des plantes pour l’obtention du diplôme National d’un Ingénieur Agronome ",
        en: "Final Year Project (FYP), specialization in plant protection for obtaining the National Diploma of Agricultural Engineer ",
      },
      auteur: {
        ar: "تقوى مهذبي",
        fr: "Takwa Mhadbi",
        en: "Takwa Mhadbi",
      },
      titre: {
        ar: "دراسة مقارنة بين طريقتين لحساب احتياجات الماء لزراعة الطماطم تحت البيوت المحمية",
        fr: "Contribution à la validation d’un modèle de prédiction de l’occurrence de la mineuse de la tomate Tuta absoluta (Meyrick, 1917) sur une culture de tomate conduite sous serre.",
        en: "Comparative study of two methods for calculating water requirements of a greenhouse tomato crop",
      },
      specialite: {
        ar: " مشروع التخرج",
        fr: "Projet de Fin d’Etudes (PFE)",
        en: "Final Year Project (FYP)",
      },
      directeur: {
        ar: "محسن منصور",
        fr: "Mohsen Mansour",
        en: "Mohsen Mansour",
      },
      etablissement: {
        ar: "مشروع نهاية الدراسة لدورة الهندسة في GSH",
        fr: " Projet de Fin d’Études du cycle ingénieur en GSH",
        en: " Final Year Project of the engineering cycle in GSH",
      },
    },

    {
      annee: 2023,
      type: {
        ar: "مشروع نهاية الدراسة لدورة الهندسة في الهندسة الكهروميكانيكية",
        fr: "Projet de Fin d’Etudes du cycle ingénieur en Génie électromécanique",
        en: "Final Year Project of the engineering cycle in Electromechanical Engineering",
      },
      auteur: {
        ar: "مهران عايدي",
        fr: "Mahran Aidi",
        en: "Mahran Aidi",
      },
      titre: {
        ar: "دراسة وتنفيذ محطة أرصاد جوية مخصصة لبيت زراعي",
        fr: "Étude et réalisation d'une station météorologique destinée à une serre horticole",
        en: "Study and implementation of a meteorological station intended for a horticultural greenhouse.",
      },
      specialite: {
        ar: " مشروع التخرج",
        fr: "Projet de Fin d’Etudes (PFE)",
        en: "Final Year Project (FYP)",
      },
      directeur: {
        ar: "محسن منصور",
        fr: "Mohsen Mansour",
        en: "Mohsen Mansour",
      },
      etablissement: {
        ar: "بوليتيكنيك  سوسة",
        fr: "École Polytechnique de Sousse",
        en: "Polytechnic School of Sousse",
      },
    },

    //------Projets professionnels de Fin d'Etudes (PPFEs) 2023

    {
      annee: 2023,
      type: {
        ar: "مشروع مهني لنهاية الدراسة في الدورة الجامعية التطبيقية",
        fr: "Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree Program",
      },
      auteur: {
        ar: "فتحية عبد الرحمان",
        fr: "Fathia Abderrahmen",
        en: "Fathia Abderrahmen",
      },
      titre: {
        ar: "توصيف مورفولوجي وإنتاج بذور مجموعة من البصل (Alliumcepa L.)",
        fr: "Caractérisation morphologique et production de semences d'une collection d’oignon (Alliumcepa L.)",
        en: "Morphological characterization and seed production of a collection of onion (Alliumcepa L.)",
      },
      specialite: {
        ar: "تخصص البستنة",
        fr: "specialite Horticulture",
        en: "Horticulture Specialty",
      },
      directeur: {
        ar: "هالة شيخ روحو",
        fr: ": CHIKH ROUHOU Hela",
        en: ": CHIKH ROUHOU Hela",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع مهني لنهاية الدراسة (PPFE)",
        fr: "Projet Professionnel de Fin d’Etudes (PPFE), ",
        en: "Professional End-of-Studies Project (PPFE)",
      },
      auteur: {
        ar: "مروان شوشان و امال بن منصور",
        fr: "Marouan Chouchane & Amal Ben Mansour",
        en: "Marouan Chouchane & Amal Ben Mansour",
      },
      titre: {
        ar: "توصيف العزلات البكتيرية المرتبطة بنبات الفول وتقييم تأثيرها المحفز للنمو على نبات غير العائل (الطماطم).",
        fr: "Caractérisation des isolats bactériens associés à la féverole et évaluation de leur effet promoteur de la croissance chez une plante non hôte (la tomate).",
        en: "Characterization of bacterial isolates associated with faba bean and evaluation of their growth-promoting effect on a non-host plant (tomato).",
      },
      specialite: {
        ar: "تخصص البستنة",
        fr: "specialite Horticulture",
        en: "Horticulture Specialty",
      },
      directeur: {
        ar: "رانية عايدي بن عبد الله و سليم سليم",
        fr: "Rania Aydi Ben Abdallah & Slim Slim. ",
        en: "Rania Aydi Ben Abdallah & Slim Slim. ",
      },
      etablissement: {
        ar: "المدرسة العليا للفلاحة بماطر",
        fr: " l'Ecole Supérieure d'Agriculture de Mateur (ESAM).",
        en: "Higher School of Agriculture of Mateur (ESAM).",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع مهني لنهاية الدراسة (PPFE)",
        fr: "Projet Professionnel de Fin d’Etudes (PPFE), cycle Licence Appliquée",
        en: "Professional End-of-Studies Project (PPFE)",
      },
      auteur: {
        ar: "فاطمة شاهد",
        fr: "Fatma Chahed",
        en: "Fatma Chahed",
      },
      titre: {
        ar: "دور البكتيريا المذيبة للفوسفات في تحسين نمو الطماطم وإدارة النيماتودا التي تسبب تعقد الجذور",
        fr: "Rôle des bactéries solubilisatrices du phosphate dans l’amélioration de la croissance de la tomate et la gestion des nématodes à galles",
        en: "Role of phosphate-solubilizing bacteria in improving tomato growth and managing root-knot nematodes",
      },
      specialite: {
        ar: "تخصص البستنة",
        fr: "specialite Horticulture",
        en: "Horticulture Specialty",
      },
      directeur: {
        ar: "رانية عايدي بن عبد الله و هاجر رقيق",
        fr: "Rania Aydi Ben Abdallah & Hajer Rgaieg.",
        en: "Rania Aydi Ben Abdallah & Hajer Rgaieg. ",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم الفلاحية بشط مريم",
        fr: "Institut Supérieur Agronomique de Chott Mariem",
        en: "Higher Institute of Agronomy of Chott Mariem",
      },
    },
    {
      annee: 2023,
      type: {
        ar: "مشروع نهاية الدراسة (PFE)، دورة الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين",
        fr: "Projet de Fin d’Etudes (PFE), cycle Licence Co-construite en Biotechnologie végétale et valorisation ",
        en: "Final Year Project (FYP), Joint Bachelor's Program in Plant Biotechnology and Valorization",
      },
      auteur: {
        ar: "مريم قصدالله",
        fr: "Mariem Gasdallah",
        en: "Mariem Gasdallah",
      },
      titre: {
        ar: " دراسة مقارنة للقدرة الحشرية للزيوت العطرية لنبات الشبت (Anethum graveolens) والشمر (Foeniculum vulgare)",
        fr: "Etude comparative du potentiel insecticide des huiles essentielles d’Anethum graveolens et de Foeniculum vulgare",
        en: "Comparative study of the insecticidal potential of essential oils from Anethum graveolens and Foeniculum vulgare",
      },
      specialite: {
        ar: "الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين",
        fr: "Licence Co-construite en Biotechnologie végétale et valorisation",
        en: "Joint Bachelor's Degree in Plant Biotechnology and Valorization",
      },
      directeur: {
        ar: "اقبال شايب و وفاء طيب",
        fr: "Ikbal Chaieb & Wafa Tayeb",
        en: "RIkbal Chaieb & Wafa Tayeb",
      },
      etablissement: {
        ar: "المعهد العالي للتكنولوجيا الحيوية بالمنستير",
        fr: "l'Institut Supérieur de Biotechnologie de Monastir",
        en: "Higher Institute of Biotechnology of Monastir",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع نهاية الدراسة (PFE)، دورة الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين",
        fr: "Projet de Fin d’Etudes (PFE), cycle Licence Co-construite en Biotechnologie végétale et valorisation ",
        en: "Final Year Project (FYP), Joint Bachelor's Degree Program in Plant Biotechnology and Valorization",
      },
      auteur: {
        ar: "مريم قصدالله",
        fr: "Mariem Gasdallah",
        en: "Mariem Gasdallah",
      },
      titre: {
        ar: "دراسة مقارنة للقدرة المبيدة للحشرات للزيوت العطرية من نبات الشبت (Anethum graveolens) ونبات الشمر (Foeniculum vulgare).",
        fr: "Etude comparative du potentiel insecticide des huiles essentielles d’Anethum graveolens et de Foeniculum vulgare",
        en: "Comparative study of the insecticidal potential of essential oils from Anethum graveolens and Foeniculum vulgare.",
      },
      specialite: {
        ar: "الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين",
        fr: "Licence Co-construite en Biotechnologie végétale et valorisation",
        en: "Joint Bachelor's Degree in Plant Biotechnology and Valorization",
      },
      directeur: {
        ar: "اقبال شايب و وفاء طيب",
        fr: "Ikbal Chaieb & Wafa Tayeb",
        en: "RIkbal Chaieb & Wafa Tayeb",
      },
      etablissement: {
        ar: "المعهد العالي للتكنولوجيا الحيوية بالمنستير",
        fr: "l'Institut Supérieur de Biotechnologie de Monastir",
        en: "Higher Institute of Biotechnology of Monastir",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع نهاية الدراسة (PFE)، دورة الإجازة المشتركة في التكنولوجيا الحيوية النباتية والتثمين",
        fr: "Projet de Fin d’Etudes (PFE), cycle Licence Co-construite en Biotechnologie végétale et valorisation ",
        en: " Final Year Project (FYP), Joint Bachelor's Degree Program in Plant Biotechnology and Valorization",
      },
      auteur: {
        ar: "ياسمين بودلال",
        fr: "Yessmine Boudlell",
        en: "Yessmine Boudlell",
      },
      titre: {
        ar: " التركيب الكيميائي، والنشاط المبيد للحشرات والفطري للزيت العطري المعزول من شجرة السرو الشائع في تونس (Cupressus sempervirens L.).",
        fr: "Composition chimique, activité insecticide et antifongique de l'huile essentielle isolée du cyprès commun de Tunisie (Cupressus sempervirens L.). ",
        en: "Chemical composition, insecticidal, and antifungal activity of the essential oil isolated from the common cypress of Tunisia (Cupressus sempervirens L.).",
      },
      specialite: {
        ar: ".............................",
        fr: "Licence Co-construite en Biotechnologie végétale et valorisation",
        en: "H.............................",
      },
      directeur: {
        ar: "اقبال شايب و وفاء طيب",
        fr: "Ikbal Chaieb & Wafa Tayeb",
        en: "RIkbal Chaieb & Wafa Tayeb",
      },
      etablissement: {
        ar: "المعهد العالي للتكنولوجيا الحيوية بالمنستير",
        fr: "l'Institut Supérieur de Biotechnologie de Monastir",
        en: "Higher Institute of Biotechnology of Monastir",
      },
    },
    {
      annee: 2023,
      type: {
        ar: " مشروع مهني لنهاية الدراسة في الإجازة التطبيقية في الهندسة الكهربائية والإلكترونية.",
        fr: "Projet Professionnel de Fin d'Etudes en Licence Appliquée en EEA",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree in EEA",
      },
      auteur: {
        ar: "رمال نابولي و ريهام نابولي",
        fr: "Rimel Nabouli & Rihem Nabouli",
        en: "Rimel Nabouli & Rihem Nabouli",
      },
      titre: {
        ar: "تصميم وتنفيذ مشروع لبيت زراعي ذكي",
        fr: "Conception et réalisation d’une serre agricole intelligente ",
        en: "Design and implementation of a smart agricultural greenhouse",
      },
      specialite: {
        ar: ".............................",
        fr: "Licence Co-construite en Biotechnologie végétale et valorisation",
        en: "H.............................",
      },
      directeur: {
        ar: "محسن منصور",
        fr: "Mohsen Mansour",
        en: "Mohsen Mansour",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم والتكنولوجيا بسوسة",
        fr: "ISSAT Sousse",
        en: "Higher Institute of Applied Sciences and Technology of Sousse (ISSAT Sousse)",
      },
    },

    {
      annee: 2023,
      type: {
        ar: "نظام نقل البيانات لشبكة لاسلكية",
        fr: "Système de transfert des données d'un réseau sans fils",
        en: " Wireless Data Transfer System",
      },
      auteur: {
        ar: "صفا ماجري و مروى عجيلي",
        fr: "Safa Mejri & Marwa Agili",
        en: "Safa Mejri & Marwa Agili",
      },
      titre: {
        ar: "مشروع مهني لنهاية الدراسة في دورة الإجازة التطبيقية",
        fr: "Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée ",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree Program ",
      },

      specialite: {
        ar: "نظام مضمن وإنترنت الأشياء (IoT)، الاتصالات",
        fr: "Système embarqué et IOT, télécommunication",
        en: "Embedded System and IoT (Internet of Things), Telecommunications",
      },

      directeur: {
        ar: "محسن منصور",
        fr: "Mohsen Mansour",
        en: "Mohsen Mansour",
      },
      etablissement: {
        ar: "المعهد العالي للعلوم التطبيقية والتكنولوجيا بسوسة",
        fr: "ISSAT Sousse",
        en: "Higher Institute of Applied Sciences and Technology of Sousse (ISSAT Sousse)",
      },
    },

    {
      annee: 2023,
      type: {
        ar: "مشروع مهني لنهاية الدراسة في الدورة الجامعية التطبيقية",
        fr: "Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée",
        en: " Professional End-of-Studies Project in Applied Bachelor's Degree Program",
      },
      auteur: {
        ar: "سوار عبيدي",
        fr: "Siwar Abidi",
        en: "Siwar Abidi",
      },
      titre: {
        ar: "تطبيق الري الناقص على شجرة الرمان",
        fr: "Application de l’irrigation déficitaire sur le grenadier",
        en: " Implementation of deficit irrigation on pomegranate",
      },

      specialite: {
        ar: "الإنتاج البستاني",
        fr: "Production Horticole. horticulture ",
        en: "Horticultural production",
      },

      directeur: {
        ar: "عماد بن عيسى",
        fr: "Imed Ben Aissa",
        en: "Imed Ben Aissa",
      },
      etablissement: {
        ar: "المعهد العالي للفلاحة  شط مريم (ISA CM)",
        fr: "l’Institut Supérieur Agronomique Chott-Mariem (ISA CM)",
        en: " Higher Agronomic Institute of Chott-Mariem (ISA CM)",
      },
    },

    {
      annee: 2023,
      type: {
        ar: " مشروع مهني لنهاية الدراسة في دورة الإجازة التطبيقية",
        fr: "Projet Professionnel de Fin d’Etudes en cycle Licence Appliquée",
        en: "Professional End-of-Studies Project in Applied Bachelor's Degree Program",
      },
      auteur: {
        ar: "ريم برهومي",
        fr: "Rym Barhoumi",
        en: "Rym Barhoumi",
      },
      titre: {
        ar: "تكييف مقياس BBCH الموسع لترميز المراحل الظاهرية لشجرة الرمان",
        fr: "Adaptation de l’échelle BBCH étendue pour coder les stades phénologiques du grenadier",
        en: "Adaptation of the extended BBCH scale for coding the phenological stages of the pomegranate",
      },

      specialite: {
        ar: "الإنتاج البستاني",
        fr: "Production Horticole. horticulture ",
        en: "Horticultural production",
      },

      directeur: {
        ar: "عماد بن عيسى",
        fr: "Imed Ben Aissa",
        en: "Imed Ben Aissa",
      },
      etablissement: {
        ar: "المعهد العالي  للفلاحة شط مريم (ISA CM)",
        fr: "l’Institut Supérieur Agronomique Chott-Mariem (ISA CM)",
        en: "the Higher Agronomic Institute of Chott-Mariem (ISA CM)",
      },
    },
  ];

  const headers = {
    auteur: {
      fr: "auteur",
      en: "author",
      ar: "المؤلف",
    },
    year: {
      fr: "année",
      en: "year",
      ar: "سنة",
    },
    titre: {
      fr: "titre",
      en: "title",
      ar: "العنوان",
    },
    type: {
      fr: "type",
      en: "type",
      ar: "النوع",
    },
    specialite: {
      fr: "Spécialité",
      en: "Specialty",
      ar: "التخصص",
    },
    etablissement: {
      fr: "Établissement",
      en: "Institution",
      ar: "المؤسسة",
    },
    directeur: {
      fr: "directeur",
      en: "president",
      ar: "المدير",
    },
  };

  useEffect(() => {
    filtredData.length < 1 && setFiltredData([...data]);
  }, []);
  useEffect(() => {}, [filtredData]);

  const dataColor = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("background", "gray.700");
  return (
    <Box
      w={{ base: "full", xl: "80dvw" }}
      mx={"auto"}
      bg={"background"}
      my={10}
      p={5}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Flex
        justify={"start"}
        align={"center"}
        py={3}
        px={10}
        bg="primary"
        _dark={{ bg: "secondary" }}
        borderRadius={10}
      >
        <Heading
          color={"white"}
          _dark={{ color: "#fff" }}
          fontSize={"xxl"}
          mb={0}
        >
          {language === "en"
            ? "Training Qualification"
            : language === "fr"
            ? "Formation Diplômante"
            : "تدريب مؤهل"}
        </Heading>
      </Flex>
      <Flex
        w="full"
        bg="background"
        p={50}
        alignItems="center"
        justifyContent="center"
        direction={"column"}
        gap={10}
        _dark={{
          bg: "background",
        }}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <AutoCompleteMade
          options={data}
          language={language}
          setFiltredData={setFiltredData}
        />
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={{ md: "primaryHover" }}
          shadow="lg"
          borderRadius={"lg"}
          p={3}
          _dark={{
            bg: "secondary",
          }}
        >
          {filtredData.map((element) => {
            return (
              <Flex
                direction={{ base: "row", md: "column" }}
                bg={dataColor}
                borderRadius={"xl"}
                key={element.date + "-" + element.titre.fr}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: Object.values(headers).length }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                  borderRadius={"xl"}
                >
                  <chakra.span maxW={"fit-content"}>
                    {headers.auteur[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.year[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.titre[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.type[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.specialite[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"}>
                    {headers.etablissement[language]}
                  </chakra.span>
                  <chakra.span maxW={"fit-content"} textAlign={{ md: "end" }}>
                    {headers.directeur[language]}
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: Object.values(headers).length }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                  columnGap="1rem" // Ajout d'un espace entre les colonnes
                >
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.auteur[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="wrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.annee}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    textOverflow="ellipsis"
                    alignItems="center"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.titre[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.type[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.specialite[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                  >
                    {element.etablissement[language]}
                  </chakra.span>
                  <chakra.span
                    display="flex"
                    alignItems="center"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    _hover={{
                      whiteSpace: "wrap",
                    }}
                    maxW="fit-content" // Définition d'une largeur minimale adaptée au contenu
                    textAlign={{ md: "end" }}
                  >
                    {element.directeur[language]}
                  </chakra.span>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
    </Box>
  );
};

const AutoCompleteMade = ({ options, language = "fr", setFiltredData }) => {
  //   const options = ["apple", "appoint", "zap", "cap", "japan"];
  let filtredData = [];
  const [text, setText] = useState("");
  let data = [];
  options.forEach((option) => {
    data.push(option.titre?.[language]);
    data.push(option.specialite?.[language]);
    data.push(option.annee);
    data.push(option.auteur?.[language]);
    data.push(option.etablissement?.[language]);
    data.push(option.directeur?.[language]);
  });
  data = [...new Set(data)];
  const changInputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const optionsFilter = () => {
    filtredData = options.filter((option) => {
      return (
        option.titre?.[language].toLowerCase().includes(text.toLowerCase()) ||
        option.auteur[language].toLowerCase().includes(text.toLowerCase()) ||
        option.specialite?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.etablissement?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.directeur?.[language]
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        option.annee == text.toLowerCase()
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
              <AutoCompleteInput
                variant="filled"
                bg="textHover"
                border="2px"
                borderColor="primary"
                _dark={{ borderColor: "secondary" }}
                placeholder="Search..."
              />
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
};

export default DiplomaCourse;
