export default function sitemap() {
  const baseUrl = "https://rotexbd.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contactUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // We can add dynamic products or categories here once the database is connected
  ];
}
