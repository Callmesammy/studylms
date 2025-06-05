"use client";
import { Input } from "@/components/ui/input";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchHere = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") ?? " ";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["topic"],
        });

        router.push(newUrl, { scroll: false });
      }
    }, 5000);
  }, [params, router, searchParams, searchQuery]);
  return (
    <div className="w-52 p-1 items-center  gap-1 rounded-md border flex">
      <CiSearch className="size-7" />

      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search here..."
        className="text-sm italics border-0"
      />
    </div>
  );
};

export default SearchHere;
