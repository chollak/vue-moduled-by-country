const modules = {
  tj: {
    installment: {
      active: true,
      title: "Salom",

      country: "tj",
      data: [
        { name: "Goods", stat: "55", bgColor: "red" },
        { name: "Income", stat: "16%", bgColor: "blue" },
        { name: "Avg. Click Rate", stat: "51%", bgColor: "green" },
      ],
    },
    deposit: {
      active: true,
      country: "tj",
      timeline: [
        {
          id: 1,
          content: "Applied to",
          target: "Front End Developer",
          href: "#",
          date: "Sep 20",
          datetime: "2020-09-20",

          iconBackground: "bg-gray-400",
        },
        {
          id: 2,
          content: "Advanced to phone screening by",
          target: "Bethany Blake",
          href: "#",
          date: "Sep 22",
          datetime: "2020-09-22",

          iconBackground: "bg-blue-500",
        },
        {
          id: 3,
          content: "Completed phone screening with",
          target: "Martha Gardner",
          href: "#",
          date: "Sep 28",
          datetime: "2020-09-28",

          iconBackground: "bg-green-500",
        },
        {
          id: 4,
          content: "Advanced to interview by",
          target: "Bethany Blake",
          href: "#",
          date: "Sep 30",
          datetime: "2020-09-30",

          iconBackground: "bg-blue-500",
        },
        {
          id: 5,
          content: "Completed interview with",
          target: "Katherine Snyder",
          href: "#",
          date: "Oct 4",
          datetime: "2020-10-04",

          iconBackground: "bg-green-500",
        },
      ],
    },
    alifshop: {
      active: true,
      country: "tj",
      cta: {
        title: "Хуш омадед дар Душанбе",
        subTitle: "Покупайте ҳоло, пардохт пас",
      },
    },
  },
  uz: {
    installment: {
      active: true,
      title: "Salom",
      data: [
        { name: "Goods", stat: "71,897", bgColor: "purple" },
        { name: "Income", stat: "58.16%", bgColor: "indigo" },
        { name: "Avg. Click Rate", stat: "24.57%", bgColor: "orange" },
      ],
      country: "tj",
    },
    deposit: {
      active: false,
    },
    alifshop: {
      active: true,
      title: "Alifshop UZ",
      country: "uz",
      cta: {
        title: "Добро пожаловать в Ташкент",
        subTitle: "Покупайте сейчас, платите потом",
      },
    },
  },
};

module.exports = {
  country: "uz",
  modules,
};

// uz
// {
//     rassrochka: {
//         active: true,
//         country: "uz",
//     },
//     alifshop: {
//         active: true,
//         country: "uz",
//     },
//     rassrochka: {
//         active: true,
//         country: "uz",
//     },
// }
