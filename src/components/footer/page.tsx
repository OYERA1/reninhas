import { ClassTypes } from "@/app/layout";

export default function FooterRenas({ className }: ClassTypes) {
  return (
    <span className={`mt-auto mb-4 text-center ${className}`}>
      Feito com ❤️ pelo seu namorado favorito!
    </span>
  );
}
