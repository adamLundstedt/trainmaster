import QRCode from "qrcode";
import { useState } from "react";
import { Button } from "@mui/material";



export default function Qrcode(source) {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  let sourceData = source;

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 3,
        color: {
          // dark: '#575757',
          // light: '#EEEEEEFF'
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>Bokning</h1>
      <input
        type="text"
        placeholder="Boknings URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={GenerateQRCode}>
        Generate
      </Button>
      {qr && (
        <>
          <img src={qr} />
          <Button
            variant="contained"
            color="success"
            href={qr}
            download="qrcode.png"
          >
            Download
          </Button>
        </>
      )}
    </div>
  );
}
