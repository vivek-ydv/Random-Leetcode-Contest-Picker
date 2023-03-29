const pickContestBtn = document.getElementById('pick-contest-btn');
const contestResult = document.getElementById('contest-result');
const contestType = document.getElementById('contest-type-select');
const MIN_WEEKLY_CONTEST_NUMBER = 58;
const MAX_WEEKLY_CONTEST_NUMBER = 200;
const MIN_BIWEEKLY_CONTEST_NUMBER = 1;
const MAX_BIWEEKLY_CONTEST_NUMBER = 100;
const WEEKLY_CONTEST_URL = 'https://leetcode.com/contest/weekly-contest-';
const BIWEEKLY_CONTEST_URL = 'https://leetcode.com/contest/biweekly-contest-';

pickContestBtn.addEventListener('click', () => {
  contestResult.classList.add('hidden');
  pickContestBtn.disabled = true;
  pickContestBtn.textContent = 'Picking...';

  let contestNumber, contestURL;
  if (contestType.value === 'weekly') {
    contestNumber = Math.floor(Math.random() * (MAX_WEEKLY_CONTEST_NUMBER - MIN_WEEKLY_CONTEST_NUMBER + 1) + MIN_WEEKLY_CONTEST_NUMBER);
    contestURL = `${WEEKLY_CONTEST_URL}${contestNumber}/`;
  } else {
    contestNumber = Math.floor(Math.random() * (MAX_BIWEEKLY_CONTEST_NUMBER - MIN_BIWEEKLY_CONTEST_NUMBER + 1) + MIN_BIWEEKLY_CONTEST_NUMBER);
    contestURL = `${BIWEEKLY_CONTEST_URL}${contestNumber}/`;
  }

  contestResult.innerHTML =`<label>Selected contest : </label> <a href="${contestURL}" target="_blank">${contestURL}</a>`;
  contestResult.classList.remove('hidden');
  pickContestBtn.disabled = false;
  pickContestBtn.textContent = 'Pick Contest';
});
