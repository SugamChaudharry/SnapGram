import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(3, { message: "Name must we at least 4 character's long" }),
  username: z.string().min(3, { message: "UserName must we at least 4 character's long" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must we at least 8 character's long" }),
});
