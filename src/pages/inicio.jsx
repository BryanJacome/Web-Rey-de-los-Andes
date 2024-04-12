import Spline from "@splinetool/react-spline";

export default function Inicio() {
    return (
        <div className="bg-gradient-to-tr from-pikfe7 to-geern80e p-2">
            <div className="bg-[white]/60 dark:bg-[black]/60 flex flex-col mdx:flex-row  md:justify-start p-5 items-center content-center h-screen 
             rounded-lg">
                <article className="flex flex-col justify-center text-center h-full mt-32 mdx:mt-0">
                    <h3 className="text-4xl md:text-6xl text-[black]/80 dark:text-[white] font-noto font-bold cursor-default text-shadow-white">Helados</h3>
                    <p className="text-6xl md:text-8xl text-[black]/80 dark:text-[white]  font-noto font-bold cursor-default">Rey de los Andes</p>
                    <p className="italic text-2xl text-sky263 dark:text-[white]/80  cursor-default">Orgullo y tradicion de <a className="font-bold">Salcedo</a></p>
                </article>
                <div className="hidden mdx:flex">
                    <Spline scene="https://prod.spline.design/5xqEq7Jb7xyg52Ze/scene.splinecode" />
                </div>
                <div className="flex mdx:hidden">
                    <Spline scene="https://prod.spline.design/g9EVklubVT7AU-6U/scene.splinecode" />
                </div>
            </div>
        </div>
    );
} 