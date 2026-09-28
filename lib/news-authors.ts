export type NewsAuthorPerson = {
  id: string;
  name: string;
  photo: string;
};

export const NEWS_AUTHORS: NewsAuthorPerson[] = [
  {
    id: "fabian",
    name: "Fabián Acuña",
    photo: "/assets/images/Team/Fabian.jpg",
  },
  {
    id: "eymar",
    name: "Eymar Ortiz",
    photo: "/assets/images/Team/Eymar.jpg",
  },
  {
    id: "kirian",
    name: "Kirian Luna",
    photo: "/assets/images/Team/Kirian.jpg",
  },
];

export function resolveNewsAuthors(
  authors?: { id?: string; name: string; photo?: string }[],
): NewsAuthorPerson[] {
  if (!authors?.length) return [];

  const resolved: NewsAuthorPerson[] = [];
  const seen = new Set<string>();
  for (const author of authors) {
    const id = author.id?.trim().toLowerCase();
    const byId = id
      ? NEWS_AUTHORS.find((person) => person.id === id)
      : undefined;
    const name = author.name.trim().toLowerCase();
    const byName = name
      ? NEWS_AUTHORS.find((person) => {
          const full = person.name.toLowerCase();
          return full === name || full.startsWith(name) || name.startsWith(full);
        })
      : undefined;
    const person = byId || byName;
    if (person) {
      if (seen.has(person.id)) continue;
      seen.add(person.id);
      resolved.push(person);
      continue;
    }

    const fallbackId = author.id || author.name.trim();
    if (author.name.trim() && !seen.has(fallbackId)) {
      seen.add(fallbackId);
      resolved.push({
        id: fallbackId,
        name: author.name.trim(),
        photo: author.photo || "",
      });
    }
  }
  return resolved;
}
