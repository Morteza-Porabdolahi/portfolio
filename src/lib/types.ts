import { parsePhoneNumber } from "libphonenumber-js/mobile";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { locales } from "../i18n";

const phoneNumber = (t: (arg: string) => string) =>
  z.string().transform((value, ctx) => {
    try {
      const phoneNumber = parsePhoneNumber(value, "IR");

      if (!phoneNumber.isValid()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("errors.phone.invalid"),
        });

        return z.NEVER;
      }

      return phoneNumber.formatInternational();
    } catch (e) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t("errors.phone.required"),
      });
    }
  });

export const formBaseSchema = (t: (arg: string) => string) => {
  return zfd.formData(
    z.object({
      name: z
        .string({
          required_error: t("errors.name.required"),
          invalid_type_error: t("errors.name.invalid"),
        })
        .min(5, { message: t("errors.name.min") })
        .max(20, { message: t("errors.name.max") }),
      email: z.string().email(t("errors.email")),
      phone: phoneNumber(t),
      message: z
        .string({
          required_error: t("errors.message.required"),
          invalid_type_error: t("errors.message.invalid"),
        })
        .min(4, { message: t("errors.message.min") })
        .max(200, { message: t("errors.message.max") }),
    }),
  );
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  source_code_url: string;
  image: string;
  description: string;
};

export type Locale = (typeof locales)[number];
