import axios from "axios";

export const getStats = async (username: string) => {
  const query = {
    query: `
            query getUserProfile($username: String!) {
                allQuestionsCount {
                    difficulty
                    count
                }
                matchedUser(username: $username) {
                    contributions {
                        points
                    }
                    profile {
                        reputation
                        ranking
                    }
                    submissionCalendar
                    submitStats {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `,
    variables: { username },
  };

  try {
    const res = await axios.post("https://leetcode.com/graphql", query, {
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com/${username}/",
      },
    });
    return parseLeetCodeData(res.data);
  } catch (error) {
    throw new Error("Erro ao buscar dados do usuário.");
  }
};

const parseLeetCodeData = (data: any) => {
  if (data.errors) {
    throw new Error("Usuário não encontrado.");
  }
  const matchedUser = data.data.matchedUser;
  if (!matchedUser) {
    throw new Error("Usuário não encontrado.");
  }
  const totalSolved = matchedUser.submitStats.acSubmissionNum[0].count;
  const totalQuestions = data.data.allQuestionsCount[0].count;
  const easySolved = matchedUser.submitStats.acSubmissionNum[1].count;
  const totalEasy = data.data.allQuestionsCount[1].count;
  const mediumSolved = matchedUser.submitStats.acSubmissionNum[2].count;
  const totalMedium = data.data.allQuestionsCount[2].count;
  const hardSolved = matchedUser.submitStats.acSubmissionNum[3].count;
  const totalHard = data.data.allQuestionsCount[3].count;

  const totalAcceptCount =
    matchedUser.submitStats.acSubmissionNum[0].submissions;
  const totalSubCount =
    matchedUser.submitStats.totalSubmissionNum[0].submissions;
  const acceptanceRate = totalSubCount
    ? ((totalAcceptCount / totalSubCount) * 100).toFixed(2)
    : 0;

  return {
    status: "success",
    message: "retrieved",
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
    acceptanceRate,
    ranking: matchedUser.profile.ranking,
    contributionPoints: matchedUser.contributions.points,
    reputation: matchedUser.profile.reputation,
  };
};
