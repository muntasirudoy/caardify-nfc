"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { deleteProductById } from "@/actions/product";

type Props = {
  productId: string;
};

export default function DeleteProductButton({ productId }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteProductById(productId);
      toast.success("Product deleted successfully");
      setOpen(false);

      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Trash2 className="h-4 w-4 text-red-600" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-secondary text-black text-2xl text-center">
              Are you sure?
            </DialogTitle>
          </DialogHeader>
          <p className="font-secondary text-xl text-black text-center">
            Are you sure you want to delete this product? <br /> This action
            cannot be undone.{" "}
          </p>
          <DialogFooter className="mt-4 flex justify-end gap-2 ">
            <Button
              variant="ghost"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
