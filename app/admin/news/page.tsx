import { getAdminNews } from "./actions";
import { NewsClientPage } from "./client-page";

export default async function AdminNewsPage() {
  const news = await getAdminNews();
  return <NewsClientPage initialNews={news} />;
}
