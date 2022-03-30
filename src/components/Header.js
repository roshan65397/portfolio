// import { signIn, useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { modalState } from "../atoms/modalAtom";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between  max-w-6xl">
        {/* left */}
        <div className="relative w-24">
          <img
            src="https://links.papareact.com/ocw"
            alt=""
            // objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

// const { data: session } = useSession();
// const [open, setOpen] = useRecoilState(modalState);
// const router = useRouter();
