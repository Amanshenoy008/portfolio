import './globals.css'

export const metadata = {
  title: 'Aman Shenoy | Portfolio',
  description: 'MS Cybersecurity @ GMU – Front-End + Security Projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
