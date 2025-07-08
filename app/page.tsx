import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the default locale (Thai)
  redirect('/th');

  // This part will never be executed due to the redirect
  return null;
}
