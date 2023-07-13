import Image from "next/image";
import directus from "../../../lib/directus";
import { revalidateTag } from "next/cache";

export default async function CTACard() {

  async function fromAction(fromAction: FormData) {
    "use server"
    try{
      const getEmail = fromAction.get("email")
      await directus.items("subscribers").createOne({
        email: getEmail
      })
      revalidateTag("subscribers")
    }catch(error){
      console.log(error)
    }
  }

  const numberSubscribers = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta_count&access_token=${process.env.ADMIN_TOKEN}`,{
    next: {
      tags: ["subscribers"]
    }
  })
    .then (res => res.json())
    .then (data => data.data.length)
    .catch(error => console.log(error))

  return (
    <div className="rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 z-10" />
      <Image
        fill
        alt="CTA Card"
        className="object-center object-cover"
        src="https://img.freepik.com/photos-gratuite/trainee-etoiles-brillantes-illumine-fond-sombre-galaxie-dans-espace-genere-par-ia_24640-93206.jpg?w=1380&t=st=1688290807~exp=1688291407~hmac=4612e059a1c285cb3b08aa9a4fd348f3ab5c734cd23b13e984dd3c7a36d69c6b"
      />
      <div className="relative z-20">
        <div className="font-medium text-lg">#IloveAIandMaths</div>
        <h3 className="text-4xl mt-3 font-semibold">
          Explore computer science with me!
        </h3>
        <p className="mt-2 max-w-lg text-lg">
          Explore all you can do with me! I am a computer science student 💻 at
          the University of Stanford 🇺🇸. I love to explore the world of computer
          science and I am here to share my knowledge with you 🫡 !
        </p>
        <form action={fromAction} className="mt-6 flex items-center gap-2 w-full">
          <input
            name="email"
            type="email"
            placeholder="Write your email..."
            className="bg-white md:w-auto w-full text-base rounded-md py-2 px-3 outline-none placeholder:text-sm ring-neutral-600 focus:ring-2"
          />
          <button className="px-3 py-2 bg-neutral-900 text-neutral-200 whitespace-nowrap rounded-md">
            Sign Up
          </button>
        </form>
        <div className="mt-5 text-neutral-700">
            Join <span className="bg-neutral-700 text-sm text-neutral-100 px-2 py-1 rounded-md">{numberSubscribers}</span> members in our community !
        </div>
      </div>
    </div>
  );
}
