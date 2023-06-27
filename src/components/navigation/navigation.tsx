import Link from "next/link";
import PaddinContainer from "../layouts/padding-container";


export default function Navigation(){

    return (
        <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md">
            <PaddinContainer>
                <div className="py-5 flex items-center justify-between">
                    <Link className="font-bold test-lg" href="/" >Explorer</Link>
                    {/* Category Links */}
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-500">
                            <li>
                                <Link href="/cities">Cities</Link>
                            </li>
                            <li>
                                <Link href="/experiences">Experiences</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddinContainer>
        </div>
    )
}