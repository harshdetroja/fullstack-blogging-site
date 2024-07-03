import { Link } from "react-router-dom";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await axios.post(
      "https://backend.deathflick2107.workers.dev/api/v1/user/signup",
      {
        email: email,
        password: password,
        name: name,
      }
    );

    console.log(res);
    localStorage.setItem("token", "Bearer " + res.data.token);
    navigate("/signin");
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8 shadow-md border-[1px] pt-4 pb-8 px-4 rounded-md">
          <div>
            <div className="flex justify-center">
              <MountainIcon className="h-12 w-auto text-primary" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or{" "}
              <Link
                to="/singin"
                className="font-medium text-primary hover:underline"
              >
                sign in to your existing account
              </Link>
            </p>
          </div>
          <div className="mt-8 space-y-6 ">
            <div className="space-y-4 rounded-md ">
              <div>
                <Label htmlFor="name" title={"Full Name"} />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <Label htmlFor="email" title={"Email Address"} />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  className="relative block w-full appearance-none rounded-none border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <Label htmlFor="password" title={"Password"} />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                title={"Sign Up"}
                onClick={handleSubmit}
                className="w-full justify-center rounded-md bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
