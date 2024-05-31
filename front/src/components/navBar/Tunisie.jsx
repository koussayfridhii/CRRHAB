import { useColorMode } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Tunisie = () => {
  const usedTheme = useSelector((state) => state.colorMode.theme);
  const language = useSelector((state) => state.language.language);
  const { colorMode } = useColorMode();
  return (
    <div
      className="Ministere"
      style={{
        direction: `${language === "ar" ? "rtl" : "ltr"}`,
        backgroundColor: usedTheme.colors.background,
        borderBottom: `1px solid ${usedTheme.colors.primaryHover}`,
      }}
    >
      <div className="logoFlex">
        <img className="TunisieLogo" src="/assets/images/tunisie.png" />
        <a href="http://www.agriculture.tn/" target="_blank">
          <img
            className="TunisieLogo"
            src="/assets/images/Logo_Ministère_de_l'Agriculture_(Tunisie).png"
          />
        </a>
        <a
          href={`http://iresa.agrinet.tn/index.php/${
            language === "ar" ? "ar" : "fr"
          }/`}
          target="_blank"
        >
          <img
            className="TunisieLogo"
            src="/assets/images/logoIRESA_couleur_fr.png"
          />
        </a>
        {/* <span style={{ fontSize: usedTheme.fontSizes.sm }}>
          {language === "fr" ? (
            <>
              République Tunisienne <br />
              Ministère de l’Agriculture, <br />
              des Ressources Hydrauliques <br />
              et de la Pêche
            </>
          ) : language === "ar" ? (
            <>
              الجمهورية التونسية <br />
              وزارة الــفــلاحــة <br />
              والموارد المائية
              <br />
              والصيد البحري
            </>
          ) : (
            <>
              Tunisian Republic <br />
              The Minister of Agriculture,
              <br />
              Hydraulic Resources
              <br />
              and fishing
            </>
          )}
        </span> */}
      </div>
      <h1
        style={{
          color: `${
            colorMode === "light"
              ? usedTheme.colors.primary
              : usedTheme.colors.secondary
          }`,
          fontSize: usedTheme.fontSizes?.xxxxl,
        }}
      >
        {language === "fr" ? (
          <>
            Centre Régional des Recherches <br /> en Horticulture et Agriculture
            Biologique
          </>
        ) : language === "en" ? (
          <>
            Regional Research Center
            <br />
            in Horticulture and Organic Agriculture
          </>
        ) : (
          <>
            المركز الجهوي للبحوث <br /> في البستنة و الفلاحة البيولوجية
          </>
        )}
      </h1>
      <img className="CRRHABLogo" src="/assets/images/logoCRRHABWithName.jpg" />
    </div>
  );
};

export default Tunisie;
