import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="border cursor-pointer bg-neutral-600 font-semibold">
      <AvatarImage src="" alt="" />
      <AvatarFallback>AD</AvatarFallback>
    </Avatar>
  );
}
