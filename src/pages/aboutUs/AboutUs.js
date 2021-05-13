import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    <div className="about-us bg-about-us">
      <div className="container">
        <div className="row box-first">
          <div className="black-box">
            <h2 className="why-us">Why Us</h2>
            <div className="why-us-content">
              <p>
                เราคือ AgTech  Startup ที่สร้างเครื่องมือที่ให้คนในสังคมเมืองและสังคมเกษตรกรรมสามารถใช้ในชีวิตประจำวัน
                เพื่อเชื่อมโยงผู้คนในสังคมเมือง สู่วิถีชีวิตของสังคมเกษตรกร 
                ร่วมติดตามกิจกรรมวิถีเกษตรแต่ละภูมิภาคผ่านแพลตฟอร์ม
              </p>

              <p>
                Food Navigator เพิ่มช่องทางการสร้างเครือข่ายการกระจายผลผลิตในท้องถิ่นไปยังทั่วโลก Food Navigator
                จะกลายเป็นส่วนหนึ่งของชีวิตประจำวันของคนทั่วโลก เราทำให้เกษตรกรสามารถสร้างตัวตนบนโลกดิจิทัล
                เกิดการแบ่งปันข้อมูลที่เป็นประโยชน์มากขึ้น สามารถสร้างเครือข่ายเศรษฐกิจในท้องถิ่น
                และสร้างโอกาสให้กับผู้คนนับล้าน ได้เข้าถึงแหล่งผลิตอาหารที่มีคุณภาพจากท้องถิ่นต่างๆทั่วโลก
                และสามารถสร้างผลกระทบที่เกิดขึ้นต่อเศรษฐกิจ เราเป็นแรงผลักดันและขับเคลื่อนให้โลกใบนี้น่าสนใจขึ้นด้วย
                Food Navigator
              </p>

              <p>
                “เราหากันเจอ” ให้ Food Navigator นำทุกท่านไปพบกับของดีของเด่นในแต่ละท้องถิ่นทั่วโลก
                สามารถค้นหาสินค้าเกษตรคุณภาพดีใกล้ตัว หรือนำทางพาไปถึงฟาร์ม หรือจะ Delivery ส่งตรงถึงบ้าน
              </p>
            </div>
          </div>
          <div className="green-box"></div>
          <div className="iphone-box"></div>
          <div className="button-box"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
