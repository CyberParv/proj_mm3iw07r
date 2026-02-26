'use client';

import { Button } from '@/components/ui/button';

export default function Error() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
      <h1 className="text-3xl font-semibold text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-slate-600">
        We couldn’t load the page. Please try again or return home.
      </p>
      <div className="mt-6 flex justify-center">
        <Button asChild>
          <a href="/">Go to Homepage</a>
        </Button>
      </div>
    </div>
  );
}
