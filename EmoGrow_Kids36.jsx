import { useState } from "react";

const CARDS = [
  { id:1,  emo:"happy",  icon:"🍦", situation:"ได้กินไอศกรีม",        body:"ยิ้มกว้างมากเลย!",     color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:2,  emo:"sad",    icon:"🧸", situation:"ตุ๊กตาหาย",            body:"อยากร้องไห้",           color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:3,  emo:"angry",  icon:"🍪", situation:"น้องแย่งคุกกี้",       body:"มือกำแน่นเลย",          color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:4,  emo:"scared", icon:"⛈️", situation:"ฟ้าร้องดังมาก",        body:"วิ่งหาแม่เลย",          color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:5,  emo:"happy",  icon:"🎂", situation:"วันเกิดของหนู",        body:"กระโดดดีใจ!",           color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:6,  emo:"sad",    icon:"🏠", situation:"แม่ออกไปทำงาน",        body:"อยากให้แม่อยู่ด้วย",   color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:7,  emo:"angry",  icon:"🧱", situation:"บล็อกล้มหมดเลย",       body:"อยากกรี๊ดดัง ๆ",       color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:8,  emo:"scared", icon:"🐶", situation:"หมาตัวใหญ่วิ่งมา",    body:"หัวใจเต้นแรงมาก",      color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:9,  emo:"happy",  icon:"🛝", situation:"ไปเล่นสนามเด็กเล่น",  body:"อยากวิ่งเล่นตลอด!",    color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:10, emo:"sad",    icon:"🎈", situation:"ลูกโป่งหลุดลอยไป",    body:"รู้สึกเสียดายมาก",      color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:11, emo:"angry",  icon:"👥", situation:"เพื่อนแซงคิว",         body:"อยากบอกว่า 'ไม่ยุติธรรม!'", color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:12, emo:"scared", icon:"💉", situation:"หมอจะฉีดยา",           body:"อยากซ่อนตัว",          color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:13, emo:"happy",  icon:"🐱", situation:"แมวมานอนตัก",         body:"อยากลูบมันตลอดเลย",    color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:14, emo:"sad",    icon:"🤕", situation:"หกล้มเข่าถลอก",       body:"ปวดแล้วก็อยากร้องไห้", color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:15, emo:"angry",  icon:"📺", situation:"พ่อปิดทีวีกลางคัน",   body:"อยากพูดว่า 'เดี๋ยวก่อน!'", color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:16, emo:"scared", icon:"🌑", situation:"ไฟดับมืดสนิท",        body:"อยากให้มีคนจับมือ",     color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:17, emo:"happy",  icon:"🫧", situation:"เล่นน้ำฝนกับเพื่อน", body:"หัวเราะไม่หยุด!",       color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:18, emo:"sad",    icon:"🐟", situation:"ปลาทองตาย",           body:"อยากร้องไห้ให้มัน",     color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:19, emo:"angry",  icon:"🎨", situation:"เพื่อนทำงานศิลปะพัง", body:"อยากบอกว่า 'หนูทำเอง!'", color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:20, emo:"happy",  icon:"🥞", situation:"ทำแพนเค้กกับแม่",    body:"ภูมิใจมากเลย!",         color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:21, emo:"scared", icon:"👹", situation:"เห็นหน้ากากน่ากลัว", body:"อยากวิ่งหนีเลย",        color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:22, emo:"sad",    icon:"🚌", situation:"ไม่ได้ไปทัศนศึกษา",  body:"น้ำตาจะไหลแล้ว",       color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:23, emo:"happy",  icon:"⭐", situation:"ครูติดดาวให้หนู",     body:"อยากโชว์พ่อแม่เลย!",   color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:24, emo:"angry",  icon:"🪀", situation:"ของเล่นถูกเอาไปโดยไม่บอก", body:"อยากพูดว่า 'ขอก่อนนะ!'", color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:25, emo:"scared", icon:"🛁", situation:"น้ำในอ่างเยอะมาก",   body:"กลัวจมน้ำ",            color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:26, emo:"happy",  icon:"🌈", situation:"เห็นสายรุ้งหลังฝนตก", body:"ว้าว! สวยมากเลย!",    color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
  { id:27, emo:"sad",    icon:"🛌", situation:"นอนไม่หลับคืนเดียวดาย", body:"อยากให้มีคนนอนเป็นเพื่อน", color:"#74B9FF", dark:"#003580", light:"#E8F4FF" },
  { id:28, emo:"angry",  icon:"🍽️", situation:"ต้องกินผักที่ไม่ชอบ", body:"อยากบอกว่า 'ไม่อยากกิน!'", color:"#FF7675", dark:"#6D0000", light:"#FFE8E8" },
  { id:29, emo:"scared", icon:"🏊", situation:"ลงสระว่ายน้ำครั้งแรก", body:"ขาสั่น ใจสั่น",      color:"#A29BFE", dark:"#2D006E", light:"#F0EEFF" },
  { id:30, emo:"happy",  icon:"👨‍👩‍👧", situation:"ครอบครัวมาพร้อมหน้า", body:"อบอุ่นมากเลย!",      color:"#FFD93D", dark:"#7A4F00", light:"#FFF5CC" },
];

const EMO = {
  happy:    { label:"ดีใจ",  face:"😊", tip:"บอกคนที่รักว่าดีใจนะ!" },
  sad:      { label:"เศร้า", face:"😢", tip:"ร้องไห้ได้ แล้วขอกอดแม่นะ" },
  angry:    { label:"โกรธ", face:"😠", tip:"หายใจลึก ๆ แล้วบอกด้วยคำพูด" },
  scared:   { label:"กลัว", face:"😨", tip:"บอกผู้ใหญ่ที่ไว้ใจได้เลย" },
};

export default function App() {
  const [flipped, setFlipped]   = useState({});
  const [filter, setFilter]     = useState("all");

  const toggle = (id) => setFlipped(f => ({ ...f, [id]: !f[id] }));

  const shown = filter === "all" ? CARDS : CARDS.filter(c => c.emo === filter);

  const filters = [
    { key:"all",     label:"ทั้งหมด 🃏" },
    { key:"happy",   label:"ดีใจ 😊" },
    { key:"sad",     label:"เศร้า 😢" },
    { key:"angry",   label:"โกรธ 😠" },
    { key:"scared",  label:"กลัว 😨" },
  ];

  return (
    <div style={{
      minHeight:"100vh",
      background:"#FFF9F0",
      fontFamily:"'Segoe UI', Tahoma, sans-serif",
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background:"#2B2D42",
        padding:"20px 16px 16px",
        textAlign:"center",
        borderBottom:"5px solid #FFD93D",
      }}>
        <div style={{ fontSize:"28px", fontWeight:900, color:"#FFD93D", letterSpacing:2 }}>
          🌟 EmoGrow
        </div>
        <div style={{ color:"white", fontSize:"15px", marginTop:4 }}>
          การ์ดอารมณ์ สำหรับเด็ก 3–6 ปี
        </div>
        <div style={{ color:"#AAA", fontSize:"12px", marginTop:4 }}>
          แตะการ์ดเพื่อดูว่าร่างกายรู้สึกยังไง 👆
        </div>

        {/* stat chips */}
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:12, flexWrap:"wrap" }}>
          {[
            { label:"😊 ดีใจ",  n: CARDS.filter(c=>c.emo==="happy").length,  bg:"#FFD93D", fg:"#7A4F00" },
            { label:"😢 เศร้า", n: CARDS.filter(c=>c.emo==="sad").length,    bg:"#74B9FF", fg:"#003580" },
            { label:"😠 โกรธ",  n: CARDS.filter(c=>c.emo==="angry").length,  bg:"#FF7675", fg:"#6D0000" },
            { label:"😨 กลัว",  n: CARDS.filter(c=>c.emo==="scared").length, bg:"#A29BFE", fg:"#2D006E" },
          ].map(s=>(
            <div key={s.label} style={{
              background:s.bg, color:s.fg,
              borderRadius:16, padding:"4px 14px",
              fontSize:12, fontWeight:700,
            }}>{s.label} · {s.n} ใบ</div>
          ))}
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div style={{
        background:"white",
        padding:"10px 16px",
        display:"flex", gap:8, flexWrap:"wrap",
        borderBottom:"1px solid #EEE",
        position:"sticky", top:0, zIndex:10,
        boxShadow:"0 2px 8px #0001",
      }}>
        {filters.map(f=>(
          <button key={f.key} onClick={()=>setFilter(f.key)} style={{
            padding:"6px 16px", borderRadius:20, border:"none",
            cursor:"pointer", fontSize:12, fontWeight:700,
            background: filter===f.key ? "#2B2D42" : "#F0F0F0",
            color:       filter===f.key ? "white"   : "#555",
            transition:"all .15s",
          }}>{f.label}</button>
        ))}
        <div style={{marginLeft:"auto", fontSize:12, color:"#AAA", alignSelf:"center"}}>
          {shown.length} ใบ
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <div style={{
        display:"flex", flexWrap:"wrap",
        gap:14, padding:"20px 16px 40px",
        justifyContent:"center",
      }}>
        {shown.map(card => {
          const ef  = EMO[card.emo];
          const isF = !!flipped[card.id];
          return (
            <div key={card.id} onClick={()=>toggle(card.id)}
              style={{
                width:175, borderRadius:22,
                cursor:"pointer", userSelect:"none",
                transition:"transform .18s, box-shadow .18s",
                transform: isF ? "scale(1.05) translateY(-4px)" : "scale(1)",
                boxShadow: isF
                  ? `0 14px 36px ${card.color}55`
                  : "0 3px 14px #00000015",
              }}>
              <div style={{
                background: isF ? card.light : "white",
                border:`3px solid ${card.color}`,
                borderRadius:20,
                padding:"14px 12px 12px",
                display:"flex", flexDirection:"column",
                alignItems:"center", gap:8,
                minHeight:250,
                transition:"background .2s",
              }}>

                {/* emotion label */}
                <div style={{
                  background:card.color, color:card.dark,
                  borderRadius:12, padding:"3px 14px",
                  fontSize:12, fontWeight:800,
                  alignSelf:"stretch", textAlign:"center",
                }}>
                  {ef.face} {ef.label}
                </div>

                {/* big icon */}
                <div style={{ fontSize:60, lineHeight:1, margin:"4px 0" }}>
                  {card.icon}
                </div>

                {/* situation */}
                <div style={{
                  fontSize:14, fontWeight:800,
                  color:"#2B2D42", textAlign:"center",
                  lineHeight:1.45,
                }}>
                  {card.situation}
                </div>

                {/* reveal */}
                {isF ? (
                  <div style={{
                    background:card.color+"33",
                    border:`2px solid ${card.color}`,
                    borderRadius:12,
                    padding:"10px 12px",
                    width:"100%", boxSizing:"border-box",
                    textAlign:"center",
                    animation:"fadeIn .2s ease",
                  }}>
                    <div style={{ fontSize:11, color:card.dark, opacity:.7, marginBottom:3 }}>
                      💬 รู้สึกยังไง?
                    </div>
                    <div style={{ fontSize:14, fontWeight:800, color:card.dark }}>
                      {card.body}
                    </div>
                    <div style={{
                      marginTop:8,
                      fontSize:11, color:card.dark,
                      background:card.color+"55",
                      borderRadius:8, padding:"5px 8px",
                      lineHeight:1.5,
                    }}>
                      💡 {ef.tip}
                    </div>
                  </div>
                ) : (
                  <div style={{
                    fontSize:11, color:"#BBA",
                    textAlign:"center", padding:"6px 0",
                  }}>
                    แตะเพื่อดู 👆
                  </div>
                )}

                {/* card number */}
                <div style={{ fontSize:10, color:"#CCC", alignSelf:"flex-end" }}>
                  #{String(card.id).padStart(2,"0")}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        background:"#2B2D42", borderTop:"4px solid #FFD93D",
        padding:"20px 16px", textAlign:"center",
      }}>
        <div style={{ color:"#FFD93D", fontWeight:800, fontSize:15, marginBottom:6 }}>
          EmoGrow · สำหรับเด็ก 3–6 ปี
        </div>
        <div style={{ color:"#888", fontSize:11, lineHeight:2 }}>
          30 ใบ · 4 อารมณ์ · แตะเพื่อเปิด-ปิด<br/>
          <span style={{ color:"#FFD93D88" }}>
            "เพราะอารมณ์ไม่มีอายุ แต่การเรียนรู้ต้องเริ่มตั้งแต่เล็ก"
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}
