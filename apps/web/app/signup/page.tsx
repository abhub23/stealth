"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface PageProps extends React.ComponentProps<"form"> {
  searchParams?: Record<string, string>;
}

export function Page({
  className,
  searchParams: _searchParams,
  ...props
}: PageProps) {

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleGoogleLogin = async () => { };

  const handleEmailPasswordSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData(e.currentTarget);
      const firstName = String(form.get("firstName") || "").trim();
      const lastName = String(form.get("lastName") || "").trim();
      const email = String(form.get("email") || "").trim();
      const password = String(form.get("password") || "");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center p-4 pt-16 pb-6 overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-medium mb-2">Create an account</h1>
            <p className="text-muted-foreground text-sm">
              Enter your details to get started
            </p>
          </div>

          <form
            className={cn("flex flex-col gap-4", className)}
            {...props}
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
                    className="!bg-transparent h-10 text-base rounded-none border border-white/20"
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
                    className="!bg-transparent h-10 text-base rounded-none border border-white/20"
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
                  className="!bg-transparent h-10 text-base rounded-none border border-white/20"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="!bg-transparent h-10 text-base rounded-none border border-white/20"
                />
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-white text-black hover:bg-white/90 h-10 text-base"
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
                  onClick={handleGoogleLogin}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 h-10 text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-5"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </Field>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-foreground transition-all duration-300 bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom pb-0.5 hover:bg-[length:100%_1px]"
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
        <Link href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">Terms of Service</Link>
        {" "}&amp;{" "}
        <Link href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">Privacy Policy</Link>
      </p>
    </div>
  );
}

export default Page;
