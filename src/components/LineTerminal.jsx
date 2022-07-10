export const LineTerminal = ({ message }) => {
  return (
    <div className="mt-0.5 flex">
        <span className="text-green-400">GOJA:~$</span>
        <p className="flex-1 typing items-center pl-2">
            { message }
        </p>
    </div>
  )
}
