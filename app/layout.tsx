import "../styles/globals.css";
import GlobalNav from "./GlobalNav";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Sachiel & Shaheen Online Store</title>
      </head>
      <body className="overflow-y-scroll bg-white">
        <GlobalNav />
        <div>{children}</div>
      </body>
    </html>
  );
}

{
  /* with border sample

<div className="rounded-xl border border-zinc-800 bg-white p-8">
          
</div>
<br />
<div className="col-start-3 space-y-6">
  <div className="rounded-xl border border-zinc-800 bg-white p-8">
    {children}
  </div>
</div> */
}
