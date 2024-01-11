interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4"  style={{ background: '#f6f6f6'}}>
      <div style={{ marginTop: '50px'}}>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
