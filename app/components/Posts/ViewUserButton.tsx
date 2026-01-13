"use client"

interface ViewUserButtonProps {
  id: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({id}) => {
  const handleClick = () => alert(`ID: ${id}`);
  return (
    <button onClick={handleClick}>Lihat User</button>
  )
}

export default ViewUserButton