let raceNumber = Math.floor(Math.random()*1000),
	earlyRegister = false,
	runnerAge = 9;

if (!earlyRegister) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister) {
	console.log(`Runner #${raceNumber}, you will race at 9:30 am.`);
} else if (runnerAge > 18 || earlyRegister) {
	console.log(`Runner #${raceNumber}, you will race at 11:00 am.`);
} else if (runnerAge < 18 && !earlyRegister) {
  console.log(`Runner #${raceNumber}, you will race at 12:30 pm.`);
} else {
  console.log('Please see registration desk for help.');
}
