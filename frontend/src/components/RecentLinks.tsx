export interface RecentLinkData {
  id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date: string;
}

interface RecentLinksProps {
  links: RecentLinkData[];
}

export function RecentLinks({ links }: RecentLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="mt-24 w-full w-full">
      <h2 className="font-serif text-2xl text-foreground mb-6">Recent Links</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 text-sm font-sans">
              <th className="py-4 font-normal font-medium">Original URL</th>
              <th className="py-4 font-normal font-medium">Short URL</th>
              <th className="py-4 font-normal font-medium">Clicks</th>
              <th className="py-4 font-normal font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="font-sans text-foreground">
            {links.map((link) => (
              <tr
                key={link.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-4 pr-4 max-w-[200px] md:max-w-xs truncate" title={link.originalUrl}>
                  {link.originalUrl}
                </td>
                <td className="py-4 pr-4">
                  <a
                    href={`/${link.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    /{link.shortUrl}
                  </a>
                </td>
                <td className="py-4 pr-4 text-gray-600">{link.clicks}</td>
                <td className="py-4 text-gray-500 text-sm">{link.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
