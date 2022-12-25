import { 
  Incomes, 
  sex, 
  ageRanges, 
  heartDeseases, 
  favorLanguages,
  freeTimes
} from ".";

export const questions = [
  {
    question: "Giới tính của bạn là gì",
    values: sex.answers, 
    valuesType: "radio",
    alias: sex.alias
  }, 
  {
    question: "Bạn trong độ tuổi nào",
    values: ageRanges.answers,
    valuesType: "radio", 
    alias: ageRanges.alias
  },
  {
    question: "Bạn có tiền sử bệnh tim hay không",
    values: heartDeseases.answers, 
    valuesType: "radio", 
    alias: heartDeseases.alias
  },  
  {
    question: "Bạn thông thạo ngôn ngữ nào",
    values: favorLanguages.answers,
    valuesType: "checkbox",
    alias: favorLanguages.alias
  }, 
  {
    question: "Thu nhập 1 tháng của bạn bao nhiêu", 
    values: Incomes.answers, 
    valuesType: "radio",
    alias: Incomes.alias
  }, 
  {
    question: "Bạn có thời gian xem phim trong khoảng thời gian nào",
    values: freeTimes.answers, 
    valuesType: "radio", 
    alias: freeTimes.alias
  }
]; 