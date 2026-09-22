"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import AddressForm from "@/components/AddressForm";

export default function AddressDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>إضافة عنوان</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-right">إضافة عنوان جديد</DialogTitle>
        </DialogHeader>

        <AddressForm />
      </DialogContent>
    </Dialog>
  );
}
