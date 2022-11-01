import { color } from "echarts";

export function FormatCash(n) {
  if (n < 1e3) return n;
  if (n >= 1e3) return +(n / 1e3).toFixed(2) + "k";
}

export function MergeBy(key, dataL, dataR) {
  const rMap = dataR.reduce(
    (m, o) => m.set(o[key], { ...m.get(o[key]), ...o }),
    new Map()
  );

  return dataL
    .filter((x) => rMap.get(x[key]))
    .map((x) => ({ ...x, ...rMap.get(x[key]) }));
}

export function ToMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export function ScrapRowColor(n) {
  if (n < 30) {
    return "#01f04560";
  } else if (n >= 30 && n < 35) {
    return "#e8f00160";
  } else if (n >= 35) {
    return "#f0011d60";
  }
}

export function MachHrRowColor(n) {
  if (n < 60) {
    return "#f0011d40";
  } else if (n >= 60 && n < 85) {
    return "#e8f00140";
  } else if (n >= 85) {
    return "#01f04540";
  }
}

export function ManHrRowColor(n) {
  if (n < 100) {
    return "#f0011d40";
  } else if (n >= 100 && n < 150) {
    return "#e8f00140";
  } else if (n >= 150) {
    return "#01f04540";
  }
}

export function OeeRowColor(n) {
  if (n < 70) {
    return "#f0011d40";
  } else if (n >= 70 && n < 90) {
    return "#e8f00140";
  } else if (n >= 90) {
    return "#01f04540";
  }
}

export function Font_color(x) {
  if (x === "light") {
    var font_color = "#242731";
  } else font_color = "#fff";
  return font_color;
}
export function OeeColor(x) {
  const colors = [];
  if (x <= 30) {
    var mainColor = "#FF4F30";
    var secoColor = "#792112";
    var shadColor = "#B42F17";
  } else if (x > 30 && x <= 50) {
     mainColor = "#FFCD30";
     secoColor = "#E5B621";
     shadColor = "#BF971A";
  } else if (x > 50 && x < 90) {
     mainColor = "#30FF72";
     secoColor = "#0F712D";
     shadColor = "#129E3F";
  } else if (x >= 90) {
     mainColor = "#2BFFBF";
     secoColor = "#0A4F3A";
     shadColor = "#16B383";
  }
  var obj = {};
  obj["mainColor"] = mainColor;
  obj["secoColor"] = secoColor;
  obj["shadColor"] = shadColor;

  colors.push(obj);
  return colors;
}

export function ManHColor(x) {
  const colors = [];
  if (x <= 200) {
    var mainColor = "#FF4F30";
    var secoColor = "#792112";
    var shadColor = "#B42F17";
  } else if (x > 200 && x <= 400) {
     mainColor = "#FFCD30";
     secoColor = "#E5B621";
     shadColor = "#BF971A";
  } else if (x > 400 && x < 450) {
     mainColor = "#30FF72";
     secoColor = "#0F712D";
     shadColor = "#129E3F";
  } else if (x >= 450) {
     mainColor = "#2BFFBF";
     secoColor = "#0A4F3A";
     shadColor = "#16B383";
  }
  var obj = {};
  obj["mainColor"] = mainColor;
  obj["secoColor"] = secoColor;
  obj["shadColor"] = shadColor;

  colors.push(obj);
  return colors;
}

export function MachHColor(x) {
  const colors = [];
  if (x <= 70) {
    var mainColor = "#FF4F30";
    var secoColor = "#792112";
    var shadColor = "#B42F17";
  } else if (x > 70 && x <= 170) {
     mainColor = "#FFCD30";
     secoColor = "#E5B621";
     shadColor = "#BF971A";
  } else if (x > 170 && x < 255) {
     mainColor = "#30FF72";
     secoColor = "#0F712D";
     shadColor = "#129E3F";
  } else if (x >= 255) {
     mainColor = "#2BFFBF";
     secoColor = "#0A4F3A";
     shadColor = "#16B383";
  }
  var obj = {};
  obj["mainColor"] = mainColor;
  obj["secoColor"] = secoColor;
  obj["shadColor"] = shadColor;

  colors.push(obj);
  return colors;
}
export function OtifColor(x) {
  const colors = [];
  if (x <= 25) {
    var mainColor = "#FF4F30";
    var shadColor = "#B42F17";
  } else if (x > 25 && x <= 50) {
     mainColor = "#FFCD30";
     shadColor = "#BF971A";
  } else if (x > 50 && x < 75) {
     mainColor = "#30FF72";
     shadColor = "#129E3F";
  } else if (x >= 75) {
     mainColor = "#2BFFBF";
     shadColor = "#16B383";
  }
  var obj = {};
  obj["mainColor"] = mainColor;
  obj["shadColor"] = shadColor;

  colors.push(obj);
  return colors;
}

export function WarehUtilisColor(x) {
  const colors = [];
  if (x <= 25) {
    var mainColor = "#2BFFBF";
    var shadColor = "#16B383";
  } else if (x > 25 && x <= 50) {
     mainColor = "#30FF72";
     shadColor = "#129E3F";
  } else if (x > 50 && x < 75) {
     mainColor = "#FFCD30";
     shadColor = "#BF971A";
  } else if (x >= 75) {
     mainColor = "#FF4F30";
     shadColor = "#B42F17";
  }
  var obj = {};
  obj["mainColor"] = mainColor;
  obj["shadColor"] = shadColor;

  colors.push(obj);
  return colors;
}