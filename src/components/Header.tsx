type HeaderProps = {
    title: string,
    des: string
}
const Header = ({ title, des }: HeaderProps) => {
    return (
        <div className="flex flex-col  items-start justify-start md:items-center w-full sm:w-[28rem]  md:justify-center gap-3">
            <h2 className="text-darkBlue font-[800] text-4xl sm:text-5xl border-b-2 border-darkBlue w-fit sm:mx-auto ">{title}</h2>
            <p className="text-bodytext text-base text-start sm:text-center">{des}</p>
        </div>
    )
}

export default Header