import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation('about');
  return (
    <div>{t("О Сайте")}</div>
  )
}

export default About