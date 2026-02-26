import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        The page you’re looking for doesn’t exist. Let’s get you back home.
      </p>
      <div className="mt-6 flex justify-center">
        <Button asChild>
          <a href="/">Go to Homepage</a>
        </Button>
      </div>
    </div>
  );
}
