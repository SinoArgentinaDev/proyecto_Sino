
export const Navbar = ({texto1, texto2, texto3, texto4}) => {
    return (
        <>
            <ul className="hidden sm:flex text-lg sm:w-[538px] sm:space-x-8 sm:place-content-center sm:text-[16px] sm:items-center text-[#545454] tracking-wide " >
                <li>
                    <a href="#">{texto1}</a>
                </li>
                <li>
                    <a href="#">{texto2}</a>
                </li>
                <li>
                    <a href="#">{texto3}</a>
                </li>
                <li>
                    <a href="#">{texto4}</a>
                </li>
            </ul>
        </>
    )
}
