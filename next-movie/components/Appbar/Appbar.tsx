import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

const Appbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex gap-6 text-lg font-medium">
        <Link className="text-lg font-semibold md:text-base" href="/">
          Movies
        </Link>
        <Link className="text-lg font-semibold md:text-base" href="/fnb">
          Food & Beverage
        </Link>
        <Link className="text-lg font-semibold md:text-base" href="/offers">
          Offers
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-6 w-5" />
            <span className="sr-only"> Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white drop-shadow p-2">
          <DropdownMenuItem>My Account</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Purchases</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Appbar;
