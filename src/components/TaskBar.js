import { LINKDIN_URL,GITHUB_URL,YOUTUBE_URL, LEETCODE_URL } from "../data/data";

function TaskBar(){

    return (
      <footer className="bg-[#1a1a1a] text-gray-300 py-10 px-6 md:px-16">
  <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
    
    {/* Logo and Quote */}
    <div>
      <h1 className="text-3xl font-extrabold text-white font-cabin mb-4">AK</h1>
      <p className="text-sm text-gray-400 max-w-sm">
        The ability to find the root cause of any issue makes a good developer!
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-youtube text-xl"></i>
        </a>
      </div>
    </div>

    {/* Myself */}
    <div>
      <h3 className="text-green-500 font-semibold mt-6 md:mt-0 mb-3">Myself</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href={LINKDIN_URL} target="_blank" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-green-500 font-semibold mt-6 md:mt-0 mb-3">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href={YOUTUBE_URL} target="_blank" className="hover:text-white">Tutorials</a></li>
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-green-500 font-semibold mt-6 md:mt-0 mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href={LINKDIN_URL} target="_blank" className="hover:text-white">LinkedIn</a></li>
        <li><a href={GITHUB_URL} target="_blank" className="hover:text-white">GitHub</a></li>
        <li><a href={LEETCODE_URL} target="_blank" className="hover:text-white">LeetCode</a></li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Arun Kumar | All rights reserved
  </div>
</footer>

    
  )

}

export default TaskBar;