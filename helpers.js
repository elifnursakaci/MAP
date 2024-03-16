// Belirli bir tür için uygun bir metin etiketi döndüren bir fonksiyon
export const detecType = (type) => {
  switch (type) {
    case "park":
      return "Park Yeri";
    case "home":
      return "Ev";
    case "job":
      return "İş";
    case "goto":
      return "Ziyaret";
  }
};

// Veriyi yerel depolamaya ayarlayan bir fonksiyon
export const setStorage = (data) => {
  // Veriyi JSON formatına dönüştürme
  const strData = JSON.stringify(data);
  // localStorage üzerinde veriyi güncelleme
  localStorage.setItem("notes", strData);
};

// Farklı yer türleri için uygun simgeleri döndüren bir fonksiyon
var carIcon = L.icon({
  iconUrl: "car.png",
  iconSize: [50, 50],
});

var homeIcon = L.icon({
  iconUrl: "home-marker.png",
  iconSize: [50, 50],
});

var jobIcon = L.icon({
  iconUrl: "job.png",
  iconSize: [50, 50],
});

var visitIcon = L.icon({
  iconUrl: "visit.png",
  iconSize: [50, 50],
});

export function detecIcon(type) {
  // Belirli bir türe göre uygun simgeyi döndüren bir fonksiyon
  switch (type) {
    case "park":
      return carIcon;
    case "home":
      return homeIcon;
    case "job":
      return jobIcon;
    case "goto":
      return visitIcon;
  }
}
