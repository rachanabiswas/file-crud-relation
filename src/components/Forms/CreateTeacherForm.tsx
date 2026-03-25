"use client";

import { TeacherFormSchema, teacherFormSchema } from "@/lib/zodSchema";
import createTeacher from "@/server/createTeacher";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const CreateTeacherForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
    // setValue,
    // clearErrors,
  } = useForm({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      name: "",
      subject: "",
    },
    mode: "all",
  });

  const submitHandeler = async (data: TeacherFormSchema) => {
    const { isSuccess, message } = await createTeacher(data);

    await new Promise((r) => setTimeout(r, 1000));

    if (isSuccess) {
      toast.success(message);

      reset();

      push("/create");
    } else {
      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandeler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter your full name"
              autoComplete="given-name"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="subject"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Subjects</FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="w-full">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">Bengali</SelectItem>
                <SelectItem value="Bengali">English</SelectItem>
                <SelectItem value="Bengali">Math</SelectItem>
                <SelectItem value="Bengali">Geography</SelectItem>
                <SelectItem value="Math">History</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer">
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" /> Submitting..
          </>
        : <>
            <SendIcon /> Submit
          </>
        }
      </Button>
    </form>
  );
};

export default CreateTeacherForm;
