import { 
  sex, 
  genres, 
  nationFroms, 
  showTimes, 
  ageRanges, 
  favorLanguages, 
  heartDeseases, 
  Incomes,
  ticketPriceRanges, 
  freeTimes
} from "./index";

export const rules = [
  // IF SEX = MALE THEN THELOAI = HANHDONG
  {
    VT: [ sex.answers[0].symbol ], 
    VP: {
      symbol: genres.values[0].symbol,
      value: genres.values[0].value,  
      alias: genres.alias
    }
  }, 
  // IF SEX = MALE THEN THELOAI = SCIENCE_FICTION
  {
    VT: [ sex.answers[0].symbol ], 
    VP: {
      symbol: genres.values[4].symbol,
      value: genres.values[4].value, 
      alias: genres.alias
    }
  },
  // IF SEX = FEMALE THEN THELOAI = TINHCAM
  {
    VT: [ sex.answers[1].symbol ], 
    VP: {
      symbol: genres.values[5].symbol, 
      value: genres.values[5].value,
      alias: genres.alias
    }
  }, 
  // IF SEX = FEMALE THEN THELOAI = COMEDY
  {
    VT: [ sex.answers[1].symbol ], 
    VP: {
      symbol: genres.values[8].symbol, 
      value: genres.values[8].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 41-65 THEN THELOAI = GIADINH
  {
    VT: [ ageRanges.answers[3].symbol ], 
    VP: {
      symbol: genres.values[9].symbol, 
      value: genres.values[9].value,
      alias: genres.alias
    }
  }, 
  // IF TUOI = 41-65 THEN THELOAI = TAILIEU
  {
    VT: [ ageRanges.answers[3].symbol ], 
    VP: {
      symbol: genres.values[7].symbol, 
      value: genres.values[7].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 18-40 THEN THELOAI = TAILIEU
  {
    VT: [ ageRanges.answers[2].symbol ], 
    VP: {
      symbol: genres.values[7].symbol, 
      value: genres.values[7].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 5-12 THEN THELOAI = HOATHINH
  {
    VT: [ ageRanges.answers[0].symbol ], 
    VP: {
      symbol: genres.values[2].symbol,
      value: genres.values[2].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 13-17 THEN THELOAI = PHIEULUU 
  {
    VT: [ ageRanges.answers[1].symbol ], 
    VP: {
      symbol: genres.values[1].symbol, 
      value: genres.values[1].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 18-40 THEN THELOAI = PHIEULUU
  {
    VT: [ ageRanges.answers[2].symbol ], 
    VP: {
      symbol: genres.values[1].symbol,
      value: genres.values[1].value,
      alias: genres.alias
    }
  },
  // IF TUOI = 5-12 THEN THELOAI = GIATUONG
  {
    VT: [ ageRanges.answers[0].symbol ], 
    VP: {
      symbol: genres.values[3].symbol,
      value: genres.values[3].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 13-17 THEN THELOAI = GIATUONG
  {
    VT: [  
      ageRanges.answers[1].symbol 
    ], 
    VP: {
      symbol: genres.values[3].symbol, 
      value: genres.values[3].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 18-40 THEN THELOAI = GIATUONG
  {
    VT: [  
      ageRanges.answers[2].symbol 
    ], 
    VP: {
      symbol: genres.values[3].symbol, 
      value: genres.values[3].value, 
      alias: genres.alias
    }
  }, 
  // IF FAVOR_LANG = TIENGANH THEN NATION_FROM = MY
  {
    VT: [ favorLanguages.answers[0].symbol ], 
    VP: {
      symbol: nationFroms.values[0].symbol,
      value: nationFroms.values[0].value,
      alias: nationFroms.alias
    }
  }, 
  // IF FAVOR_LANG = TIENGTRUNG THEN NATION_FROM = TRUNG
  {
    VT: [ favorLanguages.answers[1].symbol ], 
    VP: {
      symbol: nationFroms.values[1].symbol,
      value: nationFroms.values[1].value, 
      alias: nationFroms.alias
    }
  },
  // IF FAVOR_LANG = TIENGHAN THEN NATION_FROM = HAN
  {
    VT: [ favorLanguages.answers[2].symbol ], 
    VP: {
      symbol: nationFroms.values[2].symbol, 
      value: nationFroms.values[2].value, 
      alias: nationFroms.alias
    }
  }, 
  // IF FAVOR_LANG = TIENGNHAT THEN NATION_FROM = NHATBAN
  {
    VT: [ favorLanguages.answers[3].symbol ], 
    VP: {
      symbol: nationFroms.values[3].symbol, 
      value: nationFroms.values[3].value,
      alias: nationFroms.alias
    }
  }, 
  // IF BENHTIM = KHONG ^ TUOI = 13-17 THEN THELOAI = KINHDI
  {
    VT: [ 
      heartDeseases.answers[1].symbol, 
      ageRanges.answers[1].symbol 
    ], 
    VP: {
      symbol: genres.values[6].symbol, 
      value: genres.values[6].value, 
      alias: genres.alias
    }
  },
  // IF BENHTIM = KHONG ^ TUOI = 18-40 THEN THELOAI = KINHDI
  {
    VT: [ 
      heartDeseases.answers[1].symbol, 
      ageRanges.answers[2].symbol 
    ], 
    VP: {
      symbol: genres.values[6].symbol, 
      value: genres.values[6].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 13-17 ^ SEX = MALE THEN THELOAI = HANHDONG
  {
    VT: [ 
      ageRanges.answers[1].symbol, 
      sex.answers[0].symbol
    ], 
    VP: {
      symbol: genres.values[0].symbol, 
      value: genres.values[0].value, 
      alias: genres.alias
    }
  },
  // IF TUOI = 18-40 ^ SEX = MALE THEN THELOAI = HANHDONG
  {
    VT: [  
      ageRanges.answers[2].symbol, 
      sex.answers[0].symbol 
    ], 
    VP: {
      symbol: genres.values[0].symbol, 
      value: genres.values[0].value,
      alias: genres.alias
    }
  },
  // IF TUOI = 13-17 ^ SEX = MALE THEN THELOAI = SCIENCE_FICTION
  {
    VT: [  
      ageRanges.answers[1].symbol, 
      sex.answers[0].symbol 
    ], 
    VP: {
      symbol: genres.values[4].symbol, 
      value: genres.values[4].value,
      alias: genres.alias
    }
  },
  // IF TUOI = 18-40 ^ SEX = MALE THEN THELOAI = SCIENCE_FICTION
  {
    VT: [  
      ageRanges.answers[2].symbol, 
      sex.answers[0].symbol 
    ], 
    VP: {
      symbol: genres.values[4].symbol, 
      value: genres.values[4].value,
      alias: genres.alias
    }
  },
  // IF TUOI = 13-17 ^ SEX = FEMALE THEN THELOAI = TINHCAM
  {
    VT: [  
      ageRanges.answers[1].symbol, 
      sex.answers[1].symbol 
    ], 
    VP: {
      symbol: genres.values[5].symbol,
      value: genres.values[5].value,  
      alias: genres.alias
    }
  }, 
  // IF TUOI = 18-40 ^ SEX = FEMALE THEN THELOAI = TINHCAM
  {
    VT: [  
      ageRanges.answers[2].symbol, 
      sex.answers[1].symbol 
    ], 
    VP: {
      symbol: genres.values[5].symbol, 
      value: genres.values[5].value,
      alias: genres.alias
    }
  }, 
  // IF TUOI = 41-65 ^ SEX = FEMALE THEN THELOAI = TINHCAM
  {
    VT: [  
      ageRanges.answers[3].symbol, 
      sex.answers[1].symbol 
    ], 
    VP: {
      symbol: genres.values[5].symbol,
      value: genres.values[5].value, 
      alias: genres.alias
    }
  }, 
  // IF THUNHAP = <2TR THEN GIAVE = 65000-75000
  {
    VT: [ Incomes.answers[0].symbol ], 
    VP: {
      symbol: ticketPriceRanges.values[0].symbol,
      value: ticketPriceRanges.values[0].value, 
      alias: ticketPriceRanges.alias
    }
  }, 
  // IF THUNHAP = 2TR-5TR THEN GIAVE = 90000-120000
  {
    VT: [ Incomes.answers[1].symbol ], 
    VP: {
      symbol: ticketPriceRanges.values[1].symbol,
      value: ticketPriceRanges.values[1].value, 
      alias: ticketPriceRanges.alias
    }
  }, 
  // IF THUNHAP = >5TR THEN GIAVE = 90000-120000
  {
    VT: [ Incomes.answers[2].symbol ], 
    VP: {
      symbol: ticketPriceRanges.values[1].symbol, 
      value: ticketPriceRanges.values[1].value, 
      alias: ticketPriceRanges.alias
    }
  }, 
  // IF USERTIME = 7h-9h50 THEN STARTTIME = 8h30
  {
    VT: [ freeTimes.answers[0].symbol ], 
    VP: {
      symbol: showTimes.values[0].symbol, 
      value: showTimes.values[0].value,
      alias: showTimes.alias
    }
  }, 
  // IF USERTIME = 10h-13h30 THEN STARTTIME = 9h 
  {
    VT: [ freeTimes.answers[1].symbol ], 
    VP: {
      symbol: showTimes.values[1].symbol, 
      value: showTimes.values[1].value,
      alias: showTimes.alias
    }
  }, 
  // IF USERTIME = 10h-13h30 THEN STARTTIME = 9h20
  {
    VT: [ freeTimes.answers[1].symbol ], 
    VP: {
      symbol: showTimes.values[2].symbol,
      value: showTimes.values[2].value,  
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 10h-13h30 THEN STARTTIME = 10h15
  {
    VT: [ freeTimes.answers[1].symbol ], 
    VP: {
      symbol: showTimes.values[3].symbol, 
      value: showTimes.values[3].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 10h-13h30 THEN STARTTIME = 11h
  {
    VT: [ freeTimes.answers[1].symbol ], 
    VP: {
      symbol: showTimes.values[4].symbol,
      value: showTimes.values[4].value,  
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 10h-13h30 THEN STARTTIME = 12h20
  {
    VT: [ freeTimes.answers[1].symbol ], 
    VP: {
      symbol: showTimes.values[5].symbol, 
      value: showTimes.values[5].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 13H35-15H35 THEN STARTTIME = 13H15
  {
    VT: [ freeTimes.answers[2].symbol ], 
    VP: {
      symbol: showTimes.values[6].symbol, 
      value: showTimes.values[6].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 13H35-15H35 THEN STARTTIME = 14H30
  {
    VT: [ freeTimes.answers[2].symbol ], 
    VP: {
      symbol: showTimes.values[7].symbol, 
      value: showTimes.values[7].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 15H40-18H40 THEN STARTTIME = 15H20
  {
    VT: [ freeTimes.answers[3].symbol ], 
    VP: {
      symbol: showTimes.values[8].symbol, 
      value: showTimes.values[8].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 15H40-18H40 THEN STARTTIME = 16H 
  {
    VT: [ freeTimes.answers[3].symbol ], 
    VP: {
      symbol: showTimes.values[9].symbol, 
      value: showTimes.values[9].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 15H40-18H40 THEN STARTTIME = 16H50
  {
    VT: [ freeTimes.answers[3].symbol ], 
    VP: {
      symbol: showTimes.values[10].symbol, 
      value: showTimes.values[10].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 15H40-18H40 THEN STARTTIME = 17H15
  {
    VT: [ freeTimes.answers[3].symbol ], 
    VP: {
      symbol: showTimes.values[11].symbol, 
      value: showTimes.values[11].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 18H45-20H45 THEN STARTTIME= 17H40
  {
    VT: [ freeTimes.answers[4].symbol ], 
    VP: {
      symbol: showTimes.values[12].symbol,
      value: showTimes.values[12].value,  
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 18H45-20H45 THEN STARTTIME = 18H30
  {
    VT: [ freeTimes.answers[4].symbol ], 
    VP: {
      symbol: showTimes.values[13].symbol,
      value: showTimes.values[13].value,  
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 18H45-20H45 THEN STARTTIME = 19H15
  {
    VT: [ freeTimes.answers[4].symbol ], 
    VP: {
      symbol: showTimes.values[14].symbol, 
      value: showTimes.values[14].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 18H45-20H45 THEN STARTTIME = 19H50
  {
    VT: [ freeTimes.answers[4].symbol ], 
    VP: {
      symbol: showTimes.values[15].symbol, 
      value: showTimes.values[15].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 20H50-23H40 THEN STARTTIME = 20H15
  {
    VT: [ freeTimes.answers[5].symbol ], 
    VP: {
      symbol: showTimes.values[16].symbol, 
      value: showTimes.values[16].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 20H50-23H40 THEN STARTTIME = 20H50
  {
    VT: [ freeTimes.answers[5].symbol ], 
    VP: {
      symbol: showTimes.values[17].symbol, 
      value: showTimes.values[17].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 20H50-23H40 THEN STARTTIME = 21H20 
  {
    VT: [ freeTimes.answers[5].symbol ], 
    VP: {
      symbol: showTimes.values[18].symbol,
      value: showTimes.values[18].value,  
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 20H50-23H40 THEN STARTTIME = 22H
  {
    VT: [ freeTimes.answers[5].symbol ], 
    VP: {
      symbol: showTimes.values[19].symbol, 
      value: showTimes.values[19].value, 
      alias: showTimes.alias
    }
  },
  // IF USERTIME = 20H50-23H40 THEN STARTTIME = 22H30
  {
    VT: [ freeTimes.answers[5].symbol ], 
    VP: {
      symbol: showTimes.values[20].symbol, 
      value: showTimes.values[20].value, 
      alias: showTimes.alias
    }
  }
];