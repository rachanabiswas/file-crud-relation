"use client";

import { StudentFormSchema, studentFormSchema } from "@/lib/zodSchema";
import createStudent from "@/server/createStudent";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Teacher } from "../../../generated/prisma/client";
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

type CreateStudentFormProps = {
  teacherList: Teacher[];
};

const CreateStudentForm = ({ teacherList }: CreateStudentFormProps) => {
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
    // setValue,
    // clearErrors,
  } = useForm({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      teacherId: "",
    },
    mode: "all",
  });

  const submitHandeler = async (data: StudentFormSchema) => {
    const { isSuccess, message } = await createStudent(data);

    await new Promise((r) => setTimeout(r, 1000));

    if (isSuccess) {
      toast.success(message);

      reset();

      push("/");
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
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter your email"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Gender</FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="w-full">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="teacherId"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Teachers</FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="w-full">
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {teacherList.map(({ id, name, subject }) => (
                  <SelectItem
                    key={id}
                    value={id}>
                    {`${name} (${subject})`}
                  </SelectItem>
                ))}
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

export default CreateStudentForm;
