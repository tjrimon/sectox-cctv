import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faUser,
  faComments,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import blogImg1 from "../../../images/blog/blog-1.png";
import blogImg2 from "../../../images/blog/blog-2.png";
import blogImg3 from "../../../images/blog/blog-3.png";

const Blog = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
        <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
        <p className="text-center">Blog</p>
        <hr className="ml-3 border-[1px]  border-primary w-8 " />
      </div>
      <h3 className="text-[35px] text-center pb-3 lg:text-[60px] font-bold">
        Company Blog & Insight
      </h3>
      <div className="py-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div className=" w-[350px]  lg:w-[400px]">
          <img className="mx-auto" src={blogImg1} alt="" />
          {/* Blog Content*/}
          <div className="p-6 border mt-[-115px] pt-36 border-gray-300">
            <div className="flex items-center">
              <p className="text-gray-500 text-[14px]">
                <FontAwesomeIcon className="mr-3" icon={faUser} />
                Alex Dowson
              </p>
              <span className="px-5 text-gray-500 text-sm">|</span>
              <p className="text-gray-500 mr-5 text-sm">
                <FontAwesomeIcon className="mr-3" icon={faComments} />
                23 Comments
              </p>
            </div>
            <h3 className="text-[24px] py-2 font-bold">
              Why should business payroll outsourcing?
            </h3>
            <p className="text-gray-500 mr-5 text-sm">
              CCTV stands for Closed Circuit Television. It is a video system
              that consists of strategically placed video cameras.
            </p>
            <button className="font-bold text-sm flex items-center gap-1 py-3">
              Read More
              <FontAwesomeIcon
                className="pl-1"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className=" w-[350px]  lg:w-[400px]">
          <img className="mx-auto" src={blogImg2} alt="" />
          {/* Blog Content*/}
          <div className="p-6 border mt-[-115px] pt-36 border-gray-300">
            <div className="flex items-center">
              <p className="text-gray-500 text-[14px]">
                <FontAwesomeIcon className="mr-3" icon={faUser} />
                Alex Dowson
              </p>
              <span className="px-5 text-gray-500 text-sm">|</span>
              <p className="text-gray-500 mr-5 text-sm">
                <FontAwesomeIcon className="mr-3" icon={faComments} />
                23 Comments
              </p>
            </div>
            <h3 className="text-[24px] py-2 font-bold">
              Why should business payroll outsourcing?
            </h3>
            <p className="text-gray-500 mr-5 text-sm">
              CCTV stands for Closed Circuit Television. It is a video system
              that consists of strategically placed video cameras.
            </p>
            <button className="font-bold text-sm flex items-center gap-1 py-3">
              Read More
              <FontAwesomeIcon
                className="pl-1"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className=" w-[350px]  lg:w-[400px]">
          <img className="mx-auto" src={blogImg3} alt="" />
          {/* Blog Content*/}
          <div className="p-6 border mt-[-115px] pt-36 border-gray-300">
            <div className="flex items-center">
              <p className="text-gray-500 text-[14px]">
                <FontAwesomeIcon className="mr-3" icon={faUser} />
                Alex Dowson
              </p>
              <span className="px-5 text-gray-500 text-sm">|</span>
              <p className="text-gray-500 mr-5 text-sm">
                <FontAwesomeIcon className="mr-3" icon={faComments} />
                23 Comments
              </p>
            </div>
            <h3 className="text-[24px] py-2 font-bold">
              Why should business payroll outsourcing?
            </h3>
            <p className="text-gray-500 mr-5 text-sm">
              CCTV stands for Closed Circuit Television. It is a video system
              that consists of strategically placed video cameras.
            </p>
            <button className="font-bold text-sm flex items-center gap-1 py-3">
              Read More
              <FontAwesomeIcon
                className="pl-1"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
