
export const PrimaryButton = ({onClick, children} : {
    onClick: () => void,
    children: React.ReactNode
}) => {
    return(
        <button onClick={onClick} className="px-4 py-2 shadow-md rounded-lg  mr-3 bg-black text-white">
            {children}
        </button>
    )
}

// px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"