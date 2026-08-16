import rootFight1 from './images/Projects/Root-Fight-2D/x4P8xK.png';
import rootFight2 from './images/Projects/Root-Fight-2D/yf8BDQ.png';
import rootFight3 from './images/Projects/Root-Fight-2D/n7rdgI.png';
import fpsPlatformer1 from './images/Projects/3D-FPS-Platformer/1771978693938.jpeg';
import castle1 from './images/Projects/protect-the-castle/shot1.png';
import castle2 from './images/Projects/protect-the-castle/shot2.png';
import castle3 from './images/Projects/protect-the-castle/shot3.png';
import castle4 from './images/Projects/protect-the-castle/shot4.png';
import castle5 from './images/Projects/protect-the-castle/shot5.png';
import escapePexet1 from './images/Projects/Escape-Pexet/shot1.png';
import jungleGuards1 from './images/Projects/Jungle-Guards/shot1.png';
import jungleGuards2 from './images/Projects/Jungle-Guards/shot2.jpg';
import jungleGuards3 from './images/Projects/Jungle-Guards/shot3.png';
import jungleGuards4 from './images/Projects/Jungle-Guards/shot4.png';
import slimeSquare1 from './images/Projects/Slime-Square/shot1.gif';
import slimeSquare2 from './images/Projects/Slime-Square/shot2.png';
import slimeSquare3 from './images/Projects/Slime-Square/shot3.png';
import hart1 from './images/Projects/Hart/shot1.png';
import hart2 from './images/Projects/Hart/shot2.png';
import hart3 from './images/Projects/Hart/shot3.png';
import hart4 from './images/Projects/Hart/shot4.png';
import hart5 from './images/Projects/Hart/shot5.png';
import hart6 from './images/Projects/Hart/shot6.png';
import bubbleJourney1 from './images/Projects/Bubble-Journey/shot1.png';
import bubbleJourney2 from './images/Projects/Bubble-Journey/shot2.png';
import bubbleJourney3 from './images/Projects/Bubble-Journey/shot3.png';

