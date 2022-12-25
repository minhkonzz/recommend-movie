import { isSubArr, groupByProperty, convertTime } from "../functions/common";
import { freeTimes } from "../data";

function getPrioritizedRules(rules) {
  return rules.reduce((acc, cur) => [
    ...acc.filter((rule) => rule.VP.symbol !== cur.VP.symbol || !isSubArr(cur.VT, rule.VT)),
    cur
  ], []);
};

function isValidShowTime(freeTimeLimit, movieTimes, show_times, ticketPrice) {
  const { showTimes, runTime } = movieTimes; 
  const bd1 = showTimes.map((movieShowTime) => movieShowTime.t).map((timeDetail) => Object.keys(timeDetail).map((tp) => timeDetail[tp]).join(":"));
  const bd2 = show_times.map((timeDetail) => Object.keys(timeDetail).map((tp) => timeDetail[tp]).join(":"));
  const selects = bd2.map((e) => bd1.indexOf(e)).filter((e, i) => i !== -1);
  return showTimes.filter((movieShowTime, i) => {
    return selects.includes(i) && 
      ticketPrice[0].includes(movieShowTime.ticketPrice) &&
      runTime <= freeTimeLimit + 20; 
  });
};

function isRecommendMovie(compairObj, movie, freeTimeLimit) {
  return compairObj.genre.includes(movie.genre) &&  
    compairObj.country.includes(movie.production_country) &&
    isValidShowTime(
      freeTimeLimit, 
      {
        showTimes: movie.showTimes, 
        runTime: movie.runtime
      }, 
      compairObj.show_time, 
      compairObj.ticket_price
    );
};

function getRecommendResults(movies, rulesUsed, freeTimeLimit) {
  let movieRecommend = [];
  const R = groupByProperty(rulesUsed.map((rule) => rule.VP), "alias", "value"); 
  movies.forEach((movie) => {
    const movieShowTimes = isRecommendMovie(R, movie, freeTimeLimit);
    if (movieShowTimes.length > 0) movieRecommend = [ 
      ...movieRecommend,
      {
        backdrop_path: movie.backdrop_path, 
        original_title: movie.original_title, 
        genre: movie.genre, 
        runtime: movie.runtime, 
        production_country: movie.production_country, 
        show_times: movieShowTimes
      } 
    ]; 
  });
  return movieRecommend;
};

export default function Interpreter(movies, workMemmory, rules) {
  const { from, to } = freeTimes.answers.find((freeTime) => freeTime.symbol === workMemmory.freetime[0]).value;
  const freeTimeLimit = convertTime({ h: to.h - from.h, m: to.m - from.m });
  let TD = Object.keys(workMemmory).map((key) => workMemmory[key]).reduce((prev, curr) => [...prev, ...curr]);
  let filteredRules = getPrioritizedRules(rules);
  let T = filteredRules.filter((rule) => isSubArr(TD, rule.VT)); 
  let rulesUsed = [];
  while (T.length > 0) {
    const curRule = T[0]; 
    if (TD.includes(curRule.VP.symbol) === false) {
      TD = [ ...TD, curRule.VP.symbol ];
      rulesUsed = [ ...rulesUsed, curRule ];
    }
    filteredRules = filteredRules.filter((rule) => rule !== curRule); 
    T = filteredRules.filter((rule) => isSubArr(TD, rule.VT)); 
  }
  return {
    allRules: rules, 
    rulesUsed: rulesUsed,
    recommendMovies: getRecommendResults(movies, rulesUsed, freeTimeLimit)
  };
};