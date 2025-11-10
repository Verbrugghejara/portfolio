export const projects = [
  {
    id: 1,
    title: "The Easy Cat Set",
    program: "MCT",
    modules: ["Development", "Design"],
    briefing: `The project involved <span class="font-bold">building an autonomously operating device</span>
                with a <span class="font-bold">Raspberry Pi</span> that processes data from at <span class="font-bold">least
                    three sensors</span> (one of which was not covered in class) and includes <span class="font-bold">an
                    actuator</span> that can be controlled both <span class="font-bold">automatically</span> and via a <span
                    class="font-bold">website</span>. The system had to display information such as the <span
                    class="font-bold">IP address</span>, store data in a <span class="font-bold">MySQL/MariaDB
                    database</span>, and communicate through a <span class="font-bold">Flask backend</span> and an <span
                    class="font-bold">HTML/CSS/JS frontend</span> using <span class="font-bold">Socket.IO</span> for
                real-time updates. <span>A physical button</span> was also required for a <span class="font-bold">safe
                    shutdown</span>, and the system needed to comply with <span class="font-bold">user management</span> and
                <span class="font-bold">password regulations.</span>`,
    imageUrl: "/portfolio/projects/theEasyCatSet.jpg",
    githubUrl:
      "https://github.com/Verbrugghejara/2020-2021-projectone-Verbrugghejara",
    otherUrl: "https://www.instructables.com/The-Easy-Cat-Set/",
  },
  {
    id: 2,
    title: "Padelscoreboard",
    program: "MCT",
    modules: ["Development"],
    briefing: `Het ontwikkelen van een <span class="font-bold">innovatief</span> en <span class="font-bold">gebruiksvriendelijk</span> <span class="font-bold">scoreregistratiesysteem</span> voor <span class="font-bold">padelwedstrijden</span> dat de <span class="font-bold">spelbeleving</span> verhoogt, <span class="font-bold">fouten</span> en <span class="font-bold">discussies</span> voorkomt, en zowel <span class="font-bold">spelers</span> als <span class="font-bold">supporters</span> actief betrekt. Het systeem moet <span class="font-bold">automatisch</span> <span class="font-bold">punten registreren</span> via een <span class="font-bold">smartwatch</span>, deze gegevens <span class="font-bold">doorsturen</span> naar een <span class="font-bold">Raspberry Pi</span>, die de <span class="font-bold">score</span> verwerkt en weergeeft op een <span class="font-bold">LCD-scherm</span> en een <span class="font-bold">webapplicatie</span>. Daarnaast moet het systeem <span class="font-bold">toegankelijk</span> zijn voor alle <span class="font-bold">gebruikers</span>, inclusief <span class="font-bold">kinderen</span>, <span class="font-bold">ouderen</span> en mensen met <span class="font-bold">dyscalculie</span>, en bijdragen aan een <span class="font-bold">laagdrempelige</span> en <span class="font-bold">ontspannen</span> <span class="font-bold">speelervaring</span>.
`,
    imageUrl: "/portfolio/projects/padelScoreBoard.jpg",
    githubUrl:
      "https://github.com/RyheulMaxime/team-project-padel-scoreboard-groep-4",
  },
  {
    id: 3,
    title: "Kinepolis ATM 3.0",
    program: "MCT",
    modules: ["Development", "Design"],
    briefing: `Ontwikkel een <span class="font-bold">proof of concept</span> voor een nieuwe <span class="font-bold">kiosk</span> (“<span class="font-bold">ATM 3.0</span>”) voor <span class="font-bold">Kinepolis</span>. Deze <span class="font-bold">kiosk</span> moet een <span class="font-bold">overzicht</span> geven van de <span class="font-bold">films</span> die spelen en <span class="font-bold">bezoekers</span> op een <span class="font-bold">intuïtieve</span> manier via hun <span class="font-bold">smartphone</span> <span class="font-bold">tickets</span> laten kopen, door gebruik te maken van een <span class="font-bold">QR-code</span> die doorverwijst naar het <span class="font-bold">online platform</span> van <span class="font-bold">Kinepolis</span>. Het doel is een <span class="font-bold">kostenefficiënt</span> alternatief voor <span class="font-bold">dure onbemande kiosken</span> te creëren en <span class="font-bold">online sales</span> te stimuleren, zodat meer <span class="font-bold">klanten</span> geregistreerd en beter <span class="font-bold">gevolgd</span> kunnen worden.
`,
    imageUrl: "/portfolio/projects/kinepolis.jpg",
    githubUrl: "https://github.com/DhondtTiemen/KinepolisG2",
  },
  {
    id: 4,
    title: "Jan Moretus",
    program: "DEVINE",
    modules: ["Development", "Design"],
    briefing: `The <span class="font-bold">Plantin-Moretus Museum</span> commissioned us to design the second <span class="font-bold">interactive one-pager</span> in a series of six <span class="font-bold">digital stories</span>. This chapter focuses on the <span class="font-bold">family of Christophe Plantin</span>, exploring their role in continuing his <span class="font-bold">printing legacy</span>. The project aims to transform <span class="font-bold">historical content</span> into a <span class="font-bold">modern</span>, <span class="font-bold">immersive experience</span> through <span class="font-bold">storytelling</span>, <span class="font-bold">design</span>, and <span class="font-bold">interactivity</span>, allowing users to <span class="font-bold">learn by doing</span> and connect with the museum’s <span class="font-bold">rich heritage</span> in an <span class="font-bold">engaging</span> way.
`,
    imageUrl: "/portfolio/projects/janMoretus.jpg",
    liveDemoUrl: "https://verbrugghejara.github.io/janMoretus_int3/",
    githubUrl: "https://github.com/Verbrugghejara/janMoretus_int3",
  },
  {
    id: 5,
    title: "ABBY",
    program: "DEVINE",
    modules: ["Development", "Design", "UX"],
    briefing: `<span class="font-bold">Abby Kortrijk</span> asked us to create a <span class="font-bold">concept</span> that shows the <span class="font-bold">museum</span> is not only a place to <span class="font-bold">observe</span> but also a place to <span class="font-bold">do</span>, <span class="font-bold">create</span>, and <span class="font-bold">connect</span>. The goal is to present the ideas of <span class="font-bold">City Living</span>, with a focus on the <span class="font-bold">Atelier</span> and <span class="font-bold">Salon</span>, in a way that feels <span class="font-bold">familiar</span> and <span class="font-bold">inviting</span> so people are encouraged to <span class="font-bold">participate</span>, <span class="font-bold">share ideas</span>, and help <span class="font-bold">shape the program</span>.

We were tasked with designing an <span class="font-bold">integrated concept</span> that connects both <span class="font-bold">digital</span> and <span class="font-bold">physical touchpoints</span>, while highlighting one of <span class="font-bold">Abby’s seven parameters</span> in a meaningful way. The project focuses on building an <span class="font-bold">inclusive experience</span> that reaches a <span class="font-bold">broad audience</span> including <span class="font-bold">young adults</span>, <span class="font-bold">families</span>, <span class="font-bold">artists</span>, and <span class="font-bold">local organizations</span>, and strengthens the <span class="font-bold">connection</span> between <span class="font-bold">people</span>, <span class="font-bold">art</span>, and the <span class="font-bold">museum</span>.
`,
    imageUrl: "/portfolio/projects/abby.jpg",
    githubUrl: "https://github.com/DhondtTiemen/Integration-4",
    figmaPrototypeUrl:
      "https://www.figma.com/proto/4JIgLe4cqGhUjIOo1AUfyh/INT4?page-id=128%3A15&node-id=535-2483&viewport=-256%2C-640%2C0.43&t=I2mWqNFUlXRlbgdp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=136%3A30",
    figmaMicrositeUrl:
      "https://www.figma.com/proto/4JIgLe4cqGhUjIOo1AUfyh/INT4?page-id=35%3A2&node-id=35-3&p=f&viewport=193%2C315%2C0.14&t=6wOBWlOMntGkyPVb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=35%3A3",
  },
  {
    id: 6,
    title: "Phone it",
    program: "DEVINE",
    modules: ["Development"],
    briefing: `Build a native app using React native, where you're integrate at least one of the Expo SDK Components mentioned on https://docs.expo.dev/versions/latest/ (see sidebar below “Expo SDK” - Bonus points for showcasing features which are only available on native apps`,
    githubUrl: "https://github.com/Verbrugghejara/PhoneIt",
    imageUrl: "/portfolio/projects/phoneIt.jpg",
    video: "https://youtu.be/s-uXI3lXYmQ",
  },
];

export const main = projects.filter(p => p.id >= 1 && p.id <= 5);
