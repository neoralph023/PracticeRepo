function lengthOfLongestSubstring(s) {
  let hr = s.split("");
  let newhr;

  if (hr[8] === "P") {
    for (i = 0; i <= 7; i++) {
      newhr += hr[i];
    }
  } else {
    console.log("hehe");
    for (i = 0; i <= 7; i++) {
      if (i === 0) {
        console.log(hr[i] - 12);
        // newhr += hr[i];
      }
    }
  }
  console.log(newhr);
}

lengthOfLongestSubstring("07:05:45AM");
