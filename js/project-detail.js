//PROJECT TITLE
//Stores all project data and dynamically loads the correct project.

const projectsData = {
  1: {
    //Project 1 data.
    title: 'Infestation',
    subtitle: 'A 2D whack-a-mole style game set in a hellscape — built solo in Unity.',
    images: [
      //Actual Image.
      'images/projects/infestation.png',
      'images/projects/infestation-2.png',
      'images/projects/infestation-3.png',
    ],
    imageAlts: [
      //What appears if the image doesnt work.
      'Infestation main game screen',
      'Infestation gameplay screenshot',
      'Infestation gameplay screenshot 1',
    ],
    //General info about the project.
    overview: `Infestation is a 2D whack-a-mole game built solo in Unity as a university assignment. Set in a fiery hellscape of reds, oranges, and blacks, players choose a weapon (like an axe) and smack round little demons with bat-like wings as they pop up from below. The game leans heavily into its visual identity and audio design to create an experience that is simple in concept but genuinely enjoyable to play.`,
    process: `The visual direction came first, I wanted a strong, immediately readable aesthetic, so I committed to a hellscape theme with a bold red, orange, and black colour palette. Character sprites were sourced from the Unity Asset Store and chosen to match this tone. The biggest technical challenges were implementing the round system and ensuring the UI appeared and dismissed correctly at the right moments in the game loop. Getting the timing and state management right required significant iteration and testing.`,
    tools: ['Unity', 'C#', 'Unity Asset Store', '2D Game Development', 'UI Design', 'Audio Design'],
    outcome: `Infestation taught me how important communication design is within a game. A game does not need to be overly complicated, if the UI is engaging and the audio pulls the player in, the experience will land. I came away with a much stronger understanding of game state management and a deeper appreciation for how visual and audio design work together to shape how a player feels while playing.`,
  },
  2: {
    //Project 2 Data.
    title: 'Trash Dash',
    subtitle: 'A 2D side-scrolling platformer where you play as a piece of trash trying to reach the bin, built solo in Unity.',
    images: [
      //Actual Images.
      'images/projects/trashdash.png',
      'images/projects/trash-dash-1.png',
      'images/projects/trash-dash-2.png',
      'images/projects/trash-dash-3.png',
      'images/projects/trash-dash-4.png',
      'images/projects/trash-dash-5.png',
      'images/projects/trash-dash-6.png',
      'images/projects/trash-dash-7.png',
      'images/projects/trash-dash-8.png',
    ],
    imageAlts: [
      //What will appear if images dont work.
      'Trash Dash main game screen',
      'Trash Dash gameplay screenshot 1',
      'Trash Dash gameplay screenshot 2',
      'Trash Dash gameplay screenshot 3',
      'Trash Dash gameplay screenshot 4',
      'Trash Dash gameplay screenshot 5',
      'Trash Dash gameplay screenshot 6',
      'Trash Dash gameplay screenshot 7',
      'Trash Dash gameplay screenshot 8',
    ],
    //General info.
    overview: `Trash Dash is a 2D side-scrolling platformer built solo in Unity. You play as a piece of trash navigating through various natural environments (grassy terrain, outdoor settings, earthy tones) on a mission to reach the bin. The concept is simple but the execution required careful level design and precise physics work to make the platforming feel satisfying.`,
    process: `The game was built entirely solo from concept through to completion. The natural colour palette (greens, browns, and earthy tones) was chosen to contrast the character's identity as litter in an otherwise clean environment, reinforcing the theme visually. The most significant technical challenge was obstacle and spike placement. Getting colliders to behave correctly and feel fair to the player required extensive playtesting and adjustment. Collider sizing, positioning, and ensuring they matched the visual boundaries of each sprite took considerable time to get right.`,
    tools: ['Unity', 'C#', 'Unity Asset Store', '2D Game Development', 'Level Design', 'Physics'],
    outcome: `Trash Dash taught me how critical collider placement is to the feel of a platformer. Even small misalignments between a sprite's visual boundary and its collider can make a game feel unfair or broken. I came away with a much more methodical approach to physics setup and a deeper understanding of how level design and player experience are directly connected.`,
  },
  3: {
    //Project 3.
    title: 'Wits Netball Club Tournament Site',
    subtitle: 'A live fundraising tournament website built for the Wits Netball Club and used on the day of the event.',
    images: [
      //Actual Images.
      'images/projects/wits-netball.png',
      'images/projects/wits-1.png',
      'images/projects/wits-2.png',
      'images/projects/wits-3.png',
      'images/projects/wits-4.png',
      'images/projects/wits-5.png',
      'images/projects/wits-6.png',
    ],
    imageAlts: [
      //What appears if images dont work.
      'Wits Netball Club tournament website home page',
      'Wits Netball Club tournament website schools nav',
      'Wits Netball Club tournament website Standings page',
      'Wits Netball Club tournament website Fixtures page',
      'Wits Netball Club tournament website School list',
      'Wits Netball Club tournament website School list 1',
      'Wits Netball Club tournament website School list 2',
    ],
    //General info.
    overview: `The Wits Netball Club Tournament Site is a fully live website built on Google Sites for a fundraising netball tournament at the University of the Witwatersrand. The site served as the central information hub on the day of the event, hosting tournament fixtures, live score updates, team names, the schedule, and any last-minute changes. It was actively used and updated throughout the day as the tournament progressed.`,
    process: `The site was designed with clarity and ease of update in mind, on a busy event day, information needed to be changed quickly and reliably. Google Sites was chosen for its accessibility and ease of real-time editing without requiring a developer to be on standby. The design focused on spatial layout, consistent use of Wits colours, and a clean typographic hierarchy so that attendees could find information at a glance. The biggest operational challenge was keeping the schedule and fixtures up to date as changes happened throughout the day.`,
    tools: ['Google Sites', 'Web Design', 'Content Management', 'Spatial Design', 'Typography'],
    outcome: `This project reinforced how important spatial design and visual consistency are in a real-world context. When a site is being used live by real people under time pressure, clarity is everything. I also learnt how to manage a live website under operational conditions — updating content quickly and accurately while the event was actively running. The site is still live and accessible today.`,
    link: 'https://sites.google.com/students.wits.ac.za/wits-netball-tournament/home',
  },
  4: {
    //Project 4.
    title: 'Portuguese Language Centre Ads',
    subtitle: 'A series of social media advertisements for the Portuguese Language Centre promoting orientation day and special events.',
    images: [
      //Actual Images.
      'images/projects/portuguese-ads.png',
      'images/projects/portuguese-ads-2.png',
    ],
    imageAlts: [
      //What appears if image doesnt work.
      'Portuguese Language Centre social media advertisement',
      'Portuguese Language Centre social media advertisement 2',
    ],
    //General Info.
    overview: `A series of social media advertisements created for the Portuguese Language Centre at the University of the Witwatersrand. The ads promoted orientation day and various special events hosted by the centre throughout the year. Each ad was tailored to its specific occasion, drawing on traditional Portuguese visual references while adapting to the theme of each event.`,
    process: `Each advertisement was designed in Canva, with the visual direction shifting according to the event being promoted. The overall aesthetic drew from traditional Portuguese design (warm tones, decorative motifs, and bold typography) while remaining accessible and engaging for a student audience on social media. The most valuable part of this project was the client management experience. Working with the Portuguese Language Centre required flexibility and responsiveness, adjusting designs to meet their specific requests and feedback through multiple revision rounds.`,
    tools: ['Canva', 'Social Media Design', 'Advertising', 'Client Communication', 'Visual Design'],
    outcome: `This project taught me how to work effectively with clients, listening carefully to feedback, managing revision rounds professionally, and balancing creative instincts with the client's vision. I also developed a stronger understanding of how visual identity needs to adapt across different occasions and audiences while maintaining a consistent brand feel.`,
  },
  5: {
    //Project 5.
    title: 'Wits Netball Tournament Posters',
    subtitle: 'A series of social media posters promoting the Wits Netball Club fundraising tournament.',
    images: [
      //Actual Images.
      'images/projects/tournament-posters.png',
      'images/projects/tournament-design.png',
      'images/projects/tournament-design3.png',
    ],
    imageAlts: [
      //What appears if images dont work.
      'Wits Netball Club tournament social media poster',
      'Wits Netball Club tournament social media Teams poster',
      'Wits Netball Club tournament social media QR poster',
    ],
    //General info.
    overview: `A series of social media posters designed to promote the Wits Netball Club fundraising tournament. The posters needed to communicate all key event information. Time, date, venue, what the tournament was for, how many participants could enter, what they stood to win, and who to contact for more information. The visual identity was built around Wits University's official colours: blue, white, and yellow.`,
    process: `All posters were designed in Canva. The design challenge was fitting a significant amount of essential information into a social media format without the posters feeling cluttered or overwhelming. Hierarchy was critical, the most important information had to read first, with supporting details following naturally. The Wits colour palette was applied consistently across the series to maintain brand alignment and ensure the posters felt official and credible. The project also involved working with a client and catering the designs to a specific target audience of university students.`,
    tools: ['Canva', 'Poster Design', 'Social Media Design', 'Typography', 'Client Communication'],
    outcome: `This project strengthened my ability to communicate a lot of information clearly within a constrained format. It also deepened my understanding of designing for a specific audience — university students respond to directness and visual energy, and the designs needed to reflect that. Working with a client on a live event also taught me the importance of turnaround speed and design accuracy when deadlines are tight.`,
  },
  6: {
    //Project 6.
    title: 'Wits Fundraising Tournament Design Pack',
    subtitle: 'A cohesive set of event materials designed for the Wits Netball Club fundraising tournament.',
    images: [
      //Actual Images.
      'images/projects/tournament-design5.png',
      'images/projects/tournament-design6.png',
      'images/projects/tournament-design4.png',
      'images/projects/tournament-design7.png',
      'images/projects/tournament-design8.png',
      'images/projects/tournament-design9.png',
    ],
    imageAlts: [
      //What appears if images dont work.
      'Wits Fundraising Tournament Design Pack showing School Place 1',
      'Wits Fundraising Tournament Design Pack showing School Place 2',
      'Wits Fundraising Tournament Design Pack showing Song of the day post',
      'Wits Fundraising Tournament Design Pack showing officials card 1',
      'Wits Fundraising Tournament Design Pack showing officials card 2',
      'Wits Fundraising Tournament Design Pack showing officials card 3',
    ],
    //General info.
    overview: `A full set of branded event materials created for the Wits Netball Club fundraising tournament. The pack included officials cards to identify tournament staff, a social media board for photo opportunities and online sharing, and school place cards for team organisation on the day. Every piece was designed to feel cohesive and professional within the same visual identity.`,
    process: `All materials were designed in Canva, working within the established Wits colour palette of blue, white, and yellow. The challenge was adapting the same visual identity across very different formats — from small card-sized pieces to a large social media board — while keeping everything feeling like it belonged together. Each item had different content requirements and size constraints, so the design had to be flexible without losing consistency.`,
    tools: ['Canva', 'Event Design', 'Graphic Design', 'Typography', 'Brand Consistency'],
    outcome: `This project taught me how to maintain a consistent visual theme across multiple design formats. Working within a strict colour palette and applying it across varied materials strengthened my understanding of brand identity and how cohesive design elevates the overall feel of an event. It also showed me how much small details — like matching fonts and consistent spacing — matter when everything is displayed together on the day.`,
  },
};

