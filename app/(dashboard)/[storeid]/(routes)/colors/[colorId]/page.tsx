import prismadb from "@/lib/prismadb";

import { ColorForm } from "./components/color-form";

const SizePage = async ({ params }: { params: { colorId: string } }) => {
  let size = null;
  if (params.colorId !== "new") {
    size = await prismadb.color.findUnique({
      where: {
        id: params?.colorId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
