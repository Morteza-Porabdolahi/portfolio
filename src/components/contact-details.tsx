import { useLocale, useTranslations } from "next-intl";
import Title from "./ui/title";

export default function ContactDetails() {
  const t = useTranslations("Contact.ContactDetails");
  const locale = useLocale();

  return (
    <div className="flex-1">
      <Title
        className="mt-20 md:mt-0 md:text-left"
        text={[t("title.normal-part"), t("title.bold-part")]}
      />
      <ul className="flex flex-col gap-4">
        <li>
          <span className="mb-4 block uppercase text-gray-500">
            {t("email-label")}
          </span>
          <span className="ml-2 text-gray-400">
            mortezaporabdolahi@gmail.com
          </span>
        </li>
        <li>
          <span className="mb-4 block uppercase text-gray-500">
            {t("phone-label")}
          </span>
          <span className="ml-2 text-gray-400">
            {locale === "fa" ? "۹۱۴۶۷۵۷۴۹۲ ۹۸+" : "+98 9146757492"}
          </span>
        </li>
      </ul>
    </div>
  );
}
