"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { emailSignUp, googleSignIn } from "@/lib/client-auth";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleEmailPasswordSignup = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
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
    <div className="h-screen flex flex-col items-center p-4 pt-16 pb-6 overflow-y-auto">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-medium mb-2">Create an account</h1>
            <p className="text-muted-foreground text-sm">
              Enter your details to get started
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleEmailPasswordSignup}
          >
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
                    className="!bg-transparent h-12 text-base rounded-md border border-border focus-visible:border-border focus-visible:ring-0"
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
                    className="!bg-transparent h-12 text-base rounded-md border border-border focus-visible:border-border focus-visible:ring-0"
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
                  className="!bg-transparent h-12 text-base rounded-md border border-border focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="!bg-transparent h-12 text-base rounded-md border border-border focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}

              <Field>
                <Button
                  type="submit"
                  className="w-full cursor-pointer text-primary-foreground h-12 text-base rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Creating account{" "}
                      <Loader2 className="ml-2 size-4 animate-spin" />
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </Field>

              <div className="relative my-0">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Field>
                <Button
                  type="button"
                  onClick={googleSignIn}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 text-primary-foreground h-12 text-base rounded-full"
                >
                  <img src="/icons/google.svg" alt="Google" className="size-5" />
                  Continue with Google
                </Button>
              </Field>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="hover:text-foreground transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </FieldGroup>
          </form>
        </div>
      </div>

      <p className="shrink-0 mt-6 text-center text-sm text-muted-foreground">
        By signing in you agree to our{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Terms
        </Link>{" "}
        &amp;{" "}
        <Link
          href="#"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}