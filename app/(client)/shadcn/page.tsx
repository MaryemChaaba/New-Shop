import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllBlogs, getCategories } from "@/sanity/queries";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"




async function Shadcnpage() {
  const categories = await getCategories();

  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default Shadcnpage