//Load the right project based on URL.
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('project');

  //Redirect to projects page if no valid ID found.
  if (!projectId || !projectsData[projectId]) {
    window.location.href = 'projects.html';
    return;
  }

  const project = projectsData[projectId];

  //Update page title in browser tab.
  document.title = `${project.title} — Sabrina Harron`;

  //Update page header content.
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-subtitle').textContent = project.subtitle;

  //Update text blocks.
  document.getElementById('project-overview').textContent = project.overview;
  document.getElementById('project-process').textContent = project.process;
  document.getElementById('project-outcome').textContent = project.outcome;

  //Build tools tags.
  const toolsContainer = document.getElementById('project-tools');
  toolsContainer.innerHTML = '';
  project.tools.forEach(tool => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.textContent = tool;
    toolsContainer.appendChild(tag);
  });

  //Build gallery slides.
  const track = document.getElementById('gallery-track');
  const gallery = document.querySelector('.gallery');
  track.innerHTML = '';

  //Add portrait class for poster/ad projects.
  if ([4, 5, 6].includes(Number(projectId))) {
    gallery.classList.add('gallery-portrait');
  } else {
    gallery.classList.remove('gallery-portrait');
  }

  project.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = project.imageAlts[i] || `${project.title} screenshot ${i + 1}`;
    img.classList.add('gallery-slide');
    track.appendChild(img);
  });

  //Initialise gallery after slides have been injected. 
  initGallery();

  //Add live site link if project has one. (only one for now)
  if (project.link) {
    const detailGrid = document.querySelector('.detail-grid');
    const linkBlock = document.createElement('div');
    linkBlock.classList.add('detail-block');
    linkBlock.innerHTML = `
      <h2>Live Site</h2>
      <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary">Visit the Site</a>
    `;
    detailGrid.appendChild(linkBlock);
  }
});