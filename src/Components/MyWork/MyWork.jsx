// import React from 'react'
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <>
              <a href="https://github.com/jainik12345" target="_blank">
                <img key={index} src={work.w_img} alt="" />
              </a>
            </>
          );
        })}
      </div>
      <a href="https://github.com/jainik12345" target="_blank">
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};
{
  /* <img src={arrow_icon} alt="" /> */
}
export default MyWork;
