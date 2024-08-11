import { parsePhoneNumber } from "libphonenumber-js/mobile";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { locales } from "../i18n";

const phoneNumber = z.string().transform((value, ctx) => {
  try {
    const phoneNumber = parsePhoneNumber(value, "IR");

    if (!phoneNumber.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid phone number!",
      });

      return z.NEVER;
    }

    return phoneNumber.formatInternational();
  } catch (e) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify a phone number!",
    });
  }
});

export const formSchema = zfd.formData(
  z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name should be a text",
      })
      .min(5, { message: "Name should be at least 5 characters" })
      .max(20, { message: "Name should be at most 20 characters" }),
    email: z.string().email("Please specify an email !"),
    phone: phoneNumber,
    message: z
      .string({
        required_error: "Message is required",
        invalid_type_error: "Message should be a text",
      })
      .min(4, { message: "Message should be at least 4 characters" })
      .max(200, { message: "Message should be at most 200 characters" }),
  }),
);

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  source_code_url: string;
  image: string;
  description: string;
};

export type formSchemaType = z.infer<typeof formSchema>;
export type Locale = (typeof locales)[number];
