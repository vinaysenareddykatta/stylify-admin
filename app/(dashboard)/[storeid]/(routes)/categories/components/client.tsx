"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeid}/categories/new`)}
        >
          <Plus className="mr-2 w-4 h-40" />
          Add New
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};
