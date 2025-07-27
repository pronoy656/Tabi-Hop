

const MoodBoardDetails = () => {
  return (
    <div className="page">
        <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum 
has been the industry's standard dummy text ever since the 1500s,</h1> <img src="/dots.png" className="h-8" alt="" />
        </div>
  <div
  className="h-96 w-full rounded-2xl my-4"
  style={{
    backgroundImage: "url('/moodboard-gaalery.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

<h1 ></h1>

        </div>

        <div className="space-y-3 my-2">
            <h1 className="text-2xl font-semibold">Summary</h1>
            <p className="text-[#6D717F]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        <div className="space-y-1 mt-4">
            <h1 className="text-2xl font-semibold">Gallery Section</h1>
            <p className="text-[#6D717F]">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
        </div>
    </div>
  )
}

export default MoodBoardDetails