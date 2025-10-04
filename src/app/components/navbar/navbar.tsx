import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

export default function Navbar() {
    return (
        <nav>

            <div className="flex items-center justify-center w-screen">
              <div className="flex flex-col bg-white rounded-b-xl shadow-md w-4/4">

                <div className="flex justify-between">
                  <div className="flex-1/4 text-center">

                    <div className="flex items-center justify-center py-5 h-full">
                        <Link href="/">
                            <Image src="/Civa.avif" alt="logo civa" width={250} height={80} className='logo' />
                        </Link>
                    </div>

                  </div>
                  <div className="flex-3/4 text-center">
                  
                    <div className="flex items-center justify-end py-5 h-full pr-10">

                            <div className="flex-2/4 text-center"></div>
                            <div className="flex-2/4 text-center">
                                <Link href="/" className="px-3 texto-nav">Inicio</Link>
                            </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

        </nav>
    );
}