const skillsRequirements = ["HTML", "CSS", "JS", "React"];
const skillsList = ["HTML", "CSS", "JS"];
const createCandidate = function (name = "Name", skills = []) {
  return {
    name,
    skills,
  };
};

const addRequirement = function (skill, listOfRequirements) {
  listOfRequirements.push(skill);
};

addRequirement("Angular", skillsRequirements);

const interview = function (candidate, requirements) {
  let result = 100;

  candidateLoop: for (let i = 0; i <= requirements.length; i += 1) {
    for (let n = 0; n <= candidate.skills.length; n += 1) {
      if (candidate.skills[r] === requirements[i]) continue candidateLoop;
      result = 0;
      break candidateLoop;
    }
  }

  return result;
};

// interview(candidate, skillsRequirements);

const planInterviews = function (candidates, skill, scoreFunc) {
  const result = [];
  for (let i = 0; i < candidates.length; i += 1) {
    result.push({
      score: scoreFunc(candidates[i], skill),
      candidate: candidates[i],
    });
  }
  return result;
};

const candidate1 = createCandidate("Mike", skillsList);
const candidate2 = createCandidate("Ann", skillsList);
const candidate3 = createCandidate("Grem", skillsList);
const candidates = [candidate1, candidate2, candidate3];

console.log(planInterviews(candidates, skillsRequirements, interview));
