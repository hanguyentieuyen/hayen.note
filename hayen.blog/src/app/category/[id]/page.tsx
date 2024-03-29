import Category from "@/components/category";

const getBlogsByCategory = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/category?categoryId=${id}`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data.status) return data.data;
};
export default async function CategoryPage({ params }: { params: {id : string} }) {
  const { id } = params;
  const blogsByCategory = await getBlogsByCategory(id);
  return <Category blogs={blogsByCategory}/>
}
