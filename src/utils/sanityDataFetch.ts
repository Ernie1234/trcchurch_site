export const programQuery = `*[_type == 'programs'] | order(_createAt desc) {
    image{
      asset -> {
        url
      }
    },
    slug{
      current
    },
    destination,
   title,
   category,
   guestMinister,
   date,
   programUrl,
   contactInfo,
   theme
}`;
export const programDetails = (slug: string) => {
  const query = `*[_type == 'programs' && slug.current == '${slug}'] | order(_createAt desc) {
    image{
      asset -> {
        url
      }
    },
    slug{
      current
    },
    destination,
   title,
   category,
   guestMinister,
   date,
   programUrl,
   contactInfo,
   theme
  }`;
  return query;
};

export const liveQuery = `*[_type == 'liveVideo'] | order(_createAt desc) {
   title,
   url,
   programTheme,
   date
}`;
