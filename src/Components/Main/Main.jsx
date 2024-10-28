import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <>
      <div className="Main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello..!!</span>
                  <p>How Can I Help you today?</p>
                </p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest beautiful places to visit</p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>Briefly Suggest beautiful places to visit</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>Brainstorm for the day</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>Improve the readability of your code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  resultData && (
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  )
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div>
                {/* <img src={assets.gallery_icon} alt="" /> */}
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img
                    src={assets.send_icon}
                    alt=""
                    onClick={() => onSent()}
                    className="transition"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info,including about people,so
              double-check its responses.Your privacy and Gemini Apps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
