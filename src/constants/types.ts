export type TPrograms = {
  slug: {
    current: string;
  };
  url: string;
  title: string;
  theme: string;
  guestMinister: string;
  contactInfo: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  link: string;
  date: string;
  info: string;
};

export type TLive = {
  title: string;
  url: string;
  programTheme?: string;
  ministering?: string;
  date: string;
  // timeStart?: string;
  // duration?: number;
  // description?: string;
};
