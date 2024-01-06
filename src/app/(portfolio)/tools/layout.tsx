import type { Metadata } from 'next';
import { cn } from 'src/utils';

export const metadata: Metadata = {
  title: 'Tools | Sekhudin',
  description: `Explore the tools I use to enhance project productivity and quality.
  From programming languages to development utilities, discover resources that support
  creativity and efficiency at every stage of development.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
