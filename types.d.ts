type Project = {
  id: string;
  image: string;
  title: string;
  languages: string;
  codeLink: string;
  isDeployed: boolean;
  deployedLink: string;
};

type Article = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string | undefined;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  published_timestamp: string;
  reading_time_minutes: number;
};

type Certifications = {
  array: Array<Certification>;
};

type Certification = {
  image: string;
  title: string;
  origin: string;
  date: string;
  link: string;
  stared: boolean;
};
