export const Model = () => {
  return (
    <div className="bg-white">
      <div className="container m-auto py-[90px] ">
        <div className=" text-center ">
          <h2 className="text-[#0C1842] text-[40px] leading-[40px] font-bold mb-2">
            Build with the Model name API
          </h2>
          <p className="text-[#4E4F52] font-normal text-[16px] leading-[20px]">
            Easily integrate Google’s largest and most capable AI model to your
            apps
          </p>
        </div>
        <div className="bg-[#A7F8D7] border-width-[1px] rounded-md b-color-[#2584F4] mt-9 overflow-hidden">
          <div className="flex">
            <div className="">
              <ul className="w-[174px] text-center">
                <li className="px-3 py-3 bg-[#A7F8D7] text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#51E4A8]">
                  Node js
                </li>
                <li className="bg-[#51E4A8] px-3 py-3 text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#A7F8D7]">
                  Python
                </li>
                <li className="bg-[#51E4A8] px-3 py-3 text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#A7F8D7]">
                  Rest
                </li>
                <li className="bg-[#51E4A8] px-3 py-3 text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#A7F8D7]">
                  Go
                </li>
                <li className="bg-[#51E4A8] px-3 py-3 text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#A7F8D7]">
                  Java
                </li>
                <li className="bg-[#51E4A8] px-3 py-3 text-[#0C1842] text-[16px] font-bold cursor-pointer hover:bg-[#A7F8D7]">
                  Swift
                </li>
              </ul>
            </div>
            <div className="p-5">
              <p className="text-[#4E4F52]">
                import google.generativeai as genai <br /> import PIL.Image{" "}
                <br />
                import os <br /> <br />{" "}
                genai.configure(api_key=os.environ["GOOGLE_API_KEY"]) <br />
                img = PIL.Image.open('path/to/image.png')
                <br />
                model = genai.GenerativeModel(model_name="gemini-1.5-flash")
                response = model.generate_content(["What is in this photo?",
                img]) print(response.text)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
