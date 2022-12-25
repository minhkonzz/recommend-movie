// About movie (VP)

export const genres = {
  alias: "genre", 
  values: [
    {
      symbol: "GR1", 
      value: "Hành động"
    },
    {
      symbol: "GR2", 
      value: "Phiêu lưu"
    },
    {
      symbol: "GR3", 
      value: "Hoạt hình"
    },
    {
      symbol: "GR4", 
      value: "Giả tưởng"
    },
    {
      symbol: "GR5", 
      value: "Khoa học viễn tưởng"
    }, 
    {
      symbol: "GR6", 
      value: "Tình cảm"
    }, 
    {
      symbol: "GR7", 
      value: "Kinh dị"
    }, 
    {
      symbol: "GR8", 
      value: "Tài liệu"
    }, 
    {
      symbol: "GR9", 
      value: "Hài"
    },
    {
      symbol: "GR10", 
      value: "Gia đình"
    }
  ]
}

export const nationFroms = {
  alias: "country", 
  values: [
    {
      symbol: "NF1", 
      value: "Mỹ"
    }, 
    {
      symbol: "NF2", 
      value: "Trung Quốc"
    }, 
    {
      symbol: "NF3", 
      value: "Hàn Quốc"
    }, 
    {
      symbol: "NF4", 
      value: "Nhật Bản"
  }
  ]
}

export const runTimes = {
  alias: "run_time", 
  values: [
    {
      symbol: "RT1", 
      value: [60, 120]
    },
    {
      symbol: "RT2", 
      value: [120, 0]
    }
  ]
}

export const showTimes = {
  alias: "show_time",
  values: [
    {
      symbol: "ST1",
      value: { h: 8, m: 30 }
    },
    {
      symbol: "ST2",
      value: { h: 9, m: 0 }
    },
    {
      symbol: "ST3",
      value: { h: 9, m: 20 }
    },
    {
      symbol: "ST4",
      value: { h: 10, m: 15 }
    },
    {
      symbol: "ST5",
      value: { h: 11, m: 0 }
    },
    {
      symbol: "ST6",
      value: { h: 12, m: 20 }
    },
    {
      symbol: "ST7",
      value: { h: 13, m: 15 }
    },
    {
      symbol: "ST8",
      value: { h: 14, m: 30 }
    },
    {
      symbol: "ST9",
      value: { h: 15, m: 20 }
    },
    {
      symbol: "ST10",
      value: { h: 16, m: 0 }
    },
    {
      symbol: "ST11",
      value: { h: 16, m: 50 }
    },
    {
      symbol: "ST12",
      value: { h: 17, m: 15 }
    },
    {
      symbol: "ST13",
      value: { h: 17, m: 40 }
    },
    {
      symbol: "ST14",
      value: { h: 18, m: 30 }
    },
    {
      symbol: "ST15",
      value: { h: 19, m: 15 }
    },
    {
      symbol: "ST16",
      value: { h: 19, m: 50 }
    },
    {
      symbol: "ST17",
      value: { h: 20, m: 15 }
    },
    {
      symbol: "ST18",
      value: { h: 20, m: 50 }
    },
    {
      symbol: "ST19",
      value: { h: 21, m: 20 }
    },
    {
      symbol: "ST20",
      value: { h: 22, m: 0 }
    },
    {
      symbol: "ST21",
      value: { h: 22, m: 30 }
    }
  ]
}

export const ticketPriceRanges = {
  alias: "ticket_price", 
  values: [
    {
      symbol: "TP1", 
      value: [65000, 75000]
    },
    {
      symbol: "TP2", 
      value: [90000, 120000]
    }
  ]
}

// About user (VT)

export const ageRanges = {
  alias: "age", 
  answers: [
    {
      symbol: "AR1",
      value: [5, 12],
      description: ["Từ 5 đến 12 tuổi"]
    },
    {
      symbol: "AR2",
      value: [13, 17],
      description: ["Từ 13 đến 17 tuổi"]
    },
    {
      symbol: "AR3",
      value: [18, 40],
      description: ["Từ 18 đến 40 tuổi"]
    },
    {
      symbol: "AR4",
      value: [41, 65],
      description: ["Từ 41 đến 65 tuổi"]
    }
  ]
}

export const sex = {
  alias: "sex", 
  answers: [
    {
      symbol: "S1", 
      value: 1, 
      description: ["Nam"]
    },
    {
      symbol: "S2",
      value: -1,  
      description: ["Nữ"]
    }
  ]
}

export const heartDeseases = {
  alias: "isHeartDesease", 
  answers: [
    {
      symbol: "HD1",
      value: true, 
      description: "Có"
    },
    {
      symbol: "HD2",
      value: false, 
      description: "Không"
    }
  ]
}

export const favorLanguages = {
  alias: "favorLanguage", 
  answers: [
    {
      symbol: "FL1", 
      value: "Tiếng Anh",
      description: ["Tiếng Anh"]
    },
    {
      symbol: "FL2", 
      value: "Tiếng Trung",
      description: ["Tiếng Trung"]
    },
    {
      symbol: "FL3", 
      value: "Tiếng Hàn",
      description: ["Tiếng Hàn"]
    },
    {
      symbol: "FL4", 
      value: "Tiếng Nhật",
      description: ["Tiếng Nhật"]
    }
  ]
}

export const Incomes = {
  alias: "income", 
  answers: [
    {
      symbol: "I1", 
      value: [0, 2000000], 
      description: ["Dưới 2 triệu"]
    },
    {
      symbol: "I2", 
      value: [2000000, 5000000], 
      description: ["Khoảng từ 2 triệu đến 5 triệu"]
    },
    {
      symbol: "I3", 
      value: [5000000, 0], 
      description: ["Trên 5 triệu"]
    }
  ]
}

export const freeTimes = {
  alias: "freetime", 
  answers: [
    {
      symbol: "FT1", 
      value: {
        from: { h: 7, m: 50 },
        to: { h: 9, m: 50 } 
      },
      description: ["7:50 đến 9:50"]
    },
    {
      symbol: "FT2", 
      value: {
        from: { h: 10, m: 0 },
        to: { h: 13, m: 30 } 
      },
      description: ["10:00 đến 13:30"]
    }, 
    {
      symbol: "FT3", 
      value: {
        from: { h: 13, m: 35 },
        to: { h: 15, m: 35 } 
      },
      description: ["13:35 đến 15:35"]
    }, 
    {
      symbol: "FT4", 
      value: {
        from: { h: 15, m: 40 },
        to: { h: 18, m: 40 } 
      },
      description: ["15:40 đến 18:40"]
    },
    {
      symbol: "FT5", 
      value: {
        from: { h: 18, m: 45 },
        to: { h: 20, m: 45 } 
      },
      description: ["18:45 đến 20:45"]
    }, 
    {
      symbol: "FT6", 
      value: {
        from: { h: 20, m: 50 },
        to: { h: 23, m: 40 } 
      },
      description: ["20:50 đến 23:40"]
    }
  ]
}


