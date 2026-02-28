import { login } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <Card className="w-full max-w-md shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold tracking-tight">
            UMPmedia Admin
          </CardTitle>
          <p className="text-center text-sm text-zinc-500">
            Enter your credentials to access the dashboard
          </p>
        </CardHeader>
        <form action={login}>
          <CardContent className="space-y-4">
            {searchParams.error && (
              <div className="bg-red-50 dark:bg-red-900/20 p-3 border border-red-200 dark:border-red-900 rounded-md text-sm text-red-600 dark:text-red-400 text-center">
                {searchParams.error}
              </div>
            )}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="admin@umpmedia.com"
                className="bg-white dark:bg-zinc-950"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="bg-white dark:bg-zinc-950"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full font-semibold">Sign In</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
