"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { emailSignUp, googleSignIn } from "@/lib/client-auth";

export default function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailPasswordSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = new FormData(e.currentTarget);
      const firstName = String(form.get("firstName") || "").trim();
      const lastName = String(form.get("lastName") || "").trim();
      const email = String(form.get("email") || "").trim();
      const password = String(form.get("password") || "");

      const name = `${firstName} ${lastName}`.trim();
      const { error } = await emailSignUp(name, email, password);

      if (error) {
        setError(error.message || "Failed to create account");
        return;
      }

      toast.success("Account created successfully");
      router.push("/");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center overflow-y-auto p-4 pt-16 pb-6">
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-4 text-center">
            <h1 className="mb-2 font-medium text-3xl">Create an account</h1>
            <p className="text-muted-foreground text-sm">Enter your details to get started</p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleEmailPasswordSignup}>
            <FieldGroup className="rounded-lg p-6">
              <div className="flex gap-4">
                <Field className="flex-1">
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="!bg-transparent h-12 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                  />
                </Field>

                <Field className="flex-1">
                  <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="!bg-transparent h-12 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="xyz@gmail.com"
                  required
                  className="!bg-transparent h-12 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="!bg-transparent h-12 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              {error && <p className="text-center text-destructive text-sm">{error}</p>}

              <Field>
                <Button
                  type="submit"
                  className="h-12 w-full cursor-pointer rounded-full text-base text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Creating account <Loader2 className="ml-2 size-4 animate-spin" />
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </Field>

              <div className="relative my-0">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-border border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Field>
                <Button
                  type="button"
                  onClick={googleSignIn}
                  className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full text-base text-primary-foreground"
                >
                  <Image
                    src="/icons/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="size-5"
                  />
                  Continue with Google
                </Button>
              </Field>

              <p className="text-center text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link href="/signin" className="transition-colors hover:text-foreground">
                  Sign in
                </Link>
              </p>
            </FieldGroup>
          </form>
        </div>
      </div>

      <p className="mt-6 shrink-0 text-center text-muted-foreground text-sm">
        By signing in you agree to our{" "}
        <Link
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Terms
        </Link>{" "}
        &amp;{" "}
        <Link
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
