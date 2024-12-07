const Sidebar = ({handleAdd}) => {
   const number = 10;
    return (
        <div>
            <button onClick={() => handleAdd(number)}>Tambahkan</button>
        </div>
    )
}

export default Sidebar