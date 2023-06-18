export default function RootLayout({
  children,
  newUser,
}: {
  children: React.ReactNode;
  newUser: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{newUser}</div>
    </div>
  );
}
