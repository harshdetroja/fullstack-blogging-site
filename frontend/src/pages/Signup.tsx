import { Link } from "react-router-dom";

export function Signup() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <Link href="#" className="flex justify-center" prefetch={false}>
              <MountainIcon className="h-12 w-auto text-primary" />
            </Link> */}
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
          <form className="mt-8 space-y-6" action="#" method="POST">
            {/* <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="relative block w-full appearance-none rounded-none border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
            </div> */}
            <div>
              {/* <Button
                type="submit"
                className="w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign up
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
