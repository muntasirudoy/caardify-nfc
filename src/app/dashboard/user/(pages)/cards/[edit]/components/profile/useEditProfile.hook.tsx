import {
    type FieldArrayPath,
    useFieldArray, useForm
} from "react-hook-form";
import { type ProfileFormValues, profileSchema } from "./profile-schema";
import { zodResolver } from "@hookform/resolvers/zod";


export type UseEditProfileReturn = {
    formValues: {
        register: ReturnType<typeof useForm<ProfileFormValues>>["register"];
        control: ReturnType<typeof useForm<ProfileFormValues>>["control"];
        watch: ReturnType<typeof useForm<ProfileFormValues>>["watch"];
        handleSubmit: ReturnType<typeof useForm<ProfileFormValues>>["handleSubmit"];
        errors: ReturnType<typeof useForm<ProfileFormValues>>["formState"]["errors"];
        isStudent: boolean;
        emailFields: ReturnType<typeof useFieldArray<ProfileFormValues>>["fields"];
        appendEmail: ReturnType<typeof useFieldArray<ProfileFormValues>>["append"];
        removeEmail: ReturnType<typeof useFieldArray<ProfileFormValues>>["remove"];
        websiteFields: ReturnType<typeof useFieldArray<ProfileFormValues>>["fields"];
        appendWebsite: ReturnType<typeof useFieldArray<ProfileFormValues>>["append"];
        removeWebsite: ReturnType<typeof useFieldArray<ProfileFormValues>>["remove"];
        appendPhone: ReturnType<typeof useFieldArray<ProfileFormValues>>["append"];
        removePhone: ReturnType<typeof useFieldArray<ProfileFormValues>>["remove"];
        phoneFields: ReturnType<typeof useFieldArray<ProfileFormValues>>["fields"];
    };
};
export const useEditProfile = (): UseEditProfileReturn => {

    const {
        register,
        control,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            fullName: "",
            username: "",
            designation: "",
            school: "",
            company: "",
            about: "",
            emails: [],
            phones: [],
            address: "",
            websites: [],
        },
    });

    const designation = watch("designation");
    const isStudent = designation?.toLowerCase() === "student";

    const {
        fields: emailFields,
        append: appendEmail,
        remove: removeEmail,
    } = useFieldArray<ProfileFormValues>({
        control,
        name: "emails" as FieldArrayPath<ProfileFormValues>,
    });

    const {
        fields: phoneFields,
        append: appendPhone,
        remove: removePhone,
    } = useFieldArray<ProfileFormValues>({
        control,
        name: "phones" as FieldArrayPath<ProfileFormValues>,
    });

    const {
        fields: websiteFields,
        append: appendWebsite,
        remove: removeWebsite,
    } = useFieldArray<ProfileFormValues>({
        control,
        name: "websites" as FieldArrayPath<ProfileFormValues>,
    });
    return {
        formValues: {
            register,
            control,
            watch,
            handleSubmit,
            errors,
            isStudent,
            emailFields,
            appendEmail,
            removeEmail,
            websiteFields,
            appendWebsite,
            removeWebsite,
            appendPhone,
            removePhone,
            phoneFields
        }
    }
}
