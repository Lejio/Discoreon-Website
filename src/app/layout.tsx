import './globals.css'


export const metadata = {
  title: 'Discoreon',
  description: 'Invite the all new, advanced, full stack pokemon bot to your server to spice things up!',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
