import Navbar from "@/components/navbar"

const ProjectDetail = () => {
  return (
    <div className="p-10 absolute w-full min-h-full bg-[url('/backmain.jpg')] bg-cover bg-center bg-no-repeat">
      <Navbar />

      {/* Project Preview */}
      <div className="max-w-6xl mx-auto mt-10 rounded-2xl border-black overflow-hidden shadow-lg">
        <img
          src="/zomato.jpg"
          alt="Project Preview"
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="bg-black rounded-2xl p-6 max-w-6xl mx-auto mt-10 grid grid-cols-3 gap-10">

        {/* Left */}
        <div className="col-span-2 space-y-6">
          <h1 className="text-3xl text-white font-semibold">
            AI Portfolio Builder
          </h1>

          <p className="text-gray-400 leading-relaxed">
            A platform where developers can generate stunning portfolios
            using AI. Users can customize, deploy, and share instantly.
          </p>

          {/* Tech Stack */}
          <div className="flex gap-3 text-white">
            {["React", "Tailwind", "Node", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="bg-white/5 p-6 rounded-2xl space-y-5">
          {/* Creator */}
          <div className="flex items-center gap-4">
            <img
              src="/user.jpg"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">Bhavisha Kumar</p>
              <p className="text-gray-400 text-sm">Frontend Developer</p>
            </div>
          </div>

          {/* Rating */}
          <div>
            <p className="text-sm text-gray-400 mb-1">Rate this project</p>
            <div className="flex gap-1 text-xl cursor-pointer">
              ⭐ ⭐ ⭐ ⭐ ⭐
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-black py-2 rounded-xl font-medium">
              Like
            </button>
            <button className="flex-1 bg-white/10 py-2 rounded-xl">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className=" max-w-6xl mx-auto mt-14">
        <h2 className="text-xl font-semibold mb-6">
          Suggestions & Reviews
        </h2>

        <div className="space-y-4 text-white">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-black p-5 rounded-xl"
            >
              <div className="flex justify-between mb-2">
                <p className="font-medium">User{i}</p>
                <span className="text-yellow-400">⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-400">
                UI looks great! Maybe add dark/light mode toggle.
              </p>
            </div>
          ))}
        </div>

        {/* Add Suggestion */}
        <div className="mt-8 flex gap-3">
          <input
            type="text"
            placeholder="Write your suggestion..."
            className="flex-1 bg-black text-white px-4 py-3 rounded-xl outline-none"
          />
          <button className="bg-white text-black px-6 rounded-xl">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
