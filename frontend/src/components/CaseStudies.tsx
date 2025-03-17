import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface CaseStudy {
  name: string;
  title: string;
  activeUser: string;
  points: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    name: "dharvya",
    title: "How I Make Supermemory",
    activeUser: "57k+",
    points: [
      "AI second brain for your team. Supermemory is a tool that helps you caapture, organize, and retrieve information from your teams's conversation and documents."
    ],
    image: "https://media.licdn.com/dms/image/v2/D5603AQG4Fqwj46yUJw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725060944740?e=2147483647&v=beta&t=4inucFdbuV4nPhvXhUlhJBboHbuo5LNpHa7Yjo7GlZ0"
  },
  {
    name: "Harsh",
    title: "How I build a linkcollect",
    activeUser: "3000+",
    points: [
      "A Bookmark Manager that does it all we help you curate and share links and browser tabs + discover, just like pinterest"
    ],
    image: "https://media.licdn.com/dms/image/v2/D5603AQHacQaZI8Hmyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690280083134?e=1744243200&v=beta&t=9a1b4oB_kQSCUSqE-E2phBMOF_yaDQK3cvvTtQ11Bes"
  },
  {
    name: "Harsh3dev",
    title: "How My devmatchups",
    activeUser: "560+",
    points: [
      "Build Innovative Products w/Innovative People. Connect with skilled developers around the world to build winning hackathon teamsLeverage your skills, collaborate with experts, and turn your innovative ideas into reality."
    ],
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "whoami",
    title: "How I Built Gumi",
    activeUser: "69+",
    points: [
      "Gumi where u can rent guider and u can be the guider help tourist to explore your local street"
    ],
    image: "https://pbs.twimg.com/profile_images/1884828039860948992/lxf27pzt_400x400.jpg"
  }
];

const CaseStudies = () => {
  return (
    <div className="py-16 px-28">
      <h2 className="text-3xl font-bold text-center mb-4">
        See exactly how an Tech product goes from zero to millions:
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8 ">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow  hover:scale-105">
            <CardContent className="p-0 ">
              <div className="flex gap-4 p-4">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-2">
                    case story
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{study.name}'s</span> story
                    </p>
                    {study.points.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Badge variant="outline" className="bg-primary/5">
                      {study.activeUser}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8 flex flex-col items-center">
        <div className="w-16 h-16 mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-primary animate-float"
            stroke="currentColor"
          >
            <path
              d="M12 5v14M19 12l-7 7-7-7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-600">
          Over 4,405 more case studies like these...
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;