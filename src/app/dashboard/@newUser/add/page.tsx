"use client";

import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

export default function New() {
  const router = useRouter();
  return (
    <div className="px-5 mt-10">
      <Dialog.Root defaultOpen>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-black space-y-5"
            onInteractOutside={() => router.back()}
          >
            <h1>Add New User</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              commodi labore, aperiam sint earum repellat nisi debitis iure
              alias natus.
            </p>
            <form className="grid space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="jdoe@gmail.com"
                className="p-3 rounded-lg border border-gray-600"
              />
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
