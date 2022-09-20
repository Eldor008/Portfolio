import React from "react";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import Vector1 from "./img/Vector1.svg";
import Vector2 from "./img/Vector2.svg";


export default function Contact() {
  return (
    <div className="portfolio">
      <div className="portfolio_title">
        <div className="portfolio_title_t">
          portfolio
          <div className="portfolio_subtitle">latest works</div>
        </div>
      </div>
      <div className="portfolio_row">
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img1} alt="" />
          </div>
          <h1>magazine front design</h1>
        </div>
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img2} alt="" />
          </div>
          <h1>coffee bottle mockup</h1>
        </div>
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img3} alt="" />
          </div>
          <h1>coffee bottle mockup</h1>
        </div>
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img4} alt="" />
          </div>
          <h1>product bottle design</h1>
        </div>
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img5} alt="" />
          </div>
          <h1>product bottle design</h1>
        </div>
        <div className="portfolio_row_col">
          <div className="portfolio_row_col_image">
            <img src={img6} alt="" />
          </div>
          <h1>magazine & brochure mOckup</h1>
        </div>
        <div className="portfolio_row_col">
          <button>
            view all portfolio
            {" "}
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.06445 8.18945L9.18945 5.06445C9.31315 4.94727 9.375 4.80078 9.375 4.625C9.375 4.44922 9.31315 4.30273 9.18945 4.18555L6.06445 1.06055C5.94727 0.936849 5.80078 0.875 5.625 0.875C5.44922 0.875 5.30273 0.936849 5.18555 1.06055C5.06185 1.17773 5 1.32422 5 1.5C5 1.67578 5.06185 1.82227 5.18555 1.93945L7.23633 4H1.25C1.07422 4 0.924479 4.06185 0.800781 4.18555C0.683594 4.30273 0.625 4.44922 0.625 4.625C0.625 4.80078 0.683594 4.95052 0.800781 5.07422C0.924479 5.19141 1.07422 5.25 1.25 5.25H7.23633L5.18555 7.31055C5.12044 7.36914 5.07161 7.4375 5.03906 7.51562C5.01302 7.59375 5 7.67188 5 7.75C5 7.82812 5.01302 7.90625 5.03906 7.98438C5.07161 8.0625 5.12044 8.13086 5.18555 8.18945C5.30273 8.31315 5.44922 8.375 5.625 8.375C5.80078 8.375 5.94727 8.31315 6.06445 8.18945Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="quote_block">
        <div className="quote_block_item">
          <img src={Vector1} alt="" />
        </div>
        <div className="quote_block_item">
          <h1>quote of the day</h1>
          <p>“Success is not final; failure is not fatal: it is the courage to continue that counts.”</p>
          <h6>-Winston Churchill</h6>
        </div>
        <div className="quote_block_item">
        <img src={Vector2} alt="" />
        </div>
      </div>
    </div>
  );
}
