export function calculateLeadScore(
  message: string
) {
  const text =
    message.toLowerCase();

  let score = 0;

  const premiumKeywords = [
    "comprar",
    "invertir",
    "vender",
    "administrar",
    "propiedad",
    "inversión",
    "renta",
  ];

  const interestedKeywords = [
    "información",
    "consulta",
    "evaluando",
    "interesa",
  ];

  premiumKeywords.forEach(
    (keyword) => {
      if (
        text.includes(keyword)
      ) {
        score += 15;
      }
    }
  );

  interestedKeywords.forEach(
    (keyword) => {
      if (
        text.includes(keyword)
      ) {
        score += 5;
      }
    }
  );

  if (score > 100)
    score = 100;

  let category:
    | "premium"
    | "interested"
    | "info";

  if (score >= 80) {
    category = "premium";
  } else if (
    score >= 50
  ) {
    category =
      "interested";
  } else {
    category = "info";
  }

  return {
    score,
    category,
  };
}