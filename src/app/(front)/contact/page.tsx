import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl pt-16 pb-10">
        <h2 className="text-red-500 text-3xl">Contact us สวัสดี</h2>
        <p>hello contact สวัสดี</p>
        <Separator className="mt-5" />
        <div className="m-10">
          <Button variant="outline" asChild>
            <Link href='/'>df</Link>
          </Button>

        </div>
    </main>
  );
}