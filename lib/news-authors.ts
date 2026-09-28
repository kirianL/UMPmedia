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
  for (const author of authors) {
    const id = author.id?.trim().toLowerCase();
    const byId = id
      ? NEWS_AUTHORS.find((person) => person.id === id)
      : undefined;
    if (byId) {
      resolved.push(byId);
      continue;
    }

    const name = author.name.trim().toLowerCase();
    const byName = NEWS_AUTHORS.find((person) => {
      const full = person.name.toLowerCase();
      return (
        full === name ||
        full.includes(name) ||
        name.includes(person.id) ||
        name.includes(full.split(" ")[0])
      );
    });

    if (byName) {
      resolved.push(byName);
      continue;
    }

    if (author.name.trim()) {
      resolved.push({
        id: author.id || author.name,
        name: author.name.trim(),
        photo: author.photo || "",
      });
    }
  }
  return resolved;
}
