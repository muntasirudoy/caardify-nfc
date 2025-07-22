import * as z from "zod"

export const profileSchema = z
    .object({
        username: z
            .string()
            .min(1, "Username is required")
            .regex(
                /^[a-z_]+$/,
                "Username must be lowercase letters and underscores only"
            ),
        designation: z.string().min(1, "Designation is required"),
        school: z.string().optional(),
        company: z.string().optional(),
        about: z.string().optional(),
        emails: z.array(z.string().email("Invalid email address")).optional(),
        phones: z.array(z.string().min(1, "Phone number is required")).optional(),
        websites: z.array(z.string()).optional(),
        address: z.string().optional().default('Your address here'),
        template: z.string(),
        fullName: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        const isStudent = data.designation.toLowerCase() === "student";

        if (!data.username) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Username is required",
            });
        }

        // Enforce underscore between two words in username
        if (
            data.username &&
            data.username.includes(" ") &&
            !/^([a-z]+_[a-z]+)$/.test(data.username)
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Use underscore between two words in username",
                path: ["username"],
            });
        }

        if (!isStudent && !data.company) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Company is required for non-students",
                path: ["company"],
            });
        }
    });

export type ProfileFormValues = z.infer<typeof profileSchema>

