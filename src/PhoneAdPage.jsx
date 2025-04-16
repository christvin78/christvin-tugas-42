import React from "react";
import "./PhoneAdPage.css";
 // ganti path ini sesuai lokasi file gambarmu

const PhoneAdPage = () => {
  return (
    <div className="ad-container">
      <div className="ad-content">
        <div className="ad-text">
          <p className="label">Kecerdasan visual</p>
          <h1 className="title">
            Lihat dunia dari <br /> lensa yang baru.
          </h1>
          <p className="description">
            Gunakan <span className="bold">kecerdasan visual</span> melalui Kontrol Kamera
            untuk langsung mempelajari tentang semua hal yang Anda lihat. Cukup{" "}
            <span className="bold">arahkan iPhone 16 Pro Anda untuk menemukan lebih</span> atau
            berinteraksi dengan sesuatu di depan Anda. Cari tahu di mana tempat
            membeli barang baru yang Anda lihat, identifikasikan tanaman dan hewan,
            dan banyak lagi.
          </p>
        </div>
        <div className="ad-image">
          <img src='Iphone.png' alt="iPhone 16 Pro" />
        </div>
      </div>
    </div>
  );
};

export default PhoneAdPage;