export function slugify(text) {
  return 'project-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const projects = [
  {
    title: '3D FPS Platformer – Team 5 Training Project',
    description:
      'A team training project building a 3D first-person shooter platformer in Unity, focused on core movement mechanics and level design.',
    media: [fpsPlatformer1],
    team: ['Ali Mohammed Alqhtani', 'Team 5 members'],
    skills: ['Unity', 'C#', 'Level Design'],
    challenges:
      'Balancing precise platforming with responsive FPS controls. Solved by iterating on physics-based movement and adding jump buffering.',
  },
  {
    title: 'Root Fight',
    description:
      'A local multiplayer sword-fighting game supporting PvP and AI matches, with a color-blind friendly, textless interface and keyboard/controller support across platforms.',
    media: [rootFight1, rootFight2, rootFight3],
    link: 'https://cealit164.itch.io/root-fight',
    team: [
      'Ali Mohammed Alqhtani (Developer)',
      'Sven, Free Game Assets (Art — GUI, Sprites, Tilesets)',
      'AlesiaDavina & DRAGON-STUDIO via Pixabay (Sound Effects)',
    ],
    skills: ['Unity', 'C#', 'Local Multiplayer', 'Accessibility Design', 'Input Handling (Keyboard/Controller)'],
    challenges:
      'Making combat readable and fair for all players, including color-blind users, without relying on text. Solved by designing a color-blind friendly, textless interface driven by shape and animation cues.',
  },
  {
    title: 'Protect the Castle',
    description:
      'A survival/strategy game where players move cards to designated locations to build structures and defend a castle. Built with Godot for HTML5, supporting mouse and touchscreen input in both Arabic and English.',
    media: [castle1, castle2, castle3, castle4, castle5],
    link: 'https://cealit164.itch.io/protect-the-castle',
    team: ['Ali Mohammed Alqhtani (Developer)'],
    skills: ['Godot', 'GDScript', 'Card-Based Game Systems', 'Localization (Arabic/English)'],
    challenges:
      'Designing a card-placement structure-building system that reads clearly on both mouse and touchscreen. Solved by keeping placement rules simple and giving direct visual feedback on valid card locations.',
  },
  {
    title: 'Bubble Journey',
    description:
      'A two-player co-op survival game built for Global Game Jam, where players navigate through the sea toward Atlantis, managing shared resources like oxygen while fending off threats along the way.',
    media: [bubbleJourney1, bubbleJourney2, bubbleJourney3],
    link: 'https://cealit164.itch.io/bubble-jurney-game',
    team: [
      'Ali Mohammed Alqhtani (Game Manager & Programmer)',
      'Wael Qabisi (Programmer & Developer)',
      'Fayhan Bin Rubaian (Artist & Designer)',
      'Osamah Almana (Artist & Designer)',
    ],
    skills: ['Godot', 'GDScript', 'Local Co-op Multiplayer', 'Game Jam Development'],
    challenges:
      'Keeping two players coordinated under time pressure with shared, limited resources. Solved by giving each player a distinct role (steering vs. oxygen/cannon management) so cooperation was required rather than optional.',
  },
  {
    title: 'Escape Pexet',
    description:
      'A top-down puzzle game made for the KFUPM Gaming+ Game Jam, where a security guard trapped in a lab must escape by shifting between past, present, and future to manipulate the environment and solve puzzles.',
    media: [escapePexet1],
    link: 'https://cealit164.itch.io/escape-pexet',
    team: [
      'Ali Mohammed Alqhtani (Game Designer & Programmer)',
      'Wael Qabisi (Game Manager & Programmer)',
      'Fayhan Bin Rubaian (Artist & Designer)',
      'Osamah Almana (Artist & Designer)',
    ],
    skills: ['Puzzle Design', 'Time-Shift Mechanics', 'Game Jam Development'],
    challenges:
      'Making a time-shifting mechanic that stays readable across three states without any explanatory text. Solved by keeping each era\'s environmental changes visually distinct and directly tied to the puzzle at hand.',
  },
  {
    title: 'Jungle Guards',
    description:
      'A pixel-art platformer where a forest ranger chases down an escaped chicken, fighting through boss battles and obstacles to bring it home.',
    media: [jungleGuards1, jungleGuards2, jungleGuards3, jungleGuards4],
    link: 'https://cealit164.itch.io/jungleguards',
    team: ['Ali Mohammed Alqhtani'],
    skills: ['Unity', 'C#', '2D Platformer Design', 'Boss Design'],
    challenges:
      'Balancing responsive platforming controls with fair boss encounter difficulty. Solved through iterative playtesting and tuning.',
  },
  {
    title: 'Slime Square',
    description:
      'A short 2D puzzle-platformer built in Godot where players reshape and squeeze a slime through tight gaps to reach the goal.',
    media: [slimeSquare1, slimeSquare2, slimeSquare3],
    link: 'https://cealit164.itch.io/slime-square',
    team: ['Ali Mohammed Alqhtani'],
    skills: ['Godot', 'GDScript', 'Puzzle-Platformer Design'],
    challenges:
      'Making a shape-shifting movement mechanic feel intuitive in a single mouse-driven control scheme. Solved by keeping levels short and the interaction to one click.',
  },
  {
    title: 'إعادة نبض الهويه الطبيعي',
    description:
      'A short, textless 2D adventure built in Godot 4.2 for a game jam, using pixel art and sound-driven storytelling to explore identity without any on-screen text.',
    media: [hart1, hart2, hart3, hart4, hart5, hart6],
    link: 'https://cealit164.itch.io/hart',
    team: ['Ali Mohammed Alqhtani'],
    skills: ['Godot 4.2', 'GDScript', 'Textless Narrative Design'],
    challenges:
      'Conveying a story about identity without relying on written text. Solved by leaning on pixel art, audio cues, and card-based interactions to carry the meaning.',
  },
];
